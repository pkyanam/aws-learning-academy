export const examMeta = {
  certificate: "AWS Certified Developer - Associate",
  code: "DVA-C02",
  versionDate: "August 2025 (Exam Guide v2.0)",
  durationMinutes: 130,
  questionCount: 65,
  passingScore: 720,
  costUsd: 150,
  language: "English",
  targetRole:
    "Developers who build, secure, deploy, troubleshoot, and optimize cloud-native applications on AWS.",
  quickFacts: [
    "DVA-C02 emphasizes practical implementation decisions across Lambda, APIs, event-driven systems, CI/CD, and observability.",
    "Domain 1 (Development with AWS Services) carries the largest exam weight.",
    "Many scenarios test whether code-level behavior matches AWS service semantics, especially retries, idempotency, and security boundaries.",
  ],
};

export const domainBlueprint = [
  {
    id: "D1",
    name: "Development with AWS Services",
    weight: 32,
    mission:
      "Build cloud-native application components using AWS managed services and resilient patterns that align to functional and non-functional requirements.",
    tasks: [
      {
        id: "1.1",
        title: "Write code for applications or AWS services",
        focus: [
          "Implement integrations with AWS SDKs, service APIs, and event sources.",
          "Handle AWS service exceptions, retries, and idempotency concerns in code.",
          "Use managed service features instead of unnecessary custom infrastructure code.",
        ],
      },
      {
        id: "1.2",
        title: "Write code for serverless applications",
        focus: [
          "Build Lambda handlers with correct event parsing and execution model assumptions.",
          "Integrate API Gateway, SQS, EventBridge, and Step Functions for asynchronous workflows.",
          "Design runtime behavior to avoid cold-start, concurrency, and timeout pitfalls.",
        ],
      },
      {
        id: "1.3",
        title: "Translate functional requirements into application design",
        focus: [
          "Choose persistence and messaging services based on access patterns and consistency needs.",
          "Map user experience and latency goals to synchronous/asynchronous architecture choices.",
          "Select data model and API design patterns suitable for scale and maintainability.",
        ],
      },
      {
        id: "1.4",
        title: "Implement reliable and resilient application designs",
        focus: [
          "Use decoupling, retries, dead-letter handling, and failure isolation patterns.",
          "Implement durable event processing with at-least-once delivery assumptions.",
          "Build recovery-safe workflows through idempotent writes and state checkpoints.",
        ],
      },
    ],
  },
  {
    id: "D2",
    name: "Security",
    weight: 26,
    mission:
      "Implement authentication, authorization, data protection, and secure application controls across service integrations and deployment environments.",
    tasks: [
      {
        id: "2.1",
        title: "Implement secure authentication and authorization",
        focus: [
          "Use IAM roles and policies with least privilege for users, workloads, and cross-account access.",
          "Design token-based user authentication and authorization flows for applications.",
          "Use temporary credentials and federated access patterns where appropriate.",
        ],
      },
      {
        id: "2.2",
        title: "Implement application and infrastructure security",
        focus: [
          "Protect secrets and configuration with secure managed services.",
          "Apply network-level and endpoint-level security controls for app components.",
          "Instrument audit and threat-detection controls for continuous security monitoring.",
        ],
      },
      {
        id: "2.3",
        title: "Implement data security",
        focus: [
          "Encrypt data in transit and at rest using AWS-managed and customer-managed controls.",
          "Design secure data access patterns and key usage boundaries.",
          "Handle sensitive data lifecycle requirements including access logging and rotation.",
        ],
      },
    ],
  },
  {
    id: "D3",
    name: "Deployment",
    weight: 24,
    mission:
      "Package, test, release, and automate application and infrastructure deployments using AWS-native CI/CD and progressive delivery techniques.",
    tasks: [
      {
        id: "3.1",
        title: "Prepare application artifacts for deployment",
        focus: [
          "Build reproducible artifacts and dependency bundles for target runtimes.",
          "Version artifacts and configuration for traceability and rollback.",
          "Use packaging conventions required by Lambda, containers, and infrastructure templates.",
        ],
      },
      {
        id: "3.2",
        title: "Test applications before deployment",
        focus: [
          "Automate unit, integration, and pre-release validation checks in pipelines.",
          "Use local and staged test approaches that reflect production runtime behavior.",
          "Gate deployments using test outcomes and policy checks.",
        ],
      },
      {
        id: "3.3",
        title: "Deploy code and infrastructure",
        focus: [
          "Implement CI/CD workflows with managed AWS deployment services.",
          "Use deployment strategies such as canary, blue/green, and rolling updates.",
          "Automate rollback and drift-safe infrastructure updates with IaC.",
        ],
      },
    ],
  },
  {
    id: "D4",
    name: "Troubleshooting and Optimization",
    weight: 18,
    mission:
      "Diagnose production issues, improve observability, and optimize runtime behavior for performance, reliability, and cost efficiency.",
    tasks: [
      {
        id: "4.1",
        title: "Assist in root cause analysis and fault isolation",
        focus: [
          "Use logs, traces, and metrics to isolate failing components quickly.",
          "Interpret service-level errors and configuration mismatches.",
          "Validate hypotheses with repeatable diagnostics and controlled tests.",
        ],
      },
      {
        id: "4.2",
        title: "Instrument code for observability",
        focus: [
          "Emit structured logs and business metrics for actionable dashboards.",
          "Instrument distributed request paths with trace context propagation.",
          "Configure alarms and notifications tied to SLO and operational thresholds.",
        ],
      },
      {
        id: "4.3",
        title: "Optimize applications by using AWS services and features",
        focus: [
          "Tune compute and storage settings based on runtime telemetry.",
          "Reduce latency through caching, connection management, and asynchronous patterns.",
          "Control cost by rightsizing runtime resources and eliminating unnecessary processing.",
        ],
      },
    ],
  },
];

export const serviceAtlas = [
  {
    name: "AWS Lambda",
    usage: "Serverless compute for event-driven application logic.",
    examHint: "Lambda event source semantics, retries, and concurrency behavior are heavily tested in DVA-C02.",
  },
  {
    name: "Amazon API Gateway",
    usage: "Managed API front door for REST and HTTP APIs.",
    examHint: "API authorization, throttling, stage variables, and integration patterns are common exam topics.",
  },
  {
    name: "Amazon DynamoDB",
    usage: "Serverless key-value/document data store with single-digit millisecond access.",
    examHint: "Know access-pattern-first design, partition key implications, and conditional writes.",
  },
  {
    name: "Amazon RDS",
    usage: "Managed relational database service with high availability options.",
    examHint: "Expect scenarios around connection management, read scaling, and security integration.",
  },
  {
    name: "Amazon Aurora",
    usage: "Cloud-native relational database compatible with MySQL and PostgreSQL.",
    examHint: "Aurora often appears when managed relational scale and performance are required.",
  },
  {
    name: "Amazon ElastiCache",
    usage: "Managed in-memory caching for low-latency access.",
    examHint: "Used to reduce database load and improve tail latency for hot data.",
  },
  {
    name: "Amazon S3",
    usage: "Durable object storage for artifacts, assets, and event-driven workflows.",
    examHint: "S3 event notifications and object access controls are recurring developer topics.",
  },
  {
    name: "Amazon SQS",
    usage: "Managed queue service for decoupled asynchronous processing.",
    examHint: "Visibility timeout, DLQ, and idempotent consumers are critical DVA patterns.",
  },
  {
    name: "Amazon SNS",
    usage: "Publish/subscribe messaging with fanout to multiple endpoints.",
    examHint: "SNS to SQS fanout is a standard approach for multi-subscriber event distribution.",
  },
  {
    name: "Amazon EventBridge",
    usage: "Event bus for routing and filtering events across AWS services.",
    examHint: "Use EventBridge when routing by event pattern rather than polling.",
  },
  {
    name: "AWS Step Functions",
    usage: "Stateful workflow orchestration with retries, branching, and service integrations.",
    examHint: "Prefer Step Functions over custom orchestration logic for multi-step reliability.",
  },
  {
    name: "AWS X-Ray",
    usage: "Distributed tracing for end-to-end request visibility.",
    examHint: "X-Ray is central when troubleshooting latency across microservices.",
  },
  {
    name: "Amazon CloudWatch",
    usage: "Metrics, logs, alarms, dashboards, and application insights.",
    examHint: "CloudWatch instrumentation and alarms are expected in troubleshooting questions.",
  },
  {
    name: "Amazon CloudWatch Logs Insights",
    usage: "Interactive querying for structured and unstructured application logs.",
    examHint: "Use Logs Insights to isolate error patterns without exporting logs.",
  },
  {
    name: "AWS CloudTrail",
    usage: "Records API actions and account activity for auditing.",
    examHint: "CloudTrail is the default answer for who-changed-what investigations.",
  },
  {
    name: "AWS Identity and Access Management (IAM)",
    usage: "Identity and policy management for users, roles, and services.",
    examHint: "Least-privilege role design and policy scoping are core exam themes.",
  },
  {
    name: "AWS Security Token Service (AWS STS)",
    usage: "Temporary credential issuance for role assumption and federation.",
    examHint: "Use STS role assumption for cross-account and temporary credential workflows.",
  },
  {
    name: "Amazon Cognito",
    usage: "Managed user identity, authentication, and token issuance for apps.",
    examHint: "Cognito is commonly tested for end-user sign-in and JWT-based access patterns.",
  },
  {
    name: "AWS KMS",
    usage: "Managed encryption key service for data-at-rest controls.",
    examHint: "Expect KMS questions around key usage, grants, and envelope encryption patterns.",
  },
  {
    name: "AWS Secrets Manager",
    usage: "Secure secret storage with optional automatic rotation.",
    examHint: "Preferred for credentials and API keys rather than plaintext config.",
  },
  {
    name: "AWS Systems Manager Parameter Store",
    usage: "Centralized parameter storage for application configuration and secrets.",
    examHint: "Parameter Store is common for hierarchical runtime config access.",
  },
  {
    name: "AWS CodeCommit",
    usage: "Managed source control for application repositories.",
    examHint: "Appears in AWS-native CI/CD source integration scenarios.",
  },
  {
    name: "AWS CodeBuild",
    usage: "Managed build and test execution service.",
    examHint: "Use CodeBuild for automated artifact creation and test stages.",
  },
  {
    name: "AWS CodeDeploy",
    usage: "Automated deployment service for EC2, Lambda, and ECS.",
    examHint: "Understand canary and linear deployment configs for Lambda releases.",
  },
  {
    name: "AWS CodePipeline",
    usage: "CI/CD workflow orchestration across source, build, test, and deploy stages.",
    examHint: "Pipeline gating and automated promotion are frequent exam patterns.",
  },
  {
    name: "AWS CloudFormation",
    usage: "Infrastructure as code for repeatable, versioned provisioning.",
    examHint: "CloudFormation rollback and change set behavior are high-yield deployment topics.",
  },
  {
    name: "AWS SAM",
    usage: "Serverless application framework for packaging and deploying Lambda/API resources.",
    examHint: "SAM appears in serverless build/test/deploy lifecycle scenarios.",
  },
  {
    name: "Amazon ECS",
    usage: "Managed container orchestration service.",
    examHint: "Know ECS service deployment behavior and task-level IAM patterns.",
  },
  {
    name: "AWS Fargate",
    usage: "Serverless compute for containers on ECS/EKS.",
    examHint: "Fargate reduces infrastructure management for containerized apps.",
  },
  {
    name: "AWS AppConfig",
    usage: "Managed feature flags and runtime configuration deployment.",
    examHint: "AppConfig helps reduce deployment risk for configuration changes.",
  },
];

export const prepPlaybooks = [
  {
    title: "DVA-C02 Exam Triage Strategy",
    steps: [
      "Answer direct service-fit and SDK behavior questions first.",
      "Mark long CI/CD and troubleshooting scenarios for a second pass.",
      "Eliminate options that violate least privilege, idempotency, or deployment safety.",
      "When two answers seem viable, prefer the managed pattern with explicit operational controls.",
    ],
  },
  {
    title: "Serverless Reliability Checklist",
    steps: [
      "Design handlers as idempotent because at-least-once delivery is common.",
      "Set queue visibility timeout and Lambda timeout coherently.",
      "Use DLQs or failure destinations for poison message handling.",
      "Instrument structured logs and correlation IDs before production launch.",
    ],
  },
  {
    title: "CI/CD Safety Checklist",
    steps: [
      "Package deterministic artifacts and version them immutably.",
      "Run unit and integration tests before deployment stages.",
      "Use canary/linear rollout and automated rollback criteria for risky releases.",
      "Keep infrastructure changes in IaC with reviewable change history.",
    ],
  },
];

export const topicSeeds = [
  {
    topic: "event-driven idempotency",
    summary:
      "Most AWS event sources are at-least-once, so handlers must avoid duplicate side effects through idempotent write patterns.",
    linkedServices: ["AWS Lambda", "Amazon SQS", "Amazon DynamoDB", "AWS Step Functions"],
  },
  {
    topic: "secure runtime credentials",
    summary:
      "Applications should use temporary role-based credentials and managed secret stores instead of embedded keys.",
    linkedServices: [
      "AWS Identity and Access Management (IAM)",
      "AWS Security Token Service (AWS STS)",
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
    ],
  },
  {
    topic: "progressive deployments",
    summary:
      "Safe releases use controlled rollout strategies with automated rollback based on health signals.",
    linkedServices: ["AWS CodeDeploy", "AWS CodePipeline", "Amazon CloudWatch", "AWS AppConfig"],
  },
  {
    topic: "distributed troubleshooting",
    summary:
      "Fast diagnosis combines logs, metrics, and traces to isolate latency and failure points across services.",
    linkedServices: ["Amazon CloudWatch", "Amazon CloudWatch Logs Insights", "AWS X-Ray", "AWS CloudTrail"],
  },
  {
    topic: "api and data design",
    summary:
      "High-quality DVA solutions map API patterns, consistency needs, and scaling behavior to the right managed data services.",
    linkedServices: ["Amazon API Gateway", "Amazon DynamoDB", "Amazon RDS", "Amazon ElastiCache"],
  },
];

const developmentQuestions = [
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Lambda function processing SQS messages occasionally receives duplicate messages. What is the BEST code-level mitigation?",
    choices: [
      "Implement idempotency keys and conditional writes in persistence logic",
      "Disable Lambda retries",
      "Delete the queue after each batch",
      "Increase message size limit",
    ],
    correct: [0],
    rationale:
      "SQS and Lambda integrations are at-least-once, so idempotent processing is required to avoid duplicate side effects.",
    tags: ["lambda", "sqs", "idempotency"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An API must return immediately while order fulfillment continues asynchronously. Which architecture is most appropriate?",
    choices: [
      "API Gateway invokes Lambda that enqueues work to SQS",
      "API Gateway writes directly to a long-running EC2 process and waits",
      "Client polls RDS until completion without queueing",
      "Use synchronous SNS only with no workers",
    ],
    correct: [0],
    rationale: "Queue-based decoupling allows fast API responses while work is processed asynchronously.",
    tags: ["api gateway", "asynchronous", "sqs"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt: "Which DynamoDB feature prevents overwriting an item when processing duplicate events?",
    choices: ["Conditional expressions", "TTL", "Global tables", "DAX"],
    correct: [0],
    rationale: "Conditional writes enforce idempotency constraints at the database layer.",
    tags: ["dynamodb", "conditional write"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A serverless workflow includes payment processing and inventory updates. Which design choices improve reliability? (Choose TWO.)",
    choices: [
      "Use Step Functions with retries and catch handlers",
      "Persist idempotency state for external side-effect calls",
      "Disable all retries to avoid duplicates",
      "Keep workflow state only in Lambda memory",
    ],
    correct: [0, 1],
    rationale:
      "Step Functions provides managed retry/error flows, and idempotency state protects downstream systems from duplicate side effects.",
    tags: ["step functions", "resilience", "idempotency"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application sends large files directly to S3 from browsers. Which approach avoids routing file payload through app servers?",
    choices: ["Use S3 presigned URLs", "Store files in API Gateway stage variables", "Use DynamoDB binary attributes for all files", "Use SNS message bodies"],
    correct: [0],
    rationale: "Presigned URLs let clients upload directly to S3 with controlled temporary permissions.",
    tags: ["s3", "presigned url", "api design"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A mobile app needs low-latency profile reads and occasional writes at global scale. Which data store is the best fit?",
    choices: ["Amazon DynamoDB", "Amazon S3 Glacier", "Amazon Redshift", "AWS Backup vault"],
    correct: [0],
    rationale: "DynamoDB is optimized for low-latency key-value access and scales for global app workloads.",
    tags: ["dynamodb", "mobile workloads"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An API has strict p95 latency objectives and mostly read-heavy access to a relational dataset. What is the best optimization?",
    choices: ["Add ElastiCache for hot reads and keep RDS as source of truth", "Move all data to S3 and query objects directly", "Disable connection pooling", "Use larger CloudWatch retention"],
    correct: [0],
    rationale: "Caching hot data with ElastiCache reduces database read load and improves latency.",
    tags: ["elasticache", "rds", "latency"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs ordered processing of events per customer with deduplication. Which queue option is most suitable?",
    choices: ["Amazon SQS FIFO queue", "Amazon SQS standard queue", "Amazon SNS standard topic only", "Amazon EventBridge archive"],
    correct: [0],
    rationale: "FIFO queues support message ordering and deduplication semantics.",
    tags: ["sqs", "fifo", "ordering"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A microservice publishes business events to multiple independent consumers. Which patterns are appropriate? (Choose TWO.)",
    choices: [
      "Publish to SNS and subscribe dedicated SQS queues per consumer",
      "Use EventBridge rules to route to multiple targets",
      "Write directly from producer into each consumer database",
      "Share one large monolithic queue with no routing metadata",
    ],
    correct: [0, 1],
    rationale:
      "SNS fanout and EventBridge rule-based routing both support decoupled multi-consumer event distribution.",
    tags: ["sns", "eventbridge", "event-driven"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt: "Which Lambda invocation pattern is appropriate for processing an S3 object-created event?",
    choices: ["Event-driven asynchronous invocation", "Long-lived WebSocket polling from Lambda", "Manual SSH trigger", "Synchronous SQL trigger only"],
    correct: [0],
    rationale: "S3 notifications invoke Lambda asynchronously based on object events.",
    tags: ["lambda", "s3 events"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application needs business workflow state persisted between steps and retries. Which service is best aligned?",
    choices: ["AWS Step Functions", "AWS CloudTrail", "AWS Budgets", "AWS Shield"],
    correct: [0],
    rationale: "Step Functions manages explicit state and transitions across workflow steps.",
    tags: ["step functions", "workflow"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A Lambda function that writes to DynamoDB is timing out intermittently under burst load. Which design change most improves resilience first?",
    choices: [
      "Buffer writes in SQS and process with controlled Lambda concurrency",
      "Increase CloudTrail retention",
      "Move writes to synchronous API Gateway request validation",
      "Disable retries in Lambda event source mapping",
    ],
    correct: [0],
    rationale:
      "Queue buffering with controlled concurrency smooths bursts and protects downstream write capacity.",
    tags: ["lambda", "dynamodb", "backpressure"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A web API needs custom authorization logic per request before invoking backend Lambda handlers. Which API Gateway feature should be used?",
    choices: ["Lambda authorizer", "S3 bucket policy", "Route 53 failover", "CodeBuild environment variables"],
    correct: [0],
    rationale: "Lambda authorizers provide custom token/request authorization logic at API Gateway.",
    tags: ["api gateway", "authorization"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which choices help build resilient event consumers for at-least-once delivery systems? (Choose TWO.)",
    choices: [
      "Use idempotent write operations",
      "Store processed message identifiers",
      "Assume each event is delivered exactly once",
      "Disable dead-letter queues",
    ],
    correct: [0, 1],
    rationale:
      "Idempotent operations and duplicate tracking are standard defenses for at-least-once delivery.",
    tags: ["event processing", "idempotency"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which AWS service allows developers to run ad-hoc SQL queries directly on data in S3 without managing servers?",
    choices: ["Amazon Athena", "Amazon SQS", "AWS CodeDeploy", "AWS WAF"],
    correct: [0],
    rationale: "Athena provides serverless SQL query capability over S3 datasets.",
    tags: ["athena", "analytics"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to trigger custom logic whenever an order item is inserted into a DynamoDB table. Which feature should be used?",
    choices: ["DynamoDB Streams", "RDS snapshots", "S3 lifecycle rules", "CloudFront signed cookies"],
    correct: [0],
    rationale: "DynamoDB Streams captures item-level changes for event-driven processing.",
    tags: ["dynamodb", "streams"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application needs a managed feature flag service with controlled rollout and validation of config changes. Which service fits?",
    choices: ["AWS AppConfig", "AWS Direct Connect", "Amazon Route 53 Resolver", "Amazon S3 Glacier"],
    correct: [0],
    rationale: "AppConfig provides managed configuration and feature flag deployment safeguards.",
    tags: ["appconfig", "feature flags"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A payment API must ensure each transaction request is processed once even if clients retry with the same token. What is the BEST approach?",
    choices: [
      "Store client idempotency token and reject duplicate token reuse",
      "Disable client retries",
      "Use random delays before database writes",
      "Route traffic through two regions without state",
    ],
    correct: [0],
    rationale: "Persisted idempotency tokens are the standard pattern for exactly-once business semantics.",
    tags: ["idempotency", "api design"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which design best enables independent scaling for image-processing jobs submitted by multiple APIs?",
    choices: [
      "Use a shared SQS queue with autoscaled worker consumers",
      "Run processing inside each API request thread",
      "Write image binaries directly to DynamoDB",
      "Store jobs only in local memory",
    ],
    correct: [0],
    rationale: "Queue-backed workers decouple ingestion from processing and allow independent scaling.",
    tags: ["sqs", "scalability"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A serverless app must call multiple downstream APIs and continue on transient failures. Which controls are appropriate? (Choose TWO.)",
    choices: [
      "Use retries with exponential backoff",
      "Implement circuit-breaking or fallback behavior",
      "Retry infinitely with no timeout",
      "Log only successful calls",
    ],
    correct: [0, 1],
    rationale:
      "Backoff and fault-isolation patterns reduce cascading failures from transient downstream issues.",
    tags: ["retries", "resilience", "serverless"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A chat application needs low-latency read/write key-value access, automatic scaling, and TTL expiration. Which data store is best?",
    choices: ["Amazon DynamoDB", "Amazon RDS for SQL Server", "Amazon S3 One Zone-IA", "AWS Backup"],
    correct: [0],
    rationale: "DynamoDB provides low-latency access with TTL support and serverless scaling.",
    tags: ["dynamodb", "ttl", "chat apps"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An API backend must execute a sequence of deterministic transformations on incoming events with state transitions. What is the best managed option?",
    choices: ["AWS Step Functions", "AWS CodeCommit", "Amazon Macie", "Route 53 geolocation routing"],
    correct: [0],
    rationale: "Step Functions is designed for deterministic, stateful orchestration.",
    tags: ["step functions", "state machine"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team builds Lambda functions that process batched SQS records. Which practices reduce partial batch reprocessing impact? (Choose TWO.)",
    choices: [
      "Handle records individually and isolate failures",
      "Use dead-letter handling for unrecoverable records",
      "Assume all records in batch always succeed",
      "Delete queue on first processing error",
    ],
    correct: [0, 1],
    rationale:
      "Per-record handling and DLQ patterns reduce repeated failures and support resilient batch processing.",
    tags: ["lambda", "sqs batch", "dlq"],
  },
];

const securityQuestions = [
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Lambda function needs read access to one S3 bucket prefix only. What is the most secure approach?",
    choices: [
      "Attach a least-privilege IAM role with scoped resource ARN",
      "Use AdministratorAccess managed policy",
      "Embed root credentials in environment variables",
      "Store access keys in source control",
    ],
    correct: [0],
    rationale: "A scoped IAM role follows least privilege and avoids static credentials.",
    tags: ["iam", "least privilege", "lambda"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A mobile app needs user sign-up/sign-in and JWT token issuance for API authorization. Which AWS service is most appropriate?",
    choices: ["Amazon Cognito", "AWS Organizations", "AWS Control Tower", "Amazon SQS"],
    correct: [0],
    rationale: "Cognito provides managed user pools and token-based identity flows.",
    tags: ["cognito", "jwt", "authentication"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which controls protect secrets used by containerized applications on ECS? (Choose TWO.)",
    choices: [
      "Store secrets in AWS Secrets Manager",
      "Grant task roles only needed secret retrieval permissions",
      "Bake secrets into container image layers",
      "Store API keys in plaintext build logs",
    ],
    correct: [0, 1],
    rationale: "Secrets Manager with scoped task roles enforces secure secret retrieval at runtime.",
    tags: ["secrets manager", "ecs", "task role"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application must encrypt data at rest in DynamoDB with customer-managed keys. Which service provides key management?",
    choices: ["AWS KMS", "AWS IAM Identity Center", "AWS Config", "Amazon Route 53"],
    correct: [0],
    rationale: "KMS manages customer keys used for service-level encryption integration.",
    tags: ["kms", "dynamodb", "encryption"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A developer needs cross-account access from Account A Lambda to Account B S3 without long-term keys. What should be implemented?",
    choices: [
      "Assume an IAM role in Account B using AWS STS",
      "Create IAM user in Account B and hardcode keys",
      "Share root user password for Account B",
      "Use S3 public bucket access",
    ],
    correct: [0],
    rationale: "STS role assumption provides temporary credentials for secure cross-account access.",
    tags: ["sts", "cross-account", "iam roles"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A security review requires all API calls by users and services to be auditable for investigations. Which service is essential?",
    choices: ["AWS CloudTrail", "AWS Budgets", "AWS AppConfig", "Amazon EventBridge Scheduler"],
    correct: [0],
    rationale: "CloudTrail records API activity needed for audit and forensic analysis.",
    tags: ["cloudtrail", "audit"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A workload in private subnets must access S3 and DynamoDB securely without traversing the internet. Which options should be used? (Choose TWO.)",
    choices: [
      "Create VPC gateway endpoints for S3 and DynamoDB",
      "Keep traffic on private routes to gateway endpoints",
      "Route through public NAT and internet gateway only",
      "Expose private subnets with public IPs",
    ],
    correct: [0, 1],
    rationale: "Gateway endpoints provide private access paths to S3 and DynamoDB from private subnets.",
    tags: ["vpc endpoints", "network security"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An application needs centrally managed encrypted configuration values organized by path. Which service is best fit?",
    choices: ["AWS Systems Manager Parameter Store", "Amazon MQ", "AWS CodeArtifact", "Amazon Kinesis Video Streams"],
    correct: [0],
    rationale: "Parameter Store supports hierarchical config with optional KMS encryption.",
    tags: ["parameter store", "configuration security"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which IAM policy practices improve security posture in CI/CD pipelines? (Choose TWO.)",
    choices: [
      "Scope actions and resources to pipeline needs",
      "Use separate roles per stage or function",
      "Attach one broad admin policy everywhere",
      "Use wildcard resources for convenience by default",
    ],
    correct: [0, 1],
    rationale: "Scoped policies and role separation reduce blast radius and privilege misuse.",
    tags: ["iam", "cicd security", "least privilege"],
  },
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service can automatically rotate supported database credentials?",
    choices: ["AWS Secrets Manager", "AWS Certificate Manager", "Amazon CloudWatch", "Amazon S3"],
    correct: [0],
    rationale: "Secrets Manager supports automated rotation workflows for many secret types.",
    tags: ["secrets", "rotation"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A REST API should allow only authenticated app users to call specific endpoints. Which design is most appropriate?",
    choices: [
      "Use API Gateway authorizer with Cognito-issued tokens",
      "Expose API publicly and trust client-side checks",
      "Allow unauthenticated calls and filter later in logs",
      "Use CloudFront cache invalidation only",
    ],
    correct: [0],
    rationale: "Token-based authorization at API Gateway enforces authenticated endpoint access.",
    tags: ["api gateway", "cognito", "authorization"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A regulated team requires that only specific principals can use a KMS key for decrypt operations. What control is critical?",
    choices: ["KMS key policy and grants", "CloudFront cache policy", "Route 53 health checks", "CodePipeline stage transitions"],
    correct: [0],
    rationale: "KMS key policies and grants define explicit principal usage permissions.",
    tags: ["kms", "key policy"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An ECS task fails to read a secret because it lacks permissions. Which IAM entity should be updated?",
    choices: ["Task role", "Service-linked role for Auto Scaling", "Root user", "User pool app client"],
    correct: [0],
    rationale: "Task role permissions control runtime access for ECS task workloads.",
    tags: ["ecs", "task role", "iam"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which actions improve data-in-transit security for public APIs? (Choose TWO.)",
    choices: [
      "Enforce HTTPS/TLS for client connections",
      "Use valid certificates via AWS Certificate Manager",
      "Allow plaintext HTTP for mobile clients",
      "Disable certificate renewal automation permanently",
    ],
    correct: [0, 1],
    rationale: "TLS enforcement and managed certificate lifecycle are core transit security controls.",
    tags: ["tls", "acm", "api security"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A Lambda function should access an RDS database without storing static credentials in code. Which approach is BEST?",
    choices: [
      "Retrieve credentials from Secrets Manager at runtime using IAM role",
      "Place credentials in Lambda source package",
      "Store credentials in CloudWatch dashboard text widgets",
      "Use root database credentials shared across teams",
    ],
    correct: [0],
    rationale: "Runtime retrieval from Secrets Manager with role-based access avoids hardcoded secrets.",
    tags: ["lambda", "rds", "secrets manager"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants temporary developer access to production resources without long-lived IAM users. Which solution fits best?",
    choices: ["Federated access with role assumption and short-lived credentials", "Create shared IAM user passwords", "Use root credentials with MFA shared by team", "Expose production endpoints publicly"],
    correct: [0],
    rationale: "Federation plus STS role assumption reduces risk from long-lived credentials.",
    tags: ["federation", "sts", "temporary credentials"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which controls reduce accidental data exposure in S3 application buckets? (Choose TWO.)",
    choices: [
      "Enable Block Public Access and restrictive bucket policies",
      "Use least-privilege IAM on accessing roles",
      "Store sensitive objects in publicly readable prefixes",
      "Allow wildcard principal access in bucket policy",
    ],
    correct: [0, 1],
    rationale:
      "Public access blocking and least-privilege identity access are foundational S3 security controls.",
    tags: ["s3 security", "bucket policy", "least privilege"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An API team needs to inspect suspicious authentication failures and identify the IAM principal making denied calls. Which service should they query first?",
    choices: ["AWS CloudTrail", "AWS AppConfig", "Amazon ElastiCache", "AWS Budgets"],
    correct: [0],
    rationale: "CloudTrail logs include caller identity and API action details for denied requests.",
    tags: ["cloudtrail", "iam troubleshooting"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team must centrally scan app dependencies and container images for vulnerabilities before deployment. Which AWS service should be integrated?",
    choices: ["Amazon Inspector", "Amazon Route 53", "AWS Transfer Family", "Amazon SES"],
    correct: [0],
    rationale: "Inspector provides vulnerability management for workloads and images.",
    tags: ["inspector", "devsecops"],
  },
];

const deploymentQuestions = [
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants an AWS-native CI/CD pipeline that runs tests before deployment. Which service orchestrates the end-to-end stages?",
    choices: ["AWS CodePipeline", "AWS CodeArtifact", "AWS Systems Manager", "Amazon EventBridge Pipes"],
    correct: [0],
    rationale: "CodePipeline orchestrates source, build, test, and deploy stages in AWS-native CI/CD.",
    tags: ["codepipeline", "cicd"],
  },
  {
    domain: "D3",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which AWS service runs buildspec-defined build and test commands for application artifacts?",
    choices: ["AWS CodeBuild", "AWS CodeDeploy", "Amazon CloudWatch", "AWS Config"],
    correct: [0],
    rationale: "CodeBuild executes build jobs and test commands in managed build environments.",
    tags: ["codebuild", "buildspec"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Lambda function release should shift 10% traffic first, then 100% if healthy. Which service manages this progressive deployment natively?",
    choices: ["AWS CodeDeploy", "AWS App Mesh", "AWS Global Accelerator", "Amazon SQS"],
    correct: [0],
    rationale: "CodeDeploy supports canary and linear traffic shifting for Lambda deployments.",
    tags: ["codedeploy", "lambda", "canary"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A production pipeline must prevent bad releases. Which controls should be added? (Choose TWO.)",
    choices: [
      "Automated test gates before deploy stages",
      "CloudWatch alarm-based rollback criteria",
      "Manual production patching outside pipeline",
      "Bypass approval for all high-risk changes",
    ],
    correct: [0, 1],
    rationale:
      "Test gates and rollback alarms reduce deployment risk and automate recovery from failed releases.",
    tags: ["pipeline gating", "rollback", "devops"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A serverless app is defined with template-driven infrastructure and function code packaging. Which framework is purpose-built for this?",
    choices: ["AWS SAM", "AWS Shield", "Amazon Athena", "Amazon MQ"],
    correct: [0],
    rationale: "AWS SAM extends CloudFormation for serverless application build and deployment workflows.",
    tags: ["sam", "serverless deployment"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs repeatable infrastructure changes with automatic rollback on stack failure. Which service is most appropriate?",
    choices: ["AWS CloudFormation", "AWS CodeStar Notifications", "Amazon CloudFront", "Amazon EFS"],
    correct: [0],
    rationale: "CloudFormation provides declarative infrastructure with built-in rollback behavior.",
    tags: ["cloudformation", "iac"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A deployment requires zero-downtime replacement of ECS tasks behind a load balancer with quick rollback. Which strategy is best?",
    choices: [
      "Blue/green deployment with health-based traffic shifting",
      "In-place updates on a single running task",
      "Manual container restart during peak traffic",
      "Disable health checks before update",
    ],
    correct: [0],
    rationale: "Blue/green with health checks supports safe cutover and fast rollback.",
    tags: ["ecs", "blue green", "deployment"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which artifact practices improve deployment traceability and rollback? (Choose TWO.)",
    choices: [
      "Version artifacts immutably",
      "Store artifact metadata with commit/build identifiers",
      "Overwrite the same artifact key each release",
      "Delete previous releases immediately after deploy",
    ],
    correct: [0, 1],
    rationale: "Immutable versioning and build metadata enable deterministic rollback and auditing.",
    tags: ["artifact management", "release traceability"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A pipeline should start automatically on new commits to the main branch in AWS-native source control. Which source action is appropriate?",
    choices: ["CodeCommit trigger in CodePipeline", "Route 53 health check", "CloudTrail log file validation", "KMS key rotation"],
    correct: [0],
    rationale: "CodePipeline integrates source triggers from CodeCommit for automated executions.",
    tags: ["codecommit", "codepipeline"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A Lambda deployment succeeded but new version errors increased sharply. Which setup enables automatic rollback during rollout?",
    choices: [
      "CodeDeploy deployment with CloudWatch alarms",
      "Direct alias update with no health checks",
      "Manual traffic shifting from CLI only",
      "Disable CloudWatch metrics during release",
    ],
    correct: [0],
    rationale: "CodeDeploy can monitor alarms and automatically roll back failing Lambda releases.",
    tags: ["lambda deploy", "rollback", "cloudwatch alarms"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which stage is typically responsible for executing unit tests in a CodePipeline workflow?",
    choices: ["Build/test stage using CodeBuild", "Source stage", "Manual approval stage only", "Artifact retention stage"],
    correct: [0],
    rationale: "Unit tests commonly run in CodeBuild during build/test stages.",
    tags: ["codebuild", "testing"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team wants high confidence before production release. Which pre-deployment tests are most useful? (Choose TWO.)",
    choices: [
      "Integration tests against a staging environment",
      "Smoke tests after deployment to target stage",
      "Only lint checks with no runtime validation",
      "Skipping dependency compatibility tests",
    ],
    correct: [0, 1],
    rationale: "Integration and smoke tests validate behavior in realistic runtime conditions.",
    tags: ["deployment testing", "integration tests"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which deployment pattern limits blast radius by exposing only a small subset of users to a new version first?",
    choices: ["Canary deployment", "Big-bang deployment", "Manual in-place patch", "All-at-once cutover"],
    correct: [0],
    rationale: "Canary rollouts minimize risk by shifting limited traffic first.",
    tags: ["canary", "progressive delivery"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs dynamic configuration updates without redeploying application binaries. Which service should be used?",
    choices: ["AWS AppConfig", "AWS CodeCommit", "Amazon S3 Glacier", "AWS Backup"],
    correct: [0],
    rationale: "AppConfig supports runtime configuration and feature flag rollout without binary redeploy.",
    tags: ["appconfig", "configuration"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which practices improve infrastructure deployment safety with CloudFormation? (Choose TWO.)",
    choices: [
      "Use change sets before execution",
      "Apply stack policies or protections for critical resources",
      "Make direct console edits outside IaC process",
      "Disable rollback to keep failed partial changes",
    ],
    correct: [0, 1],
    rationale: "Change sets and protective policies reduce accidental destructive IaC changes.",
    tags: ["cloudformation", "change sets"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A release process requires human approval before production deploy but should remain automated otherwise. Which control should be added?",
    choices: ["Manual approval action in CodePipeline", "Disable production stage", "Run deployment from developer laptop", "Increase Lambda memory"],
    correct: [0],
    rationale: "Manual approval actions provide explicit governance checkpoints in automated pipelines.",
    tags: ["codepipeline", "release governance"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An application package built on one machine behaves differently in pipeline builds. What most directly prevents this drift?",
    choices: [
      "Use reproducible, containerized build environments in CodeBuild",
      "Build artifacts manually on developer machines",
      "Skip dependency locking",
      "Disable tests to speed packaging",
    ],
    correct: [0],
    rationale: "Standardized build environments and locked dependencies improve reproducibility.",
    tags: ["codebuild", "reproducibility"],
  },
];

const troubleshootQuestions = [
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Lambda-backed API intermittently returns 502 errors. Which step should be performed first for root cause isolation?",
    choices: [
      "Inspect Lambda CloudWatch logs and metrics around failed request timestamps",
      "Delete the API stage",
      "Disable all retries",
      "Increase S3 lifecycle expiration",
    ],
    correct: [0],
    rationale: "Correlating request failures with function logs/metrics is the fastest first diagnostic step.",
    tags: ["lambda", "cloudwatch", "troubleshooting"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A distributed request path spans API Gateway, Lambda, and DynamoDB. Which service helps trace end-to-end latency breakdown?",
    choices: ["AWS X-Ray", "AWS Budgets", "AWS CodeArtifact", "Amazon Route 53"],
    correct: [0],
    rationale: "X-Ray provides trace segments and service maps for distributed latency analysis.",
    tags: ["x-ray", "latency"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An SQS consumer Lambda is repeatedly timing out and messages return to the queue. Which actions are most appropriate? (Choose TWO.)",
    choices: [
      "Increase function timeout or optimize processing duration",
      "Set queue visibility timeout greater than function runtime",
      "Reduce visibility timeout below average runtime",
      "Disable dead-letter queues",
    ],
    correct: [0, 1],
    rationale: "Function timeout and visibility timeout must be aligned to prevent premature message reappearance.",
    tags: ["sqs", "lambda", "visibility timeout"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to quickly query JSON logs for all requests with statusCode >= 500 in the last hour. Which tool is best suited?",
    choices: ["CloudWatch Logs Insights", "AWS Backup", "Amazon Kinesis Data Firehose", "AWS CodeDeploy"],
    correct: [0],
    rationale: "Logs Insights is built for interactive querying and analysis of CloudWatch Logs data.",
    tags: ["logs insights", "operability"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A Lambda function has high duration and high memory utilization under load. Which optimization is most direct first step?",
    choices: [
      "Increase memory allocation and re-benchmark duration/cost",
      "Disable metrics to reduce overhead",
      "Replace CloudWatch alarms with manual monitoring",
      "Move logs to a different region",
    ],
    correct: [0],
    rationale: "Lambda memory setting affects available CPU and often improves runtime performance.",
    tags: ["lambda optimization", "performance"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A DynamoDB workload experiences throttling due to hot partition keys. What is the BEST long-term fix?",
    choices: [
      "Redesign partition key to distribute traffic more evenly",
      "Increase CloudTrail retention",
      "Add Route 53 weighted routing",
      "Disable conditional writes",
    ],
    correct: [0],
    rationale: "Hot-key issues are primarily data model/access pattern problems requiring partition redesign.",
    tags: ["dynamodb", "hot partition", "optimization"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "Which observability practices improve production troubleshooting speed? (Choose TWO.)",
    choices: [
      "Use structured logs with correlation/request IDs",
      "Publish custom business and technical metrics",
      "Log only fatal errors without context",
      "Disable tracing in production permanently",
    ],
    correct: [0, 1],
    rationale: "Structured telemetry and metrics make fault isolation faster and more reliable.",
    tags: ["observability", "structured logs", "metrics"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "API latency increases sharply when a downstream service is slow. Which architecture change best protects the API response path?",
    choices: [
      "Introduce asynchronous queue-based processing for non-blocking tasks",
      "Increase DNS TTL",
      "Disable API throttling",
      "Turn off CloudWatch alarms",
    ],
    correct: [0],
    rationale: "Asynchronous offloading prevents downstream slowness from blocking API response time.",
    tags: ["asynchronous", "latency optimization"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A new release increased error rates only for one API route. Which approach best isolates root cause quickly?",
    choices: [
      "Compare route-specific logs/metrics before and after deployment using deployment markers",
      "Rollback all unrelated services immediately without analysis",
      "Purge all historical logs",
      "Disable route monitoring to reduce noise",
    ],
    correct: [0],
    rationale: "Route-specific telemetry correlated with deployment events enables targeted root cause analysis.",
    tags: ["root cause analysis", "deployment diagnostics"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants automatic notification when Lambda error rate exceeds threshold for 5 minutes. Which setup is needed?",
    choices: ["CloudWatch alarm on Lambda Errors metric with notification action", "CloudTrail digest files only", "S3 lifecycle transitions", "CodeCommit branch protection"],
    correct: [0],
    rationale: "CloudWatch alarms trigger notifications based on metric thresholds over defined periods.",
    tags: ["cloudwatch alarms", "lambda errors"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team needs to optimize application cost without reducing reliability. Which actions are appropriate? (Choose TWO.)",
    choices: [
      "Right-size Lambda memory based on performance testing",
      "Use caching to reduce repeated expensive downstream calls",
      "Disable retries for all transient failures",
      "Remove dead-letter queues to save minimal storage cost",
    ],
    correct: [0, 1],
    rationale:
      "Rightsizing and cache optimization reduce compute and dependency costs while preserving reliability patterns.",
    tags: ["cost optimization", "lambda", "caching"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A production incident involves unauthorized API calls from an unexpected principal. Which logs should be checked first?",
    choices: ["CloudTrail events for API actions and caller identity", "CodeBuild artifact logs", "S3 inventory reports", "Route 53 query logs only"],
    correct: [0],
    rationale: "CloudTrail provides the principal identity and API call context needed for investigation.",
    tags: ["cloudtrail", "security incident"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to identify the top slow DynamoDB queries by request path in application logs. What should they do?",
    choices: [
      "Log request path and timing as structured fields and query with Logs Insights",
      "Disable application logs to reduce noise",
      "Store logs only in local temp files",
      "Use Route 53 weighted routing",
    ],
    correct: [0],
    rationale: "Structured logging plus Logs Insights enables targeted latency analysis by path.",
    tags: ["logs insights", "dynamodb", "performance"],
  },
];

const questionBankSource = [
  ...developmentQuestions,
  ...securityQuestions,
  ...deploymentQuestions,
  ...troubleshootQuestions,
];

export const questionBank = questionBankSource.map((question, index) => ({
  id: `DVA${String(index + 1).padStart(3, "0")}`,
  ...question,
}));

export const inferRules = [
  {
    domain: "D1",
    keywords: [
      "lambda",
      "api",
      "dynamodb",
      "sqs",
      "sns",
      "eventbridge",
      "step functions",
      "idempotent",
      "workflow",
      "serverless",
      "event",
      "async",
    ],
  },
  {
    domain: "D2",
    keywords: [
      "iam",
      "role",
      "policy",
      "cognito",
      "kms",
      "secrets",
      "parameter",
      "encryption",
      "token",
      "auth",
      "sts",
      "least privilege",
    ],
  },
  {
    domain: "D3",
    keywords: [
      "deploy",
      "pipeline",
      "codebuild",
      "codedeploy",
      "codepipeline",
      "cloudformation",
      "sam",
      "artifact",
      "canary",
      "blue green",
      "release",
      "rollback",
    ],
  },
  {
    domain: "D4",
    keywords: [
      "troubleshoot",
      "x-ray",
      "cloudwatch",
      "logs",
      "alarm",
      "latency",
      "throttle",
      "optimization",
      "metrics",
      "root cause",
      "performance",
      "debug",
    ],
  },
];

export const defaultInferDomain = "D1";

export const coachTopicPlaceholder =
  "Example: Explain how to build an idempotent Lambda + SQS workflow and troubleshoot duplicate processing issues.";

export const dvaC02Course = {
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
