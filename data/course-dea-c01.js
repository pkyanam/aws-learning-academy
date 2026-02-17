export const examMeta = {
  certificate: "AWS Certified Data Engineer - Associate",
  code: "DEA-C01",
  versionDate: "December 2025 (Exam Guide v1.1)",
  durationMinutes: 130,
  questionCount: 65,
  passingScore: 720,
  costUsd: 150,
  language: "English",
  targetRole:
    "Data engineers who ingest, transform, secure, and operationalize data workloads on AWS for analytics and downstream applications.",
  quickFacts: [
    "DEA-C01 is scenario-heavy and emphasizes practical pipeline design, troubleshooting, and governance decisions.",
    "Domain 1 (Data Ingestion and Transformation) carries the highest weight on the exam.",
    "Strong outcomes come from choosing managed, observable, and secure data patterns with clear cost/performance tradeoffs.",
  ],
};

export const domainBlueprint = [
  {
    id: "D1",
    name: "Data Ingestion and Transformation",
    weight: 34,
    mission:
      "Ingest, transform, and orchestrate data from batch and streaming sources into reliable, reusable datasets.",
    tasks: [
      {
        id: "1.1",
        title: "Ingest data",
        focus: [
          "Select ingestion patterns for batch, streaming, and CDC workloads.",
          "Capture data durably and replay safely when failures occur.",
          "Integrate source systems with managed AWS ingestion services.",
        ],
      },
      {
        id: "1.2",
        title: "Transform and process data",
        focus: [
          "Build scalable transformations using SQL, Spark, or serverless ETL jobs.",
          "Apply schema handling, cleansing, and enrichment patterns.",
          "Produce curated datasets optimized for analytics and consumption.",
        ],
      },
      {
        id: "1.3",
        title: "Orchestrate data pipelines",
        focus: [
          "Coordinate dependencies, retries, and conditional workflow branches.",
          "Schedule and trigger pipelines from events and time-based controls.",
          "Design idempotent processing for repeatable operations.",
        ],
      },
      {
        id: "1.4",
        title: "Apply programming concepts",
        focus: [
          "Implement robust error handling and logging in data pipeline code.",
          "Use modular code patterns and libraries for reusable ETL components.",
          "Apply performance-aware coding practices in data processing jobs.",
        ],
      },
    ],
  },
  {
    id: "D2",
    name: "Data Store Management",
    weight: 26,
    mission:
      "Design and manage data stores that balance query performance, durability, lifecycle, and governance requirements.",
    tasks: [
      {
        id: "2.1",
        title: "Choose and design data stores",
        focus: [
          "Map access patterns to lake, warehouse, relational, and NoSQL services.",
          "Optimize data layout with partitioning, compression, and indexing strategies.",
          "Choose table formats and metadata controls appropriate to workload needs.",
        ],
      },
      {
        id: "2.2",
        title: "Manage data lifecycle",
        focus: [
          "Implement retention, archival, and expiration controls by policy.",
          "Use storage tiers and lifecycle transitions to reduce cost.",
          "Preserve recoverability through versioning, backups, and replication.",
        ],
      },
      {
        id: "2.3",
        title: "Ensure data quality and consistency",
        focus: [
          "Apply quality checks for completeness, uniqueness, and freshness.",
          "Handle schema evolution and compatibility across producers and consumers.",
          "Prevent duplicate or corrupted records through deterministic processing.",
        ],
      },
      {
        id: "2.4",
        title: "Enable data access patterns",
        focus: [
          "Support analytical, ad hoc, and near-real-time query workloads.",
          "Improve performance through caching, query tuning, and right-sized compute.",
          "Expose governed datasets for diverse consumer teams.",
        ],
      },
    ],
  },
  {
    id: "D3",
    name: "Data Operations and Support",
    weight: 22,
    mission:
      "Operate data platforms with observability, troubleshooting, automation, and continuous performance tuning.",
    tasks: [
      {
        id: "3.1",
        title: "Operationalize data pipelines",
        focus: [
          "Deploy repeatable pipeline configurations across environments.",
          "Capture telemetry and define SLO-aligned alarms for reliability.",
          "Build runbooks and remediation workflows for common failure modes.",
        ],
      },
      {
        id: "3.2",
        title: "Analyze data and improve performance",
        focus: [
          "Investigate query plans and runtime bottlenecks.",
          "Tune job configuration, partitioning, and resource allocation.",
          "Balance throughput, latency, and cost targets.",
        ],
      },
      {
        id: "3.3",
        title: "Troubleshoot and debug data pipelines",
        focus: [
          "Isolate issues using logs, metrics, and dependency context.",
          "Resolve ingestion lag, schema conflicts, and failed transformations.",
          "Recover cleanly from partial failures with replay-safe controls.",
        ],
      },
      {
        id: "3.4",
        title: "Automate workload processing",
        focus: [
          "Use event-driven and scheduled automation for repetitive operations.",
          "Implement retries, dead-letter handling, and fallback paths.",
          "Reduce manual intervention with managed orchestration services.",
        ],
      },
    ],
  },
  {
    id: "D4",
    name: "Data Security and Governance",
    weight: 18,
    mission:
      "Protect data assets with fine-grained access control, encryption, auditability, and governance guardrails.",
    tasks: [
      {
        id: "4.1",
        title: "Implement authentication and authorization",
        focus: [
          "Apply least-privilege IAM and role-based access boundaries.",
          "Enforce cross-account and federated access policies safely.",
          "Use fine-grained dataset permissions for governed sharing.",
        ],
      },
      {
        id: "4.2",
        title: "Protect data",
        focus: [
          "Encrypt data at rest and in transit with controlled key usage.",
          "Protect secrets and credentials used by pipelines.",
          "Minimize data exposure in storage and processing paths.",
        ],
      },
      {
        id: "4.3",
        title: "Apply data governance and compliance controls",
        focus: [
          "Classify and tag sensitive data consistently.",
          "Enforce retention, residency, and usage requirements.",
          "Enable policy-driven access and data handling controls.",
        ],
      },
      {
        id: "4.4",
        title: "Audit data and activity",
        focus: [
          "Capture immutable audit evidence for API and data-access events.",
          "Maintain traceability of data changes and pipeline actions.",
          "Support incident investigation and compliance reporting.",
        ],
      },
      {
        id: "4.5",
        title: "Monitor and improve security posture",
        focus: [
          "Aggregate findings and prioritize risk remediation across accounts.",
          "Detect anomalous access patterns and policy drift early.",
          "Automate security guardrails and corrective actions.",
        ],
      },
    ],
  },
];

export const serviceAtlas = [
  {
    name: "Amazon S3",
    usage: "Durable object storage for raw, curated, and analytics-ready data lake zones.",
    examHint: "Partitioning, lifecycle, versioning, and replication decisions around S3 appear frequently.",
  },
  {
    name: "AWS Glue",
    usage: "Serverless ETL and data integration service for batch and streaming transformations.",
    examHint: "Glue jobs, crawlers, Data Catalog, and bookmarks are core DEA-C01 topics.",
  },
  {
    name: "AWS Glue Data Catalog",
    usage: "Centralized metadata repository for datasets, schemas, and table definitions.",
    examHint: "Catalog consistency and schema governance are tested in multi-engine analytics scenarios.",
  },
  {
    name: "AWS Glue Data Quality",
    usage: "Managed rules and checks for dataset quality validation.",
    examHint: "Use Data Quality when the scenario asks for managed quality scorecards and gating checks.",
  },
  {
    name: "Amazon Kinesis Data Streams",
    usage: "Real-time streaming ingestion with shard-based scaling and replay capabilities.",
    examHint: "Know partition keys, shard scaling, and retention tradeoffs.",
  },
  {
    name: "Amazon Data Firehose",
    usage: "Fully managed delivery stream service to load streaming data into targets.",
    examHint: "Firehose is common when minimal-ops buffering, transformation, and delivery are needed.",
  },
  {
    name: "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
    usage: "Managed Kafka clusters for high-throughput event ingestion and streaming pipelines.",
    examHint: "MSK is typically chosen when native Kafka compatibility is required.",
  },
  {
    name: "AWS Database Migration Service (AWS DMS)",
    usage: "Batch and continuous data replication for migrations and CDC pipelines.",
    examHint: "DMS is a standard answer for CDC from relational engines with minimal source impact.",
  },
  {
    name: "Amazon EMR",
    usage: "Managed big data platform for Spark/Hadoop workloads at scale.",
    examHint: "EMR fits scenarios requiring deep Spark control and large-scale custom processing.",
  },
  {
    name: "Amazon Athena",
    usage: "Serverless SQL query service for data in S3.",
    examHint: "Athena is a common fit for ad hoc SQL analysis over governed lake data.",
  },
  {
    name: "Amazon Redshift",
    usage: "Managed cloud data warehouse for high-performance analytics.",
    examHint: "Redshift appears in workload design and tuning questions with complex analytical queries.",
  },
  {
    name: "Amazon Redshift Spectrum",
    usage: "Query S3 data directly from Redshift using external tables.",
    examHint: "Spectrum is relevant when joining warehouse data with lake data.",
  },
  {
    name: "AWS Lake Formation",
    usage: "Centralized lake governance with fine-grained access controls.",
    examHint: "Lake Formation is key when row/column-level and cross-account lake access is required.",
  },
  {
    name: "AWS Step Functions",
    usage: "Stateful workflow orchestration for multi-step data pipelines.",
    examHint: "Choose Step Functions for retry-aware orchestration across services.",
  },
  {
    name: "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)",
    usage: "Managed Apache Airflow environment for DAG-based workflow orchestration.",
    examHint: "MWAA is often selected when teams already use Airflow-based scheduling patterns.",
  },
  {
    name: "Amazon EventBridge",
    usage: "Event routing and schedule triggers for pipeline execution and automation.",
    examHint: "EventBridge is ideal for schedule/event-driven triggers with low operational overhead.",
  },
  {
    name: "AWS Lambda",
    usage: "Serverless compute for lightweight transformation and pipeline glue logic.",
    examHint: "Lambda is a frequent answer for event-based transformation steps and control-plane automation.",
  },
  {
    name: "Amazon CloudWatch",
    usage: "Metrics, logs, alarms, and dashboards for workload observability.",
    examHint: "CloudWatch alarms and logs are primary tools for pipeline operations and troubleshooting.",
  },
  {
    name: "AWS CloudTrail",
    usage: "Audit logging of API activity across accounts and services.",
    examHint: "CloudTrail is the default service for who-did-what evidence in governance scenarios.",
  },
  {
    name: "AWS CloudTrail Lake",
    usage: "Queryable event data store for audit and investigation analytics.",
    examHint: "CloudTrail Lake fits requirements for long-term, queryable audit records.",
  },
  {
    name: "AWS Identity and Access Management (IAM)",
    usage: "Identity and policy controls for users, roles, and service access.",
    examHint: "Least-privilege role design is heavily tested in DEA-C01 security questions.",
  },
  {
    name: "AWS Key Management Service (AWS KMS)",
    usage: "Managed key lifecycle and policy controls for encryption.",
    examHint: "KMS key policy and grant behavior are key for secure data platform design.",
  },
  {
    name: "AWS Secrets Manager",
    usage: "Secure storage and rotation of secrets and credentials.",
    examHint: "Use Secrets Manager for automated credential rotation and controlled retrieval.",
  },
  {
    name: "Amazon Macie",
    usage: "Sensitive data discovery and classification for S3.",
    examHint: "Macie is the best fit for managed PII discovery and S3 data risk visibility.",
  },
  {
    name: "Amazon DynamoDB",
    usage: "Serverless NoSQL store for low-latency key-value and document workloads.",
    examHint: "DynamoDB appears in event/state designs and operational metadata patterns.",
  },
  {
    name: "Amazon RDS",
    usage: "Managed relational database service with backup and replication options.",
    examHint: "RDS appears in source-system ingestion and CDC design scenarios.",
  },
  {
    name: "Amazon OpenSearch Service",
    usage: "Search and analytics engine for log and event exploration.",
    examHint: "OpenSearch fits near-real-time search analytics and observability use cases.",
  },
];

export const prepPlaybooks = [
  {
    title: "DEA-C01 Question Triage",
    steps: [
      "First pass: solve direct service-fit and data-pattern questions quickly.",
      "Mark long pipeline failure scenarios and return after securing easier points.",
      "For ambiguous options, eliminate answers that increase operational burden without clear benefit.",
      "Validate final answers against reliability, security, and cost constraints in the prompt.",
    ],
  },
  {
    title: "Data Pipeline Design Checklist",
    steps: [
      "Confirm ingestion mode (batch, stream, CDC) and replay requirements.",
      "Choose transformation engine based on latency, scale, and team skill profile.",
      "Define schema governance, partitioning, and quality checks before production cutover.",
      "Add observability and failure-handling controls before expanding pipeline scope.",
    ],
  },
  {
    title: "Security + Governance Review",
    steps: [
      "Apply least privilege and temporary credentials to every producer/consumer path.",
      "Enforce encryption in transit and at rest with explicit key ownership decisions.",
      "Capture audit trails for control-plane and data-plane activities.",
      "Continuously scan and classify sensitive data to prevent policy drift.",
    ],
  },
];

export const topicSeeds = [
  {
    topic: "batch vs streaming ingestion",
    summary:
      "High-yield DEA decisions begin with choosing ingestion patterns that match latency, replay, ordering, and cost needs.",
    linkedServices: ["Amazon Kinesis Data Streams", "Amazon Data Firehose", "AWS Database Migration Service (AWS DMS)", "AWS Glue"],
  },
  {
    topic: "lakehouse metadata and formats",
    summary:
      "Strong data platform designs depend on table format, schema evolution, and metadata governance choices.",
    linkedServices: ["AWS Glue Data Catalog", "AWS Lake Formation", "Amazon Athena", "Amazon Redshift Spectrum"],
  },
  {
    topic: "orchestration and reliability",
    summary:
      "Operationally safe pipelines combine retries, idempotency, and deterministic workflow orchestration.",
    linkedServices: ["AWS Step Functions", "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)", "Amazon EventBridge", "AWS Lambda"],
  },
  {
    topic: "query and job performance tuning",
    summary:
      "Partition strategy, file sizing, SQL tuning, and resource right-sizing drive practical data workload performance gains.",
    linkedServices: ["Amazon Athena", "Amazon Redshift", "Amazon EMR", "Amazon CloudWatch"],
  },
  {
    topic: "governed data access",
    summary:
      "Enterprises need fine-grained access control, encryption, and auditable activity trails across the full data lifecycle.",
    linkedServices: ["AWS Identity and Access Management (IAM)", "AWS Key Management Service (AWS KMS)", "AWS Lake Formation", "AWS CloudTrail"],
  },
];

const ingestionQuestions = [
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to ingest clickstream events with sub-second latency and replay data for up to 7 days. Which service is the best fit?",
    choices: ["Amazon Kinesis Data Streams", "Amazon Data Firehose", "AWS DataSync", "Amazon S3 Batch Operations"],
    correct: [0],
    rationale: "Kinesis Data Streams provides low-latency ingestion with retention and replay support.",
    tags: ["kinesis", "streaming", "replay"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company wants near-real-time delivery of application logs to Amazon S3 with minimal operational management. Which service should be used?",
    choices: ["Amazon Data Firehose", "Amazon EMR", "AWS Glue crawler", "Amazon EC2 Auto Scaling"],
    correct: [0],
    rationale: "Data Firehose is a fully managed ingestion service for streaming data delivery to destinations like S3.",
    tags: ["firehose", "s3", "managed ingestion"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A migration project requires ongoing replication of changed rows from an on-premises PostgreSQL database into AWS while source workloads stay online. Which options are appropriate? (Choose TWO.)",
    choices: [
      "Use AWS DMS with CDC enabled",
      "Create a full export once and stop replication",
      "Use AWS Schema Conversion Tool for heterogeneous schema conversion where needed",
      "Run nightly manual CSV uploads only",
    ],
    correct: [0, 2],
    rationale: "DMS handles ongoing CDC, and SCT assists schema conversion for heterogeneous migrations.",
    tags: ["dms", "cdc", "sct"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Glue ETL job must avoid reprocessing files that were already transformed in previous runs. Which feature should be enabled?",
    choices: ["AWS Glue job bookmarks", "AWS Glue DataBrew recipes", "Redshift sort keys", "S3 requester pays"],
    correct: [0],
    rationale: "Glue job bookmarks track previously processed data and help incremental processing.",
    tags: ["glue", "incremental", "bookmarks"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A pipeline receives out-of-order IoT events. Which design choices improve downstream correctness? (Choose TWO.)",
    choices: [
      "Include event-time fields and perform windowed processing",
      "Use idempotent upsert logic in the sink layer",
      "Rely only on ingestion timestamp for business ordering",
      "Disable late-arriving event handling",
    ],
    correct: [0, 1],
    rationale: "Event-time semantics and idempotent writes reduce ordering and duplication issues.",
    tags: ["stream processing", "event time", "idempotency"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants to orchestrate a multi-step ETL pipeline with retries and branching based on validation results. Which service is most suitable?",
    choices: ["AWS Step Functions", "AWS Global Accelerator", "Amazon Route 53", "Amazon S3 Glacier"],
    correct: [0],
    rationale: "Step Functions provides stateful branching and retry behavior for multi-step workflows.",
    tags: ["orchestration", "step functions", "retries"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team already uses Apache Airflow DAGs and wants managed infrastructure with minimal migration of orchestration logic. Which service is best?",
    choices: [
      "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)",
      "AWS CloudFormation StackSets",
      "AWS Backup",
      "Amazon CloudFront",
    ],
    correct: [0],
    rationale: "MWAA provides managed Airflow environments while preserving DAG-based patterns.",
    tags: ["mwaa", "airflow", "orchestration"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A Spark ETL job on EMR frequently fails with out-of-memory errors during wide transformations. Which action is most direct?",
    choices: [
      "Tune executor memory and partitioning strategy",
      "Increase Route 53 TTL values",
      "Enable S3 static website hosting",
      "Reduce CloudTrail retention",
    ],
    correct: [0],
    rationale: "Executor resource tuning and partition adjustments directly address Spark memory pressure.",
    tags: ["emr", "spark", "tuning"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service is primarily used to discover schema and populate metadata tables in the AWS Glue Data Catalog?",
    choices: ["AWS Glue crawlers", "Amazon SNS", "AWS Trusted Advisor", "AWS Artifact"],
    correct: [0],
    rationale: "Glue crawlers infer schema and register table metadata in the Data Catalog.",
    tags: ["glue crawler", "catalog"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company wants an event-driven data pipeline that starts ETL after new files land in S3 and retries failed runs automatically. Which components should be used? (Choose TWO.)",
    choices: [
      "Amazon EventBridge rule for S3 object events",
      "AWS Step Functions for retry-aware orchestration",
      "Manual cron jobs on developer laptops",
      "Route 53 geolocation routing",
    ],
    correct: [0, 1],
    rationale: "EventBridge can trigger workflows from S3 events and Step Functions handles retries and state.",
    tags: ["eventbridge", "step functions", "automation"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A transformation step needs a lightweight custom parser that runs for each incoming record from Kinesis. Which compute option is most appropriate?",
    choices: ["AWS Lambda", "Amazon Redshift", "AWS Backup", "Amazon Athena"],
    correct: [0],
    rationale: "Lambda is suited for event-driven per-record or micro-batch transformation logic.",
    tags: ["lambda", "kinesis", "transformation"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to ensure exactly-once delivery semantics into a sink that supports idempotent upserts. Which design principle is most important?",
    choices: [
      "Use deterministic record keys and idempotent write logic",
      "Disable retries on all ingestion steps",
      "Delete failed records without logging",
      "Rely only on best-effort acknowledgments",
    ],
    correct: [0],
    rationale: "Deterministic keys and idempotent writes are core to safe reprocessing behavior.",
    tags: ["idempotency", "exactly-once", "pipeline design"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A pipeline requires ingesting messages from thousands of producers with ordered records per device ID. Which approach is best?",
    choices: [
      "Use Kinesis partition keys based on device ID",
      "Store all events directly in CloudTrail",
      "Use one shared S3 object for all writes",
      "Use AWS Budgets alerts as ingestion control",
    ],
    correct: [0],
    rationale: "Kinesis ordering is maintained per shard/partition key, making device ID keying appropriate.",
    tags: ["kinesis", "ordering", "partition key"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A streaming ETL pipeline must enrich events with reference data that updates hourly. What is the best strategy?",
    choices: [
      "Load reference data into a low-latency lookup store and refresh on schedule",
      "Reprocess all historical events every hour",
      "Disable enrichment to reduce latency",
      "Store reference data only in local files on worker nodes",
    ],
    correct: [0],
    rationale: "Externalized low-latency lookup with controlled refresh avoids expensive full reprocessing.",
    tags: ["stream enrichment", "lookup", "latency"],
  },
  {
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service can capture and deliver Kafka-compatible streaming data without managing broker infrastructure yourself?",
    choices: [
      "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Route 53",
    ],
    correct: [0],
    rationale: "Amazon MSK provides managed Apache Kafka with native protocol compatibility.",
    tags: ["msk", "kafka", "streaming"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A data team wants to reduce pipeline failures caused by malformed input records. Which controls should be added? (Choose TWO.)",
    choices: [
      "Schema validation at ingestion boundaries",
      "Dead-letter queues for invalid records",
      "Disable data quality checks to keep throughput high",
      "Drop all records when any row fails parsing",
    ],
    correct: [0, 1],
    rationale: "Validation plus DLQ patterns isolate bad records while preserving healthy data flow.",
    tags: ["validation", "dlq", "resilience"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A batch job runs daily and depends on three upstream datasets arriving first. Which orchestration capability is most important?",
    choices: ["Explicit dependency management", "Larger S3 object metadata", "CloudFront cache invalidations", "Route 53 health checks"],
    correct: [0],
    rationale: "Dependency management ensures downstream jobs start only after required upstream data is ready.",
    tags: ["orchestration", "dependencies"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company wants to apply lightweight transformations to streaming records before loading into Redshift with minimal custom code. Which service is best?",
    choices: ["Amazon Data Firehose", "AWS Lake Formation", "AWS Backup", "AWS Artifact"],
    correct: [0],
    rationale: "Data Firehose supports managed streaming delivery with optional transformation steps.",
    tags: ["firehose", "redshift", "managed"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A team must orchestrate 50 Glue jobs with fan-out/fan-in patterns and conditional retries when quality checks fail. Which service is most appropriate?",
    choices: ["AWS Step Functions", "Amazon GuardDuty", "AWS Budgets", "Amazon Macie"],
    correct: [0],
    rationale: "Step Functions handles complex workflow states, branching, and retry logic across many tasks.",
    tags: ["step functions", "glue", "workflow"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "During ingestion, duplicate events occasionally occur due to producer retries. Which approach best prevents duplicate downstream records?",
    choices: [
      "Use a deterministic event ID and deduplicate in the write layer",
      "Disable retry policies",
      "Drop all events after first failure",
      "Use larger EC2 instances only",
    ],
    correct: [0],
    rationale: "Deterministic IDs with dedup logic is the reliable pattern for retry-safe ingestion.",
    tags: ["deduplication", "ingestion", "idempotent"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A developer needs to quickly prototype data wrangling transformations with a visual interface before productionizing. Which service helps most?",
    choices: ["AWS Glue DataBrew", "AWS Organizations", "Amazon Route 53", "AWS IAM Access Analyzer"],
    correct: [0],
    rationale: "DataBrew provides a visual workflow for preparing and transforming data quickly.",
    tags: ["databrew", "transformation", "prototype"],
  },
  {
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A pipeline must support replaying 48 hours of streaming records after a downstream outage. Which design choices are valid? (Choose TWO.)",
    choices: [
      "Set stream retention to cover the replay window",
      "Ensure consumers checkpoint progress externally",
      "Delete records immediately after first read",
      "Use only best-effort in-memory buffering",
    ],
    correct: [0, 1],
    rationale: "Replay requires retained source records and reliable consumer progress tracking.",
    tags: ["replay", "retention", "checkpoint"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants SQL-based transformation jobs without managing Spark clusters. Which service is best aligned?",
    choices: ["AWS Glue Studio jobs", "Amazon EC2 with self-managed Hadoop", "AWS Storage Gateway", "AWS Outposts"],
    correct: [0],
    rationale: "Glue provides serverless ETL with SQL and visual authoring options.",
    tags: ["glue", "sql", "serverless etl"],
  },
  {
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A startup wants to ingest app telemetry into S3 every 5 minutes, with optional format conversion to Parquet. Which service is the quickest path?",
    choices: ["Amazon Data Firehose", "Amazon DynamoDB Accelerator", "AWS CloudTrail Lake", "AWS Config"],
    correct: [0],
    rationale: "Firehose provides managed buffering and can convert formats before delivery.",
    tags: ["firehose", "parquet", "s3"],
  },
];

const storeManagementQuestions = [
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An Athena workload scans large S3 datasets and costs are rising. Which change most directly reduces scanned bytes?",
    choices: [
      "Store data in partitioned Parquet format",
      "Increase Lambda memory",
      "Use larger Route 53 TTL values",
      "Disable compression",
    ],
    correct: [0],
    rationale: "Columnar, compressed, partitioned formats reduce Athena scan volume and query cost.",
    tags: ["athena", "partitioning", "parquet"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A warehouse team wants to query both Redshift tables and S3 data in one SQL statement. Which feature should be used?",
    choices: ["Amazon Redshift Spectrum", "AWS Glue crawler only", "S3 object lock", "AWS Backup vault lock"],
    correct: [0],
    rationale: "Redshift Spectrum allows querying external S3 data alongside local Redshift tables.",
    tags: ["redshift", "spectrum", "lakehouse"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A company needs fine-grained access to specific columns in shared lake tables across accounts. Which services should be combined? (Choose TWO.)",
    choices: [
      "AWS Lake Formation permissions",
      "AWS Glue Data Catalog shared metadata",
      "Route 53 private hosted zones",
      "AWS Budgets cost filters",
    ],
    correct: [0, 1],
    rationale: "Lake Formation governs fine-grained permissions, and Glue Catalog provides the shared metadata layer.",
    tags: ["lake formation", "catalog", "column-level security"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data lake stores raw event files that must transition to lower-cost storage after 90 days with occasional retrieval. Which S3 feature should be used?",
    choices: ["S3 lifecycle rules", "S3 Transfer Acceleration", "S3 requester pays", "S3 access points"],
    correct: [0],
    rationale: "Lifecycle rules automate storage class transitions according to retention policy.",
    tags: ["s3 lifecycle", "cost optimization"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A Redshift table with frequent range filters on order_date performs poorly. Which table design change often helps most?",
    choices: ["Choose a sort key aligned to order_date filters", "Enable S3 static hosting", "Use IAM password policy", "Increase CloudTrail retention"],
    correct: [0],
    rationale: "Sort keys help prune blocks and improve scan efficiency for common filter patterns.",
    tags: ["redshift", "sort key", "performance"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants schema evolution support and ACID table semantics on S3-backed analytics tables. Which pattern is most suitable?",
    choices: [
      "Use an open table format such as Apache Iceberg in the lake",
      "Store only CSV files with no metadata catalog",
      "Use Route 53 latency routing",
      "Use IAM users with long-term access keys",
    ],
    correct: [0],
    rationale: "Open table formats like Iceberg provide schema evolution and transaction-like table operations.",
    tags: ["iceberg", "schema evolution", "lakehouse"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team must prevent duplicate records in a curated table loaded from retry-prone upstream jobs. Which approaches help? (Choose TWO.)",
    choices: [
      "Use deterministic primary keys and merge/upsert logic",
      "Track ingestion batch IDs and enforce idempotent loads",
      "Disable job retries globally",
      "Randomize record keys per run",
    ],
    correct: [0, 1],
    rationale: "Deterministic keys and idempotent batch tracking prevent duplicate inserts under retries.",
    tags: ["idempotency", "dedup", "curation"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A business intelligence team runs repeated queries over a frequently reused Athena result set. Which option can reduce repeated query latency and cost?",
    choices: ["Use Athena result reuse when appropriate", "Increase S3 request rate quotas", "Enable CloudTrail insights only", "Use NAT gateway in every subnet"],
    correct: [0],
    rationale: "Athena result reuse can avoid rerunning identical queries and reduce scan costs.",
    tags: ["athena", "cost", "performance"],
  },
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service is the central metadata layer used by Athena, Redshift Spectrum, and Glue jobs for table definitions?",
    choices: ["AWS Glue Data Catalog", "AWS Cost Explorer", "Amazon CloudFront", "AWS Shield"],
    correct: [0],
    rationale: "Glue Data Catalog provides shared table metadata for multiple analytics engines.",
    tags: ["glue catalog", "metadata"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs sub-10 ms reads for session state used by ingestion workers. Which datastore is best fit?",
    choices: ["Amazon DynamoDB", "Amazon S3 Glacier", "Amazon Athena", "AWS Backup"],
    correct: [0],
    rationale: "DynamoDB is optimized for low-latency key-value reads and writes.",
    tags: ["dynamodb", "low latency"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A data lake query pattern filters by customer_id and event_date. Which file layout strategy is generally best?",
    choices: [
      "Partition by commonly filtered dimensions and keep balanced file sizes",
      "Store one giant file per month",
      "Use uncompressed JSON only",
      "Avoid partitioning to simplify design",
    ],
    correct: [0],
    rationale: "Partitioning by common predicates and managing file sizes improve query pruning and parallelism.",
    tags: ["partitioning", "query performance"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data platform team must retain immutable raw records for 7 years while allowing fast analytics on recent data. Which approach best fits?",
    choices: [
      "Use separate raw and curated S3 zones with lifecycle and retention controls",
      "Keep only one mutable table for all use cases",
      "Delete data after 30 days to reduce cost",
      "Store all data in CloudTrail only",
    ],
    correct: [0],
    rationale: "Zoned lake design plus lifecycle policies balances compliance retention and analytics performance.",
    tags: ["data lake", "retention", "governance"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A warehouse has uneven data distribution causing skewed query performance. Which actions can improve this? (Choose TWO.)",
    choices: [
      "Review and adjust Redshift distribution style/key",
      "Analyze query plans and table statistics regularly",
      "Disable compression encodings",
      "Use random DNS failover policies",
    ],
    correct: [0, 1],
    rationale: "Distribution strategy and accurate statistics are critical for balanced Redshift query execution.",
    tags: ["redshift", "distribution key", "optimization"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which storage service is best for frequently accessed structured analytics tables with SQL performance requirements and managed scaling?",
    choices: ["Amazon Redshift", "Amazon S3 Glacier Deep Archive", "AWS Config", "AWS Artifact"],
    correct: [0],
    rationale: "Redshift is purpose-built for managed data warehouse analytics workloads.",
    tags: ["redshift", "data warehouse"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A pipeline writes many tiny Parquet files every minute, and Athena queries are slow. What is the best improvement?",
    choices: ["Compact small files into larger optimal-sized objects", "Increase Route 53 TTL", "Disable Glue crawlers", "Use larger IAM policies"],
    correct: [0],
    rationale: "Too many small files increase metadata overhead and reduce query efficiency.",
    tags: ["athena", "small files", "compaction"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team needs governed cross-team lake access with centralized policy control and least privilege. Which controls should be implemented? (Choose TWO.)",
    choices: [
      "Use Lake Formation grant model with explicit permissions",
      "Use IAM roles scoped to data access personas",
      "Share one admin user credential with all teams",
      "Disable audit logging to reduce overhead",
    ],
    correct: [0, 1],
    rationale: "Lake Formation grants plus scoped IAM roles provide governance and least-privilege controls.",
    tags: ["lake formation", "iam", "governance"],
  },
  {
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A dataset must support slowly changing dimension (SCD) history for downstream reporting. Which model approach is best?",
    choices: ["Use a dimension model that preserves historical versions", "Overwrite dimension records in place without history", "Store data only in CloudWatch", "Disable partitioning"],
    correct: [0],
    rationale: "Historical versioning in dimensional models is required for SCD reporting accuracy.",
    tags: ["data modeling", "scd", "warehouse"],
  },
  {
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which action best protects against accidental object overwrite in an S3-backed data lake zone?",
    choices: ["Enable S3 versioning", "Use Route 53 health checks", "Disable CloudWatch metrics", "Increase NAT gateway count"],
    correct: [0],
    rationale: "S3 versioning preserves prior object versions and supports recovery.",
    tags: ["s3", "versioning", "recovery"],
  },
  {
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A platform uses federated analytics and requires schema consistency across multiple producers. Which practice is most important?",
    choices: [
      "Enforce schema contracts and compatibility validation in the ingestion path",
      "Allow producers to change fields arbitrarily",
      "Disable catalog updates",
      "Use only CSV with no metadata",
    ],
    correct: [0],
    rationale: "Schema contracts and compatibility checks prevent downstream breakage across shared datasets.",
    tags: ["schema governance", "contracts"],
  },
];

const operationsQuestions = [
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Glue job starts failing after a code deployment. What should be reviewed first for fast diagnosis?",
    choices: [
      "CloudWatch Logs for the failed job run",
      "Route 53 hosted zone records",
      "AWS Budgets dashboard",
      "S3 Transfer Acceleration settings",
    ],
    correct: [0],
    rationale: "CloudWatch Logs provides execution-level errors and stack traces for Glue job troubleshooting.",
    tags: ["glue", "cloudwatch logs", "troubleshooting"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A production pipeline should auto-recover from transient downstream API failures. Which controls should be configured? (Choose TWO.)",
    choices: [
      "Exponential backoff retries",
      "Dead-letter handling for unrecoverable events",
      "Immediate pipeline termination on first error with no logs",
      "Disable alerting to reduce noise",
    ],
    correct: [0, 1],
    rationale: "Retries with backoff handle transient failures, and DLQ patterns isolate poison events.",
    tags: ["retries", "dlq", "resilience"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants automated notifications when pipeline lag exceeds 15 minutes. Which setup is most direct?",
    choices: [
      "CloudWatch alarm on lag metric with SNS notifications",
      "S3 lifecycle transitions",
      "Route 53 failover policy",
      "AWS Artifact report export",
    ],
    correct: [0],
    rationale: "CloudWatch alarms plus SNS is the standard pattern for lag alerting and operational notifications.",
    tags: ["lag", "cloudwatch alarm", "sns"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A Spark job runtime doubled after data volume increased. Which action should be taken first?",
    choices: [
      "Review partitioning and shuffle behavior in job metrics",
      "Rotate IAM user passwords",
      "Increase S3 bucket count randomly",
      "Disable CloudTrail",
    ],
    correct: [0],
    rationale: "Partition and shuffle bottlenecks are common causes of Spark runtime regression at scale.",
    tags: ["spark", "performance", "emr"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A daily ETL workflow must stop downstream loads when quality checks fail and notify operators. Which orchestration behavior is needed?",
    choices: [
      "Conditional branching on check outcomes with failure notification steps",
      "Continue all jobs regardless of failures",
      "Run all tasks in parallel with no dependencies",
      "Disable logging to improve throughput",
    ],
    correct: [0],
    rationale: "Branching and controlled failure paths are required for quality gate enforcement.",
    tags: ["quality gates", "orchestration", "operations"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants pipeline deployments to be repeatable across dev, test, and prod. Which practice is most important?",
    choices: [
      "Use infrastructure-as-code and parameterized environment configuration",
      "Edit production resources manually",
      "Store configs only in chat messages",
      "Disable version control for DAGs",
    ],
    correct: [0],
    rationale: "IaC and parameterization provide repeatability and controlled environment promotion.",
    tags: ["iac", "devops", "operationalization"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A data engineering team wants faster incident response for recurring job failures. Which actions improve MTTR? (Choose TWO.)",
    choices: [
      "Create runbooks with common failure signatures and remediation steps",
      "Add structured logs with correlation IDs",
      "Remove all alerts to avoid fatigue",
      "Rely on ad hoc memory of prior incidents",
    ],
    correct: [0, 1],
    rationale: "Runbooks and structured telemetry accelerate diagnosis and standardized remediation.",
    tags: ["runbook", "mttr", "observability"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A scheduled batch pipeline should not start if upstream raw partition arrival is incomplete. Which control should be added?",
    choices: [
      "Pre-run completeness check before downstream execution",
      "Disable partitioning",
      "Force run regardless of missing partitions",
      "Move workload to CloudTrail Lake",
    ],
    correct: [0],
    rationale: "Completeness checks prevent downstream processing on partial upstream data.",
    tags: ["data readiness", "pipeline gating"],
  },
  {
    domain: "D3",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which AWS service is commonly used to visualize operational metrics and set alerts for data jobs?",
    choices: ["Amazon CloudWatch", "Amazon Route 53", "AWS Artifact", "AWS Organizations"],
    correct: [0],
    rationale: "CloudWatch provides metrics, dashboards, and alarms for operational monitoring.",
    tags: ["cloudwatch", "monitoring"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A data pipeline occasionally writes partial outputs when a transform step times out. Which design change is best?",
    choices: [
      "Use staged writes and commit only after successful completion",
      "Write directly into final tables during each step",
      "Disable retries and continue",
      "Shorten timeouts to fail faster only",
    ],
    correct: [0],
    rationale: "Staged writes with atomic promotion prevent consumers from reading partial results.",
    tags: ["atomic writes", "data integrity"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to automate nightly compaction jobs on S3-based tables with minimal orchestration overhead. Which trigger is simplest?",
    choices: ["EventBridge schedule", "Route 53 health checks", "AWS WAF rule", "CloudFront invalidation"],
    correct: [0],
    rationale: "EventBridge schedules are simple and managed for recurring automation triggers.",
    tags: ["eventbridge", "automation", "compaction"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A streaming consumer falls behind due to traffic spikes. Which actions can improve throughput? (Choose TWO.)",
    choices: [
      "Increase stream shard capacity or parallel consumer throughput",
      "Optimize consumer processing logic and batch handling",
      "Disable monitoring to reduce overhead",
      "Reduce retention to 1 minute",
    ],
    correct: [0, 1],
    rationale: "Throughput issues are typically addressed by increasing ingestion/consumer parallelism and optimizing processing.",
    tags: ["kinesis", "scaling", "consumer lag"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A critical dashboard depends on a data pipeline with a 30-minute SLA. What should operations configure first?",
    choices: [
      "SLA-aligned alarms and escalation paths",
      "Lower S3 storage class immediately",
      "Disable schema checks",
      "Use static IAM credentials everywhere",
    ],
    correct: [0],
    rationale: "SLA monitoring and escalation are foundational for operating critical pipelines.",
    tags: ["sla", "alarm", "operations"],
  },
  {
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A pipeline has frequent manual reruns due to transient external API failures. Which enhancement reduces manual intervention most?",
    choices: [
      "Introduce automated retries with bounded backoff and circuit-breaker style controls",
      "Disable the external API integration",
      "Route all calls through S3",
      "Store errors in spreadsheets",
    ],
    correct: [0],
    rationale: "Automated failure handling reduces repetitive manual reruns for transient conditions.",
    tags: ["resilience", "automation", "retry"],
  },
  {
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A data team wants to compare the current day's transformed output against yesterday's baseline before publishing. Which operational pattern is best?",
    choices: [
      "Add validation checkpoint step with controlled publish gate",
      "Publish immediately and validate later",
      "Disable metric collection",
      "Use one IAM policy for all services",
    ],
    correct: [0],
    rationale: "Validation gates before publish reduce risk of propagating bad data to consumers.",
    tags: ["validation", "publish gate"],
  },
  {
    domain: "D3",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which tool in CloudWatch supports ad hoc querying of job logs to find recurring error messages?",
    choices: ["CloudWatch Logs Insights", "CloudWatch Synthetics canaries", "CloudTrail Insights", "AWS Glue Studio"],
    correct: [0],
    rationale: "CloudWatch Logs Insights is designed for interactive log analysis and troubleshooting.",
    tags: ["logs insights", "debugging"],
  },
];

const securityQuestions = [
  {
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "A Glue job needs read access to one S3 bucket and write access to another. What is the best security approach?",
    choices: [
      "Attach a least-privilege IAM role to the Glue job",
      "Use root account credentials in job parameters",
      "Grant AdministratorAccess to all Glue jobs",
      "Store static access keys in source code",
    ],
    correct: [0],
    rationale: "Least-privilege IAM roles are the secure default for service-to-service access.",
    tags: ["iam", "least privilege", "glue"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company requires customer-managed encryption keys for S3 data lake objects. Which service should manage key creation and policies?",
    choices: ["AWS KMS", "AWS CloudTrail", "AWS Config", "Amazon SNS"],
    correct: [0],
    rationale: "KMS manages customer keys and key policies used for S3 server-side encryption.",
    tags: ["kms", "encryption", "s3"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A central data platform team must grant analysts access to specific rows and columns in shared datasets. Which controls are most appropriate? (Choose TWO.)",
    choices: [
      "AWS Lake Formation fine-grained permissions",
      "Tag-based and role-based IAM/Lake Formation access policies",
      "Shared root credentials for analytics users",
      "Public S3 bucket policies for convenience",
    ],
    correct: [0, 1],
    rationale: "Fine-grained Lake Formation controls and policy-based authorization enforce governed selective access.",
    tags: ["lake formation", "row level", "column level"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A security team needs to identify which users queried sensitive S3 objects during the last quarter. Which logging capability is required?",
    choices: ["CloudTrail data events for S3", "CloudWatch metric streams", "AWS Budgets export", "Route 53 resolver logs"],
    correct: [0],
    rationale: "CloudTrail data events capture object-level S3 API calls for access auditing.",
    tags: ["cloudtrail", "s3 data events", "audit"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Database credentials used in ingestion jobs must rotate automatically every 30 days. Which service should be implemented?",
    choices: ["AWS Secrets Manager", "AWS Certificate Manager", "AWS Artifact", "AWS Cost Explorer"],
    correct: [0],
    rationale: "Secrets Manager provides managed secret rotation and secure retrieval.",
    tags: ["secrets manager", "rotation"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "An organization wants continuous discovery of PII in S3 and risk scoring for exposed buckets. Which service is most direct?",
    choices: ["Amazon Macie", "Amazon CloudFront", "AWS DataSync", "Amazon EventBridge"],
    correct: [0],
    rationale: "Macie is designed for sensitive data discovery, classification, and risk visibility in S3.",
    tags: ["macie", "pii", "classification"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data team needs a queryable store of API audit events for long-term investigation. Which service best fits?",
    choices: ["AWS CloudTrail Lake", "AWS Glue crawler", "Amazon DynamoDB", "AWS Backup"],
    correct: [0],
    rationale: "CloudTrail Lake stores and enables SQL-like analysis of API event history.",
    tags: ["cloudtrail lake", "audit analytics"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A platform has cross-account data sharing and must prevent member accounts from disabling required logging controls. Which governance mechanism is most effective?",
    choices: [
      "Use AWS Organizations service control policies (SCPs)",
      "Rely on verbal team agreements",
      "Store policies in local spreadsheets",
      "Disable CloudTrail to reduce cost",
    ],
    correct: [0],
    rationale: "SCPs provide preventive guardrails across organization accounts.",
    tags: ["organizations", "scp", "governance"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data pipeline in private subnets needs to access S3 without traversing public internet paths. What should be configured?",
    choices: ["S3 gateway VPC endpoint", "Internet gateway", "Public NAT instance only", "Route 53 failover routing"],
    correct: [0],
    rationale: "S3 gateway endpoints enable private VPC-to-S3 connectivity.",
    tags: ["vpc endpoint", "private access", "s3"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An auditor asks for evidence that all new S3 buckets enforce encryption by default. Which service should be used to evaluate and report this continuously?",
    choices: ["AWS Config", "AWS Budgets", "Amazon EventBridge", "AWS Global Accelerator"],
    correct: [0],
    rationale: "AWS Config rules continuously evaluate configuration compliance against policies.",
    tags: ["config", "compliance", "encryption"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team must secure data in transit between producers and ingestion endpoints. Which controls are appropriate? (Choose TWO.)",
    choices: [
      "Require TLS for transport connections",
      "Use authenticated identities/roles for producer access",
      "Allow anonymous plaintext ingestion",
      "Store credentials in shared plaintext files",
    ],
    correct: [0, 1],
    rationale: "TLS plus authenticated access are core controls for secure ingestion channels.",
    tags: ["tls", "authentication", "transport security"],
  },
  {
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A security team wants centralized visibility across multiple AWS accounts for data-service security findings. Which service should be enabled?",
    choices: ["AWS Security Hub", "AWS Budgets", "Amazon S3 Batch Operations", "AWS Backup"],
    correct: [0],
    rationale: "Security Hub aggregates findings from integrated security services across accounts.",
    tags: ["security hub", "multi-account"],
  },
  {
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A regulated workload requires encryption keys to be disabled quickly during an incident, without deleting data. Which approach should be used?",
    choices: [
      "Use KMS customer managed keys with controlled key policy and disable capability",
      "Use hardcoded application keys only",
      "Store keys in source code",
      "Rely on S3 ACLs only",
    ],
    correct: [0],
    rationale: "KMS CMKs allow controlled key lifecycle operations such as disable/enable for incident response.",
    tags: ["kms", "incident response", "key management"],
  },
];

const questionBankSource = [
  ...ingestionQuestions,
  ...storeManagementQuestions,
  ...operationsQuestions,
  ...securityQuestions,
];

export const questionBank = questionBankSource.map((question, index) => ({
  id: `DEA${String(index + 1).padStart(3, "0")}`,
  ...question,
}));

export const inferRules = [
  {
    domain: "D1",
    keywords: [
      "ingest",
      "stream",
      "batch",
      "cdc",
      "kinesis",
      "firehose",
      "dms",
      "transform",
      "etl",
      "orchestrate",
      "step functions",
      "mwaa",
    ],
  },
  {
    domain: "D2",
    keywords: [
      "store",
      "catalog",
      "partition",
      "parquet",
      "iceberg",
      "lake formation",
      "athena",
      "redshift",
      "spectrum",
      "schema",
      "lifecycle",
      "quality",
    ],
  },
  {
    domain: "D3",
    keywords: [
      "monitor",
      "operate",
      "troubleshoot",
      "lag",
      "cloudwatch",
      "logs insights",
      "retry",
      "runbook",
      "automation",
      "performance",
      "debug",
      "sla",
    ],
  },
  {
    domain: "D4",
    keywords: [
      "security",
      "governance",
      "iam",
      "kms",
      "secrets",
      "cloudtrail",
      "macie",
      "lake formation",
      "compliance",
      "audit",
      "encryption",
      "scp",
    ],
  },
];

export const defaultInferDomain = "D1";

export const coachTopicPlaceholder =
  "Example: Design a CDC-to-lake pipeline with quality gates, least-privilege access, and alert-driven operational remediation.";

export const deaC01Course = {
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
