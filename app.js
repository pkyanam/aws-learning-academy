import { mlaC01Course } from "./data/content.js";
import { clfC02Course } from "./data/course-clf-c02.js";
import { aifC01Course } from "./data/course-aif-c01.js";
import { saaC03Course } from "./data/course-saa-c03.js";
import { dvaC02Course } from "./data/course-dva-c02.js";
import { soaC02Course } from "./data/course-soa-c02.js";
import {
  certificationCatalog,
  certificationTracks,
  placeholderCourseScaffold,
} from "./data/certifications.js";

const STORAGE_KEYS = {
  progress: "aws_study_center_progress_v1",
  legacyHistory: "mla_c01_history_v1",
  legacyCustomQuestions: "mla_c01_custom_questions_v1",
};

const MAIN_VIEWS = {
  home: "home",
  certifications: "certifications",
  course: "course",
};

const VIEWS = {
  dashboard: "dashboard",
  guide: "guide",
  practice: "practice",
};

const COURSE_CONTENT = {
  "mla-c01": mlaC01Course,
  "clf-c02": clfC02Course,
  "aif-c01": aifC01Course,
  "saa-c03": saaC03Course,
  "dva-c02": dvaC02Course,
  "soa-c02": soaC02Course,
};

const IMPLEMENTED_COURSE_SLUG =
  certificationCatalog.find((certification) => certification.featured && COURSE_CONTENT[certification.slug])?.slug ??
  certificationCatalog.find((certification) => certification.implemented && COURSE_CONTENT[certification.slug])
    ?.slug ??
  "mla-c01";

let examMeta = mlaC01Course.examMeta;
let domainBlueprint = mlaC01Course.domainBlueprint;
let prepPlaybooks = mlaC01Course.prepPlaybooks;
let questionBank = mlaC01Course.questionBank;
let serviceAtlas = mlaC01Course.serviceAtlas;

const state = {
  mainView: MAIN_VIEWS.home,
  activeCourseSlug: IMPLEMENTED_COURSE_SLUG,
  activeView: VIEWS.dashboard,
  courseProgress: loadStored(STORAGE_KEYS.progress, {}),
  history: [],
  customQuestions: [],
  session: null,
  timerRef: null,
  practiceConfig: {
    mode: "quick",
    domain: "ALL",
    count: 15,
    timed: true,
  },
};

const appRoot = document.getElementById("app-root");
const navRoot = document.getElementById("top-nav");

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadActiveCourseContent(state.activeCourseSlug);
  hydrateActiveCourseProgress();
  bindNav();
  render();
}

function isImplementedCourse(slug) {
  const course = getCertification(slug);
  return Boolean(course?.implemented && COURSE_CONTENT[slug]);
}

function loadActiveCourseContent(slug) {
  const courseContent = COURSE_CONTENT[slug] ?? COURSE_CONTENT[IMPLEMENTED_COURSE_SLUG] ?? mlaC01Course;
  examMeta = courseContent.examMeta;
  domainBlueprint = courseContent.domainBlueprint;
  prepPlaybooks = courseContent.prepPlaybooks;
  questionBank = courseContent.questionBank;
  serviceAtlas = courseContent.serviceAtlas;
}

function hydrateActiveCourseProgress() {
  const stored = state.courseProgress[state.activeCourseSlug];
  if (stored) {
    state.history = Array.isArray(stored.history) ? stored.history : [];
    state.customQuestions = Array.isArray(stored.customQuestions) ? stored.customQuestions : [];
    return;
  }

  const legacyHistory = loadStored(STORAGE_KEYS.legacyHistory, []);
  const legacyCustomQuestions = loadStored(STORAGE_KEYS.legacyCustomQuestions, []);
  if (state.activeCourseSlug === "mla-c01" && (legacyHistory.length || legacyCustomQuestions.length)) {
    state.history = legacyHistory;
    state.customQuestions = legacyCustomQuestions;
    persistActiveCourseProgress();
    return;
  }

  state.history = [];
  state.customQuestions = [];
}

function persistActiveCourseProgress() {
  state.courseProgress[state.activeCourseSlug] = {
    history: state.history.slice(0, 80),
    customQuestions: state.customQuestions,
  };
  saveStored(STORAGE_KEYS.progress, state.courseProgress);
}

function bindNav() {
  navRoot.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-main]");
    if (!button) {
      return;
    }

    const nextMainView = button.dataset.main;
    if (!nextMainView) {
      return;
    }

    state.mainView = nextMainView;
    if (nextMainView === MAIN_VIEWS.course && state.activeCourseSlug === IMPLEMENTED_COURSE_SLUG) {
      state.activeView = VIEWS.dashboard;
    }
    render();
  });

  appRoot.addEventListener("click", (event) => {
    const openCourseButton = event.target.closest("button[data-open-course]");
    if (openCourseButton) {
      const slug = openCourseButton.dataset.openCourse;
      if (slug) {
        openCourse(slug);
      }
      return;
    }

    const courseViewButton = event.target.closest("button[data-course-view]");
    if (courseViewButton) {
      const courseView = courseViewButton.dataset.courseView;
      if (courseView && isImplementedCourse(state.activeCourseSlug)) {
        state.mainView = MAIN_VIEWS.course;
        state.activeView = courseView;
        render();
      }
      return;
    }

    const mainViewButton = event.target.closest("button[data-main]");
    if (mainViewButton) {
      const nextMainView = mainViewButton.dataset.main;
      if (nextMainView) {
        state.mainView = nextMainView;
        render();
      }
    }
  });
}

function render() {
  renderNav();

  switch (state.mainView) {
    case MAIN_VIEWS.home:
      renderLandingView();
      break;
    case MAIN_VIEWS.certifications:
      renderCertificationsView();
      break;
    case MAIN_VIEWS.course:
      renderCourseView();
      break;
    default:
      renderLandingView();
      break;
  }
}

function renderNav() {
  navRoot.innerHTML = `
    <button data-main="${MAIN_VIEWS.home}" class="${state.mainView === MAIN_VIEWS.home ? "active" : ""}">Home</button>
    <button data-main="${MAIN_VIEWS.certifications}" class="${state.mainView === MAIN_VIEWS.certifications ? "active" : ""}">Certifications</button>
    <button data-main="${MAIN_VIEWS.course}" class="${state.mainView === MAIN_VIEWS.course ? "active" : ""}">
      Course Workspace
    </button>
  `;
}

function renderLandingView() {
  const liveCount = certificationCatalog.filter((certification) => certification.implemented).length;
  const placeholderCount = certificationCatalog.length - liveCount;
  const associateCount = certificationCatalog.filter(
    (certification) => certification.level === "Associate"
  ).length;
  const featured = getCertification(IMPLEMENTED_COURSE_SLUG);

  appRoot.innerHTML = `
    <section class="hero-panel landing-hero animate-in">
      <div>
        <p class="eyebrow">AWS Study Center</p>
        <h1>Master Every AWS Certification Track In One Workspace</h1>
        <p class="lead">Structured course hubs, exam simulations, and focused study guidance across the full AWS certification roadmap. Live and scaffolded courses share the same learning platform.</p>
        <div class="hero-tags">
          <span>${certificationCatalog.length} certifications scaffolded</span>
          <span>${liveCount} live courses implemented</span>
          <span>${placeholderCount} placeholders ready</span>
          <span>${associateCount} associate-level tracks</span>
        </div>
        <div class="button-row left top-space">
          <button class="primary-button" data-open-course="${featured.slug}">Launch Featured Course</button>
          <button class="ghost-button" data-main="${MAIN_VIEWS.certifications}">Explore Catalog</button>
        </div>
      </div>
      <aside class="readiness-card">
        <h3>Platform Capabilities</h3>
        <ul>
          <li>Blueprint-aligned study guides</li>
          <li>Timed practice simulations</li>
          <li>Domain-focused study and practice workflows</li>
          <li>Readiness analytics by domain</li>
        </ul>
      </aside>
    </section>

    <section class="grid two animate-in delay-1">
      <article class="card feature-card">
        <div class="card-header-row">
          <h2>Featured Live Course</h2>
          <span class="pill">Available Now</span>
        </div>
        <h3>${escapeHtml(featured.name)} (${escapeHtml(featured.code)})</h3>
        <p class="subtle">${escapeHtml(featured.summary)}</p>
        <div class="hero-tags">
          <span>${featured.questionCount} exam questions</span>
          <span>${featured.durationMinutes} minutes</span>
          <span>USD $${featured.priceUsd}</span>
        </div>
        <div class="button-row left top-space">
          <button class="primary-button" data-open-course="${featured.slug}">Open Course</button>
        </div>
      </article>
      <article class="card">
        <div class="card-header-row">
          <h2>Certification Tracks</h2>
          <span class="subtle">Foundation to Specialty</span>
        </div>
        <div class="track-stack">
          ${certificationTracks
            .map(
              (track) => `
                <div class="track-row">
                  <strong>${escapeHtml(track.name)}</strong>
                  <p>${escapeHtml(track.description)}</p>
                  <span>${track.targetLevels.join(" + ")}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    </section>

    <section class="card animate-in delay-2">
      <div class="card-header-row">
        <h2>Certification Catalog Snapshot</h2>
        <button class="ghost-button" data-main="${MAIN_VIEWS.certifications}">View All Courses</button>
      </div>
      <div class="catalog-grid">
        ${certificationCatalog
          .slice(0, 8)
          .map(
            (certification) => `
              <article class="cert-card ${certification.implemented ? "live" : "scaffold"}">
                <div class="card-header-row">
                  <span class="pill">${escapeHtml(certification.level)}</span>
                  <b>${certification.implemented ? "Live" : "Scaffolded"}</b>
                </div>
                <h3>${escapeHtml(certification.name)}</h3>
                <p class="subtle">${escapeHtml(certification.code)} • ${escapeHtml(certification.track)}</p>
                <p>${escapeHtml(certification.summary)}</p>
                <button class="${certification.implemented ? "primary-button" : "ghost-button"}" data-open-course="${escapeHtml(
                  certification.slug
                )}">${certification.implemented ? "Open Course" : "View Placeholder"}</button>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCertificationsView() {
  appRoot.innerHTML = `
    <section class="hero-panel compact animate-in">
      <div>
        <p class="eyebrow">Certification Catalog</p>
        <h1>AWS Certification Course Scaffolds</h1>
        <p class="lead">Every certification route is scaffolded in the study center. Implemented courses and placeholders are presented in one consistent learning academy experience.</p>
      </div>
      <aside class="readiness-card">
        <h3>Catalog Stats</h3>
        <p class="score">${certificationCatalog.length}</p>
        <p>Total certifications with unified course shell architecture.</p>
      </aside>
    </section>

    <section class="grid three animate-in delay-1">
      ${certificationCatalog
        .map(
          (certification) => `
            <article class="card cert-card ${certification.implemented ? "live" : "scaffold"}">
              <div class="card-header-row">
                <span class="pill">${escapeHtml(certification.level)}</span>
                <b>${certification.implemented ? "Live Course" : "Placeholder"}</b>
              </div>
              <h3>${escapeHtml(certification.name)}</h3>
              <p class="subtle">${escapeHtml(certification.code)} • ${escapeHtml(certification.track)}</p>
              <p>${escapeHtml(certification.summary)}</p>
              <div class="hero-tags">
                <span>${certification.questionCount} questions</span>
                <span>${certification.durationMinutes} min</span>
                <span>USD $${certification.priceUsd}</span>
              </div>
              <button class="${certification.implemented ? "primary-button" : "ghost-button"}" data-open-course="${escapeHtml(
                certification.slug
              )}">${certification.implemented ? "Open Course" : "Open Placeholder"}</button>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderCourseView() {
  if (isImplementedCourse(state.activeCourseSlug)) {
    switch (state.activeView) {
      case VIEWS.dashboard:
        renderDashboardView();
        break;
      case VIEWS.guide:
        renderGuideView();
        break;
      case VIEWS.practice:
        renderPracticeView();
        break;
      default:
        state.activeView = VIEWS.dashboard;
        renderDashboardView();
        break;
    }
    return;
  }

  renderPlaceholderCourseView();
}

function getCourseHeaderMarkup() {
  const course = getCertification(state.activeCourseSlug);
  return `
    <section class="course-shell animate-in">
      <div class="course-meta">
        <p class="eyebrow">Course Workspace</p>
        <h2>${escapeHtml(course.name)} <span>(${escapeHtml(course.code)})</span></h2>
        <p>${escapeHtml(course.summary)}</p>
      </div>
      <div class="course-tabs">
        <button data-course-view="${VIEWS.dashboard}" class="${state.activeView === VIEWS.dashboard ? "active" : ""}">Dashboard</button>
        <button data-course-view="${VIEWS.guide}" class="${state.activeView === VIEWS.guide ? "active" : ""}">Study Guide</button>
        <button data-course-view="${VIEWS.practice}" class="${state.activeView === VIEWS.practice ? "active" : ""}">Practice Lab</button>
      </div>
    </section>
  `;
}

function renderPlaceholderCourseView() {
  const course = getCertification(state.activeCourseSlug);

  appRoot.innerHTML = `
    <section class="hero-panel compact animate-in">
      <div>
        <p class="eyebrow">Course Placeholder</p>
        <h1>${escapeHtml(course.name)} <span>(${escapeHtml(course.code)})</span></h1>
        <p class="lead">${escapeHtml(placeholderCourseScaffold.statusMessage)}</p>
        <div class="hero-tags">
          <span>${escapeHtml(course.level)}</span>
          <span>${escapeHtml(course.track)}</span>
          <span>${course.durationMinutes} minutes</span>
          <span>USD $${course.priceUsd}</span>
        </div>
      </div>
      <aside class="readiness-card">
        <h3>Implementation Status</h3>
        <p class="score">Scaffolded</p>
        <p>Core shell complete. Domain content and question bank not yet populated for this certification.</p>
      </aside>
    </section>

    <section class="grid two animate-in delay-1">
      <article class="card">
        <h2>Planned Modules</h2>
        <ol class="focus-list">
          ${placeholderCourseScaffold.modules.map((module) => `<li>${escapeHtml(module)}</li>`).join("")}
        </ol>
      </article>
      <article class="card">
        <h2>Course Actions</h2>
        <p class="subtle">You can continue with the currently implemented live course while this path is being developed.</p>
        <div class="button-row left top-space">
          <button class="primary-button" data-open-course="${IMPLEMENTED_COURSE_SLUG}">Open Live Course</button>
          <button class="ghost-button" data-main="${MAIN_VIEWS.certifications}">Back to Catalog</button>
        </div>
      </article>
    </section>
  `;
}

function openCourse(slug) {
  const switchingCourse = state.activeCourseSlug !== slug;
  if (switchingCourse) {
    clearSessionTimer();
    state.session = null;
  }

  state.mainView = MAIN_VIEWS.course;
  state.activeCourseSlug = slug;

  if (isImplementedCourse(slug)) {
    loadActiveCourseContent(slug);
    hydrateActiveCourseProgress();
    state.activeView = VIEWS.dashboard;
  }

  render();
}

function getCertification(slug) {
  return (
    certificationCatalog.find((certification) => certification.slug === slug) ??
    certificationCatalog.find((certification) => certification.slug === IMPLEMENTED_COURSE_SLUG)
  );
}

function renderDashboardView() {
  const activeCourse = getCertification(state.activeCourseSlug);
  const stats = computeStats();
  const recentSessions = state.history.slice(0, 6);

  appRoot.innerHTML = `
    ${getCourseHeaderMarkup()}
    <section class="hero-panel animate-in">
      <div>
        <p class="eyebrow">AWS Certification Exam Guide</p>
        <h1>${escapeHtml(activeCourse.name)} <span>(${escapeHtml(activeCourse.code)})</span></h1>
        <p class="lead">Practice questions, architecture reasoning, and operations-focused prep for your selected certification path.</p>
        <div class="hero-tags">
          <span>${examMeta.questionCount} questions</span>
          <span>${examMeta.durationMinutes} minutes</span>
          <span>Passing score ${examMeta.passingScore}</span>
          <span>USD $${examMeta.costUsd}</span>
        </div>
      </div>
      <aside class="readiness-card">
        <h3>Readiness Index</h3>
        <p class="score">${stats.readiness}%</p>
        <p>Calculated from your most recent practice attempts, weighted by recent performance.</p>
      </aside>
    </section>

    <section class="grid four stats-row animate-in delay-1">
      <article class="metric-card">
        <h3>Total Attempts</h3>
        <p>${stats.attempts}</p>
      </article>
      <article class="metric-card">
        <h3>Average Score</h3>
        <p>${stats.averageScore}%</p>
      </article>
      <article class="metric-card">
        <h3>Best Score</h3>
        <p>${stats.bestScore}%</p>
      </article>
      <article class="metric-card">
        <h3>Question Bank</h3>
        <p>${getQuestionPool().length} items</p>
      </article>
    </section>

    <section class="grid two animate-in delay-2">
      <article class="card">
        <div class="card-header-row">
          <h2>Domain Performance</h2>
          <span class="subtle">Weighted against official blueprint</span>
        </div>
        <div class="domain-bars">
          ${domainBlueprint
            .map((domain) => {
              const score = stats.domainScores[domain.id] ?? 0;
              return `
              <div class="domain-bar-row">
                <div>
                  <strong>${escapeHtml(domain.name)}</strong>
                  <p>${domain.weight}% exam weight</p>
                </div>
                <div class="bar-wrap">
                  <div class="bar" style="width: ${score}%;"></div>
                </div>
                <span>${score}%</span>
              </div>
            `;
            })
            .join("")}
        </div>
      </article>

      <article class="card">
        <h2>Focus This Week</h2>
        <ul class="focus-list">
          ${stats.recommendations
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}
        </ul>
        <div class="bullet-points">
          ${examMeta.quickFacts.map((fact) => `<p>${escapeHtml(fact)}</p>`).join("")}
        </div>
      </article>
    </section>

    <section class="card animate-in delay-3">
      <div class="card-header-row">
        <h2>Recent Sessions</h2>
        <button class="ghost-button" id="open-practice-from-dashboard">Start New Practice</button>
      </div>
      ${
        recentSessions.length === 0
          ? '<p class="subtle">No practice history yet. Launch your first drill to populate readiness analytics.</p>'
          : `<div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Score</th>
                    <th>Correct</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentSessions
                    .map(
                      (entry) => `
                        <tr>
                          <td>${escapeHtml(formatDate(entry.completedAt))}</td>
                          <td>${escapeHtml(entry.modeLabel)}</td>
                          <td>${entry.percentage}%</td>
                          <td>${entry.correct}/${entry.total}</td>
                          <td>${formatDuration(entry.durationSec)}</td>
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>`
      }
    </section>
  `;

  const startButton = document.getElementById("open-practice-from-dashboard");
  if (startButton) {
    startButton.addEventListener("click", () => {
      state.mainView = MAIN_VIEWS.course;
      state.activeView = VIEWS.practice;
      render();
    });
  }
}

function renderGuideView() {
  appRoot.innerHTML = `
    ${getCourseHeaderMarkup()}
    <section class="hero-panel compact animate-in">
      <div>
        <p class="eyebrow">Study Guide</p>
        <h1>Certification Blueprint Mastery</h1>
        <p class="lead">Use this section as your structured reference for domain objectives, service fit, and exam decision patterns.</p>
      </div>
      <aside class="readiness-card">
        <h3>Exam Blueprint Weights</h3>
        <ul class="weight-list">
          ${domainBlueprint
            .map((domain) => `<li><span>${escapeHtml(domain.id)}</span><strong>${domain.weight}%</strong></li>`)
            .join("")}
        </ul>
      </aside>
    </section>

    <section class="grid two animate-in delay-1">
      ${domainBlueprint
        .map(
          (domain) => `
            <article class="card domain-card">
              <div class="card-header-row">
                <h2>${escapeHtml(domain.name)}</h2>
                <span class="pill">${domain.weight}%</span>
              </div>
              <p>${escapeHtml(domain.mission)}</p>
              ${domain.tasks
                .map(
                  (task) => `
                    <details>
                      <summary>${escapeHtml(task.id)} ${escapeHtml(task.title)}</summary>
                      <ul>
                        ${task.focus.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
                      </ul>
                    </details>
                  `
                )
                .join("")}
            </article>
          `
        )
        .join("")}
    </section>

    <section class="card animate-in delay-2">
      <div class="card-header-row">
        <h2>AWS Service Decision Atlas</h2>
        <span class="subtle">High-yield services and exam heuristics</span>
      </div>
      <div class="service-grid">
        ${serviceAtlas
          .map(
            (service) => `
              <article class="service-card">
                <h3>${escapeHtml(service.name)}</h3>
                <p>${escapeHtml(service.usage)}</p>
                <p class="hint">Exam hint: ${escapeHtml(service.examHint)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="grid three animate-in delay-3">
      ${prepPlaybooks
        .map(
          (playbook) => `
            <article class="card playbook-card">
              <h3>${escapeHtml(playbook.title)}</h3>
              <ol>
                ${playbook.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
              </ol>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderPracticeView() {
  if (!state.session) {
    renderPracticeSetup();
    return;
  }

  if (state.session.completed) {
    renderPracticeResults();
    return;
  }

  renderLiveSession();
}

function renderPracticeSetup() {
  const pool = getQuestionPool();
  const domainDistribution = buildDomainDistribution(pool);

  appRoot.innerHTML = `
    ${getCourseHeaderMarkup()}
    <section class="hero-panel compact animate-in">
      <div>
        <p class="eyebrow">Practice Lab</p>
        <h1>Exam-Style Question Simulator</h1>
        <p class="lead">Run timed drills, domain-focused sets, or full-length simulations with detailed rationales and performance analytics.</p>
      </div>
      <aside class="readiness-card">
        <h3>Available Content</h3>
        <p class="score">${pool.length}</p>
        <p>Questions in active bank (default + saved custom).</p>
      </aside>
    </section>

    <section class="grid two animate-in delay-1">
      <article class="card">
        <h2>Start Session</h2>
        <form id="practice-config-form" class="form-stack">
          <label>
            Mode
            <select name="mode">
              <option value="quick" ${state.practiceConfig.mode === "quick" ? "selected" : ""}>Quick Drill (15 questions)</option>
              <option value="domain" ${state.practiceConfig.mode === "domain" ? "selected" : ""}>Domain Drill</option>
              <option value="full" ${state.practiceConfig.mode === "full" ? "selected" : ""}>Full Simulation (${examMeta.questionCount} questions)</option>
              <option value="custom" ${state.practiceConfig.mode === "custom" ? "selected" : ""}>Custom Set</option>
            </select>
          </label>

          <label>
            Domain
            <select name="domain">
              <option value="ALL" ${state.practiceConfig.domain === "ALL" ? "selected" : ""}>All domains</option>
              ${domainBlueprint
                .map(
                  (domain) =>
                    `<option value="${domain.id}" ${state.practiceConfig.domain === domain.id ? "selected" : ""}>${escapeHtml(
                      `${domain.id} - ${domain.name}`
                    )}</option>`
                )
                .join("")}
            </select>
          </label>

          <label>
            Question Count
            <input type="number" name="count" min="5" max="${Math.max(examMeta.questionCount, pool.length)}" value="${state.practiceConfig.count}" />
          </label>

          <label class="inline-check">
            <input type="checkbox" name="timed" ${state.practiceConfig.timed ? "checked" : ""} />
            Timed session
          </label>

          <button type="submit" class="primary-button">Launch Session</button>
        </form>
      </article>

      <article class="card">
        <h2>Question Distribution</h2>
        <div class="domain-bars compact">
          ${domainBlueprint
            .map((domain) => {
              const count = domainDistribution[domain.id] ?? 0;
              const percent = pool.length ? Math.round((count / pool.length) * 100) : 0;
              return `
                <div class="domain-bar-row">
                  <div>
                    <strong>${escapeHtml(domain.id)}</strong>
                    <p>${escapeHtml(domain.name)}</p>
                  </div>
                  <div class="bar-wrap">
                    <div class="bar" style="width: ${percent}%;"></div>
                  </div>
                  <span>${count}</span>
                </div>
              `;
            })
            .join("")}
        </div>
        <p class="subtle">Tip: Use domain and custom drills to reinforce weak areas over repeated timed sessions.</p>
      </article>
    </section>
  `;

  const form = document.getElementById("practice-config-form");
  form.addEventListener("submit", onPracticeStart);
}

function renderLiveSession() {
  const session = state.session;
  const question = session.questions[session.index];
  const selected = question.userAnswer ?? [];
  const progressPercent = Math.round(((session.index + 1) / session.total) * 100);

  appRoot.innerHTML = `
    ${getCourseHeaderMarkup()}
    <section class="card live-header animate-in">
      <div>
        <p class="eyebrow">${escapeHtml(session.modeLabel)}</p>
        <h2>Question ${session.index + 1} of ${session.total}</h2>
        <div class="hero-tags">
          <span>${escapeHtml(question.domain)}</span>
          <span>${escapeHtml(question.difficulty)}</span>
          <span>${escapeHtml(question.type === "multi" ? "Multi-select" : "Single-select")}</span>
        </div>
      </div>
      <div class="live-metrics">
        <div class="metric-inline">
          <label>Progress</label>
          <strong>${progressPercent}%</strong>
        </div>
        <div class="metric-inline">
          <label>Answered</label>
          <strong>${session.questions.filter((item) => item.submitted).length}/${session.total}</strong>
        </div>
        <div class="metric-inline ${session.timeRemainingSec !== null ? "timer" : ""}">
          <label>Time</label>
          <strong id="session-timer-value">${session.timeRemainingSec !== null ? formatDuration(session.timeRemainingSec) : "Untimed"}</strong>
        </div>
      </div>
    </section>

    <section class="grid two live-grid animate-in delay-1">
      <article class="card question-card">
        <div class="question-prompt">
          <p>${escapeHtml(question.prompt)}</p>
        </div>

        <form id="question-form" class="form-stack">
          <div class="choices-wrap">
            ${question.choices
              .map((choice, index) => {
                const isSelected = selected.includes(index);
                const isCorrect = question.correct.includes(index);
                const showState = question.submitted;
                const classes = ["choice-item"];

                if (showState && isCorrect) {
                  classes.push("correct");
                }

                if (showState && isSelected && !isCorrect) {
                  classes.push("wrong");
                }

                return `
                  <label class="${classes.join(" ")}">
                    <input
                      type="${question.type === "multi" ? "checkbox" : "radio"}"
                      name="choice"
                      value="${index}"
                      ${isSelected ? "checked" : ""}
                      ${question.submitted ? "disabled" : ""}
                    />
                    <span>${escapeHtml(choice)}</span>
                  </label>
                `;
              })
              .join("")}
          </div>

          <div class="button-row">
            <button type="button" class="ghost-button" id="prev-question-btn" ${session.index === 0 ? "disabled" : ""}>Previous</button>
            <button type="button" class="ghost-button" id="flag-question-btn">${question.flagged ? "Unflag" : "Flag"}</button>
            <button type="button" class="ghost-button" id="submit-answer-btn" ${question.submitted ? "disabled" : ""}>Check Answer</button>
            <button type="button" class="primary-button" id="next-question-btn">${session.index === session.total - 1 ? "Finish Session" : "Next"}</button>
          </div>
        </form>

        ${
          question.submitted
            ? `<div class="explanation ${question.correctlyAnswered ? "good" : "bad"}">
                <h3>${question.correctlyAnswered ? "Correct" : "Review"}</h3>
                <p>${escapeHtml(question.rationale)}</p>
              </div>`
            : ""
        }
      </article>

      <aside class="card">
        <h3>Navigator</h3>
        <div class="navigator-grid">
          ${session.questions
            .map((item, index) => {
              const classes = ["navigator-pill"];
              if (index === session.index) {
                classes.push("current");
              }
              if (item.submitted && item.correctlyAnswered) {
                classes.push("ok");
              }
              if (item.submitted && !item.correctlyAnswered) {
                classes.push("miss");
              }
              if (item.flagged) {
                classes.push("flagged");
              }

              return `<button class="${classes.join(" ")}" data-jump-index="${index}">${index + 1}</button>`;
            })
            .join("")}
        </div>
        <div class="legend">
          <span><b class="dot current"></b> Current</span>
          <span><b class="dot ok"></b> Correct</span>
          <span><b class="dot miss"></b> Needs Review</span>
          <span><b class="dot flagged"></b> Flagged</span>
        </div>
        <button class="danger-button" id="end-session-btn">End Session Now</button>
      </aside>
    </section>
  `;

  const questionForm = document.getElementById("question-form");
  const submitAnswerButton = document.getElementById("submit-answer-btn");
  const nextQuestionButton = document.getElementById("next-question-btn");
  const prevQuestionButton = document.getElementById("prev-question-btn");
  const endSessionButton = document.getElementById("end-session-btn");
  const flagButton = document.getElementById("flag-question-btn");

  questionForm.addEventListener("change", (event) => {
    if (question.submitted) {
      return;
    }

    const inputs = [...questionForm.querySelectorAll("input[name='choice']:checked")];
    const values = inputs.map((input) => Number(input.value)).sort((a, b) => a - b);
    question.userAnswer = values;
  });

  submitAnswerButton.addEventListener("click", () => {
    submitCurrentAnswer();
  });

  nextQuestionButton.addEventListener("click", () => {
    goToNextQuestion();
  });

  prevQuestionButton.addEventListener("click", () => {
    goToPreviousQuestion();
  });

  endSessionButton.addEventListener("click", () => {
    finishSession("Ended by learner");
  });

  flagButton.addEventListener("click", () => {
    question.flagged = !question.flagged;
    renderPracticeView();
  });

  const jumpButtons = appRoot.querySelectorAll("button[data-jump-index]");
  jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.jumpIndex);
      state.session.index = index;
      renderPracticeView();
    });
  });
}

function renderPracticeResults() {
  const { summary, questions, finishedReason } = state.session;
  const weakestDomains = Object.entries(summary.domainBreakdown)
    .sort((a, b) => (a[1].score ?? 0) - (b[1].score ?? 0))
    .slice(0, 2)
    .map(([domainId]) => domainBlueprint.find((domain) => domain.id === domainId)?.name)
    .filter(Boolean);

  appRoot.innerHTML = `
    ${getCourseHeaderMarkup()}
    <section class="hero-panel compact animate-in">
      <div>
        <p class="eyebrow">Session Complete</p>
        <h1>${summary.percentage}% Score</h1>
        <p class="lead">${summary.correct} out of ${summary.total} correct • ${escapeHtml(finishedReason)}</p>
        <div class="hero-tags">
          <span>${escapeHtml(summary.modeLabel)}</span>
          <span>${formatDuration(summary.durationSec)}</span>
          <span>${escapeHtml(formatDate(summary.completedAt))}</span>
        </div>
      </div>
      <aside class="readiness-card">
        <h3>Primary Focus Areas</h3>
        <ul>
          ${
            weakestDomains.length
              ? weakestDomains.map((domainName) => `<li>${escapeHtml(domainName)}</li>`).join("")
              : "<li>Continue mixed-domain practice</li>"
          }
        </ul>
      </aside>
    </section>

    <section class="grid two animate-in delay-1">
      <article class="card">
        <h2>Domain Breakdown</h2>
        <div class="domain-bars">
          ${Object.entries(summary.domainBreakdown)
            .map(([domainId, data]) => {
              const domainName = domainBlueprint.find((domain) => domain.id === domainId)?.name ?? domainId;
              return `
                <div class="domain-bar-row">
                  <div>
                    <strong>${escapeHtml(domainId)}</strong>
                    <p>${escapeHtml(domainName)}</p>
                  </div>
                  <div class="bar-wrap">
                    <div class="bar" style="width:${data.score}%;"></div>
                  </div>
                  <span>${data.correct}/${data.total}</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>

      <article class="card">
        <h2>Recommended Next Actions</h2>
        <ul class="focus-list">
          <li>Re-run a domain drill focused on your lowest-scoring domain.</li>
          <li>Review missed questions and capture the decision patterns behind correct choices.</li>
          <li>Review security and governance controls that appeared in this attempt.</li>
          <li>Take a timed full simulation after two targeted drills.</li>
        </ul>
        <div class="button-row left">
          <button class="primary-button" id="new-session-btn">New Session</button>
        </div>
      </article>
    </section>

    <section class="card animate-in delay-2">
      <h2>Question Review</h2>
      <div class="review-list">
        ${questions
          .map((question, index) => {
            const userAnswerLabels = (question.userAnswer || []).map((answerIndex) => question.choices[answerIndex]);
            const correctLabels = question.correct.map((answerIndex) => question.choices[answerIndex]);

            return `
              <details>
                <summary>
                  <span>Q${index + 1}</span>
                  <strong>${escapeHtml(question.prompt)}</strong>
                  <b class="review-state ${question.correctlyAnswered ? "ok" : "miss"}">${question.correctlyAnswered ? "Correct" : "Incorrect"}</b>
                </summary>
                <p><strong>Your answer:</strong> ${escapeHtml(userAnswerLabels.join(" | ") || "Unanswered")}</p>
                <p><strong>Correct answer:</strong> ${escapeHtml(correctLabels.join(" | "))}</p>
                <p><strong>Rationale:</strong> ${escapeHtml(question.rationale)}</p>
              </details>
            `;
          })
          .join("")}
      </div>
    </section>
  `;

  document.getElementById("new-session-btn").addEventListener("click", () => {
    state.session = null;
    renderPracticeView();
  });
}

function onPracticeStart(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const mode = String(formData.get("mode") || "quick");
  const domain = String(formData.get("domain") || "ALL");
  const timed = Boolean(formData.get("timed"));
  const rawCount = Number(formData.get("count") || 15);

  let count = rawCount;
  if (mode === "quick") {
    count = 15;
  }
  if (mode === "full") {
    count = examMeta.questionCount;
  }
  if (mode === "domain") {
    count = Math.max(10, Math.min(rawCount, 30));
  }
  if (mode === "custom") {
    count = Math.max(5, Math.min(rawCount, Math.max(examMeta.questionCount, getQuestionPool().length)));
  }

  state.practiceConfig = {
    mode,
    domain,
    count,
    timed,
  };

  const pool = getQuestionPool().filter((question) => (domain === "ALL" ? true : question.domain === domain));
  if (pool.length < 5) {
    alert("Not enough questions for that domain selection. Try another domain.");
    return;
  }

  const selectedQuestions = shuffle(pool)
    .slice(0, Math.min(count, pool.length))
    .map((question) => {
      const randomizedQuestion = randomizeQuestionChoices(question);
      return {
        ...randomizedQuestion,
        userAnswer: [],
        submitted: false,
        flagged: false,
        correctlyAnswered: false,
      };
    });

  const timeLimitSec = timed
    ? mode === "full"
      ? examMeta.durationMinutes * 60
      : Math.max(selectedQuestions.length * 75, 8 * 60)
    : null;

  state.session = {
    mode,
    modeLabel: modeLabel(mode),
    domain,
    questions: selectedQuestions,
    total: selectedQuestions.length,
    index: 0,
    startedAt: new Date().toISOString(),
    startedAtMs: Date.now(),
    timeLimitSec,
    timeRemainingSec: timeLimitSec,
    completed: false,
    summary: null,
    finishedReason: "Completed",
  };

  if (timeLimitSec !== null) {
    state.timerRef = window.setInterval(onSessionTick, 1000);
  }

  renderPracticeView();
}

function onSessionTick() {
  if (!state.session || state.session.completed || state.session.timeRemainingSec === null) {
    clearSessionTimer();
    return;
  }

  state.session.timeRemainingSec -= 1;
  if (state.session.timeRemainingSec <= 0) {
    state.session.timeRemainingSec = 0;
    finishSession("Time expired");
    return;
  }

  if (state.mainView === MAIN_VIEWS.course && state.activeView === VIEWS.practice) {
    updateSessionTimerUI();
  }
}

function updateSessionTimerUI() {
  const timerElement = document.getElementById("session-timer-value");
  if (!timerElement || !state.session || state.session.timeRemainingSec === null) {
    return;
  }

  timerElement.textContent = formatDuration(state.session.timeRemainingSec);
}

function clearSessionTimer() {
  if (state.timerRef !== null) {
    clearInterval(state.timerRef);
    state.timerRef = null;
  }
}

function submitCurrentAnswer() {
  const session = state.session;
  const question = session.questions[session.index];

  if (question.submitted) {
    return;
  }

  const selected = (question.userAnswer || []).slice().sort((a, b) => a - b);
  if (!selected.length) {
    alert("Select at least one answer before checking.");
    return;
  }

  const expected = question.correct.slice().sort((a, b) => a - b);
  question.submitted = true;
  question.correctlyAnswered = arraysEqual(selected, expected);
  question.userAnswer = selected;

  renderPracticeView();
}

function goToNextQuestion() {
  const session = state.session;
  if (!session) {
    return;
  }

  if (session.index >= session.total - 1) {
    finishSession("Completed all questions");
    return;
  }

  session.index += 1;
  renderPracticeView();
}

function goToPreviousQuestion() {
  const session = state.session;
  if (!session) {
    return;
  }

  if (session.index > 0) {
    session.index -= 1;
    renderPracticeView();
  }
}

function finishSession(reason) {
  const session = state.session;
  if (!session || session.completed) {
    return;
  }

  clearSessionTimer();

  const elapsedSec = Math.max(1, Math.round((Date.now() - session.startedAtMs) / 1000));
  const correct = session.questions.filter((question) => question.submitted && question.correctlyAnswered).length;
  const total = session.total;
  const percentage = Math.round((correct / total) * 100);

  const breakdown = domainBlueprint.reduce((accumulator, domain) => {
    const domainQuestions = session.questions.filter((question) => question.domain === domain.id);
    const domainCorrect = domainQuestions.filter((question) => question.submitted && question.correctlyAnswered).length;

    accumulator[domain.id] = {
      correct: domainCorrect,
      total: domainQuestions.length,
      score: domainQuestions.length ? Math.round((domainCorrect / domainQuestions.length) * 100) : 0,
    };

    return accumulator;
  }, {});

  const summary = {
    courseSlug: state.activeCourseSlug,
    courseCode: examMeta.code,
    mode: session.mode,
    modeLabel: session.modeLabel,
    total,
    correct,
    percentage,
    durationSec: elapsedSec,
    completedAt: new Date().toISOString(),
    domainBreakdown: breakdown,
  };

  session.completed = true;
  session.finishedReason = reason;
  session.summary = summary;

  state.history = [summary, ...state.history].slice(0, 40);
  persistActiveCourseProgress();

  renderPracticeView();
}

function computeStats() {
  const attempts = state.history.length;
  if (!attempts) {
    return {
      attempts: 0,
      averageScore: 0,
      bestScore: 0,
      readiness: 0,
      domainScores: domainBlueprint.reduce((accumulator, domain) => {
        accumulator[domain.id] = 0;
        return accumulator;
      }, {}),
      recommendations: [
        "Start with a quick mixed-domain drill to establish your baseline.",
        "Use the Study Guide to review service-choice heuristics.",
        "Focus on domain-specific drills once baseline scores are available.",
      ],
    };
  }

  const averageScore = Math.round(state.history.reduce((sum, entry) => sum + entry.percentage, 0) / attempts);
  const bestScore = Math.max(...state.history.map((entry) => entry.percentage));

  const weightedHistory = state.history.slice(0, 8);
  const readiness = Math.round(
    weightedHistory.reduce((sum, entry, index) => {
      const weight = weightedHistory.length - index;
      return sum + entry.percentage * weight;
    }, 0) /
      weightedHistory.reduce((sum, _entry, index) => sum + (weightedHistory.length - index), 0)
  );

  const domainScores = domainBlueprint.reduce((accumulator, domain) => {
    let correct = 0;
    let total = 0;

    state.history.forEach((entry) => {
      const domainStats = entry.domainBreakdown?.[domain.id];
      if (!domainStats) {
        return;
      }
      correct += domainStats.correct;
      total += domainStats.total;
    });

    accumulator[domain.id] = total ? Math.round((correct / total) * 100) : 0;
    return accumulator;
  }, {});

  const weakest = [...domainBlueprint]
    .sort((a, b) => (domainScores[a.id] ?? 0) - (domainScores[b.id] ?? 0))
    .slice(0, 2);

  const recommendations = [
    `Prioritize ${weakest[0]?.name || "mixed-domain practice"} this week with targeted drills.`,
    `Review security, service-selection, and cost tradeoffs before your next timed simulation.`,
    `Aim for 75%+ on two consecutive sessions before scheduling your exam date.`,
  ];

  return {
    attempts,
    averageScore,
    bestScore,
    readiness,
    domainScores,
    recommendations,
  };
}

function buildDomainDistribution(questions) {
  return questions.reduce((accumulator, question) => {
    accumulator[question.domain] = (accumulator[question.domain] || 0) + 1;
    return accumulator;
  }, {});
}

function getQuestionPool() {
  return [...questionBank, ...state.customQuestions];
}

function modeLabel(mode) {
  const labels = {
    quick: "Quick Drill",
    domain: "Domain Drill",
    full: "Full Simulation",
    custom: "Custom Set",
  };

  return labels[mode] || "Practice Session";
}

function arraysEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }

  return true;
}

function randomizeQuestionChoices(question) {
  const originalChoices = Array.isArray(question.choices) ? question.choices : [];
  const originalCorrect = Array.isArray(question.correct) ? question.correct : [];

  if (originalChoices.length < 2 || originalCorrect.length === 0) {
    return { ...question };
  }

  const shuffledIndexes = shuffle(originalChoices.map((_, index) => index));
  const indexRemap = new Map();
  shuffledIndexes.forEach((originalIndex, shuffledIndex) => {
    indexRemap.set(originalIndex, shuffledIndex);
  });

  const randomizedChoices = shuffledIndexes.map((index) => originalChoices[index]);
  const randomizedCorrect = originalCorrect
    .map((originalIndex) => indexRemap.get(originalIndex))
    .filter((index) => Number.isInteger(index))
    .sort((a, b) => a - b);

  if (!randomizedCorrect.length) {
    return { ...question };
  }

  return {
    ...question,
    choices: randomizedChoices,
    correct: randomizedCorrect,
  };
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function formatDuration(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return "0:00";
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatDate(isoString) {
  if (!isoString) {
    return "-";
  }

  return new Date(isoString).toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function loadStored(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveStored(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
