export const examMeta = {
  certificate: "AWS Certified Solutions Architect - Associate",
  code: "SAA-C03",
  versionDate: "Exam Guide Version 1.1",
  durationMinutes: 130,
  questionCount: 65,
  passingScore: 720,
  costUsd: 150,
  language: "English",
  targetRole:
    "Solutions architects who design secure, resilient, high-performing, and cost-optimized AWS workloads based on the Well-Architected Framework.",
  quickFacts: [
    "SAA-C03 is scenario-heavy and prioritizes architecture tradeoff decisions over service memorization.",
    "Domain 1 (security) has the highest weighting, followed by resilience, performance, and cost optimization.",
    "Many questions have multiple technically valid options; the best answer is usually the most managed and operationally robust design.",
  ],
};

export const domainBlueprint = [
  {
    id: "D1",
    name: "Design Secure Architectures",
    weight: 30,
    mission:
      "Design identity boundaries, network protections, and data controls that satisfy least privilege, encryption, governance, and compliance requirements.",
    tasks: [
      {
        id: "1.1",
        title: "Design secure access to AWS resources",
        focus: [
          "Build IAM patterns across single-account and multi-account environments using roles, federation, and SCP guardrails.",
          "Apply least privilege, MFA, and root-user protections for human and machine identities.",
          "Choose identity and resource policy boundaries for cross-account and cross-service access.",
        ],
      },
      {
        id: "1.2",
        title: "Design secure workloads and applications",
        focus: [
          "Segment networks with VPC security controls and private/public subnet boundaries.",
          "Select security services for edge protection, threat detection, and secret management.",
          "Protect ingress, egress, and hybrid connections with secure design defaults.",
        ],
      },
      {
        id: "1.3",
        title: "Determine appropriate data security controls",
        focus: [
          "Implement encryption at rest and in transit with key and certificate governance.",
          "Design backup, replication, and lifecycle policies that meet retention/compliance obligations.",
          "Align data access controls and auditing with legal or regulatory requirements.",
        ],
      },
    ],
  },
  {
    id: "D2",
    name: "Design Resilient Architectures",
    weight: 26,
    mission:
      "Design scalable, loosely coupled, and fault-tolerant systems that meet recovery objectives and reduce single points of failure.",
    tasks: [
      {
        id: "2.1",
        title: "Design scalable and loosely coupled architectures",
        focus: [
          "Choose asynchronous and event-driven patterns for component decoupling.",
          "Map workloads to containers, serverless, and managed integration services.",
          "Select scaling strategies that preserve performance under variable demand.",
        ],
      },
      {
        id: "2.2",
        title: "Design highly available and/or fault-tolerant architectures",
        focus: [
          "Use multi-AZ or multi-Region deployment patterns with health-based failover.",
          "Choose DR approaches based on RTO/RPO and workload criticality.",
          "Implement durability and availability controls for stateful data components.",
        ],
      },
    ],
  },
  {
    id: "D3",
    name: "Design High-Performing Architectures",
    weight: 24,
    mission:
      "Select storage, compute, database, networking, and ingestion designs that meet throughput, latency, and scale targets.",
    tasks: [
      {
        id: "3.1",
        title: "Determine high-performing and/or scalable storage solutions",
        focus: [
          "Match object, file, and block storage types to workload access patterns.",
          "Tune storage configurations for throughput, latency, and growth.",
          "Leverage hybrid or tiered storage where needed for sustained performance.",
        ],
      },
      {
        id: "3.2",
        title: "Design high-performing and elastic compute solutions",
        focus: [
          "Select compute families and scaling policies based on real telemetry.",
          "Decouple components so scaling actions remain independent.",
          "Tune container and serverless runtime settings for workload behavior.",
        ],
      },
      {
        id: "3.3",
        title: "Determine high-performing database solutions",
        focus: [
          "Select relational, non-relational, and in-memory options by access pattern.",
          "Use replication and caching to improve read performance and reduce contention.",
          "Plan capacity and engine choices for predictable high-throughput behavior.",
        ],
      },
      {
        id: "3.4",
        title: "Determine high-performing and/or scalable network architectures",
        focus: [
          "Choose load balancers, edge services, and routing strategies for low-latency delivery.",
          "Place resources across subnets, AZs, and Regions for optimal network performance.",
          "Scale network connectivity patterns for global and hybrid workloads.",
        ],
      },
      {
        id: "3.5",
        title: "Determine high-performing data ingestion and transformation solutions",
        focus: [
          "Select ingestion services for streaming versus batch requirements.",
          "Design secure data lake ingestion and transformation pipelines.",
          "Use analytics and visualization services that align to query patterns and data shape.",
        ],
      },
    ],
  },
  {
    id: "D4",
    name: "Design Cost-Optimized Architectures",
    weight: 20,
    mission:
      "Optimize storage, compute, database, and network designs for cost while preserving business-required performance, availability, and security.",
    tasks: [
      {
        id: "4.1",
        title: "Design cost-optimized storage solutions",
        focus: [
          "Apply lifecycle policies and storage tiering for changing access patterns.",
          "Choose transfer and archival approaches that minimize total storage cost.",
          "Right-size backup and retention strategies to business obligations.",
        ],
      },
      {
        id: "4.2",
        title: "Design cost-optimized compute solutions",
        focus: [
          "Map purchasing options to workload predictability and interruption tolerance.",
          "Right-size and scale compute fleets using measured utilization.",
          "Balance availability class and capacity commitments against spend targets.",
        ],
      },
      {
        id: "4.3",
        title: "Design cost-optimized database solutions",
        focus: [
          "Select database engines and deployment models for efficient cost/performance.",
          "Tune retention, backups, and replication to avoid unnecessary spend.",
          "Use caching and capacity models that fit variable or steady demand.",
        ],
      },
      {
        id: "4.4",
        title: "Design cost-optimized network architectures",
        focus: [
          "Optimize data transfer paths and edge routing to reduce network charges.",
          "Choose NAT, endpoint, and connectivity designs with clear cost tradeoffs.",
          "Use cost telemetry tools to detect and remediate recurring network waste.",
        ],
      },
    ],
  },
];

export const serviceAtlas = [
  {
    name: "AWS Identity and Access Management (IAM)",
    usage: "Identity, policy, and role-based access control across AWS resources.",
    examHint: "Least privilege with IAM users, roles, and policies is central to Domain 1 questions.",
  },
  {
    name: "AWS IAM Identity Center",
    usage: "Centralized workforce access and federation across AWS accounts.",
    examHint: "Use for SSO-style multi-account workforce access and governance.",
  },
  {
    name: "AWS Organizations",
    usage: "Multi-account governance with organizational units and SCPs.",
    examHint: "SCPs enforce preventive controls across accounts in enterprise scenarios.",
  },
  {
    name: "AWS Key Management Service (AWS KMS)",
    usage: "Managed encryption key creation and lifecycle control.",
    examHint: "If customer-managed encryption key policies are required, KMS is usually explicit.",
  },
  {
    name: "AWS Secrets Manager",
    usage: "Secure secret storage and optional automatic rotation.",
    examHint: "Use for database credentials and API secrets instead of hardcoded values.",
  },
  {
    name: "AWS Certificate Manager (ACM)",
    usage: "Managed provisioning and lifecycle of TLS certificates.",
    examHint: "ACM is the default certificate management answer for TLS-enabled AWS endpoints.",
  },
  {
    name: "Amazon Cognito",
    usage: "Managed identity service for application user authentication and federation.",
    examHint: "Use Cognito for end-user auth flows in web and mobile applications.",
  },
  {
    name: "Amazon VPC",
    usage: "Logical network isolation with subnets, routing, and security controls.",
    examHint: "Subnet segmentation and security boundaries are recurring architecture patterns.",
  },
  {
    name: "AWS PrivateLink",
    usage: "Private service connectivity without internet traversal.",
    examHint: "PrivateLink is preferred when compliance requires private access from private subnets.",
  },
  {
    name: "AWS WAF",
    usage: "Application-layer filtering for HTTP/S threats.",
    examHint: "WAF handles L7 protection, often with CloudFront or ALB.",
  },
  {
    name: "AWS Shield",
    usage: "DDoS protection for AWS resources.",
    examHint: "Shield addresses volumetric/network DDoS resilience scenarios.",
  },
  {
    name: "Amazon GuardDuty",
    usage: "Threat detection using account, network, and workload telemetry.",
    examHint: "GuardDuty is a common managed detection answer in security monitoring scenarios.",
  },
  {
    name: "AWS CloudTrail",
    usage: "Account-level API activity logging for governance and forensics.",
    examHint: "CloudTrail is the expected answer for API audit trails and change attribution.",
  },
  {
    name: "AWS Security Hub",
    usage: "Centralized aggregation and normalization of security findings.",
    examHint: "Security Hub is used when teams need a consolidated security findings view.",
  },
  {
    name: "Amazon Macie",
    usage: "Sensitive data discovery and protection for Amazon S3.",
    examHint: "Macie appears when the scenario focuses on detecting PII in S3 data.",
  },
  {
    name: "Amazon S3",
    usage: "Durable object storage for data lakes, backups, archives, and static assets.",
    examHint: "S3 class selection, lifecycle rules, and replication are high-frequency topics.",
  },
  {
    name: "Amazon EBS",
    usage: "Persistent block storage for EC2.",
    examHint: "gp3/io2 selection and snapshot strategies appear in performance and cost questions.",
  },
  {
    name: "Amazon EFS",
    usage: "Elastic shared file storage for Linux workloads.",
    examHint: "Choose EFS for shared file semantics across multiple compute nodes.",
  },
  {
    name: "Amazon S3 Glacier",
    usage: "Low-cost archival tiers for infrequently accessed long-term data.",
    examHint: "Glacier classes are frequent in retention and archival optimization prompts.",
  },
  {
    name: "AWS Backup",
    usage: "Centralized and automated backup policy management across AWS services.",
    examHint: "Use AWS Backup when governance requires unified backup control across services.",
  },
  {
    name: "Amazon EC2",
    usage: "Flexible virtual compute instances.",
    examHint: "Instance family, size, and purchasing options are major SAA exam decision points.",
  },
  {
    name: "Amazon EC2 Auto Scaling",
    usage: "Automatic scale-out and scale-in based on policies/metrics.",
    examHint: "Expect autoscaling choices for both resilience and cost tuning.",
  },
  {
    name: "AWS Lambda",
    usage: "Serverless event-driven compute.",
    examHint: "Lambda is usually preferred for bursty event workloads with minimal ops overhead.",
  },
  {
    name: "AWS Fargate",
    usage: "Serverless compute for containers in ECS/EKS.",
    examHint: "Fargate reduces infrastructure management for container workloads.",
  },
  {
    name: "Amazon ECS",
    usage: "Managed container orchestration service.",
    examHint: "ECS is common in microservice scaling and deployment architecture scenarios.",
  },
  {
    name: "Elastic Load Balancing",
    usage: "Distributes traffic across targets for availability and scale.",
    examHint: "Choosing ALB vs NLB vs GWLB is a frequent exam discriminator.",
  },
  {
    name: "Amazon Route 53",
    usage: "DNS, health checks, and traffic routing policies.",
    examHint: "Failover, weighted, and latency routing policies are exam staples.",
  },
  {
    name: "Amazon CloudFront",
    usage: "Global edge caching and accelerated content delivery.",
    examHint: "CloudFront improves user latency and can reduce origin/network load.",
  },
  {
    name: "AWS Global Accelerator",
    usage: "Global anycast network acceleration for TCP/UDP applications.",
    examHint: "Use for non-HTTP global latency and failover optimization.",
  },
  {
    name: "Amazon API Gateway",
    usage: "Managed API front door for REST and HTTP APIs.",
    examHint: "API Gateway often appears with Lambda and auth/throttling requirements.",
  },
  {
    name: "Amazon SQS",
    usage: "Managed message queue for decoupling and buffering.",
    examHint: "SQS is a default answer for asynchronous decoupling and backpressure handling.",
  },
  {
    name: "Amazon SNS",
    usage: "Publish/subscribe messaging for fanout notifications.",
    examHint: "SNS + SQS fanout is common in event-driven resilient architecture questions.",
  },
  {
    name: "Amazon EventBridge",
    usage: "Event bus and routing for decoupled integrations.",
    examHint: "EventBridge fits cross-service event routing and filtering workflows.",
  },
  {
    name: "Amazon Kinesis",
    usage: "Managed streaming ingestion platform for real-time data pipelines.",
    examHint: "Kinesis is a common answer for continuous high-throughput stream ingestion.",
  },
  {
    name: "AWS Glue",
    usage: "Managed ETL and data catalog service for transformation pipelines.",
    examHint: "Glue is preferred for managed batch/ETL transformations in analytics architectures.",
  },
  {
    name: "Amazon Athena",
    usage: "Serverless SQL query engine for data stored in Amazon S3.",
    examHint: "Athena is the best fit for ad-hoc SQL analytics on S3 without cluster management.",
  },
  {
    name: "AWS Step Functions",
    usage: "Managed workflow orchestration with state transitions and retries.",
    examHint: "Use Step Functions for multi-step orchestration over custom retry code.",
  },
  {
    name: "Amazon RDS",
    usage: "Managed relational databases with Multi-AZ and read replica options.",
    examHint: "Know when to use Multi-AZ for HA vs read replicas for read scaling.",
  },
  {
    name: "Amazon Aurora",
    usage: "Cloud-native relational database compatible with MySQL/PostgreSQL.",
    examHint: "Aurora is common for high-performance relational workloads and replica-based read scaling.",
  },
  {
    name: "Amazon DynamoDB",
    usage: "Serverless key-value/document database.",
    examHint: "On-demand vs provisioned capacity mode is a recurring cost/performance decision.",
  },
  {
    name: "Amazon ElastiCache",
    usage: "Managed in-memory caching for sub-millisecond data access.",
    examHint: "Use ElastiCache to offload read-heavy databases and reduce latency.",
  },
  {
    name: "AWS Budgets",
    usage: "Cost and usage budget thresholds with alerting/actions.",
    examHint: "Budgets is the proactive cost control answer, not retrospective analysis.",
  },
  {
    name: "AWS Cost Explorer",
    usage: "Historical cost and usage analysis and trend visualization.",
    examHint: "Cost Explorer is for spend analysis and optimization insights.",
  },
  {
    name: "AWS Compute Optimizer",
    usage: "Rightsizing recommendations for EC2 and other supported resources.",
    examHint: "Compute Optimizer is commonly used for cost/performance rightsizing decisions.",
  },
];

export const prepPlaybooks = [
  {
    title: "SAA-C03 Time Management Strategy",
    steps: [
      "First pass: solve direct service-fit and architecture-pattern questions quickly.",
      "Mark long scenario stems and return after securing easier points.",
      "On review, eliminate options that violate explicit constraints (security, RTO/RPO, latency, budget).",
      "When two options work, prefer the more managed design with lower operational burden.",
    ],
  },
  {
    title: "Architecture Tradeoff Checklist",
    steps: [
      "Security first: least privilege, encryption, and private connectivity requirements.",
      "Resilience next: remove single points of failure and align DR to RTO/RPO.",
      "Performance fit: select services by access pattern and scaling behavior.",
      "Cost guardrail: match purchasing/storage tiers to workload predictability.",
    ],
  },
  {
    title: "Exam-Day Elimination Patterns",
    steps: [
      "Eliminate answers with hardcoded credentials or broad admin policies.",
      "Eliminate designs that assume single-AZ resiliency for critical workloads.",
      "Eliminate choices that overbuild custom operations when managed services meet requirements.",
      "Eliminate cost answers that ignore explicit performance or availability SLAs.",
    ],
  },
];

export const topicSeeds = [
  {
    topic: "multi-account security governance",
    summary:
      "Enterprise architectures commonly require Organizations, SCPs, and federated identity to enforce least privilege at scale.",
    linkedServices: ["AWS Organizations", "AWS IAM Identity Center", "AWS Identity and Access Management (IAM)", "AWS CloudTrail"],
  },
  {
    topic: "resilience and disaster recovery",
    summary:
      "Resilience design depends on choosing the right combination of multi-AZ, multi-Region, replication, and DR strategy for stated RTO/RPO.",
    linkedServices: ["Amazon Route 53", "Amazon RDS", "Amazon S3", "AWS Backup"],
  },
  {
    topic: "performance by access pattern",
    summary:
      "SAA-C03 frequently tests picking storage, database, and caching options that match read/write behavior and latency requirements.",
    linkedServices: ["Amazon EBS", "Amazon EFS", "Amazon DynamoDB", "Amazon ElastiCache"],
  },
  {
    topic: "event-driven decoupling",
    summary:
      "Loose coupling with queues, topics, and event buses improves scalability and failure isolation in distributed systems.",
    linkedServices: ["Amazon SQS", "Amazon SNS", "Amazon EventBridge", "AWS Step Functions"],
  },
  {
    topic: "cost-aware architecture",
    summary:
      "Cost optimization requires matching usage patterns to storage tiering, compute purchasing options, and observability of spend trends.",
    linkedServices: ["AWS Budgets", "AWS Cost Explorer", "Amazon EC2", "Amazon S3"],
  },
];

const secureArchitectureQuestions = [
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company has a multi-account AWS environment and wants to prevent member accounts from disabling CloudTrail. Which control should the solutions architect recommend?",
    choices: [
      "Use AWS Organizations SCPs to deny CloudTrail disable actions",
      "Use IAM user policies in each account only",
      "Use Security Groups to block CloudTrail endpoints",
      "Use an S3 lifecycle policy",
    ],
    correct: [0],
    rationale:
      "SCPs in AWS Organizations enforce preventive guardrails across member accounts, independent of local IAM policies.",
    tags: ["organizations", "scp", "governance"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt: "Which action is an IAM root user security best practice?",
    choices: [
      "Enable MFA and avoid using root access keys",
      "Create root access keys for automation",
      "Share root credentials with the operations team",
      "Use root user for daily administration",
    ],
    correct: [0],
    rationale:
      "AWS recommends securing root credentials with MFA and avoiding long-term root access keys.",
    tags: ["root user", "mfa", "iam"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A workload in private subnets must access an AWS service without using the public internet. Which options satisfy this requirement? (Choose TWO.)",
    choices: [
      "Use AWS PrivateLink interface endpoints",
      "Use NAT Gateway with internet gateway",
      "Use VPC gateway endpoint where supported",
      "Expose instances through public Elastic IP addresses",
    ],
    correct: [0, 2],
    rationale:
      "PrivateLink and supported gateway endpoints provide private connectivity without internet traversal.",
    tags: ["privatelink", "vpc endpoints", "private connectivity"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application running on EC2 needs database credentials that rotate automatically. Which service is the best fit?",
    choices: ["AWS Secrets Manager", "AWS Systems Manager Session Manager", "Amazon Inspector", "AWS CloudHSM"],
    correct: [0],
    rationale: "Secrets Manager is built for secure secret storage and automated rotation workflows.",
    tags: ["secrets manager", "credential rotation"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A web application must be protected from SQL injection at Layer 7. Which service should be added?",
    choices: ["AWS WAF", "AWS Shield Standard", "Amazon GuardDuty", "AWS Network Firewall only"],
    correct: [0],
    rationale: "AWS WAF provides application-layer rule-based filtering for exploits such as SQL injection.",
    tags: ["waf", "application security"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which statement best describes AWS Shield Standard?",
    choices: [
      "It provides baseline DDoS protection for AWS customers",
      "It replaces IAM identity controls",
      "It encrypts S3 objects by default",
      "It acts as a managed NAT service",
    ],
    correct: [0],
    rationale: "Shield Standard provides baseline DDoS protections; it does not replace IAM or encryption controls.",
    tags: ["shield", "ddos"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company must enforce encryption in transit and at rest for sensitive data. Which actions meet this requirement? (Choose TWO.)",
    choices: [
      "Use TLS certificates with AWS Certificate Manager",
      "Use AWS KMS customer managed keys for storage encryption",
      "Disable certificate renewal to reduce changes",
      "Allow plaintext object uploads and encrypt later manually",
    ],
    correct: [0, 1],
    rationale:
      "ACM handles TLS certificates for encryption in transit, and KMS-backed encryption protects data at rest.",
    tags: ["acm", "kms", "encryption"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A solutions architect needs to grant an EC2 instance temporary permissions to access S3. What is the most secure approach?",
    choices: [
      "Attach an IAM role to the instance profile",
      "Store IAM user access keys in user data",
      "Embed root credentials in environment variables",
      "Create a long-term access key and hardcode it",
    ],
    correct: [0],
    rationale: "Instance roles provide short-lived credentials without hardcoded secrets.",
    tags: ["iam roles", "ec2 security"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A compliance program requires centralized auditability and detective controls for suspicious API activity. Which services should be included? (Choose TWO.)",
    choices: ["AWS CloudTrail", "Amazon GuardDuty", "Amazon Route 53", "AWS Auto Scaling"],
    correct: [0, 1],
    rationale: "CloudTrail provides API audit logs and GuardDuty adds managed threat detection.",
    tags: ["cloudtrail", "guardduty", "audit"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company wants to share an S3 bucket with another account while avoiding overly broad IAM permissions. Which policy type is required on the bucket?",
    choices: ["S3 bucket resource policy", "NACL rule", "Route 53 record policy", "CloudWatch alarm policy"],
    correct: [0],
    rationale: "Cross-account S3 access typically requires a resource policy on the bucket plus principal-side permissions.",
    tags: ["s3", "resource policy", "cross-account"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A private API in one VPC must be consumed by workloads in multiple other VPCs with minimal exposure. Which design is most secure and scalable?",
    choices: [
      "Use AWS PrivateLink endpoint service and interface endpoints",
      "Peer all VPCs and expose the API publicly",
      "Use public ALB with IP allowlists only",
      "Use NAT gateways in all VPCs and public DNS",
    ],
    correct: [0],
    rationale:
      "PrivateLink provides private service consumption across VPC boundaries without public exposure.",
    tags: ["privatelink", "api security", "vpc"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which pattern best protects application secrets used by Lambda functions?",
    choices: [
      "Store secrets in Secrets Manager and retrieve at runtime with IAM permissions",
      "Store secrets in plaintext Lambda environment variables",
      "Store secrets in source code repository",
      "Use hardcoded values in CloudFormation templates",
    ],
    correct: [0],
    rationale: "Secrets Manager with least-privilege IAM avoids hardcoded credentials and supports rotation.",
    tags: ["lambda", "secrets manager", "least privilege"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A workload must isolate web and database tiers. Which controls support this requirement? (Choose TWO.)",
    choices: [
      "Place databases in private subnets",
      "Use security groups to allow only required ports between tiers",
      "Assign public IPs to database instances",
      "Allow all inbound traffic in NACLs",
    ],
    correct: [0, 1],
    rationale: "Private subnets and restrictive security groups establish least-privilege network segmentation.",
    tags: ["vpc", "segmentation", "security groups"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An enterprise must enforce that all newly created S3 buckets use server-side encryption with customer managed keys. Which approach is best?",
    choices: [
      "Use organization guardrails with preventive policy controls and bucket policy enforcement",
      "Ask teams to remember to enable encryption manually",
      "Enable Route 53 health checks",
      "Use Auto Scaling scheduled actions",
    ],
    correct: [0],
    rationale:
      "Preventive policy controls and explicit encryption requirements enforce governance consistently at scale.",
    tags: ["s3 encryption", "governance", "kms"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company needs user sign-in for a public web app with social identity federation. Which service is most appropriate?",
    choices: ["Amazon Cognito", "AWS Organizations", "AWS CloudHSM", "Amazon Macie"],
    correct: [0],
    rationale: "Cognito provides user pools and federation options for web/mobile authentication flows.",
    tags: ["cognito", "federation", "application access"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team must prove key management hygiene for regulated workloads. Which controls should be included? (Choose TWO.)",
    choices: [
      "Use customer managed KMS keys with restricted key policies",
      "Enable key rotation where supported and monitor usage events",
      "Share one IAM admin user for all encryption operations",
      "Store plaintext data keys in source control",
    ],
    correct: [0, 1],
    rationale:
      "Scoped key policies and rotation/monitoring controls provide stronger cryptographic governance.",
    tags: ["kms", "key policy", "rotation"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which service helps discover sensitive data such as PII in Amazon S3 buckets?",
    choices: ["Amazon Macie", "Amazon CloudFront", "Amazon EKS", "AWS Direct Connect"],
    correct: [0],
    rationale: "Macie is designed to discover and help protect sensitive data in S3.",
    tags: ["macie", "pii", "s3"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A security team wants centralized findings from multiple security services. Which AWS service should aggregate them?",
    choices: ["AWS Security Hub", "AWS License Manager", "AWS DataSync", "Amazon MQ"],
    correct: [0],
    rationale: "Security Hub aggregates and normalizes findings across integrated services.",
    tags: ["security hub", "centralized security"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A company must allow external auditors read-only access to specific logs in one account, with no long-term credentials. What is the best approach?",
    choices: [
      "Use cross-account IAM role assumption with short-lived STS credentials",
      "Create IAM users and email passwords",
      "Share root credentials under NDA",
      "Replicate logs to public S3 website",
    ],
    correct: [0],
    rationale: "Cross-account role assumption with STS provides controlled, temporary access and auditability.",
    tags: ["sts", "cross-account", "audit"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service issues and manages public or private TLS certificates for use with AWS services?",
    choices: ["AWS Certificate Manager (ACM)", "AWS Organizations", "AWS Budgets", "Amazon EventBridge"],
    correct: [0],
    rationale: "ACM is the managed certificate service for TLS in AWS-integrated endpoints.",
    tags: ["acm", "tls"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A security review flags hardcoded credentials and broad admin permissions in CI/CD pipelines. Which remediations are best? (Choose TWO.)",
    choices: [
      "Replace static credentials with IAM roles and temporary credentials",
      "Scope policies to required actions and resources",
      "Grant AdministratorAccess to all pipeline stages",
      "Store secrets in plaintext build scripts",
    ],
    correct: [0, 1],
    rationale:
      "Role-based temporary access and scoped least-privilege permissions reduce credential and privilege risk.",
    tags: ["least privilege", "temporary credentials", "pipeline security"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data retention policy requires immutable object retention for compliance. Which S3 feature is most relevant?",
    choices: ["S3 Object Lock", "S3 Transfer Acceleration", "S3 Event Notifications", "S3 Inventory"],
    correct: [0],
    rationale: "S3 Object Lock supports WORM-style retention for compliance use cases.",
    tags: ["s3 object lock", "compliance"],
  },
];

const resilientArchitectureQuestions = [
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An order-processing system must absorb traffic spikes without dropping requests. Which pattern is most resilient?",
    choices: [
      "Place Amazon SQS between the API tier and processing workers",
      "Write directly from API servers to the database synchronously only",
      "Store requests in application memory",
      "Scale manually after queueing errors",
    ],
    correct: [0],
    rationale: "SQS buffers surges and decouples producers from consumers to improve resiliency.",
    tags: ["sqs", "decoupling", "spike handling"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A workflow has branching, retries, and timeouts across several AWS services. Which service should orchestrate it?",
    choices: ["AWS Step Functions", "Amazon Route 53", "AWS Shield", "Amazon FSx"],
    correct: [0],
    rationale: "Step Functions is a managed workflow engine for multi-step orchestration and retry logic.",
    tags: ["step functions", "orchestration"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A business-critical web app needs high availability across two AZs. Which design choices are appropriate? (Choose TWO.)",
    choices: [
      "Use an Application Load Balancer spanning multiple AZs",
      "Run all instances in a single AZ for lower latency",
      "Deploy an Auto Scaling group across multiple AZs",
      "Store session state only on local instance disk",
    ],
    correct: [0, 2],
    rationale: "Multi-AZ ALB and Auto Scaling distribution reduce single points of failure.",
    tags: ["alb", "autoscaling", "multi-az"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An application requires RTO of minutes and RPO near zero across Regions. Which DR strategy best aligns?",
    choices: ["Active-active multi-Region", "Backup and restore only", "Pilot light with manual promotion", "Warm standby with daily sync"],
    correct: [0],
    rationale: "Active-active typically delivers the most aggressive RTO/RPO objectives at higher cost/complexity.",
    tags: ["dr", "rto", "rpo"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which Route 53 policy should be used for active-passive failover between a primary and standby endpoint?",
    choices: ["Failover routing", "Simple routing", "Geolocation routing", "Multivalue answer routing"],
    correct: [0],
    rationale: "Route 53 failover routing is designed for active-passive endpoint failover.",
    tags: ["route53", "failover"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A microservice architecture needs asynchronous fanout to multiple subscribers. Which combination is best?",
    choices: ["Amazon SNS topic with multiple Amazon SQS subscriptions", "Amazon EBS with snapshots", "AWS CloudTrail to S3", "VPC peering with static routes"],
    correct: [0],
    rationale: "SNS fanout with SQS subscriptions provides resilient decoupled delivery to multiple consumers.",
    tags: ["sns", "sqs", "fanout"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team needs to reduce single points of failure in a stateful relational database tier. Which options help? (Choose TWO.)",
    choices: [
      "Use Amazon RDS Multi-AZ deployment",
      "Use read replicas for read scaling where needed",
      "Store database on one EC2 instance with local disks",
      "Disable automated backups",
    ],
    correct: [0, 1],
    rationale: "Multi-AZ improves availability and read replicas help distribute read load and improve resilience.",
    tags: ["rds", "multi-az", "read replicas"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A legacy application cannot be modified but must remain highly available during instance failures. Which AWS capability helps most?",
    choices: ["Elastic Load Balancing with health checks", "Client-side hardcoded IP lists", "Manual DNS edits during failures", "Single instance vertical scaling"],
    correct: [0],
    rationale: "ELB health checks and automatic routing away from unhealthy targets improve reliability without app code changes.",
    tags: ["elb", "legacy reliability"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A service receives duplicate event deliveries and must process each order exactly once logically. Which design best improves resilience?",
    choices: [
      "Implement idempotent processing with deduplication keys",
      "Disable retries to avoid duplicates",
      "Store events only in memory",
      "Increase DNS TTL",
    ],
    correct: [0],
    rationale: "Idempotent handlers are a core reliability pattern for at-least-once delivery systems.",
    tags: ["idempotency", "event-driven"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team wants immutable infrastructure deployments for rollback safety. Which approaches align? (Choose TWO.)",
    choices: [
      "Deploy new instances from versioned launch templates",
      "Use infrastructure as code with repeatable stack updates",
      "Patch live servers manually over SSH",
      "Modify production instances directly without tracking",
    ],
    correct: [0, 1],
    rationale: "Immutable patterns rely on replacement deployments and repeatable IaC-managed changes.",
    tags: ["immutable infrastructure", "cloudformation"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An API tier times out when downstream processing is slow. Which pattern should be added to improve resilience?",
    choices: ["Asynchronous queueing with worker consumers", "Larger DNS TTL values", "Disable autoscaling", "Use only one AZ"],
    correct: [0],
    rationale: "Queue buffering isolates API responsiveness from downstream processing latency.",
    tags: ["asynchronous", "sqs", "resilience"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A global application must continue operation if an entire Region fails. Which architecture is most resilient?",
    choices: [
      "Deploy in multiple Regions with Route 53 health-based failover",
      "Deploy in one Region across three subnets",
      "Use one large EC2 instance in one AZ",
      "Rely only on nightly backups",
    ],
    correct: [0],
    rationale: "Regional fault isolation requires multi-Region deployment with failover routing.",
    tags: ["multi-region", "route53", "fault tolerance"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team hits service quota limits during failover tests. What should they do to improve resilience?",
    choices: [
      "Request service quota increases aligned to failover capacity plans",
      "Reduce standby capacity to zero",
      "Disable monitoring alarms",
      "Route all traffic to one instance",
    ],
    correct: [0],
    rationale: "Quota planning is necessary so failover environments can absorb production-level demand.",
    tags: ["service quotas", "failover readiness"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which service is most appropriate for routing events from multiple AWS services to different targets based on rules?",
    choices: ["Amazon EventBridge", "AWS Direct Connect", "Amazon CloudFront", "Amazon EBS"],
    correct: [0],
    rationale: "EventBridge provides rule-based routing on an event bus for decoupled integrations.",
    tags: ["eventbridge", "event routing"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A workload must tolerate AZ outages and preserve object durability. Which design choices help? (Choose TWO.)",
    choices: [
      "Store data in Amazon S3 Standard",
      "Deploy compute in an Auto Scaling group across multiple AZs",
      "Use single-instance storage on ephemeral disks only",
      "Place all tiers in one subnet",
    ],
    correct: [0, 1],
    rationale:
      "S3 Standard is multi-AZ durable and multi-AZ compute distribution improves availability during AZ failure.",
    tags: ["s3 durability", "multi-az"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A workload needs retry with exponential backoff for failed asynchronous jobs. Where is this best implemented?",
    choices: ["In a managed workflow or queue consumer retry policy", "In DNS record TTL settings", "In EBS volume type selection", "In S3 storage class choice"],
    correct: [0],
    rationale: "Retry/backoff belongs in application/workflow processing logic, not network/storage configuration.",
    tags: ["retries", "workflow resilience"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A company wants to modernize a monolithic workload incrementally with minimal disruption. Which architecture strategy is best?",
    choices: [
      "Introduce decoupled event-driven components around the monolith",
      "Rewrite the full system before any release",
      "Disable monitoring until migration completes",
      "Move all traffic to one large database server",
    ],
    correct: [0],
    rationale: "Incremental decoupling reduces migration risk while improving resilience and scalability over time.",
    tags: ["modernization", "decoupling"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A queue consumer must isolate poison messages and continue processing healthy messages. Which SQS feature should be used?",
    choices: ["Dead-letter queue", "S3 transfer acceleration", "Route 53 geolocation", "EBS snapshots"],
    correct: [0],
    rationale: "DLQs isolate repeatedly failing messages and preserve pipeline throughput.",
    tags: ["sqs", "dlq"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A resilient serverless ingestion API requires controlled throughput and downstream protection. Which controls should be included? (Choose TWO.)",
    choices: [
      "Use API Gateway throttling and quotas",
      "Buffer writes through SQS before processing",
      "Allow unbounded direct writes to database from clients",
      "Disable retries globally",
    ],
    correct: [0, 1],
    rationale: "API throttling plus queue buffering protects downstream components from burst overload.",
    tags: ["api gateway", "throttling", "sqs"],
  },
];

const highPerformingQuestions = [
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Linux analytics workload running on multiple EC2 instances requires shared POSIX file access. Which storage service is best?",
    choices: ["Amazon EFS", "Amazon S3", "Amazon EBS attached to one instance", "S3 Glacier Deep Archive"],
    correct: [0],
    rationale: "EFS provides managed shared file storage with concurrent access from multiple instances.",
    tags: ["efs", "storage"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A workload needs low-latency block storage with predictable baseline performance for EC2. Which option is most appropriate?",
    choices: ["Amazon EBS gp3", "Amazon S3 Standard", "Amazon EFS One Zone", "S3 Intelligent-Tiering"],
    correct: [0],
    rationale: "EBS gp3 is a common performant block storage choice with configurable performance.",
    tags: ["ebs", "gp3", "performance"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A globally distributed API needs low-latency response for dynamic and static content. Which services are most relevant? (Choose TWO.)",
    choices: ["Amazon CloudFront", "AWS Global Accelerator", "AWS Storage Gateway", "Amazon S3 Glacier"],
    correct: [0, 1],
    rationale: "CloudFront and Global Accelerator improve global network performance for different traffic types.",
    tags: ["cloudfront", "global accelerator", "latency"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A relational database is read-heavy and writes are moderate. Which optimization should be implemented first?",
    choices: ["Add read replicas", "Move all writes to cache", "Disable indexing", "Use one larger NAT gateway"],
    correct: [0],
    rationale: "Read replicas offload read traffic and improve overall throughput for read-heavy patterns.",
    tags: ["rds", "read replicas", "database performance"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which DynamoDB capacity mode is generally recommended by default for variable workloads that can spike unpredictably?",
    choices: ["On-demand mode", "Provisioned mode without auto scaling", "Manual capacity only", "Single-AZ RDS"],
    correct: [0],
    rationale: "DynamoDB on-demand automatically adapts throughput for variable traffic patterns.",
    tags: ["dynamodb", "on-demand", "scalability"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A function experiences occasional CPU-bound latency spikes. Which action most directly helps tune Lambda performance?",
    choices: [
      "Increase configured Lambda memory to raise available CPU",
      "Enable S3 versioning",
      "Use longer Route 53 TTL",
      "Rotate KMS keys daily",
    ],
    correct: [0],
    rationale: "Lambda memory setting influences available CPU and can improve execution performance.",
    tags: ["lambda", "performance tuning"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application has bursty workloads and requires queue-based decoupling for independent scaling. Which compute pattern is best aligned?",
    choices: ["Auto Scaling worker fleet consuming SQS", "Single fixed EC2 instance", "Manual cron jobs only", "EBS snapshot orchestration"],
    correct: [0],
    rationale: "Autoscaled consumers over SQS enable independent scale and improved throughput.",
    tags: ["autoscaling", "sqs", "compute design"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A service must reduce database read latency and offload hot-key traffic. Which options are valid? (Choose TWO.)",
    choices: ["Use Amazon ElastiCache", "Use application-side caching strategy", "Increase NAT gateway count only", "Disable query indexes"],
    correct: [0, 1],
    rationale: "Caching layers reduce repetitive read load and improve response times.",
    tags: ["elasticache", "caching"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A media workload needs to ingest continuous high-throughput event streams before transformation. Which service is most suitable?",
    choices: ["Amazon Kinesis", "AWS Budgets", "Amazon Route 53", "AWS Certificate Manager"],
    correct: [0],
    rationale: "Kinesis is purpose-built for streaming ingestion workloads.",
    tags: ["kinesis", "streaming ingestion"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data lake team wants interactive SQL queries on data stored in S3 with no cluster management. Which service should they use?",
    choices: ["Amazon Athena", "Amazon RDS", "Amazon MQ", "AWS WAF"],
    correct: [0],
    rationale: "Athena provides serverless SQL query capability directly on S3 data.",
    tags: ["athena", "data lake"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company must optimize global DNS routing for user performance across multiple Regions. Which Route 53 policies are most relevant? (Choose TWO.)",
    choices: ["Latency-based routing", "Weighted routing", "Single-value simple routing only", "Static host file entries"],
    correct: [0, 1],
    rationale: "Latency routing improves user response time while weighted routing supports controlled traffic distribution.",
    tags: ["route53", "latency", "weighted routing"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A high-throughput batch transform workload needs managed distributed compute for Spark jobs. Which service best matches?",
    choices: ["Amazon EMR", "Amazon Route 53", "AWS Artifact", "AWS Shield"],
    correct: [0],
    rationale: "EMR is optimized for managed large-scale Spark and Hadoop processing.",
    tags: ["emr", "distributed compute"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An architect must pick the best load balancer for HTTP host/path-based routing. Which choice is correct?",
    choices: ["Application Load Balancer", "Network Load Balancer", "Gateway Load Balancer", "Route 53 Resolver"],
    correct: [0],
    rationale: "ALB supports Layer 7 host and path-based routing for HTTP/HTTPS applications.",
    tags: ["alb", "load balancing"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A real-time TCP application requires static IPs and ultra-low-latency network load balancing. Which service is most suitable?",
    choices: ["Network Load Balancer", "Application Load Balancer", "AWS WAF", "Amazon S3"],
    correct: [0],
    rationale: "NLB is designed for high-performance Layer 4 traffic and supports static IPs.",
    tags: ["nlb", "tcp", "network performance"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A team needs to optimize performance for a containerized microservices platform. Which actions help? (Choose TWO.)",
    choices: [
      "Use ECS/EKS autoscaling based on service metrics",
      "Decouple services with asynchronous messaging",
      "Pin all services to one large instance",
      "Disable health checks to reduce overhead",
    ],
    correct: [0, 1],
    rationale: "Autoscaling and decoupling enable independent scaling and reduce performance bottlenecks.",
    tags: ["containers", "autoscaling", "microservices"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A pipeline must transform CSV files to Parquet for analytics efficiency. Which service is most appropriate?",
    choices: ["AWS Glue", "Amazon Route 53", "AWS Shield", "Amazon SNS"],
    correct: [0],
    rationale: "Glue is a managed ETL service suited for data transformations like CSV to Parquet.",
    tags: ["glue", "data transformation"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A low-latency application requires database reads in under a millisecond for frequently accessed keys. Which service should be added?",
    choices: ["Amazon ElastiCache", "Amazon S3 Glacier", "AWS Budgets", "AWS Backup"],
    correct: [0],
    rationale: "ElastiCache provides in-memory access patterns suitable for sub-millisecond reads.",
    tags: ["elasticache", "low latency"],
  },
];

const costOptimizedQuestions = [
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An S3 bucket stores logs rarely accessed after 90 days. Which approach most reduces cost with minimal operations?",
    choices: [
      "Use S3 Lifecycle transitions to lower-cost storage classes",
      "Keep all objects in S3 Standard forever",
      "Move logs manually every month",
      "Delete logs after 7 days regardless of policy",
    ],
    correct: [0],
    rationale: "Lifecycle transitions automate tiering to cheaper storage based on access age.",
    tags: ["s3 lifecycle", "storage cost"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A workload has unknown and changing object access patterns in S3. Which class is usually best for automatic cost optimization?",
    choices: ["S3 Intelligent-Tiering", "S3 Standard only", "S3 Glacier Deep Archive only", "S3 One Zone-IA for all data"],
    correct: [0],
    rationale: "S3 Intelligent-Tiering is designed for unknown or changing access patterns with automatic tier movement.",
    tags: ["s3 intelligent-tiering", "cost optimization"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An autoscaled stateless fleet runs 24/7 baseline capacity with occasional spikes. Which purchasing strategy is most cost-effective? (Choose TWO.)",
    choices: [
      "Cover baseline with Savings Plans or Reserved Instances",
      "Use Spot Instances for interruption-tolerant burst capacity",
      "Run all capacity as On-Demand permanently",
      "Use Dedicated Hosts for all web nodes regardless of compliance need",
    ],
    correct: [0, 1],
    rationale:
      "Committed pricing reduces predictable baseline cost and Spot reduces burst cost when interruption is acceptable.",
    tags: ["ec2 pricing", "savings plans", "spot"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company wants alerts before monthly spend exceeds target and also wants automated preventative action. Which service should be used?",
    choices: ["AWS Budgets", "AWS CloudTrail", "AWS KMS", "Amazon S3"],
    correct: [0],
    rationale: "AWS Budgets supports threshold alerts and budget actions for proactive cost control.",
    tags: ["budgets", "cost governance"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which tool is best for historical spend trend analysis and service-level cost breakdown?",
    choices: ["AWS Cost Explorer", "AWS WAF", "Amazon Route 53", "AWS AppSync"],
    correct: [0],
    rationale: "Cost Explorer is built for spend analytics and cost trend exploration.",
    tags: ["cost explorer", "billing"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A non-production RDS environment is needed only during business hours. Which approach reduces cost most directly?",
    choices: [
      "Schedule stop/start for supported environments and right-size instances",
      "Add more read replicas",
      "Enable multi-Region active-active deployment",
      "Move to dedicated hosts",
    ],
    correct: [0],
    rationale: "Scheduling non-production uptime and right-sizing are direct cost optimization tactics for intermittent usage.",
    tags: ["rds cost", "non-production"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A team wants to reduce NAT gateway data processing costs to AWS services. Which options help? (Choose TWO.)",
    choices: [
      "Use VPC gateway endpoints for S3 and DynamoDB traffic",
      "Use interface endpoints for supported private service access",
      "Route all private traffic through internet gateways",
      "Force cross-Region egress for internal service calls",
    ],
    correct: [0, 1],
    rationale: "VPC endpoints can reduce NAT-processed traffic and keep service access private.",
    tags: ["nat cost", "vpc endpoints"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company serves static assets globally from one Region and sees high origin data transfer costs. What is the best optimization?",
    choices: ["Use Amazon CloudFront caching", "Increase EC2 instance size", "Use larger NAT gateways", "Enable more CloudTrail trails"],
    correct: [0],
    rationale: "CloudFront edge caching reduces repeated origin fetches and improves global delivery economics.",
    tags: ["cloudfront", "data transfer cost"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A workload has predictable database utilization and strict cost targets. Which DynamoDB mode is often preferred?",
    choices: ["Provisioned mode with auto scaling", "On-demand mode only", "Manual fixed RCUs with no monitoring", "S3 Standard only"],
    correct: [0],
    rationale: "Provisioned with auto scaling can provide stronger cost predictability for steady patterns.",
    tags: ["dynamodb", "provisioned", "cost predictability"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which practice best improves chargeback/visibility in a multi-team AWS environment?",
    choices: ["Use consistent cost allocation tags", "Disable account-level billing reports", "Share one account for all teams with no tagging", "Use random resource naming"],
    correct: [0],
    rationale: "Cost allocation tags enable team/service attribution and better cost governance.",
    tags: ["tagging", "cost allocation"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A storage design must balance archive cost and retrieval time. Which statements are correct? (Choose TWO.)",
    choices: [
      "Glacier tiers lower storage cost but can increase retrieval time",
      "S3 Standard has faster access but typically higher storage cost",
      "All S3 classes have identical retrieval characteristics",
      "Lifecycle policies cannot automate transitions",
    ],
    correct: [0, 1],
    rationale: "Archive tiers trade retrieval speed for lower cost, and S3 Standard favors immediate access.",
    tags: ["s3 classes", "archival tradeoffs"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team overprovisions EC2 instances due to uncertainty. Which service gives rightsizing recommendations to reduce waste?",
    choices: ["AWS Compute Optimizer", "AWS Artifact", "AWS Glue", "Amazon Route 53"],
    correct: [0],
    rationale: "Compute Optimizer analyzes utilization and recommends better instance sizing.",
    tags: ["compute optimizer", "rightsizing"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A business has unpredictable nightly batch jobs and wants to minimize compute spend while accepting interruption handling. What is best?",
    choices: ["Use Spot Instances for interruptible batch workers", "Use Dedicated Hosts", "Use On-Demand always", "Use larger NAT gateways"],
    correct: [0],
    rationale: "Spot capacity is typically most cost-effective for interruption-tolerant batch workloads.",
    tags: ["spot", "batch cost"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A solutions architect reviews network architecture for cost reduction. Which optimizations are commonly valid? (Choose TWO.)",
    choices: [
      "Minimize unnecessary cross-AZ and cross-Region data transfers",
      "Use edge caching/CDN where traffic patterns justify it",
      "Force all east-west traffic through public internet paths",
      "Increase Route 53 query volume without reason",
    ],
    correct: [0, 1],
    rationale: "Reducing avoidable transfer paths and using edge caching can materially lower network spend.",
    tags: ["network cost", "data transfer", "cdn"],
  },
];

const questionBankSource = [
  ...secureArchitectureQuestions,
  ...resilientArchitectureQuestions,
  ...highPerformingQuestions,
  ...costOptimizedQuestions,
];

export const questionBank = questionBankSource.map((question, index) => ({
  id: `SAA${String(index + 1).padStart(3, "0")}`,
  ...question,
}));

export const inferRules = [
  {
    domain: "D1",
    keywords: [
      "iam",
      "mfa",
      "scp",
      "kms",
      "encryption",
      "waf",
      "shield",
      "secrets",
      "guardduty",
      "macie",
      "least privilege",
      "policy",
    ],
  },
  {
    domain: "D2",
    keywords: [
      "resilience",
      "failover",
      "dr",
      "rto",
      "rpo",
      "sqs",
      "sns",
      "eventbridge",
      "step functions",
      "multi-az",
      "fault tolerant",
      "decouple",
    ],
  },
  {
    domain: "D3",
    keywords: [
      "performance",
      "latency",
      "throughput",
      "storage",
      "ebs",
      "efs",
      "rds",
      "dynamodb",
      "cache",
      "cloudfront",
      "load balancer",
      "kinesis",
      "glue",
    ],
  },
  {
    domain: "D4",
    keywords: [
      "cost",
      "budget",
      "cost explorer",
      "savings plans",
      "reserved",
      "spot",
      "lifecycle",
      "intelligent-tiering",
      "rightsizing",
      "compute optimizer",
      "pricing",
      "nat",
    ],
  },
];

export const defaultInferDomain = "D1";

export const coachTopicPlaceholder =
  "Example: Design a multi-AZ, cost-optimized web architecture and explain the tradeoffs across security, resilience, and performance.";

export const saaC03Course = {
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
