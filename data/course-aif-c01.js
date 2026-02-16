export const examMeta = {
  certificate: "AWS Certified AI Practitioner",
  code: "AIF-C01",
  versionDate: "Exam Guide Version 1.4",
  durationMinutes: 90,
  questionCount: 65,
  passingScore: 700,
  costUsd: 100,
  language: "English",
  targetRole:
    "Practitioners who can explain AI/ML and generative AI concepts, apply AWS AI services, and reason about responsible, secure, and compliant AI usage.",
  quickFacts: [
    "The official exam guide uses 5 domains, with Domain 3 (applications of foundation models) weighted highest.",
    "The real exam includes scored and unscored items, and uses both single-select and multi-select questions.",
    "Strong scores usually come from balancing prompt/application design with responsible AI and security governance decisions.",
  ],
};

export const domainBlueprint = [
  {
    id: "D1",
    name: "Fundamentals of AI and ML",
    weight: 20,
    mission:
      "Explain core AI/ML terminology, basic model types, and common use-case patterns so teams can frame the right problem before choosing tooling.",
    tasks: [
      {
        id: "1.1",
        title: "Explain basic AI concepts and terminologies",
        focus: [
          "Differentiate AI, ML, deep learning, and generative AI in plain business language.",
          "Interpret common terms such as training, inference, model, feature, and label.",
          "Identify where deterministic software logic is preferable to ML.",
        ],
      },
      {
        id: "1.2",
        title: "Explain basics of ML",
        focus: [
          "Compare supervised, unsupervised, and reinforcement learning at a high level.",
          "Understand data splitting, overfitting risk, and basic evaluation intuition.",
          "Relate model complexity to data quantity, quality, and operational goals.",
        ],
      },
      {
        id: "1.3",
        title: "Explain use cases of ML",
        focus: [
          "Map business objectives to common ML task types such as classification, regression, and clustering.",
          "Recognize common industry use cases including forecasting, fraud detection, and personalization.",
          "Distinguish predictive analytics use cases from generative AI use cases.",
        ],
      },
    ],
  },
  {
    id: "D2",
    name: "Fundamentals of Generative AI",
    weight: 24,
    mission:
      "Build foundational understanding of generative AI concepts, foundation model behavior, and AWS infrastructure choices for practical deployment.",
    tasks: [
      {
        id: "2.1",
        title: "Explain basic concepts of generative AI",
        focus: [
          "Explain tokens, context windows, embeddings, and hallucination risk.",
          "Identify how prompting and grounding change output quality.",
          "Describe where generative AI complements, not replaces, classic ML methods.",
        ],
      },
      {
        id: "2.2",
        title: "Understand capabilities of foundation models",
        focus: [
          "Match common FM strengths to tasks like summarization, extraction, and Q&A.",
          "Recognize FM limitations around factual accuracy, bias, and training cutoff.",
          "Evaluate latency, cost, and quality tradeoffs across available models.",
        ],
      },
      {
        id: "2.3",
        title: "Describe AWS infrastructure and technologies for building generative AI applications",
        focus: [
          "Select managed AWS options for model access, inference, and orchestration.",
          "Understand architectural building blocks for secure application integration.",
          "Relate workload patterns to throughput, scaling, and cost governance decisions.",
        ],
      },
    ],
  },
  {
    id: "D3",
    name: "Applications of Foundation Models",
    weight: 28,
    mission:
      "Design reliable generative AI applications with strong prompt patterns, AWS service integrations, evaluation discipline, and controlled customization choices.",
    tasks: [
      {
        id: "3.1",
        title: "Understand prompt engineering",
        focus: [
          "Apply instruction clarity, context framing, and output constraints.",
          "Use examples and structured formats to improve consistency.",
          "Debug prompts systematically with iterative experiments.",
        ],
      },
      {
        id: "3.2",
        title: "Understand available AWS services and features for building generative AI applications",
        focus: [
          "Choose AWS managed features for retrieval, agents, guardrails, and integration.",
          "Map application patterns to service capabilities and operational complexity.",
          "Design reference architectures for chat, summarization, and workflow automation.",
        ],
      },
      {
        id: "3.3",
        title: "Understand basic training and fine-tuning",
        focus: [
          "Determine when prompt optimization is sufficient versus model customization.",
          "Understand data preparation and validation considerations for tuning.",
          "Recognize overfitting and rollback risks in customized model workflows.",
        ],
      },
      {
        id: "3.4",
        title: "Understand evaluation methods and metrics for generative AI",
        focus: [
          "Build task-specific evaluation sets with representative prompts.",
          "Combine automated metrics with human judgment for quality control.",
          "Track quality, safety, latency, and cost over time to prevent regressions.",
        ],
      },
    ],
  },
  {
    id: "D4",
    name: "Guidelines for Responsible AI",
    weight: 14,
    mission:
      "Apply responsible AI principles so outputs are fair, safe, transparent, and explainable for end users and governance stakeholders.",
    tasks: [
      {
        id: "4.1",
        title: "Understand responsible AI concepts and techniques",
        focus: [
          "Identify sources of harmful outputs, bias, and misuse in AI systems.",
          "Use preventive controls such as guardrails, policy constraints, and human review.",
          "Document and monitor responsible AI risk over the solution lifecycle.",
        ],
      },
      {
        id: "4.2",
        title: "Recognize importance of transparent and explainable models",
        focus: [
          "Communicate model limitations, intended use, and confidence boundaries.",
          "Use explainability tooling where stakeholders need interpretable reasoning.",
          "Support user trust through clear disclosure of AI-generated content.",
        ],
      },
    ],
  },
  {
    id: "D5",
    name: "Security, Compliance, and Governance for AI Solutions",
    weight: 14,
    mission:
      "Secure AI workloads end to end with identity controls, data protection, compliance evidence, and governance mechanisms across teams and accounts.",
    tasks: [
      {
        id: "5.1",
        title: "Understand security considerations and governance for AI systems",
        focus: [
          "Apply IAM least privilege, encryption, and network controls around AI workloads.",
          "Capture audit trails and enforce account-level guardrails.",
          "Protect sensitive data used for prompting, training, and retrieval.",
        ],
      },
      {
        id: "5.2",
        title: "Recognize compliance and legal considerations of AI systems",
        focus: [
          "Map legal and regulatory obligations to technical controls and evidence collection.",
          "Support data residency, retention, and deletion requirements.",
          "Use AWS compliance artifacts and assessments for audit readiness.",
        ],
      },
    ],
  },
];

export const serviceAtlas = [
  {
    name: "Amazon Bedrock",
    usage: "Managed service to access and use foundation models through a unified API.",
    examHint:
      "When a scenario asks for fast FM adoption without infrastructure management, Bedrock is usually the expected choice.",
  },
  {
    name: "Agents for Amazon Bedrock",
    usage: "Build agents that can orchestrate steps and invoke external tools/APIs.",
    examHint:
      "Use Agents when the workload needs multi-step reasoning and action execution beyond plain text generation.",
  },
  {
    name: "Knowledge Bases for Amazon Bedrock",
    usage: "Managed retrieval augmentation pipeline that indexes enterprise data sources.",
    examHint:
      "If the prompt mentions grounding responses in private documents, Knowledge Bases is often the direct answer.",
  },
  {
    name: "Guardrails for Amazon Bedrock",
    usage: "Safety and policy controls for harmful content filtering and response constraints.",
    examHint:
      "Guardrails are key for responsible AI and policy enforcement scenarios.",
  },
  {
    name: "Amazon Bedrock Model Evaluation",
    usage: "Evaluate model quality using automated and human workflows.",
    examHint:
      "Questions about selecting models objectively across quality dimensions usually point to model evaluation capabilities.",
  },
  {
    name: "Amazon SageMaker AI",
    usage: "Managed platform for the broader ML lifecycle including build, train, and deploy workflows.",
    examHint:
      "Use SageMaker AI when the question expands beyond simple FM consumption into broader ML operations.",
  },
  {
    name: "SageMaker Data Wrangler",
    usage: "Prepare and transform data with visual workflows and repeatable processing steps.",
    examHint:
      "Data cleanup and feature preparation scenarios frequently align with Data Wrangler.",
  },
  {
    name: "SageMaker Clarify",
    usage: "Bias detection and explainability analysis for ML models.",
    examHint:
      "Clarify often appears when fairness and transparency controls are required.",
  },
  {
    name: "SageMaker Model Monitor",
    usage: "Monitor data and model quality drift in production ML deployments.",
    examHint:
      "For post-deployment quality monitoring, Model Monitor is the expected managed option.",
  },
  {
    name: "Amazon Q Business",
    usage: "Generative AI assistant for enterprise knowledge and workflows.",
    examHint:
      "Use Q Business when the scenario is enterprise assistant/search rather than building custom FM orchestration.",
  },
  {
    name: "Amazon Q Developer",
    usage: "AI-powered assistance for software development tasks.",
    examHint:
      "Q Developer is the fit for coding support workflows, not general customer-facing chatbots.",
  },
  {
    name: "AWS Lambda",
    usage: "Serverless compute for event-driven integration with AI services.",
    examHint:
      "Lambda is common as orchestration glue around Bedrock APIs and data pipelines.",
  },
  {
    name: "Amazon API Gateway",
    usage: "Managed API front door for application access to AI backends.",
    examHint:
      "If building secure request/response interfaces for AI applications, API Gateway is a likely component.",
  },
  {
    name: "Amazon S3",
    usage: "Durable object storage for prompts, datasets, and retrieval corpora.",
    examHint:
      "S3 is frequently the system-of-record data layer for AI inputs and outputs.",
  },
  {
    name: "Amazon OpenSearch Service",
    usage: "Search and vector-style retrieval support for generative AI solutions.",
    examHint:
      "When a scenario needs semantic retrieval at scale, OpenSearch can be the managed answer.",
  },
  {
    name: "AWS IAM",
    usage: "Identity and access controls for AI services and data resources.",
    examHint:
      "Least privilege with IAM roles and scoped policies is a recurring requirement.",
  },
  {
    name: "AWS KMS",
    usage: "Managed encryption key control for protecting data at rest.",
    examHint:
      "Customer-managed keys and key policies usually indicate KMS in the solution.",
  },
  {
    name: "AWS CloudTrail",
    usage: "API activity logs for auditing and forensic analysis.",
    examHint:
      "CloudTrail is the standard answer for 'who did what' in AWS accounts.",
  },
  {
    name: "AWS Config",
    usage: "Tracks configuration state and rules for compliance monitoring.",
    examHint:
      "Use Config for continuous checks against desired control baselines.",
  },
  {
    name: "Amazon VPC",
    usage: "Network isolation and traffic control for AI workloads.",
    examHint:
      "VPC boundaries matter whenever private connectivity or restricted egress is required.",
  },
  {
    name: "AWS PrivateLink",
    usage: "Private service access without traversing the public internet.",
    examHint:
      "PrivateLink is commonly expected when compliance requires private path access to services.",
  },
  {
    name: "Amazon Macie",
    usage: "Discovers and helps protect sensitive data in Amazon S3.",
    examHint:
      "Macie appears in prompts about identifying or reducing PII exposure risk.",
  },
  {
    name: "AWS Artifact",
    usage: "On-demand access to AWS compliance reports and legal agreements.",
    examHint:
      "Artifact supports audit evidence collection and compliance documentation needs.",
  },
  {
    name: "AWS Audit Manager",
    usage: "Automates evidence gathering for compliance assessments.",
    examHint:
      "Audit Manager is relevant when the scenario requires repeatable control evidence collection.",
  },
  {
    name: "AWS Organizations",
    usage: "Multi-account governance with policy controls and centralized management.",
    examHint:
      "Organizations and SCPs are common for enterprise AI guardrails.",
  },
  {
    name: "AWS Cost Explorer",
    usage: "Analyze and break down cloud spend trends.",
    examHint:
      "Cost Explorer is the go-to answer for historical spend analysis.",
  },
  {
    name: "AWS Budgets",
    usage: "Define spend thresholds and proactive alerts.",
    examHint:
      "Budgets is used when the requirement is cost alerts before overspend occurs.",
  },
];

export const prepPlaybooks = [
  {
    title: "AIF-C01 Exam Triage Plan",
    steps: [
      "First pass: answer direct terminology and service-fit questions in under 60 seconds.",
      "Mark long architecture scenarios and return after securing straightforward points.",
      "For ambiguous choices, eliminate options that ignore security, governance, or responsible AI constraints.",
      "In final review, validate whether the selected option is managed, scalable, and aligned with business risk controls.",
    ],
  },
  {
    title: "Generative AI Decision Checklist",
    steps: [
      "Start with prompt optimization and grounding before jumping to fine-tuning.",
      "Use objective evaluation criteria: quality, safety, latency, and cost.",
      "Design for retrieval freshness, source attribution, and fallback behavior.",
      "Instrument token usage and set budget alarms for ongoing financial control.",
    ],
  },
  {
    title: "Responsible + Secure AI Checklist",
    steps: [
      "Define user-facing transparency statements and intended-use boundaries.",
      "Apply IAM least privilege, encryption, and audit logging from day one.",
      "Add harm-prevention controls such as content filters and human escalation paths.",
      "Document compliance evidence strategy before production launch.",
    ],
  },
];

export const topicSeeds = [
  {
    topic: "prompt engineering",
    summary:
      "Prompt quality directly affects model usefulness; structure, constraints, and examples reduce ambiguity and improve consistency.",
    linkedServices: ["Amazon Bedrock", "Amazon Bedrock Model Evaluation", "AWS Lambda", "Amazon API Gateway"],
  },
  {
    topic: "retrieval-augmented generation",
    summary:
      "Grounding model outputs in trusted enterprise data helps reduce hallucinations and improves factual accuracy.",
    linkedServices: ["Knowledge Bases for Amazon Bedrock", "Amazon S3", "Amazon OpenSearch Service", "AWS IAM"],
  },
  {
    topic: "responsible ai controls",
    summary:
      "Responsible AI requires proactive bias/safety checks, transparent communication, and continuous governance.",
    linkedServices: ["Guardrails for Amazon Bedrock", "SageMaker Clarify", "AWS CloudTrail", "AWS Config"],
  },
  {
    topic: "model evaluation",
    summary:
      "Reliable model selection combines automated scores with human review against task-specific quality rubrics.",
    linkedServices: ["Amazon Bedrock Model Evaluation", "SageMaker Model Monitor", "AWS Cost Explorer", "AWS Budgets"],
  },
  {
    topic: "security and compliance",
    summary:
      "AI systems must protect data, enforce least privilege, and maintain audit-ready evidence across the full lifecycle.",
    linkedServices: ["AWS IAM", "AWS KMS", "AWS Artifact", "AWS Audit Manager"],
  },
];

const fundamentalsQuestions = [
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "A retail manager asks for weekly sales forecasts by store. Which ML task type best matches this goal?",
    choices: ["Regression", "Clustering", "Tokenization", "Content moderation"],
    correct: [0],
    rationale: "Forecasting a numeric value is a regression problem.",
    tags: ["regression", "use cases"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "A bank has historical transactions labeled as fraudulent or legitimate. Which learning approach is most appropriate for an initial model?",
    choices: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Rule-based DNS routing"],
    correct: [0],
    rationale: "Labeled examples make supervised learning the standard starting approach.",
    tags: ["supervised learning", "classification"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A telecom company wants to group customers by behavior without predefined labels. Which technique is most suitable?",
    choices: ["Clustering", "Binary classification", "Linear regression", "Sequence-to-sequence generation"],
    correct: [0],
    rationale: "Clustering is used to discover groups in unlabeled data.",
    tags: ["unsupervised learning", "clustering"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A robotics team wants an agent to learn navigation by receiving rewards for reaching goals. Which paradigm describes this?",
    choices: ["Reinforcement learning", "Supervised learning", "K-means clustering", "Rule compilation"],
    correct: [0],
    rationale: "Reinforcement learning optimizes behavior based on reward feedback.",
    tags: ["reinforcement learning", "terminology"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt: "Which are common signs of overfitting? (Choose TWO.)",
    choices: [
      "Training performance is strong but validation performance is weak",
      "Model fails to capture any pattern even on training data",
      "Model relies on noise and does not generalize to new samples",
      "Validation and test metrics improve steadily over time",
    ],
    correct: [0, 2],
    rationale:
      "Overfitting appears when the model memorizes training artifacts and performs poorly on unseen data.",
    tags: ["overfitting", "evaluation"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Why is a held-out test dataset used in ML projects?",
    choices: [
      "To estimate generalization on unseen data",
      "To increase training loss on purpose",
      "To replace the need for labels",
      "To remove the need for monitoring",
    ],
    correct: [0],
    rationale: "The test set gives an unbiased view of model performance after development.",
    tags: ["test set", "ml basics"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A support team wants to automatically tag tickets as billing, technical, or account. Which ML task is this?",
    choices: ["Classification", "Regression", "Dimensionality reduction", "Image generation"],
    correct: [0],
    rationale: "Assigning one of several discrete labels is a classification task.",
    tags: ["classification", "use case"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A startup wants a quick benchmark before investing in complex models. What is the BEST first step?",
    choices: [
      "Build a simple baseline model and measure it",
      "Tune hundreds of hyperparameters immediately",
      "Skip evaluation and deploy directly",
      "Collect only synthetic data",
    ],
    correct: [0],
    rationale: "A baseline establishes a reference point for future model improvements.",
    tags: ["baseline", "experimentation"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which statement correctly differentiates AI and ML?",
    choices: [
      "ML is a subset of AI focused on learning patterns from data",
      "AI is a subset of ML focused on linear models only",
      "AI and ML are identical terms with no distinction",
      "ML refers only to deterministic business rules",
    ],
    correct: [0],
    rationale: "AI is broader, while ML is one approach inside AI that learns from data.",
    tags: ["ai fundamentals", "terminology"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A model predicts customer churn with high accuracy, but churn is rare. Which actions improve evaluation quality? (Choose TWO.)",
    choices: [
      "Track precision and recall in addition to accuracy",
      "Evaluate using only training data metrics",
      "Inspect confusion matrix outcomes",
      "Ignore class distribution because accuracy is high",
    ],
    correct: [0, 2],
    rationale:
      "With imbalanced classes, confusion-matrix-derived metrics reveal quality better than accuracy alone.",
    tags: ["imbalanced data", "metrics"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An insurer needs to detect unusual claim behavior without historical fraud labels. Which approach is most suitable?",
    choices: ["Anomaly detection", "Binary classification", "Language translation", "Text summarization"],
    correct: [0],
    rationale: "Anomaly detection is commonly used when labels are limited or unavailable.",
    tags: ["anomaly detection", "use case"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which term describes using a trained model to generate predictions on new data?",
    choices: ["Inference", "Backpropagation", "Tokenization", "Regularization"],
    correct: [0],
    rationale: "Inference is the prediction phase after training is complete.",
    tags: ["inference", "terminology"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A team reports unstable model results release to release. Which practices improve reproducibility? (Choose TWO.)",
    choices: [
      "Version datasets and training code",
      "Change preprocessing steps without tracking",
      "Record training configurations and parameters",
      "Reuse random notebook states without documentation",
    ],
    correct: [0, 2],
    rationale:
      "Versioning inputs and capturing configuration metadata are core reproducibility practices.",
    tags: ["reproducibility", "ml operations"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "A company wants to generate marketing copy. Which statement is most accurate?",
    choices: [
      "This is a common generative AI use case",
      "This is primarily a clustering use case",
      "This requires reinforcement learning only",
      "This cannot be done with AI",
    ],
    correct: [0],
    rationale: "Generating new text content is a core generative AI task.",
    tags: ["generative ai", "use cases"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which change most directly improves model quality when features are noisy and inconsistent?",
    choices: [
      "Improve data quality and feature engineering",
      "Increase endpoint timeout",
      "Rotate encryption keys weekly",
      "Add DNS failover routing",
    ],
    correct: [0],
    rationale: "Data quality and feature quality are primary drivers of model performance.",
    tags: ["feature engineering", "data quality"],
  },
];

const genAiFoundationsQuestions = [
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which statement best describes a token in generative AI?",
    choices: [
      "A unit of text processed by a model",
      "A DNS record used by Route 53",
      "A fixed GPU memory block",
      "An IAM policy statement",
    ],
    correct: [0],
    rationale: "Foundation models process text as tokens, not entire documents at once.",
    tags: ["tokens", "genai basics"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A legal team needs long-document summarization, but prompts are often truncated. Which concept should be reviewed first?",
    choices: ["Context window limits", "IAM access analyzer", "S3 lifecycle policies", "Subnet CIDR sizing"],
    correct: [0],
    rationale: "Prompt truncation usually relates to model context window constraints.",
    tags: ["context window", "summarization"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A chatbot returns plausible but incorrect answers about internal policy. Which risk is this?",
    choices: ["Hallucination", "Data deduplication", "Auto scaling", "Encryption drift"],
    correct: [0],
    rationale: "Hallucination refers to confident but factually incorrect model output.",
    tags: ["hallucination", "model limitations"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An enterprise wants access to multiple foundation models through one managed API. Which AWS service is best aligned?",
    choices: ["Amazon Bedrock", "Amazon Route 53", "AWS Organizations", "AWS CloudFormation"],
    correct: [0],
    rationale: "Bedrock provides managed access to multiple FM providers through a unified API.",
    tags: ["amazon bedrock", "managed fm"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "When selecting a foundation model for production, which factors are most important? (Choose TWO.)",
    choices: [
      "Task quality against representative prompts",
      "Whether the model name sounds familiar",
      "Latency and cost against workload requirements",
      "Number of unrelated AWS services in the account",
    ],
    correct: [0, 2],
    rationale:
      "Model choice should be driven by measured quality and operational constraints like latency and cost.",
    tags: ["model selection", "tradeoffs"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A contact center bot has stable high request volume all day. Which throughput mode usually improves cost predictability?",
    choices: ["Provisioned throughput", "Ad-hoc notebook inference", "Manual CSV uploads", "Single-AZ EC2 spot only"],
    correct: [0],
    rationale: "Provisioned throughput can provide predictable capacity and spend for steady demand.",
    tags: ["throughput", "cost control"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which representation is commonly used for semantic similarity search in RAG pipelines?",
    choices: ["Embeddings", "CIDR blocks", "Parquet partitions", "JWT headers"],
    correct: [0],
    rationale: "Embeddings map content to vector space for semantic retrieval.",
    tags: ["embeddings", "rag"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which components are fundamental in a retrieval-augmented generation flow? (Choose TWO.)",
    choices: [
      "A retriever over indexed knowledge",
      "An inference model that uses retrieved context",
      "A manual support ticket queue",
      "A static IP allowlist spreadsheet",
    ],
    correct: [0, 1],
    rationale: "RAG combines retrieval from knowledge sources with generation grounded in retrieved context.",
    tags: ["rag", "architecture"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to reduce generative AI latency for live chat while preserving quality. What should they do first?",
    choices: [
      "Benchmark candidate models and prompt sizes with realistic traffic",
      "Disable all logging to remove overhead",
      "Skip evaluation and rely on model marketing claims",
      "Use random sampling for all responses",
    ],
    correct: [0],
    rationale: "Measured benchmarking under realistic workloads is required for meaningful latency/quality decisions.",
    tags: ["latency", "benchmarking"],
  },
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "What does increasing temperature generally do in text generation?",
    choices: [
      "Increases output randomness",
      "Encrypts output tokens",
      "Improves IAM policy validation",
      "Decreases context window size",
    ],
    correct: [0],
    rationale: "Higher temperature usually increases variability and creativity in outputs.",
    tags: ["temperature", "inference parameters"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Why do teams often choose managed generative AI services on AWS instead of self-hosting models? (Choose TWO.)",
    choices: [
      "Reduced infrastructure management overhead",
      "Broader model access through a unified API",
      "Guaranteed perfect factual responses",
      "No need for security controls",
    ],
    correct: [0, 1],
    rationale:
      "Managed services simplify operations and provide easier access to multiple model options, while still requiring quality/safety controls.",
    tags: ["managed services", "operational efficiency"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to ground generated answers in PDF manuals already stored in S3 with minimal custom pipeline code. Which feature is most aligned?",
    choices: [
      "Knowledge Bases for Amazon Bedrock",
      "AWS Control Tower",
      "Elastic Load Balancing",
      "Amazon Inspector",
    ],
    correct: [0],
    rationale: "Knowledge Bases provides managed ingestion, indexing, and retrieval for enterprise content.",
    tags: ["knowledge bases", "grounding"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A startup expects seasonal traffic spikes for a generative image app. Which design principle best controls cost?",
    choices: [
      "Use a scaling strategy that matches variable demand rather than fixed always-on capacity",
      "Buy maximum fixed capacity year-round regardless of usage",
      "Disable all metrics collection",
      "Store prompts in plain text emails",
    ],
    correct: [0],
    rationale: "Elastic capacity alignment helps avoid overprovisioning during low-demand periods.",
    tags: ["cost optimization", "scalability"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which statement about foundation models is accurate?",
    choices: [
      "They can perform multiple downstream tasks without training from scratch",
      "They are limited to one fixed task forever",
      "They eliminate the need for evaluation",
      "They never require prompting context",
    ],
    correct: [0],
    rationale: "Foundation models are general-purpose and can adapt to many downstream tasks.",
    tags: ["foundation models", "capabilities"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team observes high generation latency and cost. Which tuning changes are likely to help? (Choose TWO.)",
    choices: [
      "Reduce unnecessary prompt length",
      "Lower maximum output token limits where acceptable",
      "Increase random retries without diagnostics",
      "Disable request-level monitoring",
    ],
    correct: [0, 1],
    rationale:
      "Excess prompt and output tokens directly increase compute time and cost.",
    tags: ["token optimization", "latency"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which AWS feature is most directly focused on preventing unsafe or policy-violating FM responses?",
    choices: ["Guardrails for Amazon Bedrock", "Amazon S3 Inventory", "AWS Direct Connect", "AWS DataSync"],
    correct: [0],
    rationale: "Guardrails applies safety and policy constraints to model interactions.",
    tags: ["guardrails", "safety"],
  },
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which choice best describes inference in generative AI?",
    choices: [
      "Running prompts through a trained model to produce output",
      "Creating IAM groups for developers",
      "Compressing logs in CloudWatch",
      "Labeling training data manually",
    ],
    correct: [0],
    rationale: "Inference is the runtime stage where a model produces outputs for new inputs.",
    tags: ["inference", "genai basics"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which are valid limitations to account for when adopting foundation models? (Choose TWO.)",
    choices: [
      "Potential hallucinations",
      "Possible bias in generated output",
      "Guaranteed permanent factual accuracy",
      "No requirement for governance",
    ],
    correct: [0, 1],
    rationale:
      "Hallucination and bias are known FM risks that require controls and evaluation.",
    tags: ["limitations", "risk awareness"],
  },
];

const foundationModelAppQuestions = [
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants consistent JSON responses from an FM for downstream processing. Which prompt practice helps most?",
    choices: [
      "Specify strict output schema and formatting rules",
      "Remove all task context",
      "Use highest temperature possible",
      "Avoid examples entirely",
    ],
    correct: [0],
    rationale: "Explicit output constraints reduce format variability and parsing failures.",
    tags: ["prompt engineering", "structured output"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A customer support assistant must answer from internal policy documents with citations. Which design is most appropriate?",
    choices: [
      "Use Knowledge Bases for Amazon Bedrock with source retrieval",
      "Fine-tune immediately without any retrieval",
      "Store policies in local browser cache only",
      "Use Route 53 health checks",
    ],
    correct: [0],
    rationale: "Knowledge Bases supports retrieval and grounding from enterprise sources, including citation-style workflows.",
    tags: ["knowledge bases", "citations"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which prompt techniques typically improve determinism? (Choose TWO.)",
    choices: [
      "Lower temperature and constrain output format",
      "Provide explicit task instructions and success criteria",
      "Increase randomness to maximum",
      "Ask unrelated multi-topic questions in one prompt",
    ],
    correct: [0, 1],
    rationale:
      "Lower randomness and clearer instructions generally produce more consistent output.",
    tags: ["determinism", "prompt design"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An operations chatbot must call ticketing and CMDB APIs in sequence. Which AWS capability is most aligned?",
    choices: ["Agents for Amazon Bedrock", "Amazon S3 Glacier", "AWS Snowball", "Amazon Macie"],
    correct: [0],
    rationale: "Agents can orchestrate multi-step tool use and API actions.",
    tags: ["agents", "workflow orchestration"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Before deciding to fine-tune a model, which steps should a team take first? (Choose TWO.)",
    choices: [
      "Establish baseline results with prompt engineering and retrieval",
      "Define objective evaluation criteria for the target task",
      "Skip validation data preparation",
      "Deploy untested customized model directly to production",
    ],
    correct: [0, 1],
    rationale:
      "Baseline and clear evaluation criteria are prerequisites for justified model customization.",
    tags: ["fine-tuning", "decision framework"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A model handles general Q&A well but struggles with company-specific jargon. Which option is the most targeted first step?",
    choices: [
      "Add curated domain examples and context in prompts",
      "Delete all existing prompts",
      "Disable grounding and retrieval",
      "Reduce IAM policy scope to read-only logs",
    ],
    correct: [0],
    rationale: "Domain-specific prompting and context can improve performance before heavier customization.",
    tags: ["prompt tuning", "domain adaptation"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "For nightly generation of thousands of product descriptions where latency is not interactive, which approach is best?",
    choices: [
      "Batch-oriented inference workflow",
      "Single synchronous request per item from a web browser",
      "Manual copy-paste generation",
      "Route 53 weighted routing",
    ],
    correct: [0],
    rationale: "Batch generation is usually more efficient for high-volume offline workloads.",
    tags: ["batch inference", "workload pattern"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A voice assistant requires low-latency response for live interactions. Which inference mode is most suitable?",
    choices: ["Real-time inference", "Weekly batch jobs", "Offline CSV exports", "Cold archive retrieval only"],
    correct: [0],
    rationale: "Interactive applications need low-latency real-time inference paths.",
    tags: ["real-time inference", "latency"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A team wants objective comparison across multiple FMs for summarization quality and safety. What should they implement?",
    choices: [
      "A repeatable evaluation harness with shared prompt set and scoring rubric",
      "Informal ad-hoc testing by one engineer",
      "Only marketing benchmark comparisons",
      "No evaluation until after launch",
    ],
    correct: [0],
    rationale: "Consistent evaluation datasets and rubrics enable fair model comparison.",
    tags: ["evaluation", "model selection"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which metric family is commonly used to evaluate text summarization quality in automated checks?",
    choices: ["ROUGE-style overlap metrics", "Subnet utilization", "CPU burst credits", "Packet retransmission rate"],
    correct: [0],
    rationale: "ROUGE metrics are common for summary overlap and content coverage assessment.",
    tags: ["metrics", "summarization"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which practices improve factual reliability in RAG applications? (Choose TWO.)",
    choices: [
      "Retrieve relevant context from trusted sources before generation",
      "Ask the model to answer from memory without context",
      "Require responses to reference supporting sources",
      "Disable all retrieval ranking controls",
    ],
    correct: [0, 2],
    rationale:
      "Grounded context and source attribution reduce unsupported responses and improve trust.",
    tags: ["rag", "factuality"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A chatbot gives inconsistent answers to the same question wording. Which change is most likely to help?",
    choices: [
      "Use clearer system instructions with examples and constrained format",
      "Increase randomness and remove examples",
      "Disable prompt templates entirely",
      "Rotate KMS keys every minute",
    ],
    correct: [0],
    rationale: "Clear system prompts and examples reduce response variability.",
    tags: ["prompt consistency", "quality"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "What are warning signs that a fine-tuned model may be overfitting? (Choose TWO.)",
    choices: [
      "Training loss improves while validation quality degrades",
      "Performance drops on new unseen prompts",
      "Model responds faster after optimization",
      "Inference cost decreases with shorter prompts",
    ],
    correct: [0, 1],
    rationale:
      "Diverging train/validation behavior and poor generalization are overfitting signals.",
    tags: ["fine-tuning", "overfitting"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to test two prompt templates with real traffic before full rollout. Which approach is most appropriate?",
    choices: ["A/B evaluation with controlled cohorts", "Disable monitoring", "Randomly switch answers in production", "Manual copy editing only"],
    correct: [0],
    rationale: "A/B style evaluation supports controlled comparison before broad launch.",
    tags: ["experimentation", "rollout"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which feature is best suited for managed model quality comparisons using automated and human evaluation workflows?",
    choices: ["Amazon Bedrock Model Evaluation", "AWS Backup", "Amazon EventBridge Scheduler", "AWS WAF logs"],
    correct: [0],
    rationale: "Bedrock Model Evaluation is specifically designed for FM assessment workflows.",
    tags: ["model evaluation", "bedrock"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A regulated chatbot must invoke only approved backend actions. Which controls should be included? (Choose TWO.)",
    choices: [
      "Define explicit action groups and allowed APIs",
      "Assign least-privilege IAM role to agent execution",
      "Allow unrestricted outbound calls to any endpoint",
      "Let end users edit runtime tool permissions directly",
    ],
    correct: [0, 1],
    rationale:
      "Action scoping plus least-privilege IAM is required for controlled agent behavior.",
    tags: ["agents", "tool governance"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to improve extraction accuracy from semi-structured forms. Which prompt strategy is most effective first?",
    choices: [
      "Provide few-shot examples with desired output fields",
      "Remove all delimiters and instructions",
      "Use maximum temperature",
      "Avoid any schema hints",
    ],
    correct: [0],
    rationale: "Few-shot examples with explicit schema often improve structured extraction.",
    tags: ["few-shot prompting", "information extraction"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A company fine-tuned a model for domain style, but factual errors increased. What is the BEST correction?",
    choices: [
      "Combine tuning with grounded retrieval and factual evaluation checks",
      "Increase randomness to hide errors",
      "Remove validation prompts from testing",
      "Disable logging and feedback capture",
    ],
    correct: [0],
    rationale:
      "Grounding and explicit factual evaluation are needed to control accuracy after customization.",
    tags: ["fine-tuning", "factuality"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A PM asks how to improve answer quality without increasing model size or cost dramatically. Which action is most practical?",
    choices: [
      "Iteratively refine prompts and retrieval context",
      "Replace all services with self-managed GPU clusters",
      "Remove stop sequences and limits",
      "Disable dataset versioning",
    ],
    correct: [0],
    rationale: "Prompt and context optimization can materially improve quality with lower operational cost.",
    tags: ["optimization", "cost-aware design"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which components belong in a robust generative AI evaluation plan? (Choose TWO.)",
    choices: [
      "Representative prompt set aligned to real use cases",
      "Safety and policy compliance checks",
      "Only one-time launch-day spot checks",
      "Ignoring latency and cost metrics",
    ],
    correct: [0, 1],
    rationale:
      "Evaluation should reflect real tasks and include safety quality checks beyond one-time testing.",
    tags: ["evaluation plan", "quality assurance"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which AWS managed feature best reduces custom engineering for enterprise document retrieval and grounding?",
    choices: ["Knowledge Bases for Amazon Bedrock", "AWS Cloud9", "Amazon SNS FIFO", "EC2 placement groups"],
    correct: [0],
    rationale: "Knowledge Bases provides built-in managed retrieval support for enterprise corpora.",
    tags: ["knowledge bases", "managed retrieval"],
  },
];

const responsibleAiQuestions = [
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A hiring assistant consistently ranks one demographic lower due to biased historical data. Which responsible AI concern is this?",
    choices: ["Fairness bias", "Latency jitter", "Token overflow", "Caching miss"],
    correct: [0],
    rationale: "Systematic performance disparity across groups indicates a fairness/bias issue.",
    tags: ["fairness", "bias"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which controls strengthen responsible AI in a customer-facing chatbot? (Choose TWO.)",
    choices: [
      "Human escalation path for high-risk responses",
      "Safety filtering and policy guardrails",
      "No disclosure that AI is generating responses",
      "Automatic acceptance of every generated answer",
    ],
    correct: [0, 1],
    rationale:
      "Human oversight and guardrails are core controls for reducing harmful outcomes.",
    tags: ["responsible ai", "risk controls"],
  },
  {
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which artifact improves transparency by documenting intended use, limitations, and performance characteristics?",
    choices: ["Model card", "Subnet route table", "S3 replication rule", "NAT gateway"],
    correct: [0],
    rationale: "Model cards communicate key model behavior and constraints to stakeholders.",
    tags: ["transparency", "model cards"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A compliance team requests feature-attribution style explanations for credit risk predictions. Which AWS capability helps?",
    choices: ["SageMaker Clarify", "AWS DataSync", "Amazon CloudFront", "Amazon SQS"],
    correct: [0],
    rationale: "SageMaker Clarify supports explainability and bias analysis for ML models.",
    tags: ["clarify", "explainability"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A generated response contains unsafe language in a public app. Which preventive feature is most directly relevant?",
    choices: ["Guardrails for Amazon Bedrock", "AWS Storage Gateway", "Amazon ECR", "AWS DMS"],
    correct: [0],
    rationale: "Guardrails can apply safety filters and policy controls to generated responses.",
    tags: ["guardrails", "content safety"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which practices improve transparency for AI-assisted decisions? (Choose TWO.)",
    choices: [
      "Disclose when outputs are AI-generated",
      "Document known model limitations for users",
      "Hide confidence uncertainty to simplify UX",
      "Avoid any user-facing explanation text",
    ],
    correct: [0, 1],
    rationale: "Disclosure and limitation documentation increase user trust and informed use.",
    tags: ["transparency", "user trust"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "When should a business keep a human reviewer in the loop for AI outputs?",
    choices: [
      "When outputs can materially affect legal, financial, or safety outcomes",
      "Only during low-risk internal brainstorming",
      "Never, because AI outputs are always deterministic",
      "Only when model latency exceeds one second",
    ],
    correct: [0],
    rationale: "High-impact decisions require human oversight to manage risk.",
    tags: ["human oversight", "governance"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A multilingual assistant is safe in English but harmful in other languages. What is the best next step?",
    choices: [
      "Expand safety evaluation datasets across supported languages",
      "Disable monitoring in non-English regions",
      "Assume safety transfers automatically",
      "Reduce token limits only",
    ],
    correct: [0],
    rationale: "Responsible AI evaluation must cover all user populations and languages in scope.",
    tags: ["evaluation coverage", "responsible ai"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which statements correctly reflect explainable AI goals? (Choose TWO.)",
    choices: [
      "Help stakeholders understand why a model produced a result",
      "Support accountability and governance reviews",
      "Guarantee zero model error",
      "Eliminate need for validation and monitoring",
    ],
    correct: [0, 1],
    rationale: "Explainability improves interpretability and accountability, but does not replace validation.",
    tags: ["explainable ai", "governance"],
  },
  {
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which communication practice is most responsible for a consumer AI assistant?",
    choices: [
      "State that responses may be imperfect and should be verified for critical decisions",
      "Claim outputs are always correct",
      "Hide all model limitations",
      "Disable feedback options",
    ],
    correct: [0],
    rationale: "Clear limitations and verification guidance are core to responsible user communication.",
    tags: ["communication", "responsible ai"],
  },
];

const securityGovernanceQuestions = [
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An app needs permission to call one Bedrock model only. Which IAM approach is best?",
    choices: [
      "Grant least-privilege role access scoped to required Bedrock actions/resources",
      "Attach AdministratorAccess to the application role",
      "Embed long-term root credentials in code",
      "Share one access key for all services",
    ],
    correct: [0],
    rationale: "Least privilege role design is the standard secure access pattern.",
    tags: ["iam", "least privilege"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which controls are essential for protecting sensitive AI data? (Choose TWO.)",
    choices: [
      "Encrypt data at rest with AWS KMS",
      "Use TLS for data in transit",
      "Store secrets in plain text prompt files",
      "Disable key rotation and auditing",
    ],
    correct: [0, 1],
    rationale: "Encryption at rest and in transit are foundational controls for sensitive data protection.",
    tags: ["kms", "encryption"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A regulator requires private connectivity to AWS services without traversing the public internet. Which service is most relevant?",
    choices: ["AWS PrivateLink", "Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53 Resolver DNS Firewall"],
    correct: [0],
    rationale: "PrivateLink provides private service access within AWS networks.",
    tags: ["private connectivity", "network security"],
  },
  {
    domain: "D5",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which AWS service records API calls for audit trails in AI workloads?",
    choices: ["AWS CloudTrail", "Amazon Pinpoint", "AWS Data Exchange", "Amazon Cognito Sync"],
    correct: [0],
    rationale: "CloudTrail captures account API activity for auditing and investigations.",
    tags: ["cloudtrail", "auditing"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data governance lead wants to detect potential PII in S3 datasets used for model training. Which service is most appropriate?",
    choices: ["Amazon Macie", "AWS Shield Advanced", "Amazon FSx", "AWS AppConfig"],
    correct: [0],
    rationale: "Macie is designed to discover and help protect sensitive data in S3.",
    tags: ["pii", "macie"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An auditor requests evidence of AWS compliance programs and control mappings. Which services help most? (Choose TWO.)",
    choices: ["AWS Artifact", "AWS Audit Manager", "Amazon Lightsail", "AWS CodeArtifact"],
    correct: [0, 1],
    rationale:
      "Artifact provides reports/agreements and Audit Manager helps automate evidence collection for assessments.",
    tags: ["compliance", "audit"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A multinational company must keep customer prompts and outputs in specific jurisdictions. What is the BEST approach?",
    choices: [
      "Architect region-specific data paths and enforce residency controls",
      "Replicate all data globally by default",
      "Store all data in one unrestricted public bucket",
      "Disable encryption for easier migration",
    ],
    correct: [0],
    rationale: "Region-aware architecture and control enforcement are required for residency obligations.",
    tags: ["data residency", "governance"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Finance asks for proactive control of generative AI spend across teams. Which combination is best?",
    choices: [
      "Use AWS Budgets alerts and Cost Explorer analysis with tagging",
      "Rely on end-of-year invoice review only",
      "Disable usage metrics",
      "Manually estimate costs without telemetry",
    ],
    correct: [0],
    rationale: "Budgets and Cost Explorer together provide proactive alerting and analytical visibility.",
    tags: ["cost governance", "billing"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team is concerned about prompt injection leading to unauthorized actions. Which mitigations are most effective? (Choose TWO.)",
    choices: [
      "Restrict tool permissions and API scopes",
      "Validate and sanitize external context before use",
      "Allow unrestricted action invocation by default",
      "Disable all monitoring to reduce overhead",
    ],
    correct: [0, 1],
    rationale:
      "Least-privilege tool use and input/context controls reduce injection blast radius.",
    tags: ["prompt injection", "security controls"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A privacy request requires permanent deletion of a user's data used in a retrieval corpus. What is most important?",
    choices: [
      "Implement traceable deletion workflows across source and indexed artifacts",
      "Delete only application logs and keep source documents",
      "Ignore index refresh processes",
      "Keep deleted data in shared backups forever without policy",
    ],
    correct: [0],
    rationale: "Deletion obligations require end-to-end, traceable removal across all dependent stores.",
    tags: ["privacy", "data lifecycle"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An enterprise wants to prevent member accounts from disabling required AI security services. Which governance mechanism is most direct?",
    choices: [
      "Apply AWS Organizations service control policies",
      "Rely on voluntary team agreements",
      "Use local machine firewall rules only",
      "Disable CloudTrail to reduce noise",
    ],
    correct: [0],
    rationale: "SCPs provide centralized preventive guardrails across accounts.",
    tags: ["organizations", "scp"],
  },
];

const questionBankSource = [
  ...fundamentalsQuestions,
  ...genAiFoundationsQuestions,
  ...foundationModelAppQuestions,
  ...responsibleAiQuestions,
  ...securityGovernanceQuestions,
];

export const questionBank = questionBankSource.map((question, index) => ({
  id: `AIF${String(index + 1).padStart(3, "0")}`,
  ...question,
}));

export const inferRules = [
  {
    domain: "D1",
    keywords: [
      "classification",
      "regression",
      "clustering",
      "supervised",
      "unsupervised",
      "reinforcement",
      "feature",
      "label",
      "overfitting",
      "inference",
    ],
  },
  {
    domain: "D2",
    keywords: [
      "token",
      "context window",
      "hallucination",
      "foundation model",
      "bedrock",
      "embedding",
      "throughput",
      "temperature",
      "rag",
      "latency",
    ],
  },
  {
    domain: "D3",
    keywords: [
      "prompt",
      "agent",
      "knowledge base",
      "evaluation",
      "fine-tuning",
      "model selection",
      "grounding",
      "retrieval",
      "batch",
      "real-time",
    ],
  },
  {
    domain: "D4",
    keywords: [
      "responsible",
      "bias",
      "fairness",
      "explainability",
      "transparency",
      "model card",
      "human oversight",
      "safety",
      "guardrail",
      "clarify",
    ],
  },
  {
    domain: "D5",
    keywords: [
      "iam",
      "kms",
      "cloudtrail",
      "compliance",
      "artifact",
      "audit",
      "private",
      "governance",
      "residency",
      "budget",
    ],
  },
];

export const defaultInferDomain = "D3";

export const aifC01Course = {
  examMeta,
  domainBlueprint,
  prepPlaybooks,
  questionBank,
  serviceAtlas,
  topicSeeds,
  inferRules,
  defaultInferDomain,
};
