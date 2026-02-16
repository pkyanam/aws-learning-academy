export const examMeta = {
  certificate: "AWS Certified SysOps Administrator - Associate",
  code: "SOA-C02",
  versionDate: "Retired September 2025 (AWS archived exam guide)",
  durationMinutes: 130,
  questionCount: 65,
  passingScore: 720,
  costUsd: 150,
  language: "English",
  targetRole:
    "Cloud administrators who deploy, operate, and remediate AWS workloads with strong monitoring, security, reliability, and automation discipline.",
  quickFacts: [
    "SOA-C02 is operations-heavy: expect scenario questions on observability, runbooks, incident remediation, and resilient workload operations.",
    "The blueprint emphasizes Monitoring/Logging/Remediation, Reliability/Business Continuity, and Security/Compliance more than pure architecture design.",
    "Strong scores usually come from selecting the most operationally efficient managed service pattern, not just a technically valid option.",
  ],
};

export const domainBlueprint = [
  {
    id: "D1",
    name: "Monitoring, Logging, and Remediation",
    weight: 20,
    mission:
      "Instrument AWS workloads with actionable metrics, logs, alarms, and automated response mechanisms that reduce mean time to detect and recover.",
    tasks: [
      {
        id: "1.1",
        title: "Implement metrics, alarms, and filters",
        focus: [
          "Design CloudWatch dashboards, metrics, and alarms aligned to service SLOs.",
          "Use log aggregation and metric filters to detect operational and security signals.",
          "Route alerts to responders and workflows with SNS, EventBridge, and incident tooling.",
        ],
      },
      {
        id: "1.2",
        title: "Remediate issues based on monitoring and availability metrics",
        focus: [
          "Automate corrective actions with Systems Manager Automation, Lambda, and alarm actions.",
          "Use runbooks and incident workflows to standardize operational response.",
          "Validate remediation outcomes with post-action metrics and logs.",
        ],
      },
    ],
  },
  {
    id: "D2",
    name: "Reliability and Business Continuity",
    weight: 22,
    mission:
      "Operate highly available and recoverable AWS environments by aligning scaling, failover, backup, and restoration patterns to RTO/RPO goals.",
    tasks: [
      {
        id: "2.1",
        title: "Implement scalability and elasticity",
        focus: [
          "Configure Auto Scaling policies, health checks, and capacity protections.",
          "Scale stateful and stateless services using managed capabilities and telemetry.",
          "Prevent overprovisioning while preserving availability objectives.",
        ],
      },
      {
        id: "2.2",
        title: "Implement high availability and resilient environments",
        focus: [
          "Remove single points of failure across compute, storage, and data tiers.",
          "Use multi-AZ and multi-Region patterns when continuity requirements demand them.",
          "Design controlled failover and fallback behavior for dependent services.",
        ],
      },
      {
        id: "2.3",
        title: "Implement backup and restore strategies",
        focus: [
          "Apply backup plans, retention, and recovery testing through AWS-native services.",
          "Use snapshot and point-in-time recovery features for critical data stores.",
          "Automate restoration workflows and validate restore integrity regularly.",
        ],
      },
    ],
  },
  {
    id: "D3",
    name: "Deployment, Provisioning, and Automation",
    weight: 16,
    mission:
      "Provision, update, and standardize cloud resources with infrastructure-as-code and automated operational controls.",
    tasks: [
      {
        id: "3.1",
        title: "Provision and maintain cloud resources",
        focus: [
          "Use CloudFormation and related tooling for repeatable provisioning.",
          "Detect and correct configuration drift from declared infrastructure state.",
          "Manage lifecycle updates with minimal operational risk and downtime.",
        ],
      },
      {
        id: "3.2",
        title: "Automate manual or repeatable processes",
        focus: [
          "Automate patching, maintenance, and common remediations with Systems Manager.",
          "Use schedules, events, and parameterized runbooks for operational consistency.",
          "Reduce toil with centralized, auditable automation workflows.",
        ],
      },
    ],
  },
  {
    id: "D4",
    name: "Security and Compliance",
    weight: 20,
    mission:
      "Enforce secure access, workload protection, and audit-ready controls across accounts and services while preserving operational agility.",
    tasks: [
      {
        id: "4.1",
        title: "Implement secure access",
        focus: [
          "Apply IAM least privilege, role assumption, and guardrails in multi-account environments.",
          "Strengthen identity posture with MFA, federation, and temporary credentials.",
          "Control privileged access to production resources through approved workflows.",
        ],
      },
      {
        id: "4.2",
        title: "Implement secure workload policies",
        focus: [
          "Use threat detection, configuration checks, and centralized findings management.",
          "Protect network paths and service endpoints with layered security controls.",
          "Apply preventive and detective controls across compute and data workloads.",
        ],
      },
      {
        id: "4.3",
        title: "Implement data security and compliance controls",
        focus: [
          "Encrypt data at rest and in transit with managed key and certificate services.",
          "Collect and retain audit evidence for change tracking and compliance reporting.",
          "Implement data governance controls for storage access and lifecycle requirements.",
        ],
      },
    ],
  },
  {
    id: "D5",
    name: "Networking and Content Delivery",
    weight: 16,
    mission:
      "Operate reliable, secure, and performant network connectivity and traffic delivery patterns for internal and internet-facing workloads.",
    tasks: [
      {
        id: "5.1",
        title: "Implement networking features and connectivity",
        focus: [
          "Configure VPC routing, gateways, and endpoint strategies for private and hybrid connectivity.",
          "Select and manage load balancing options based on protocol and target requirements.",
          "Diagnose and resolve connectivity failures using packet-path evidence and logs.",
        ],
      },
      {
        id: "5.2",
        title: "Configure domains, DNS services, and content delivery",
        focus: [
          "Configure Route 53 routing policies aligned to health and failover intent.",
          "Use CloudFront and edge controls to improve global performance and origin protection.",
          "Manage domain routing behavior for resilience and latency optimization.",
        ],
      },
      {
        id: "5.3",
        title: "Troubleshoot network connectivity issues",
        focus: [
          "Use VPC Flow Logs, route tables, NACLs, and security groups to isolate path failures.",
          "Diagnose DNS resolver and endpoint resolution issues across VPC boundaries.",
          "Validate remediation with targeted connectivity and health checks.",
        ],
      },
    ],
  },
  {
    id: "D6",
    name: "Cost and Performance Optimization",
    weight: 6,
    mission:
      "Continuously tune infrastructure spend and runtime performance using telemetry-driven rightsizing and managed optimization features.",
    tasks: [
      {
        id: "6.1",
        title: "Implement cost optimization strategies",
        focus: [
          "Use budgets, utilization data, and commitment models to reduce predictable spend.",
          "Identify and remediate idle or overprovisioned resources.",
          "Apply storage and compute pricing choices to match workload patterns.",
        ],
      },
      {
        id: "6.2",
        title: "Implement performance optimization strategies",
        focus: [
          "Tune instance, storage, and database configurations using metrics evidence.",
          "Use caching, acceleration, and throughput controls for latency-sensitive workloads.",
          "Balance performance improvements against cost and operational complexity.",
        ],
      },
    ],
  },
];

export const serviceAtlas = [
  {
    name: "Amazon CloudWatch",
    usage: "Metrics, logs, alarms, dashboards, and incident signal aggregation.",
    examHint:
      "CloudWatch is central for alerting and operational visibility decisions in SOA-C02 scenarios.",
  },
  {
    name: "Amazon CloudWatch Logs Insights",
    usage: "Interactive log querying to isolate failure patterns quickly.",
    examHint:
      "Use Logs Insights when troubleshooting needs fast ad hoc analysis without exporting logs.",
  },
  {
    name: "AWS CloudTrail",
    usage: "Records API and account activity for audit and investigations.",
    examHint:
      "CloudTrail is the default answer for who-changed-what questions.",
  },
  {
    name: "AWS Config",
    usage: "Tracks resource configuration state and compliance drift.",
    examHint:
      "Config + rules + remediation is common for continuous compliance controls.",
  },
  {
    name: "AWS Systems Manager",
    usage: "Operational management suite for run command, patching, automation, and state control.",
    examHint:
      "Systems Manager is frequently the least-operations answer for repeatable remediation at scale.",
  },
  {
    name: "Amazon EventBridge",
    usage: "Event routing and schedule triggers for operations workflows.",
    examHint:
      "EventBridge is ideal for event-driven remediation and periodic automation tasks.",
  },
  {
    name: "Amazon SNS",
    usage: "Notification fanout for alarm and incident escalation workflows.",
    examHint:
      "SNS commonly appears as the notification target for CloudWatch alarms.",
  },
  {
    name: "AWS Lambda",
    usage: "Serverless logic for lightweight remediation and automation tasks.",
    examHint:
      "Choose Lambda when remediation needs custom but minimal operational code.",
  },
  {
    name: "Amazon EC2 Auto Scaling",
    usage: "Scales EC2 capacity based on demand and health signals.",
    examHint:
      "Know target tracking, health checks, and warm pools for reliability scenarios.",
  },
  {
    name: "Elastic Load Balancing",
    usage: "Distributes traffic and performs target health checks across multiple resources.",
    examHint:
      "ALB/NLB selection and health-check behavior are frequent operational topics.",
  },
  {
    name: "Amazon Route 53",
    usage: "Managed DNS, health checks, and traffic routing policies.",
    examHint:
      "Expect failover, weighted, and latency routing policy tradeoff questions.",
  },
  {
    name: "AWS Backup",
    usage: "Centralized backup policies, vaulting, and restore orchestration.",
    examHint:
      "Use AWS Backup when consistent cross-service backup governance is required.",
  },
  {
    name: "Amazon RDS",
    usage: "Managed relational databases with multi-AZ and point-in-time recovery capabilities.",
    examHint:
      "RDS high availability and restore features appear often in continuity scenarios.",
  },
  {
    name: "Amazon S3",
    usage: "Durable object storage with lifecycle, replication, and access controls.",
    examHint:
      "S3 versioning and replication are core for DR and compliance patterns.",
  },
  {
    name: "Amazon EBS",
    usage: "Persistent block storage for EC2 with snapshots and performance tuning.",
    examHint:
      "EBS snapshot/restore and volume type tuning are common performance and recovery decisions.",
  },
  {
    name: "AWS CloudFormation",
    usage: "Infrastructure as code for repeatable provisioning and change management.",
    examHint:
      "Change sets, drift detection, and StackSets are key exam cues.",
  },
  {
    name: "AWS Organizations",
    usage: "Multi-account governance with SCP guardrails and centralized policy control.",
    examHint:
      "Organizations is the right fit for preventive controls across many accounts.",
  },
  {
    name: "AWS Identity and Access Management (IAM)",
    usage: "Identity, role, and policy controls for secure service access.",
    examHint:
      "Least-privilege role design is heavily tested in operational scenarios.",
  },
  {
    name: "AWS Key Management Service (AWS KMS)",
    usage: "Managed encryption key lifecycle and usage control.",
    examHint:
      "When the prompt mentions key policy, grants, or CMK access control, KMS is central.",
  },
  {
    name: "AWS Secrets Manager",
    usage: "Secure secret storage with rotation workflows.",
    examHint:
      "Secrets Manager is preferred over hardcoded credentials or plain text parameters.",
  },
  {
    name: "Amazon VPC",
    usage: "Network isolation, routing, and endpoint connectivity foundation.",
    examHint:
      "Most networking troubleshooting paths involve route tables, SGs, NACLs, and endpoints.",
  },
  {
    name: "Amazon CloudFront",
    usage: "Global edge caching and origin shielding for low-latency delivery.",
    examHint:
      "CloudFront + origin access controls is a common secure content delivery pattern.",
  },
  {
    name: "AWS Budgets",
    usage: "Budget thresholds and alerting/actions for proactive spend control.",
    examHint:
      "Budgets handles proactive cost guardrails, unlike retrospective reporting tools.",
  },
  {
    name: "AWS Cost Explorer",
    usage: "Historical cost and usage analysis for optimization decisions.",
    examHint:
      "Use Cost Explorer when the question asks for trend analysis and spend breakdowns.",
  },
  {
    name: "AWS Compute Optimizer",
    usage: "Rightsizing recommendations for supported AWS resources.",
    examHint:
      "Compute Optimizer is the direct answer for utilization-based rightsizing recommendations.",
  },
];

export const prepPlaybooks = [
  {
    title: "SOA-C02 Session Strategy",
    steps: [
      "First pass: answer direct operational control questions quickly and mark long incident narratives.",
      "Use elimination aggressively for options that require unnecessary custom operations.",
      "Validate whether the selected answer improves detection, response speed, and operational consistency.",
      "Reserve final review time for multi-select questions involving layered controls.",
    ],
  },
  {
    title: "Ops Troubleshooting Checklist",
    steps: [
      "Confirm symptom signal first: alarm metric, logs, traces, and recent deployment/config changes.",
      "Isolate blast radius by domain: app tier, data tier, network path, identity, or quota.",
      "Choose managed remediation mechanisms (runbooks, automation, rollback) before manual actions.",
      "Capture post-incident guardrails to prevent recurrence.",
    ],
  },
  {
    title: "Reliability + Security Review Loop",
    steps: [
      "Map workload continuity requirements to explicit backup, failover, and restore mechanisms.",
      "Enforce least privilege, encryption, and detective controls in every architecture decision.",
      "Review cost/performance telemetry to rightsize resources without violating resilience goals.",
      "Run periodic game days and restore tests to verify assumptions.",
    ],
  },
];

export const topicSeeds = [
  {
    topic: "alarm-driven remediation",
    summary:
      "High-scoring SysOps patterns combine CloudWatch alarms with EventBridge and Systems Manager automation to reduce mean time to recovery.",
    linkedServices: ["Amazon CloudWatch", "AWS Systems Manager", "Amazon EventBridge", "AWS Lambda"],
  },
  {
    topic: "resilience by default",
    summary:
      "Operational resilience comes from multi-AZ design, health-aware scaling, tested failover, and repeatable restore procedures.",
    linkedServices: ["Amazon EC2 Auto Scaling", "Elastic Load Balancing", "Amazon RDS", "AWS Backup"],
  },
  {
    topic: "governed multi-account operations",
    summary:
      "Organizations guardrails with centralized logging and config checks create consistent security posture across accounts.",
    linkedServices: ["AWS Organizations", "AWS CloudTrail", "AWS Config", "AWS Identity and Access Management (IAM)"],
  },
  {
    topic: "network path troubleshooting",
    summary:
      "SysOps troubleshooting depends on systematically validating DNS, routing, security controls, and endpoint connectivity.",
    linkedServices: ["Amazon VPC", "Amazon Route 53", "Elastic Load Balancing", "Amazon CloudFront"],
  },
  {
    topic: "telemetry-based optimization",
    summary:
      "Cost and performance optimization should be evidence-driven with utilization, latency, and throughput metrics before changing capacity.",
    linkedServices: ["AWS Compute Optimizer", "AWS Cost Explorer", "AWS Budgets", "Amazon CloudWatch"],
  },
];

const monitoringQuestions = [
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A web application on EC2 must automatically add instances when average CPU exceeds 70% for 10 minutes. Which setup is most appropriate?",
    choices: [
      "Create a CloudWatch alarm on ASG CPU and attach a scale-out policy",
      "Use CloudTrail to trigger an Auto Scaling action",
      "Configure AWS Config to evaluate CPU utilization",
      "Use Route 53 health checks to launch EC2 instances",
    ],
    correct: [0],
    rationale:
      "CloudWatch alarms integrated with Auto Scaling policies are the standard way to scale based on utilization metrics.",
    tags: ["cloudwatch", "autoscaling", "remediation"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Users report intermittent HTTP 502 responses from an Application Load Balancer. Which actions best help isolate the root cause? (Choose TWO.)",
    choices: [
      "Review ALB target response metrics and HTTPCode_Target_5XX_Count",
      "Query application logs in CloudWatch Logs Insights for failing requests",
      "Disable ALB health checks to reduce noise",
      "Delete and recreate the VPC route tables",
    ],
    correct: [0, 1],
    rationale:
      "ALB target metrics and correlated application logs provide the fastest signal to diagnose intermittent backend errors.",
    tags: ["alb", "logs insights", "troubleshooting"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Security operations needs an alert whenever someone attempts a failed AWS Management Console sign-in. What should a SysOps administrator configure?",
    choices: [
      "CloudWatch Logs metric filter on CloudTrail sign-in events with an alarm",
      "AWS Budgets with a monthly threshold",
      "Route 53 query logging with geolocation routing",
      "S3 lifecycle transition to Glacier",
    ],
    correct: [0],
    rationale:
      "Failed sign-in events are captured in CloudTrail and can be turned into CloudWatch alarms via metric filters.",
    tags: ["cloudtrail", "metric filter", "security monitoring"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team receives too many duplicate alerts during incidents. Which CloudWatch feature helps reduce alert fatigue by combining alarm states?",
    choices: ["Composite alarms", "Anomaly detection bands", "Metric streams", "Custom namespaces"],
    correct: [0],
    rationale:
      "Composite alarms can suppress noisy downstream alarms by evaluating logical combinations of alarm states.",
    tags: ["cloudwatch", "alerting", "operations"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "When a disk utilization alarm fires on EC2, operations wants an automatic runbook to clean temp files and restart a service. What is the best solution?",
    choices: [
      "Trigger Systems Manager Automation from a CloudWatch alarm action",
      "Use Trusted Advisor refresh checks",
      "Run AWS Backup on-demand",
      "Configure Route 53 failover records",
    ],
    correct: [0],
    rationale:
      "CloudWatch alarm actions can trigger Systems Manager Automation runbooks for consistent, auditable remediation.",
    tags: ["ssm automation", "cloudwatch alarms", "runbooks"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "An EC2 Linux instance needs memory utilization metrics, but only CPU is visible in CloudWatch. What should be done?",
    choices: [
      "Install and configure the CloudWatch agent on the instance",
      "Enable CloudTrail data events",
      "Attach an IAM customer managed policy to Route 53",
      "Create an AWS Config managed rule",
    ],
    correct: [0],
    rationale:
      "Memory and disk metrics require the CloudWatch agent because they are guest OS metrics, not default EC2 metrics.",
    tags: ["cloudwatch agent", "ec2 monitoring"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An administrator must identify which IAM principal deleted a security group rule yesterday. Which service provides this evidence?",
    choices: ["AWS CloudTrail event history", "Amazon Inspector findings", "AWS Budgets report", "Amazon Route 53 resolver logs"],
    correct: [0],
    rationale:
      "CloudTrail records API calls, including identity details and timestamps for security group modifications.",
    tags: ["cloudtrail", "audit", "investigation"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A compliance policy requires EC2 instances to be automatically remediated if public IP addresses are assigned. Which design meets this requirement? (Choose TWO.)",
    choices: [
      "Use an AWS Config rule to detect noncompliant instances",
      "Attach an automatic remediation action using Systems Manager Automation",
      "Create a Cost Explorer report and email it weekly",
      "Use S3 Transfer Acceleration on all buckets",
    ],
    correct: [0, 1],
    rationale:
      "Config detects drift and can invoke Systems Manager remediation workflows to enforce policy continuously.",
    tags: ["aws config", "ssm remediation", "compliance"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Operations needs near-real-time alerts in a chat channel whenever a production alarm enters ALARM state. Which pattern is most direct?",
    choices: [
      "Send CloudWatch alarm notifications to Amazon SNS integrated with chat tooling",
      "Use AWS Backup vault notifications",
      "Use CloudFront invalidations",
      "Use S3 inventory reports",
    ],
    correct: [0],
    rationale:
      "SNS is the standard notification fanout target for CloudWatch alarms and integrations.",
    tags: ["sns", "cloudwatch", "incident response"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants a single pane of glass showing latency, error rate, and request count from multiple services. Which AWS feature should they use?",
    choices: ["CloudWatch dashboards", "AWS Artifact", "AWS Shield Advanced", "Amazon Athena federated query"],
    correct: [0],
    rationale:
      "CloudWatch dashboards aggregate metrics across services into one operational view.",
    tags: ["dashboard", "monitoring"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company wants centralized multi-account observability with minimal custom code. Which options should be implemented? (Choose TWO.)",
    choices: [
      "Use CloudWatch cross-account observability for shared telemetry views",
      "Aggregate logs from member accounts into a centralized log group strategy",
      "Disable CloudTrail in child accounts to reduce duplicate data",
      "Store alarms only on local developer laptops",
    ],
    correct: [0, 1],
    rationale:
      "Cross-account observability plus centralized logging improves visibility while preserving managed operations.",
    tags: ["multi-account", "cloudwatch", "operations center"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An alarm should trigger only when CPU and memory are both high for the same host. Which approach best fits?",
    choices: [
      "Use a CloudWatch composite alarm combining underlying metric alarms",
      "Use a single billing alarm",
      "Use an Amazon S3 event notification",
      "Use a Route 53 health check only",
    ],
    correct: [0],
    rationale:
      "Composite alarms evaluate logical relationships across multiple alarms and reduce false positives.",
    tags: ["composite alarms", "signal quality"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Operations needs to detect a sudden increase in Lambda throttles without setting static thresholds per function. What should be used?",
    choices: [
      "CloudWatch anomaly detection alarms",
      "AWS Budgets action",
      "AWS Backup restore testing",
      "Route 53 geolocation routing",
    ],
    correct: [0],
    rationale:
      "Anomaly detection adapts thresholds based on learned normal behavior and helps detect outliers.",
    tags: ["anomaly detection", "lambda", "monitoring"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An incident runbook requires collecting diagnostic commands from 300 instances in minutes, without SSH access. Which service is best?",
    choices: [
      "AWS Systems Manager Run Command",
      "Amazon Route 53 health checks",
      "AWS CloudFormation StackSets",
      "AWS Cost Explorer rightsizing",
    ],
    correct: [0],
    rationale:
      "Run Command executes commands at scale through Systems Manager without direct host login.",
    tags: ["run command", "incident remediation", "fleet operations"],
  },
];

const reliabilityQuestions = [
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A critical stateless API tier must survive the loss of one Availability Zone. Which design is best?",
    choices: [
      "Deploy an Auto Scaling group across at least two AZs behind an ALB",
      "Use one large EC2 instance in a single AZ",
      "Use Route 53 simple routing to one public IP",
      "Schedule nightly AMI backups only",
    ],
    correct: [0],
    rationale:
      "Multi-AZ Auto Scaling behind a load balancer removes single-AZ dependency for stateless services.",
    tags: ["high availability", "asg", "alb"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An RDS MySQL production database needs automatic failover with minimal administrative overhead. What should be configured?",
    choices: [
      "RDS Multi-AZ deployment",
      "Single-AZ RDS with manual snapshots",
      "RDS read replica only",
      "S3 Cross-Region Replication",
    ],
    correct: [0],
    rationale:
      "RDS Multi-AZ provides synchronous standby and managed failover for high availability.",
    tags: ["rds", "multi-az", "resilience"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A workload has an RPO of 15 minutes and an RTO of 1 hour. Which choices help meet these requirements for relational data? (Choose TWO.)",
    choices: [
      "Enable automated backups with point-in-time recovery",
      "Use cross-Region read replicas where supported",
      "Take one manual snapshot every month",
      "Store logs only on local instance disks",
    ],
    correct: [0, 1],
    rationale:
      "PITR supports granular recovery points, and cross-Region replicas improve recovery options for regional disruptions.",
    tags: ["rpo", "rto", "backup", "dr"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs centralized backup policies across EC2, EBS, RDS, and EFS with retention controls. Which service is most appropriate?",
    choices: ["AWS Backup", "CloudWatch Synthetics", "AWS X-Ray", "Amazon Inspector"],
    correct: [0],
    rationale:
      "AWS Backup provides centralized, policy-based backup management across supported services.",
    tags: ["aws backup", "governance", "restore"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An Auto Scaling group takes too long to replace failed instances during morning spikes. Which feature can reduce launch latency?",
    choices: ["Auto Scaling warm pools", "S3 lifecycle transitions", "AWS Budgets actions", "NACL rule ordering"],
    correct: [0],
    rationale:
      "Warm pools keep pre-initialized instances ready, reducing scale-out and replacement delay.",
    tags: ["autoscaling", "warm pools", "elasticity"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A backup restoration process has never been tested. Which operational practice should be added first?",
    choices: [
      "Schedule recurring restore tests and validate application integrity",
      "Increase snapshot retention to 10 years",
      "Disable CloudWatch alarms during restore",
      "Use one backup vault for every account without policies",
    ],
    correct: [0],
    rationale:
      "Restore testing is essential to confirm backups are usable and meet recovery objectives.",
    tags: ["backup testing", "business continuity"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An e-commerce platform must continue serving traffic if one Region fails. Which architecture choices are valid? (Choose TWO.)",
    choices: [
      "Use Route 53 failover routing with health checks across Regions",
      "Replicate static assets to a secondary Region",
      "Run all stateful services in one AZ only",
      "Disable DNS health checks to avoid failover flapping",
    ],
    correct: [0, 1],
    rationale:
      "Regional failover requires health-aware DNS and replicated data/content in another Region.",
    tags: ["multi-region", "route53 failover", "resilience"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A queue-processing fleet occasionally loses in-flight messages when workers fail. Which setting should be reviewed first?",
    choices: [
      "SQS visibility timeout relative to processing duration",
      "S3 bucket versioning",
      "Route 53 TTL",
      "IAM password policy",
    ],
    correct: [0],
    rationale:
      "Visibility timeout must exceed processing time so failed workers do not cause premature message reprocessing.",
    tags: ["sqs", "reliability", "message processing"],
  },
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which Elastic Load Balancing behavior improves application resilience by avoiding unhealthy targets?",
    choices: [
      "Target health checks with automatic deregistration",
      "Static host file entries on clients",
      "Manual DNS updates every 30 minutes",
      "Disabling connection draining",
    ],
    correct: [0],
    rationale:
      "ELB health checks route traffic only to healthy targets, improving availability.",
    tags: ["elb", "health checks", "availability"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A company wants immutable, centrally managed AMIs with patch baselines and automated distribution to multiple Regions. Which service best fits?",
    choices: [
      "EC2 Image Builder",
      "Route 53 Resolver",
      "AWS Cost Explorer",
      "Amazon CloudFront",
    ],
    correct: [0],
    rationale:
      "EC2 Image Builder automates AMI pipeline creation, patching, testing, and distribution.",
    tags: ["image builder", "operational readiness"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application writes user uploads to S3 and requires accidental deletion recovery. Which control is most direct?",
    choices: ["Enable S3 versioning", "Enable S3 Transfer Acceleration", "Use S3 website hosting", "Disable lifecycle rules"],
    correct: [0],
    rationale:
      "S3 versioning preserves object versions and supports recovery from deletes and overwrites.",
    tags: ["s3", "versioning", "data protection"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A DynamoDB-backed service must remain available if one Region is unavailable. What feature should be used?",
    choices: ["DynamoDB global tables", "DynamoDB TTL", "DynamoDB DAX only", "DynamoDB streams to Lambda"],
    correct: [0],
    rationale:
      "Global tables replicate data across Regions to support multi-Region availability.",
    tags: ["dynamodb", "global tables", "dr"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A finance team needs backup governance with immutable retention and audit trail controls. Which features should be combined? (Choose TWO.)",
    choices: [
      "AWS Backup vault lock",
      "Backup plans with lifecycle and retention policies",
      "Manual scripts run from admin laptops only",
      "Disable all backup job notifications",
    ],
    correct: [0, 1],
    rationale:
      "Vault lock enforces retention immutability while backup plans provide policy-based scheduling and retention.",
    tags: ["aws backup", "immutability", "compliance"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A launch event doubles traffic each day for one week. Which Auto Scaling policy handles this changing pattern best with minimal tuning?",
    choices: [
      "Target tracking scaling policy",
      "Step scaling with one static threshold",
      "Scheduled scaling with fixed capacity forever",
      "Manual resize by operators every hour",
    ],
    correct: [0],
    rationale:
      "Target tracking continuously adjusts capacity toward a defined metric target with less manual tuning.",
    tags: ["autoscaling", "target tracking"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to quickly recover an EBS-backed EC2 instance in another Availability Zone. What is the usual first step?",
    choices: [
      "Create a new volume from the latest EBS snapshot in the target AZ",
      "Move the existing EBS volume directly to another AZ",
      "Enable S3 static website hosting",
      "Use CloudFront cache invalidation",
    ],
    correct: [0],
    rationale:
      "EBS volumes are AZ-scoped, so recovery in another AZ typically starts from a snapshot restore.",
    tags: ["ebs", "snapshot", "restore"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company uses pilot-light DR and wants lower recovery risk. Which actions improve readiness? (Choose TWO.)",
    choices: [
      "Automate environment promotion with tested infrastructure templates",
      "Run periodic failover drills and document recovery timings",
      "Rely on undocumented manual steps only",
      "Skip replication validation to save cost",
    ],
    correct: [0, 1],
    rationale:
      "DR success requires automated promotion and regular drill validation against RTO/RPO goals.",
    tags: ["dr", "runbooks", "operational excellence"],
  },
];

const deploymentQuestions = [
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs repeatable, version-controlled provisioning for VPCs, EC2, and IAM roles across environments. Which service should they use?",
    choices: ["AWS CloudFormation", "AWS Budgets", "Amazon GuardDuty", "AWS Artifact"],
    correct: [0],
    rationale:
      "CloudFormation provides infrastructure as code with template versioning and repeatable deployments.",
    tags: ["cloudformation", "iac"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Before applying a production stack update, operations wants to preview proposed infrastructure modifications. Which CloudFormation feature should be used?",
    choices: ["Change sets", "Stack policies", "Drift detection", "Nested stacks"],
    correct: [0],
    rationale:
      "Change sets show the impact of template updates before execution.",
    tags: ["change sets", "deployment safety"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An enterprise must deploy baseline IAM and logging stacks to 60 accounts in 4 Regions. Which design is most suitable? (Choose TWO.)",
    choices: [
      "Use CloudFormation StackSets with Organizations integration",
      "Define delegated admin and target organizational units",
      "Manually create stacks in each account",
      "Use S3 lifecycle rules as deployment tooling",
    ],
    correct: [0, 1],
    rationale:
      "StackSets with Organizations enables centralized, scalable multi-account multi-Region rollouts.",
    tags: ["stacksets", "organizations", "automation"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A security baseline requires missing patches to be applied weekly during a maintenance window with reporting. Which service is best?",
    choices: [
      "AWS Systems Manager Patch Manager",
      "Amazon Route 53 Resolver",
      "AWS Config conformance packs only",
      "CloudWatch Synthetics",
    ],
    correct: [0],
    rationale:
      "Patch Manager supports patch baselines, maintenance windows, and compliance reporting.",
    tags: ["patch manager", "maintenance windows"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An operations team wants EC2 instances to maintain a standard CloudWatch agent config and automatically self-correct drift. Which Systems Manager capability is the best fit?",
    choices: ["State Manager associations", "Session Manager port forwarding", "Patch baseline groups", "Distributor packages"],
    correct: [0],
    rationale:
      "State Manager enforces desired configuration on managed instances over time.",
    tags: ["state manager", "configuration drift"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A recurring operational task starts and stops nonproduction instances each day. The team wants minimal custom code and auditability. What should be implemented?",
    choices: [
      "EventBridge schedule invoking Systems Manager Automation runbooks",
      "Manual CLI commands by operators",
      "Route 53 weighted records",
      "S3 replication rules",
    ],
    correct: [0],
    rationale:
      "EventBridge schedules plus Systems Manager Automation provides managed, auditable operational scheduling.",
    tags: ["eventbridge", "automation", "cost control"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A production stack has resources modified manually outside IaC. Which CloudFormation action helps identify this mismatch?",
    choices: ["Run stack drift detection", "Enable EC2 detailed monitoring", "Use AWS Budgets", "Enable S3 requester pays"],
    correct: [0],
    rationale:
      "Drift detection compares actual resource configuration with the declared stack template.",
    tags: ["drift detection", "cloudformation"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team must execute the same troubleshooting script on hundreds of instances immediately. Which Systems Manager feature should they use?",
    choices: ["Run Command", "Patch Manager", "Automation document versioning", "Incident timeline"],
    correct: [0],
    rationale:
      "Run Command is built for ad hoc command execution at fleet scale.",
    tags: ["run command", "fleet management"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A release process must reduce risk for infrastructure changes. Which controls are most effective? (Choose TWO.)",
    choices: [
      "Use CloudFormation change sets before execution",
      "Apply stack policies to protect critical resources",
      "Disable rollback to save time",
      "Allow unrestricted manual edits in production",
    ],
    correct: [0, 1],
    rationale:
      "Change sets and stack policies help validate and constrain risky updates to critical infrastructure.",
    tags: ["deployment controls", "cloudformation"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Operations wants to store environment configuration values securely and reference them in automation scripts. Which service is most suitable?",
    choices: [
      "AWS Systems Manager Parameter Store",
      "Amazon CloudFront key groups",
      "AWS Cost Explorer",
      "Amazon S3 inventory",
    ],
    correct: [0],
    rationale:
      "Parameter Store centralizes configuration and supports secure parameter usage in automation workflows.",
    tags: ["parameter store", "automation"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs automated, repeatable AMI patching pipelines with test stages before image promotion. Which service should they use?",
    choices: ["EC2 Image Builder", "AWS Artifact", "Amazon Athena", "AWS CloudTrail Lake"],
    correct: [0],
    rationale:
      "EC2 Image Builder automates build, test, and distribution workflows for hardened AMIs.",
    tags: ["image builder", "golden ami"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company wants zero-touch remediation for a repeated operational issue. Which design elements should be included? (Choose TWO.)",
    choices: [
      "CloudWatch alarm as trigger condition",
      "Parameterized Systems Manager Automation runbook",
      "Manual ticket assignment as the only response",
      "Disabling incident notifications to avoid noise",
    ],
    correct: [0, 1],
    rationale:
      "Automated remediation requires a reliable trigger and a deterministic runbook action path.",
    tags: ["auto-remediation", "cloudwatch", "ssm"],
  },
];

const securityQuestions = [
  {
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "An EC2 application currently uses hardcoded IAM user access keys. What is the best security improvement?",
    choices: [
      "Attach an IAM role to the instance and use temporary credentials",
      "Rotate the same access key every 5 years",
      "Store keys in user data scripts",
      "Embed credentials in source control with encryption",
    ],
    correct: [0],
    rationale:
      "IAM roles with temporary credentials remove long-term static keys from instances.",
    tags: ["iam role", "least privilege", "credential hygiene"],
  },
  {
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which action is a root-account security best practice?",
    choices: [
      "Enable MFA and avoid daily use of the root user",
      "Create root access keys for automation",
      "Share root password among admins",
      "Disable CloudTrail to hide root activity",
    ],
    correct: [0],
    rationale:
      "Root should be tightly protected with MFA and used only for tasks requiring root privileges.",
    tags: ["root", "mfa", "security best practice"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A storage team must prevent accidental public access to all current and future S3 buckets in an account. What should be enabled?",
    choices: [
      "S3 Block Public Access at the account level",
      "S3 event notifications",
      "S3 Transfer Acceleration",
      "S3 inventory reports only",
    ],
    correct: [0],
    rationale:
      "Account-level Block Public Access enforces guardrails across buckets to reduce exposure risk.",
    tags: ["s3", "public access", "guardrails"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company needs centralized API audit logging across all AWS accounts with tamper-resistant storage. Which controls should be used? (Choose TWO.)",
    choices: [
      "Create an organization trail in AWS CloudTrail",
      "Deliver logs to a dedicated security account S3 bucket with strict access controls",
      "Store logs only on EC2 instance disks",
      "Disable logging in development accounts",
    ],
    correct: [0, 1],
    rationale:
      "Organization trails centralize capture, and a locked-down dedicated bucket strengthens audit integrity.",
    tags: ["cloudtrail", "organizations", "audit"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A database secret must rotate automatically every 30 days without application code changes. Which service is best?",
    choices: ["AWS Secrets Manager", "AWS Config", "AWS Shield Standard", "Amazon Inspector"],
    correct: [0],
    rationale:
      "Secrets Manager provides built-in rotation workflows and integrates with common databases.",
    tags: ["secrets manager", "rotation", "data security"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Security wants to detect anomalous API behavior and potential compromised credentials. Which managed service should be enabled?",
    choices: ["Amazon GuardDuty", "AWS Budgets", "AWS Compute Optimizer", "Amazon Route 53"],
    correct: [0],
    rationale:
      "GuardDuty analyzes log signals and threat intelligence for suspicious activity detection.",
    tags: ["guardduty", "threat detection"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A platform team needs a consolidated view of security findings from multiple accounts and Regions. Which service is most appropriate?",
    choices: ["AWS Security Hub", "AWS DataSync", "Amazon EventBridge Pipes", "Amazon AppFlow"],
    correct: [0],
    rationale:
      "Security Hub aggregates and normalizes findings from multiple integrated security services.",
    tags: ["security hub", "multi-account"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company needs to enforce least privilege for contractor-created IAM roles while allowing flexibility within limits. Which options should be combined? (Choose TWO.)",
    choices: [
      "Permissions boundaries on delegated IAM role creation",
      "Service control policies at the organization level",
      "Disable IAM policy simulation tools",
      "Grant full AdministratorAccess to all contractors",
    ],
    correct: [0, 1],
    rationale:
      "Permissions boundaries constrain delegated role privileges, and SCPs add account-level guardrails.",
    tags: ["iam", "permissions boundaries", "scp"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application in private subnets must access Amazon S3 without traversing the public internet. Which approach should be used?",
    choices: [
      "Create an S3 gateway VPC endpoint",
      "Route traffic through an internet gateway",
      "Use only public S3 website endpoints",
      "Attach an Elastic IP to each instance",
    ],
    correct: [0],
    rationale:
      "S3 gateway endpoints provide private connectivity from VPCs to S3.",
    tags: ["vpc endpoint", "private connectivity", "security"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A compliance policy requires EBS volumes to be encrypted with customer-managed keys. Which service manages these keys?",
    choices: ["AWS KMS", "AWS CloudTrail", "AWS Config", "Amazon Inspector"],
    correct: [0],
    rationale:
      "KMS manages encryption keys and key policies used by EBS encryption workflows.",
    tags: ["kms", "encryption", "compliance"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A security team wants to continuously evaluate resource configurations against CIS-style baselines and receive remediation guidance. Which service is most direct?",
    choices: ["AWS Config conformance packs", "AWS Budgets", "Amazon CloudFront", "Amazon SQS"],
    correct: [0],
    rationale:
      "Conformance packs bundle Config rules and compliance mappings for continuous evaluation.",
    tags: ["config", "conformance packs", "governance"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Vulnerability findings are required for EC2 and container images with prioritized remediation data. Which service should be used?",
    choices: ["Amazon Inspector", "AWS Backup", "Amazon Kinesis Data Streams", "AWS Organizations"],
    correct: [0],
    rationale:
      "Inspector provides automated vulnerability scanning and contextual findings for supported workloads.",
    tags: ["inspector", "vulnerability management"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A third party must access a specific S3 bucket in your account without long-lived credentials. Which configuration is best? (Choose TWO.)",
    choices: [
      "Use an IAM role with external ID for cross-account assume-role",
      "Grant least-privilege bucket permissions to that role",
      "Share root account credentials",
      "Create permanent IAM users in your account for the vendor",
    ],
    correct: [0, 1],
    rationale:
      "Cross-account role assumption with external ID and scoped permissions is the secure pattern for vendor access.",
    tags: ["cross-account", "sts", "external id"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company needs evidence of data-access API calls for an audit of a critical S3 bucket. Which CloudTrail capability should be enabled?",
    choices: ["CloudTrail data events for S3", "CloudTrail insights only", "CloudWatch contributor insights", "AWS Budgets reports"],
    correct: [0],
    rationale:
      "S3 object-level API operations are captured by CloudTrail data events.",
    tags: ["cloudtrail", "data events", "audit"],
  },
];

const networkingQuestions = [
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A highly available private-subnet architecture uses NAT gateways for outbound internet access. Which design avoids a single point of failure?",
    choices: [
      "Deploy one NAT gateway per Availability Zone and route each private subnet locally",
      "Use one NAT gateway in a single AZ for all subnets",
      "Attach internet gateways directly to private subnets",
      "Replace NAT with Route 53 hosted zones",
    ],
    correct: [0],
    rationale:
      "NAT gateways are AZ-specific; one per AZ prevents cross-AZ dependency and improves resiliency.",
    tags: ["nat gateway", "vpc", "high availability"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An internal service in private subnets must call Amazon SQS without internet egress. What should be used?",
    choices: [
      "Create an interface VPC endpoint (AWS PrivateLink) for SQS",
      "Add a larger NAT gateway",
      "Use Route 53 weighted routing",
      "Use CloudFront origin groups",
    ],
    correct: [0],
    rationale:
      "SQS uses interface endpoints for private connectivity over AWS PrivateLink.",
    tags: ["privatelink", "sqs", "private networking"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A public web app needs DNS failover from primary Region to secondary Region. Which Route 53 features are required? (Choose TWO.)",
    choices: [
      "Failover routing policy",
      "Health checks associated with primary endpoints",
      "Simple routing only",
      "Private hosted zone with no health checks",
    ],
    correct: [0, 1],
    rationale:
      "Failover routing depends on endpoint health checks to switch traffic when primary fails.",
    tags: ["route53", "dns failover", "health checks"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company serves private S3 content through CloudFront and wants to block direct S3 public access. Which control should be used?",
    choices: [
      "CloudFront Origin Access Control with bucket policy restriction",
      "Route 53 geolocation policy",
      "S3 static website endpoint",
      "NAT gateway source/destination checks",
    ],
    correct: [0],
    rationale:
      "Origin Access Control lets CloudFront access private S3 content while blocking direct public bucket access.",
    tags: ["cloudfront", "oac", "s3 security"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Instances in a private subnet cannot reach the internet. Security groups allow all egress. Which misconfiguration is most likely?",
    choices: [
      "No default route to a NAT gateway in the private subnet route table",
      "CloudWatch alarm threshold too low",
      "Missing IAM permissions boundary",
      "Route 53 TTL is too high",
    ],
    correct: [0],
    rationale:
      "Private subnet internet egress requires a route to a NAT gateway; SG egress alone is insufficient.",
    tags: ["route table", "nat", "troubleshooting"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A network ACL currently blocks return traffic for an ephemeral port range. What is the expected impact?",
    choices: [
      "Intermittent connection failures because NACLs are stateless",
      "No impact because NACLs are stateful",
      "Only IAM authentication will fail",
      "CloudTrail stops logging",
    ],
    correct: [0],
    rationale:
      "NACLs are stateless and require explicit inbound and outbound rules for request and response traffic.",
    tags: ["nacl", "network troubleshooting"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company needs primary hybrid connectivity via Direct Connect and encrypted backup connectivity if DX fails. Which options satisfy this? (Choose TWO.)",
    choices: [
      "Configure Site-to-Site VPN as a backup path",
      "Use BGP route preference controls for primary/backup behavior",
      "Use S3 versioning only",
      "Replace all routes with internet gateway paths",
    ],
    correct: [0, 1],
    rationale:
      "DX + VPN with BGP routing policy is the common resilient hybrid connectivity pattern.",
    tags: ["direct connect", "vpn", "hybrid networking"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A workload requires static IP addresses and ultra-low-latency TCP handling for millions of requests. Which load balancer is best?",
    choices: [
      "Network Load Balancer",
      "Application Load Balancer",
      "Gateway Load Balancer",
      "Classic Load Balancer",
    ],
    correct: [0],
    rationale:
      "NLB is optimized for high-performance Layer 4 traffic and supports static IP patterns.",
    tags: ["nlb", "load balancing", "tcp"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to determine whether denied traffic between two subnets is caused by security groups or NACLs. What is most useful first?",
    choices: ["Enable and review VPC Flow Logs", "Run Cost Explorer report", "Create AWS Budgets alert", "Disable Route 53 health checks"],
    correct: [0],
    rationale:
      "VPC Flow Logs help identify accepted/denied traffic and isolate network control issues.",
    tags: ["vpc flow logs", "troubleshooting"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "single",
    prompt:
      "On-premises clients cannot resolve names in a private Route 53 hosted zone inside AWS. What is required?",
    choices: [
      "Route 53 Resolver inbound endpoint with conditional forwarding",
      "CloudFront origin failover",
      "S3 Transfer Acceleration",
      "AWS Compute Optimizer recommendations",
    ],
    correct: [0],
    rationale:
      "Resolver inbound endpoints allow on-prem DNS resolvers to query private hosted zone records.",
    tags: ["route53 resolver", "hybrid dns"],
  },
  {
    domain: "D5",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An internal service is timing out when calling another service in the same VPC. Which checks are most relevant first? (Choose TWO.)",
    choices: [
      "Verify security group rules on source and destination",
      "Verify route table paths between the involved subnets",
      "Increase AWS Budgets threshold",
      "Enable S3 Intelligent-Tiering",
    ],
    correct: [0, 1],
    rationale:
      "Intra-VPC connectivity issues are commonly caused by security group and route table misconfiguration.",
    tags: ["security groups", "route tables", "connectivity"],
  },
  {
    domain: "D5",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A global application has endpoints in two Regions and should route users to the lowest-latency healthy endpoint. Which DNS option is best?",
    choices: ["Route 53 latency-based routing policy", "Amazon S3 Glacier", "AWS Artifact", "AWS Config"],
    correct: [0],
    rationale:
      "Route 53 latency routing directs clients to the Region that provides the best measured latency.",
    tags: ["route53", "latency routing", "dns"],
  },
];

const optimizationQuestions = [
  {
    domain: "D6",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A fleet of EC2 instances is consistently below 10% CPU utilization. Which AWS service offers rightsizing recommendations based on usage telemetry?",
    choices: ["AWS Compute Optimizer", "AWS Artifact", "Amazon GuardDuty", "AWS Backup"],
    correct: [0],
    rationale:
      "Compute Optimizer analyzes utilization metrics and suggests more suitable instance types.",
    tags: ["rightsizing", "compute optimizer", "cost optimization"],
  },
  {
    domain: "D6",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A steady-state production workload runs 24/7 for years. Which purchasing option typically offers the best compute discount with flexibility?",
    choices: [
      "Savings Plans",
      "On-Demand instances only",
      "Spot Instances for all critical workloads",
      "Dedicated Hosts with no commitments",
    ],
    correct: [0],
    rationale:
      "Savings Plans usually provide significant discounts for predictable usage while keeping deployment flexibility.",
    tags: ["savings plans", "cost"],
  },
  {
    domain: "D6",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A database workload on gp3 EBS volumes shows sustained IOPS throttling. Which action is most direct to improve performance without changing instance type?",
    choices: [
      "Increase provisioned IOPS/throughput settings on the gp3 volumes",
      "Enable S3 static website hosting",
      "Lower CloudWatch log retention",
      "Move Route 53 records to latency routing",
    ],
    correct: [0],
    rationale:
      "gp3 allows independent tuning of IOPS and throughput, directly addressing storage bottlenecks.",
    tags: ["ebs", "performance tuning"],
  },
  {
    domain: "D6",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A high-traffic global web app has rising origin costs and high latency for static assets. Which actions improve both cost and performance? (Choose TWO.)",
    choices: [
      "Serve cacheable content through CloudFront with appropriate TTLs",
      "Compress and optimize static assets before delivery",
      "Disable edge caching to force origin fetches",
      "Route all static requests through a single EC2 instance",
    ],
    correct: [0, 1],
    rationale:
      "Edge caching and optimized payload size reduce origin load and latency simultaneously.",
    tags: ["cloudfront", "performance", "cost"],
  },
];

const questionBankSource = [
  ...monitoringQuestions,
  ...reliabilityQuestions,
  ...deploymentQuestions,
  ...securityQuestions,
  ...networkingQuestions,
  ...optimizationQuestions,
];

export const questionBank = questionBankSource.map((question, index) => ({
  id: `SOA${String(index + 1).padStart(3, "0")}`,
  ...question,
}));

export const inferRules = [
  {
    domain: "D1",
    keywords: [
      "cloudwatch",
      "alarm",
      "logs",
      "metric",
      "remediation",
      "incident",
      "runbook",
      "cloudtrail",
      "eventbridge",
      "ssm",
      "automation",
      "ops",
    ],
  },
  {
    domain: "D2",
    keywords: [
      "availability",
      "resilience",
      "backup",
      "restore",
      "rto",
      "rpo",
      "multi-az",
      "failover",
      "autoscaling",
      "dr",
      "snapshot",
      "continuity",
    ],
  },
  {
    domain: "D3",
    keywords: [
      "provision",
      "cloudformation",
      "stacksets",
      "patch",
      "state manager",
      "run command",
      "template",
      "change set",
      "drift",
      "schedule",
      "parameter store",
      "image builder",
    ],
  },
  {
    domain: "D4",
    keywords: [
      "iam",
      "mfa",
      "scp",
      "guardduty",
      "security hub",
      "kms",
      "secrets",
      "encryption",
      "compliance",
      "config",
      "inspector",
      "audit",
    ],
  },
  {
    domain: "D5",
    keywords: [
      "vpc",
      "route 53",
      "dns",
      "cloudfront",
      "alb",
      "nlb",
      "nat",
      "endpoint",
      "private link",
      "flow logs",
      "hybrid",
      "network",
    ],
  },
  {
    domain: "D6",
    keywords: [
      "cost",
      "rightsizing",
      "savings",
      "compute optimizer",
      "performance",
      "throughput",
      "latency",
      "budget",
      "ebs",
      "cache",
      "optimization",
      "utilization",
    ],
  },
];

export const defaultInferDomain = "D1";

export const coachTopicPlaceholder =
  "Example: Build an alarm-to-remediation runbook for a multi-AZ workload, then explain reliability, security, and cost tradeoffs.";

export const soaC02Course = {
  examMeta,
  domainBlueprint,
  prepPlaybooks,
  questionBank,
  serviceAtlas,
  topicSeeds,
  inferRules,
  defaultInferDomain,
  coachTopicPlaceholder,
};
