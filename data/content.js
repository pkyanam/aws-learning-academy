export const examMeta = {
  certificate: "AWS Certified Machine Learning Engineer - Associate",
  code: "MLA-C01",
  versionDate: "April 2024",
  durationMinutes: 130,
  questionCount: 65,
  passingScore: 720,
  costUsd: 150,
  language: "English",
  targetRole:
    "Engineers building, operating, and improving ML workloads on AWS from data preparation through production operations.",
  quickFacts: [
    "The exam balances practical implementation and MLOps decisions.",
    "Expect scenario-heavy questions requiring service tradeoff reasoning.",
    "A common trap is choosing a service that works but is not the most operationally efficient option.",
  ],
};

export const domainBlueprint = [
  {
    id: "D1",
    name: "Data Preparation for ML",
    weight: 28,
    mission:
      "Ingest, profile, transform, secure, and monitor data so model training and inference remain reliable and reproducible.",
    tasks: [
      {
        id: "1.1",
        title: "Ingest and store data",
        focus: [
          "Choose S3 storage layouts and partition strategies for ML datasets.",
          "Select ingestion paths (batch, streaming, CDC) with durability and replayability.",
          "Design data lifecycle rules for hot/warm/cold datasets.",
        ],
      },
      {
        id: "1.2",
        title: "Transform and prepare datasets",
        focus: [
          "Build repeatable feature engineering pipelines using Glue, Spark, or SageMaker Processing.",
          "Handle missing values, skew, cardinality, and class imbalance.",
          "Capture data lineage and feature definitions for reproducibility.",
        ],
      },
      {
        id: "1.3",
        title: "Ensure data integrity and governance",
        focus: [
          "Apply IAM, KMS, Lake Formation, and encryption best practices.",
          "Monitor freshness, schema drift, and quality checks.",
          "Enforce least-privilege data access between teams and workloads.",
        ],
      },
    ],
  },
  {
    id: "D2",
    name: "ML Model Development",
    weight: 26,
    mission:
      "Select, train, tune, and evaluate models with methods that align to business constraints and measurable outcomes.",
    tasks: [
      {
        id: "2.1",
        title: "Establish modeling strategy",
        focus: [
          "Map business outcomes to ML task type and evaluation metrics.",
          "Choose baseline models and iterate using controlled experiments.",
          "Balance latency, interpretability, and cost constraints.",
        ],
      },
      {
        id: "2.2",
        title: "Train and tune models",
        focus: [
          "Use managed training jobs and distributed training options.",
          "Run hyperparameter tuning jobs efficiently.",
          "Apply transfer learning and pre-trained model options when speed matters.",
        ],
      },
      {
        id: "2.3",
        title: "Evaluate and validate",
        focus: [
          "Interpret confusion matrices, ROC-AUC, precision-recall tradeoffs, and regression metrics.",
          "Run robust validation approaches such as k-fold or time-based splits.",
          "Perform error analysis for bias, leakage, and distribution mismatch.",
        ],
      },
    ],
  },
  {
    id: "D3",
    name: "Deployment and Orchestration of ML Workflows",
    weight: 22,
    mission:
      "Deploy and orchestrate ML systems that scale safely while preserving performance and governance.",
    tasks: [
      {
        id: "3.1",
        title: "Deploy models to production",
        focus: [
          "Choose endpoint patterns: real-time, async, batch, serverless, or edge.",
          "Use blue/green and canary rollout strategies with rollback signals.",
          "Design autoscaling behavior with predictable latency targets.",
        ],
      },
      {
        id: "3.2",
        title: "Automate ML workflows",
        focus: [
          "Use SageMaker Pipelines, Step Functions, and event-driven orchestration.",
          "Coordinate model registry approvals, CI/CD, and promotion flows.",
          "Version data, code, and models for repeatability.",
        ],
      },
      {
        id: "3.3",
        title: "Optimize inference architecture",
        focus: [
          "Choose compute and packaging strategy for throughput and memory constraints.",
          "Apply multi-model endpoints, inference pipelines, and queue buffering where appropriate.",
          "Control runtime cost with right-sized endpoint configurations.",
        ],
      },
    ],
  },
  {
    id: "D4",
    name: "Monitoring, Maintenance, and Security of ML Solutions",
    weight: 24,
    mission:
      "Operate ML systems with monitoring, retraining, security controls, and incident response discipline.",
    tasks: [
      {
        id: "4.1",
        title: "Monitor model and data behavior",
        focus: [
          "Track prediction quality, drift, and data quality signals.",
          "Instrument logs and metrics for operational visibility.",
          "Alert on SLA/SLO breaches and automate response where possible.",
        ],
      },
      {
        id: "4.2",
        title: "Maintain and improve model performance",
        focus: [
          "Design retraining triggers from drift, feedback loops, or scheduled refreshes.",
          "Perform controlled model replacement with auditability.",
          "Use shadow and champion/challenger patterns to reduce regression risk.",
        ],
      },
      {
        id: "4.3",
        title: "Secure ML workloads",
        focus: [
          "Harden IAM roles, VPC networking, and KMS strategy.",
          "Secure the ML supply chain, artifact storage, and API endpoints.",
          "Capture audit trails for compliance and investigation workflows.",
        ],
      },
    ],
  },
];

export const serviceAtlas = [
  {
    name: "Amazon S3",
    usage:
      "Primary lake storage for raw, curated, and feature-ready datasets with versioning and lifecycle policies.",
    examHint:
      "S3 with partitioning and immutable prefixes is usually preferred over ad-hoc local storage in production scenarios.",
  },
  {
    name: "AWS Glue",
    usage: "Managed ETL and Data Catalog service for schema discovery and data transformations.",
    examHint:
      "If the prompt emphasizes schema crawling, centralized metadata, or Spark ETL, Glue is frequently the best fit.",
  },
  {
    name: "Amazon SageMaker Processing",
    usage: "Containerized preprocessing and postprocessing jobs managed by SageMaker.",
    examHint:
      "Use Processing for repeatable ML-specific transformations integrated with Pipelines.",
  },
  {
    name: "Amazon SageMaker Training",
    usage:
      "Managed model training with built-in algorithms or custom containers, including distributed training.",
    examHint:
      "When you need scalable managed training with experiment tracking options, SageMaker training jobs are expected.",
  },
  {
    name: "Amazon SageMaker Hyperparameter Tuning",
    usage: "Automatic search for optimal hyperparameter configurations.",
    examHint:
      "Use tuning jobs instead of manually launching many training jobs if optimization efficiency is key.",
  },
  {
    name: "Amazon SageMaker Pipelines",
    usage: "ML workflow orchestration including preprocessing, training, evaluation, and registration steps.",
    examHint:
      "Questions about end-to-end repeatable ML workflows with governance often point to Pipelines.",
  },
  {
    name: "Amazon SageMaker Model Registry",
    usage: "Version and approve model packages before deployment.",
    examHint:
      "For controlled promotion from staging to production with approvals, Model Registry is the anchor service.",
  },
  {
    name: "Amazon SageMaker Endpoints",
    usage: "Managed real-time and asynchronous inference endpoints.",
    examHint:
      "Choose endpoint type based on latency and payload constraints; async is common for long-running inference.",
  },
  {
    name: "SageMaker Serverless Inference",
    usage: "On-demand inference for intermittent traffic without always-on instances.",
    examHint:
      "Best when traffic is spiky and strict p99 latency is less critical than cost efficiency.",
  },
  {
    name: "SageMaker Batch Transform",
    usage: "Offline inference on large datasets without persistent endpoints.",
    examHint:
      "If predictions are needed daily/hourly in bulk, Batch Transform is usually cheaper than real-time endpoints.",
  },
  {
    name: "Amazon EMR",
    usage: "Large-scale Spark and Hadoop workloads for feature engineering and analytics.",
    examHint:
      "Use when full Spark control or large distributed data pipelines are emphasized.",
  },
  {
    name: "AWS Step Functions",
    usage: "Stateful orchestration across AWS services with branching and retries.",
    examHint:
      "For workflow logic across multiple systems, Step Functions often beats custom orchestration code.",
  },
  {
    name: "Amazon EventBridge",
    usage: "Event routing and schedule-based triggers for ML automation.",
    examHint:
      "Commonly used to trigger retraining or validation workflows based on schedules or domain events.",
  },
  {
    name: "Amazon CloudWatch",
    usage: "Metrics, logs, alarms, and dashboards for operational monitoring.",
    examHint:
      "Operational visibility and alerting scenarios nearly always include CloudWatch.",
  },
  {
    name: "Amazon SageMaker Model Monitor",
    usage: "Monitors data quality and model quality for deployed endpoints.",
    examHint:
      "Preferred for managed drift/data-quality checks tied directly to SageMaker endpoints.",
  },
  {
    name: "AWS IAM",
    usage: "Fine-grained identity and access controls across ML assets.",
    examHint:
      "Least privilege and scoped service roles are frequent exam requirements.",
  },
  {
    name: "AWS KMS",
    usage: "Encryption key management for data at rest and some service integrations.",
    examHint:
      "If compliance mentions customer-managed keys, KMS should be explicit in the design.",
  },
  {
    name: "Amazon ECR",
    usage: "Container registry for custom training/inference images.",
    examHint:
      "Use for custom algorithm containers integrated with SageMaker jobs and endpoints.",
  },
  {
    name: "Amazon Redshift",
    usage: "Data warehouse for structured analytics and feature sourcing.",
    examHint:
      "In BI-oriented, SQL-heavy feature retrieval patterns, Redshift may be the expected source.",
  },
  {
    name: "Amazon Athena",
    usage: "Serverless SQL querying directly on S3 data lake objects.",
    examHint:
      "Strong option for ad-hoc analysis and validation without managing clusters.",
  },
];

export const prepPlaybooks = [
  {
    title: "Two-Hour Exam Triage Strategy",
    steps: [
      "First pass: answer direct architecture and service-fit questions quickly.",
      "Mark long scenario questions, then return after locking in easy points.",
      "On review, eliminate options that violate security, cost, or operational requirements.",
      "When two options are both valid, pick the one with less operational burden and better managed-service leverage.",
    ],
  },
  {
    title: "Metric Selection Checklist",
    steps: [
      "Classification with class imbalance: prioritize precision-recall, F1, PR-AUC.",
      "Threshold-sensitive business decisions: optimize to precision/recall requirements, not accuracy.",
      "Regression with outliers: compare MAE and robust loss strategies.",
      "Time-series forecasting: ensure validation split respects temporal ordering.",
    ],
  },
  {
    title: "Production Readiness Checklist",
    steps: [
      "Training and inference images are versioned and stored in ECR.",
      "Pipelines capture data prep, training, evaluation, and registration with approvals.",
      "Monitoring covers data quality, latency, error rates, and business KPIs.",
      "Retraining triggers and rollback plans are defined before go-live.",
    ],
  },
];

export const topicSeeds = [
  {
    topic: "data drift",
    summary:
      "Data drift occurs when live feature distributions diverge from training distributions, often requiring alerting, validation, and retraining strategies.",
    linkedServices: ["SageMaker Model Monitor", "CloudWatch", "EventBridge", "SageMaker Pipelines"],
  },
  {
    topic: "feature store",
    summary:
      "A feature store standardizes feature computation and reuse across training and online inference while reducing training-serving skew.",
    linkedServices: ["SageMaker Feature Store", "S3", "Glue", "Athena"],
  },
  {
    topic: "inference optimization",
    summary:
      "Inference optimization balances throughput, latency, and cost by selecting the right deployment mode and right-sized compute.",
    linkedServices: ["SageMaker Endpoints", "Serverless Inference", "Batch Transform", "Application Auto Scaling"],
  },
  {
    topic: "governance",
    summary:
      "Governance covers lineage, approvals, access control, and auditability across data and model artifacts.",
    linkedServices: ["IAM", "KMS", "SageMaker Model Registry", "CloudTrail"],
  },
  {
    topic: "hyperparameter tuning",
    summary:
      "Hyperparameter tuning automates objective-driven search and typically improves models faster than manual trial-and-error.",
    linkedServices: ["SageMaker Hyperparameter Tuning", "SageMaker Experiments", "CloudWatch"],
  },
];

export const questionBank = [
  {
    id: "Q001",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team ingests daily CSV files into Amazon S3 and runs feature engineering jobs. They need reproducibility of training datasets for audits. Which design best meets this requirement?",
    choices: [
      "Overwrite the same S3 object key daily to keep storage costs low.",
      "Store each daily file under immutable date-partitioned prefixes and enable S3 versioning.",
      "Move processed files to local EBS volumes attached to the training instance.",
      "Use only CloudWatch Logs to preserve ingestion records.",
    ],
    correct: [1],
    rationale:
      "Immutable partitioned paths with versioning preserve historical snapshots and allow deterministic dataset reconstruction.",
    tags: ["S3", "reproducibility"],
  },
  {
    id: "Q002",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An ML engineer must join clickstream events with customer profiles for feature creation using a managed serverless approach. Which service is most appropriate?",
    choices: [
      "AWS Glue ETL jobs",
      "Amazon EC2 with custom cron scripts",
      "Amazon Route 53",
      "Amazon Inspector",
    ],
    correct: [0],
    rationale:
      "Glue provides managed ETL and integrates with the Data Catalog for scalable feature transformations.",
    tags: ["Glue", "ETL"],
  },
  {
    id: "Q003",
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A regulated company needs strict controls on who can query sensitive lake data used for ML training. Which actions should the engineer take? (Choose TWO.)",
    choices: [
      "Use IAM least-privilege roles for data access.",
      "Store access keys in notebook cells for convenience.",
      "Encrypt data with AWS KMS keys.",
      "Disable CloudTrail to reduce log storage.",
      "Make all S3 buckets public but hard to guess.",
    ],
    correct: [0, 2],
    rationale:
      "Least-privilege IAM and KMS encryption address core access-control and compliance needs.",
    tags: ["IAM", "KMS", "security"],
  },
  {
    id: "Q004",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A training pipeline frequently fails because downstream jobs receive unexpected nulls and schema changes. What is the BEST preventive step?",
    choices: [
      "Add data quality checks before training and fail fast when thresholds are violated.",
      "Increase instance size for training jobs.",
      "Switch from Python to R for feature processing.",
      "Reduce the number of model features to five.",
    ],
    correct: [0],
    rationale:
      "Upstream data validation catches integrity issues before expensive training stages.",
    tags: ["data quality", "pipelines"],
  },
  {
    id: "Q005",
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service is typically used to maintain central metadata for data lake tables consumed by ML pipelines?",
    choices: [
      "AWS Glue Data Catalog",
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS Device Farm",
    ],
    correct: [0],
    rationale:
      "Glue Data Catalog stores table definitions and metadata for discovery and ETL workloads.",
    tags: ["Glue", "catalog"],
  },
  {
    id: "Q006",
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A team processes 5 TB of semi-structured data nightly to create features. They need native Spark control and custom libraries. Which platform is the BEST fit?",
    choices: [
      "Amazon EMR",
      "Amazon SNS",
      "AWS CloudTrail",
      "Amazon MQ",
    ],
    correct: [0],
    rationale:
      "EMR is ideal when teams need deep Spark control at large scale.",
    tags: ["EMR", "Spark"],
  },
  {
    id: "Q007",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An engineer wants to reduce training-serving skew by reusing the same feature definitions online and offline. Which capability directly supports this?",
    choices: [
      "SageMaker Feature Store",
      "AWS WAF",
      "AWS CodeArtifact",
      "Amazon Macie",
    ],
    correct: [0],
    rationale:
      "Feature Store supports consistent feature computation and retrieval for both training and inference paths.",
    tags: ["Feature Store", "skew"],
  },
  {
    id: "Q008",
    domain: "D1",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "A company receives IoT events continuously and needs near-real-time feature updates. Which options are suitable ingestion patterns? (Choose TWO.)",
    choices: [
      "Amazon Kinesis Data Streams feeding managed consumers",
      "Daily manual uploads through an FTP client",
      "Amazon MSK for Kafka-compatible streaming",
      "Printing events to local logs on laptops",
      "Updating a spreadsheet once per week",
    ],
    correct: [0, 2],
    rationale:
      "Kinesis and MSK are streaming-native ingestion approaches for continuous event pipelines.",
    tags: ["streaming", "Kinesis", "MSK"],
  },
  {
    id: "Q009",
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which S3 design is MOST aligned with efficient analytics and ML training at scale?",
    choices: [
      "Single giant unpartitioned file for all years",
      "Date and domain partitioned prefixes with optimized file formats",
      "Randomly named folders with no structure",
      "Storing all data in PNG images",
    ],
    correct: [1],
    rationale:
      "Partitioning and optimized formats improve scan efficiency and downstream pipeline performance.",
    tags: ["S3", "partitioning"],
  },
  {
    id: "Q010",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs to query raw S3 feature logs with SQL for ad-hoc validation without provisioning infrastructure. Which service should they use?",
    choices: [
      "Amazon Athena",
      "Amazon EC2 Auto Scaling",
      "Amazon WorkSpaces",
      "AWS Snowcone",
    ],
    correct: [0],
    rationale: "Athena provides serverless SQL querying over S3 objects.",
    tags: ["Athena", "validation"],
  },
  {
    id: "Q011",
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "You must share only specific columns from a governed data lake table with the ML team while keeping centralized permissions. Which service is the BEST match?",
    choices: [
      "AWS Lake Formation",
      "Amazon CloudHSM",
      "AWS Global Accelerator",
      "Amazon Lightsail",
    ],
    correct: [0],
    rationale:
      "Lake Formation supports centralized fine-grained governance for data lake permissions.",
    tags: ["Lake Formation", "governance"],
  },
  {
    id: "Q012",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "For personally identifiable information in training data, which approach is MOST appropriate before feature generation?",
    choices: [
      "Tokenize or mask sensitive fields and enforce least-privilege access",
      "Replicate raw PII into more buckets for resiliency",
      "Disable encryption for faster ETL",
      "Share PII broadly to simplify debugging",
    ],
    correct: [0],
    rationale:
      "Masking/tokenization plus controlled access reduces privacy risk and supports compliance.",
    tags: ["PII", "security"],
  },
  {
    id: "Q013",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A fraud model faces severe class imbalance. Which metric is generally more informative than raw accuracy?",
    choices: ["F1 score", "Total sample count", "Model file size", "Training time only"],
    correct: [0],
    rationale: "F1 better reflects precision-recall tradeoffs in imbalanced classification tasks.",
    tags: ["metrics", "classification"],
  },
  {
    id: "Q014",
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which SageMaker feature automates searching for the best hyperparameters?",
    choices: [
      "SageMaker Hyperparameter Tuning",
      "S3 Lifecycle Policies",
      "Amazon CloudFront",
      "AWS Backup",
    ],
    correct: [0],
    rationale: "Hyperparameter tuning jobs run managed search strategies against an objective metric.",
    tags: ["SageMaker", "tuning"],
  },
  {
    id: "Q015",
    domain: "D2",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "An engineer suspects data leakage in a binary classification pipeline. Which checks should be prioritized? (Choose TWO.)",
    choices: [
      "Confirm no future-derived fields appear in training features",
      "Increase batch size regardless of model behavior",
      "Validate train/validation split logic and time boundaries",
      "Disable shuffling in every workload permanently",
      "Remove all categorical features immediately",
    ],
    correct: [0, 2],
    rationale:
      "Leakage often comes from temporal leakage or split mistakes; both must be verified first.",
    tags: ["leakage", "validation"],
  },
  {
    id: "Q016",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team wants full control over a custom PyTorch training image while still using managed training infrastructure. What is the BEST option?",
    choices: [
      "Push the image to Amazon ECR and run a SageMaker training job",
      "Run training only on local laptops",
      "Use Amazon Route 53 health checks",
      "Store source code in Amazon SQS",
    ],
    correct: [0],
    rationale:
      "Custom containers in ECR integrated with SageMaker training provide flexibility with managed orchestration.",
    tags: ["ECR", "training"],
  },
  {
    id: "Q017",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "For time-series forecasting, which split strategy is MOST appropriate?",
    choices: [
      "Random shuffle split across all timestamps",
      "Chronological train/validation split preserving temporal order",
      "Use test data for training to increase sample size",
      "Split data by even vs odd row index",
    ],
    correct: [1],
    rationale:
      "Time-aware splits prevent future information leakage.",
    tags: ["time series", "evaluation"],
  },
  {
    id: "Q018",
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A business requires explainable credit decisions. Which model characteristic should be prioritized if accuracy differences are small?",
    choices: [
      "Higher interpretability and traceable features",
      "Largest model by parameter count",
      "Most complex ensemble regardless of explainability",
      "Longest training duration",
    ],
    correct: [0],
    rationale:
      "When regulatory explainability matters, interpretable models can be preferred over marginal accuracy gains.",
    tags: ["interpretability", "governance"],
  },
  {
    id: "Q019",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "During experimentation, the team wants to compare runs with different hyperparameters and datasets. Which capability helps organize this metadata?",
    choices: [
      "SageMaker Experiments",
      "Amazon Mechanical Turk",
      "AWS Shield",
      "Elastic Load Balancing",
    ],
    correct: [0],
    rationale:
      "SageMaker Experiments tracks run metadata to support reproducible comparisons.",
    tags: ["experiments", "tracking"],
  },
  {
    id: "Q020",
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which metric is commonly used for binary classifiers across thresholds to summarize separability?",
    choices: ["ROC-AUC", "CPU utilization", "I/O wait", "Requests per second"],
    correct: [0],
    rationale: "ROC-AUC evaluates classifier ranking ability across threshold settings.",
    tags: ["ROC-AUC", "metrics"],
  },
  {
    id: "Q021",
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A model performs well offline but poorly in production because training data differs from live data. What is this issue called?",
    choices: ["Model quantization", "Data distribution shift", "Cold start only", "Over-indexing"],
    correct: [1],
    rationale: "Distribution shift between training and production degrades generalization.",
    tags: ["drift", "generalization"],
  },
  {
    id: "Q022",
    domain: "D2",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which actions can reduce overfitting? (Choose TWO.)",
    choices: [
      "Use regularization techniques",
      "Increase model complexity without constraint",
      "Apply cross-validation",
      "Train until training loss is exactly zero regardless of validation",
      "Ignore validation metrics",
    ],
    correct: [0, 2],
    rationale:
      "Regularization and robust validation strategies are standard controls against overfitting.",
    tags: ["overfitting", "cross-validation"],
  },
  {
    id: "Q023",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which approach can accelerate model delivery when labeled data is limited but a related pre-trained model exists?",
    choices: [
      "Transfer learning",
      "Disable data preprocessing",
      "Manually duplicate samples until class balance is perfect",
      "Use only rule-based systems",
    ],
    correct: [0],
    rationale: "Transfer learning leverages prior learned representations to reduce data and training needs.",
    tags: ["transfer learning", "delivery"],
  },
  {
    id: "Q024",
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "For a regression problem, which metric directly measures average absolute prediction error?",
    choices: ["MAE", "ROC-AUC", "Precision", "Recall"],
    correct: [0],
    rationale: "MAE summarizes absolute error magnitude in the original target units.",
    tags: ["regression", "MAE"],
  },
  {
    id: "Q025",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A workload requires sub-second responses for interactive users. Which deployment pattern is most suitable?",
    choices: [
      "SageMaker real-time endpoint",
      "SageMaker Batch Transform once per day",
      "Manual spreadsheet scoring",
      "Weekly offline report generation",
    ],
    correct: [0],
    rationale:
      "Real-time endpoints are designed for low-latency synchronous inference.",
    tags: ["deployment", "real-time"],
  },
  {
    id: "Q026",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Inference requests may take up to 10 minutes and clients can poll for results later. Which option is best?",
    choices: [
      "SageMaker Asynchronous Inference",
      "SageMaker real-time with tiny timeout",
      "Amazon CloudFront only",
      "AWS Batch for frontend traffic",
    ],
    correct: [0],
    rationale:
      "Async inference is designed for long-running requests and deferred responses.",
    tags: ["async", "inference"],
  },
  {
    id: "Q027",
    domain: "D3",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service is purpose-built for end-to-end ML pipeline orchestration inside SageMaker?",
    choices: [
      "SageMaker Pipelines",
      "AWS Secrets Manager",
      "Amazon Route 53",
      "AWS Transfer Family",
    ],
    correct: [0],
    rationale: "SageMaker Pipelines orchestrates preprocessing, training, evaluation, and model registration.",
    tags: ["pipelines", "orchestration"],
  },
  {
    id: "Q028",
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A team wants safe rollout of a new model version with minimal risk. Which practices should they use? (Choose TWO.)",
    choices: [
      "Canary or blue/green deployment strategy",
      "Directly replace all production instances instantly",
      "Automated rollback on degraded latency or error metrics",
      "Delete previous model package immediately",
      "Disable monitoring during deployment",
    ],
    correct: [0, 2],
    rationale:
      "Progressive rollout and rollback guardrails reduce production regression risk.",
    tags: ["deployment safety", "rollback"],
  },
  {
    id: "Q029",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which component should manage formal model approval before production deployment in a regulated workflow?",
    choices: [
      "SageMaker Model Registry",
      "Amazon Route 53 hosted zones",
      "AWS Budgets",
      "Amazon Chime",
    ],
    correct: [0],
    rationale: "Model Registry supports model versioning and stage approvals.",
    tags: ["Model Registry", "governance"],
  },
  {
    id: "Q030",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Traffic is bursty with long idle periods. Which inference option is likely most cost efficient?",
    choices: [
      "SageMaker Serverless Inference",
      "Large always-on endpoint fleet",
      "Provisioned EC2 instances with no autoscaling",
      "Daily Batch Transform regardless of user requests",
    ],
    correct: [0],
    rationale:
      "Serverless inference reduces always-on cost for intermittent workloads.",
    tags: ["serverless", "cost"],
  },
  {
    id: "Q031",
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A fraud service needs to host many small models with similar containers while minimizing endpoint cost. Which pattern should be considered?",
    choices: [
      "SageMaker Multi-Model Endpoint",
      "One dedicated endpoint per model with maximum instance count",
      "Only Batch Transform",
      "Custom DNS weighting without model hosting changes",
    ],
    correct: [0],
    rationale:
      "Multi-model endpoints can reduce infrastructure cost when models share runtime requirements.",
    tags: ["MME", "optimization"],
  },
  {
    id: "Q032",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which AWS service is commonly used to coordinate multi-service workflow branching and retries around ML jobs?",
    choices: ["AWS Step Functions", "Amazon S3", "AWS KMS", "Amazon CloudFront"],
    correct: [0],
    rationale: "Step Functions provides stateful orchestration with retries and conditional logic.",
    tags: ["Step Functions", "workflow"],
  },
  {
    id: "Q033",
    domain: "D3",
    difficulty: "Easy",
    type: "single",
    prompt:
      "For nightly scoring of millions of records where immediate response is unnecessary, what is the best approach?",
    choices: [
      "SageMaker Batch Transform",
      "Always-on real-time endpoint",
      "Synchronous API per record from browser",
      "Manual spreadsheet formulas",
    ],
    correct: [0],
    rationale: "Batch Transform is optimized for offline bulk inference workloads.",
    tags: ["batch", "inference"],
  },
  {
    id: "Q034",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "An engineer wants retraining to start automatically when a new curated dataset lands in S3. Which trigger pattern is most suitable?",
    choices: [
      "EventBridge rule responding to S3 events",
      "Manual start in console every week",
      "Disabling all automation for consistency",
      "Use Route 53 failover routing",
    ],
    correct: [0],
    rationale:
      "EventBridge can route S3 events into automated training workflows.",
    tags: ["EventBridge", "automation"],
  },
  {
    id: "Q035",
    domain: "D3",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "What should be versioned together to ensure ML reproducibility across environments? (Choose TWO.)",
    choices: [
      "Training code and container image",
      "Only endpoint DNS name",
      "Input data snapshot or data version identifier",
      "Browser cache settings",
      "CloudWatch dashboard theme",
    ],
    correct: [0, 2],
    rationale: "Reproducibility depends on controlled code/runtime and data versions.",
    tags: ["versioning", "MLOps"],
  },
  {
    id: "Q036",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which SageMaker capability monitors live endpoint data for baseline drift and quality issues?",
    choices: [
      "SageMaker Model Monitor",
      "AWS CloudShell",
      "Amazon Personalize",
      "Amazon AppFlow",
    ],
    correct: [0],
    rationale:
      "Model Monitor is designed for managed drift and data-quality monitoring on SageMaker endpoints.",
    tags: ["Model Monitor", "drift"],
  },
  {
    id: "Q037",
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which service should you use to create alarms on inference latency and error-rate metrics?",
    choices: ["Amazon CloudWatch", "AWS Artifact", "Amazon Polly", "AWS Organizations"],
    correct: [0],
    rationale: "CloudWatch provides alarms and dashboards for operational metrics.",
    tags: ["CloudWatch", "alerts"],
  },
  {
    id: "Q038",
    domain: "D4",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A security review requires stronger protection of training data and endpoint traffic. Which controls are most relevant? (Choose TWO.)",
    choices: [
      "Use KMS encryption for data at rest",
      "Run all workloads with shared admin credentials",
      "Place resources in private subnets and apply restrictive security groups",
      "Disable TLS for lower latency",
      "Store keys in plain text notebooks",
    ],
    correct: [0, 2],
    rationale:
      "KMS encryption and private networking controls are core security practices for ML workloads.",
    tags: ["security", "KMS", "VPC"],
  },
  {
    id: "Q039",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A model's business KPI is declining, but infrastructure metrics look healthy. What is the BEST next step?",
    choices: [
      "Investigate prediction quality and data drift, then trigger evaluation/retraining",
      "Increase endpoint instance size without analysis",
      "Delete historical logs to reduce noise",
      "Disable monitoring to avoid false positives",
    ],
    correct: [0],
    rationale:
      "Performance degradation with stable infra often indicates data or model drift rather than hardware limits.",
    tags: ["drift", "KPI"],
  },
  {
    id: "Q040",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which practice improves auditability of model deployment decisions?",
    choices: [
      "Track approvals and model versions in a registry with immutable logs",
      "Allow direct production deploys from personal laptops",
      "Store decision notes only in chat messages",
      "Disable change management",
    ],
    correct: [0],
    rationale: "Registries and immutable audit records provide traceability for compliance and reviews.",
    tags: ["audit", "Model Registry"],
  },
  {
    id: "Q041",
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A team wants to compare a new model against production with live traffic before full cutover, without affecting end users. Which strategy is best?",
    choices: [
      "Shadow deployment",
      "Immediate full replacement",
      "Disable logging during evaluation",
      "Train on test data",
    ],
    correct: [0],
    rationale:
      "Shadow deployments let teams evaluate challenger behavior safely on mirrored traffic.",
    tags: ["shadow testing", "deployment"],
  },
  {
    id: "Q042",
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "What IAM principle should guide permissions for ML pipelines and endpoints?",
    choices: [
      "Least privilege",
      "Full admin access for all roles",
      "Shared root account usage",
      "Disable role-based access",
    ],
    correct: [0],
    rationale: "Least privilege minimizes blast radius and aligns with AWS security best practices.",
    tags: ["IAM", "least privilege"],
  },
  {
    id: "Q043",
    domain: "D4",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which signals are useful for automated retraining triggers? (Choose TWO.)",
    choices: [
      "Sustained drift in feature distributions",
      "Improved office Wi-Fi speed",
      "Drop in business KPI tied to model output quality",
      "Changes to desktop wallpaper",
      "Higher notebook font size",
    ],
    correct: [0, 2],
    rationale:
      "Retraining should be driven by model/data performance signals, not unrelated operational noise.",
    tags: ["retraining", "monitoring"],
  },
  {
    id: "Q044",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "To capture API-level user actions and configuration changes across ML services for investigations, which service should be enabled?",
    choices: ["AWS CloudTrail", "Amazon Lex", "AWS Shield Advanced", "Amazon QLDB only"],
    correct: [0],
    rationale: "CloudTrail records API activity for auditing and incident analysis.",
    tags: ["CloudTrail", "audit"],
  },
  {
    id: "Q045",
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A model serving endpoint occasionally returns high latency spikes under sudden traffic bursts. Which approach is most directly aligned to resiliency?",
    choices: [
      "Configure autoscaling policies with target tracking and monitor p95/p99 latency",
      "Disable metrics collection",
      "Force single-instance deployment permanently",
      "Route all traffic through a manual approval queue",
    ],
    correct: [0],
    rationale:
      "Autoscaling with latency-aware metrics helps absorb burst traffic while protecting SLAs.",
    tags: ["autoscaling", "latency"],
  },
  {
    id: "Q046",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A data scientist requests direct access to production secrets in a notebook for convenience. What is the BEST response?",
    choices: [
      "Reject and provide scoped IAM role + secret retrieval through approved mechanisms",
      "Share root credentials temporarily",
      "Paste secrets in source control",
      "Disable all secret rotation",
    ],
    correct: [0],
    rationale:
      "Least-privilege role-based access and managed secrets handling is the secure production approach.",
    tags: ["secrets", "IAM"],
  },
  {
    id: "Q047",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which deployment model is best when predictions can be produced once per hour and stored for downstream systems?",
    choices: [
      "Scheduled batch inference jobs",
      "Persistent low-latency endpoint with no traffic",
      "Manual analyst scoring",
      "Disable inference and use heuristics",
    ],
    correct: [0],
    rationale: "Batch scheduling is efficient for periodic non-interactive prediction workloads.",
    tags: ["batch", "scheduling"],
  },
  {
    id: "Q048",
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A classifier has 99% accuracy but misses most positive fraud cases. Which metric likely reveals this weakness more clearly?",
    choices: ["Recall", "Training job duration", "Model artifact size", "CPU credits"],
    correct: [0],
    rationale:
      "Recall measures the proportion of actual positives correctly captured, exposing false-negative-heavy models.",
    tags: ["recall", "fraud"],
  },
  {
    id: "Q049",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A team needs immutable records of incoming events before transformations to support replay after pipeline failures. Which pattern is best?",
    choices: [
      "Store raw append-only data in a dedicated S3 raw zone",
      "Only keep transformed datasets and delete raw inputs",
      "Keep events only in notebook memory",
      "Store records in temporary browser cache",
    ],
    correct: [0],
    rationale:
      "An append-only raw S3 zone preserves source records for replay, lineage, and audit requirements.",
    tags: ["raw zone", "replayability"],
  },
  {
    id: "Q050",
    domain: "D1",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which file format usually improves analytics scan efficiency over plain CSV in an S3 data lake?",
    choices: ["Parquet", "BMP", "TIFF", "Plain text logs only"],
    correct: [0],
    rationale:
      "Columnar formats such as Parquet reduce scan volume and improve performance for analytics and feature jobs.",
    tags: ["Parquet", "optimization"],
  },
  {
    id: "Q051",
    domain: "D1",
    difficulty: "Hard",
    type: "multi",
    prompt:
      "A pipeline must detect stale input data before model retraining. Which controls should be implemented? (Choose TWO.)",
    choices: [
      "Track freshness timestamps and alert when lag exceeds threshold",
      "Ignore ingestion timestamps to simplify operations",
      "Run schema/data-quality checks before training starts",
      "Disable alerting for late-arriving partitions",
      "Replace missing partitions with random values silently",
    ],
    correct: [0, 2],
    rationale:
      "Freshness monitoring and pre-training quality checks prevent stale or malformed datasets from triggering bad retraining runs.",
    tags: ["freshness", "data quality"],
  },
  {
    id: "Q052",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A company wants to centrally discover and query curated ML feature tables stored in S3 with SQL engines. Which metadata component is required?",
    choices: [
      "AWS Glue Data Catalog table definitions",
      "Amazon Route 53 failover records",
      "AWS Shield rules",
      "NAT Gateway route entries",
    ],
    correct: [0],
    rationale:
      "The Glue Data Catalog supplies shared table metadata for Athena, Glue, and other lake query tools.",
    tags: ["catalog", "S3 lake"],
  },
  {
    id: "Q053",
    domain: "D1",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which preprocessing approach best handles a highly skewed numeric feature before model training?",
    choices: [
      "Apply log transform or quantile-based scaling after analysis",
      "Convert all numeric values to random buckets",
      "Drop the feature without checking signal contribution",
      "Duplicate high-value rows until distribution looks uniform",
    ],
    correct: [0],
    rationale:
      "Log or quantile transforms are standard approaches for reducing skew while preserving useful ordering information.",
    tags: ["feature engineering", "skew"],
  },
  {
    id: "Q054",
    domain: "D1",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A cross-account analytics team needs controlled read access to ML training datasets in a central lake. Which approach is most aligned with governance?",
    choices: [
      "Use Lake Formation permissions with scoped IAM roles",
      "Share long-lived root credentials across accounts",
      "Copy all data to public buckets for convenience",
      "Disable encryption to avoid key-management overhead",
    ],
    correct: [0],
    rationale:
      "Lake Formation and scoped IAM roles support governed, auditable, and fine-grained cross-account access patterns.",
    tags: ["cross-account", "Lake Formation"],
  },
  {
    id: "Q055",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "For a churn classifier where false negatives are expensive, what metric should be closely monitored?",
    choices: ["Recall", "Model artifact size", "Training throughput", "CPU utilization"],
    correct: [0],
    rationale:
      "High recall helps capture more actual churn cases and reduce costly misses.",
    tags: ["recall", "classification"],
  },
  {
    id: "Q056",
    domain: "D2",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which practice establishes a strong baseline before trying complex ensembles?",
    choices: [
      "Train and evaluate a simple baseline model first",
      "Start with the largest model available immediately",
      "Tune hundreds of parameters without baseline tracking",
      "Skip validation until the final release",
    ],
    correct: [0],
    rationale:
      "Baselines provide a reference point to evaluate whether complex models actually improve outcomes.",
    tags: ["baseline", "experimentation"],
  },
  {
    id: "Q057",
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A model's validation score varies significantly between folds. What does this most likely indicate?",
    choices: [
      "High variance and unstable generalization",
      "Perfectly robust model behavior",
      "Guaranteed production success",
      "A networking issue in CloudWatch",
    ],
    correct: [0],
    rationale:
      "Large fold-to-fold variation suggests unstable model behavior and potential sensitivity to sample composition.",
    tags: ["cross-validation", "variance"],
  },
  {
    id: "Q058",
    domain: "D2",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which changes can improve reproducibility of training experiments? (Choose TWO.)",
    choices: [
      "Version datasets and feature definitions",
      "Use random seeds and log experiment parameters",
      "Depend on unnamed notebook snapshots only",
      "Manually edit training labels after each run",
      "Overwrite prior model artifacts without version tags",
    ],
    correct: [0, 1],
    rationale:
      "Dataset/version control plus deterministic configuration tracking are critical to repeatable ML experiments.",
    tags: ["reproducibility", "experiments"],
  },
  {
    id: "Q059",
    domain: "D2",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A model has high precision but low recall. Which interpretation is most accurate?",
    choices: [
      "It predicts positives accurately but misses many true positives",
      "It incorrectly labels most negatives as positives",
      "It has balanced precision and recall",
      "It is necessarily overfitting",
    ],
    correct: [0],
    rationale:
      "High precision with low recall means positive predictions are reliable, but too many positives are not detected.",
    tags: ["precision", "recall"],
  },
  {
    id: "Q060",
    domain: "D2",
    difficulty: "Medium",
    type: "single",
    prompt:
      "When comparing model candidates with similar metrics, which factor can justify selecting a simpler model?",
    choices: [
      "Lower operational complexity and easier explainability",
      "Longer total training time",
      "More parameters by default",
      "Higher storage cost",
    ],
    correct: [0],
    rationale:
      "If quality is comparable, simpler and more interpretable models often reduce risk and support faster operations.",
    tags: ["model selection", "operations"],
  },
  {
    id: "Q061",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "A model deployment should only proceed if evaluation metrics exceed predefined thresholds. Where should this gate typically live?",
    choices: [
      "In the orchestration pipeline as a conditional step",
      "In a manual chat approval with no checks",
      "Inside Route 53 DNS records",
      "Only in a local notebook cell",
    ],
    correct: [0],
    rationale:
      "Pipeline condition steps enforce objective quality gates before model registration or production deployment.",
    tags: ["Pipelines", "quality gate"],
  },
  {
    id: "Q062",
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A team needs to serve multiple preprocessing stages before final prediction in one endpoint invocation. Which pattern is most suitable?",
    choices: [
      "SageMaker inference pipeline",
      "CloudTrail event history",
      "Athena partition projection",
      "Route 53 traffic flow",
    ],
    correct: [0],
    rationale:
      "Inference pipelines chain multiple model or preprocessing containers for end-to-end serving flows.",
    tags: ["inference pipeline", "serving"],
  },
  {
    id: "Q063",
    domain: "D3",
    difficulty: "Easy",
    type: "single",
    prompt:
      "Which mechanism is commonly used to trigger scheduled retraining every Sunday at 02:00 UTC?",
    choices: [
      "EventBridge scheduled rule",
      "Manual training from personal laptop",
      "CloudFront invalidation event",
      "S3 static website setting",
    ],
    correct: [0],
    rationale:
      "EventBridge schedules can trigger retraining workflows at defined intervals.",
    tags: ["EventBridge", "scheduling"],
  },
  {
    id: "Q064",
    domain: "D3",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "To reduce deployment risk in production, which controls are recommended? (Choose TWO.)",
    choices: [
      "Monitor error/latency metrics during rollout",
      "Keep a rollback target ready",
      "Deploy without any baseline comparison",
      "Disable alarms during cutover",
      "Delete previous endpoint config immediately",
    ],
    correct: [0, 1],
    rationale:
      "Metric-driven rollout monitoring and rollback readiness are key deployment safety practices.",
    tags: ["rollout", "rollback"],
  },
  {
    id: "Q065",
    domain: "D3",
    difficulty: "Hard",
    type: "single",
    prompt:
      "Inference latency is dominated by model load time for infrequently used models. Which approach can help?",
    choices: [
      "Use asynchronous or batch patterns instead of always-on low-latency endpoints",
      "Force all requests through a single-threaded notebook",
      "Increase model size to hide load time",
      "Disable autoscaling policies",
    ],
    correct: [0],
    rationale:
      "For infrequent usage, async or batch workloads can reduce the cost and pressure of strict low-latency serving.",
    tags: ["latency", "architecture"],
  },
  {
    id: "Q066",
    domain: "D3",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which artifact should be promoted together with a model package during release?",
    choices: [
      "Matching inference container image version",
      "Random temporary notebook kernel",
      "Unrelated DNS record snapshots",
      "CloudShell history",
    ],
    correct: [0],
    rationale:
      "Promoting the tested model with the exact runtime image preserves consistency between stages.",
    tags: ["release", "container versioning"],
  },
  {
    id: "Q067",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Prediction confidence drops gradually over time with no infrastructure errors. Which likely cause should be investigated first?",
    choices: [
      "Data drift in incoming features",
      "Insufficient DNS TTL values",
      "CloudTrail storage class",
      "Notebook font settings",
    ],
    correct: [0],
    rationale:
      "Quality degradation without infra failures is commonly driven by drift or changing real-world patterns.",
    tags: ["drift", "quality"],
  },
  {
    id: "Q068",
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "Which mechanism best supports automatic retraining after drift alerts while preserving approval controls?",
    choices: [
      "EventBridge-triggered pipeline with model registry approval stages",
      "Direct production deployment from notebook every night",
      "Disable approval workflows to increase speed",
      "Manual copy of model files through email",
    ],
    correct: [0],
    rationale:
      "Event-driven retraining with explicit approval gates balances automation and governance.",
    tags: ["retraining", "governance"],
  },
  {
    id: "Q069",
    domain: "D4",
    difficulty: "Easy",
    type: "single",
    prompt:
      "What is the primary purpose of CloudWatch alarms in ML production systems?",
    choices: [
      "Notify and trigger responses when metrics exceed thresholds",
      "Train models faster",
      "Store large datasets long term",
      "Replace IAM role policies",
    ],
    correct: [0],
    rationale:
      "CloudWatch alarms detect unhealthy behavior and can initiate notifications or automated remediation.",
    tags: ["CloudWatch", "operations"],
  },
  {
    id: "Q070",
    domain: "D4",
    difficulty: "Medium",
    type: "multi",
    prompt:
      "Which practices improve ML workload security posture? (Choose TWO.)",
    choices: [
      "Rotate credentials and avoid hardcoded secrets",
      "Use least-privilege IAM roles",
      "Grant permanent admin permissions to all users",
      "Expose private endpoints publicly for testing",
      "Disable encryption to simplify debugging",
    ],
    correct: [0, 1],
    rationale:
      "Credential hygiene and least-privilege role design are foundational security controls for ML systems.",
    tags: ["security", "IAM"],
  },
  {
    id: "Q071",
    domain: "D4",
    difficulty: "Hard",
    type: "single",
    prompt:
      "A compliance team requests proof of who approved each model release and when. Which capability should be part of the design?",
    choices: [
      "Auditable model lifecycle records in registry + CloudTrail logs",
      "Ad-hoc verbal approval only",
      "Local sticky notes for sign-offs",
      "Deleting release history after deployment",
    ],
    correct: [0],
    rationale:
      "Registry metadata plus API audit logs provide durable approval and release evidence.",
    tags: ["compliance", "audit trail"],
  },
  {
    id: "Q072",
    domain: "D4",
    difficulty: "Medium",
    type: "single",
    prompt:
      "Which action most improves incident response for failing ML endpoints?",
    choices: [
      "Define runbooks with alert routing, rollback steps, and ownership",
      "Wait for users to report issues before acting",
      "Disable metric collection during incidents",
      "Redeploy random model versions until it works",
    ],
    correct: [0],
    rationale:
      "Runbooks and clear ownership reduce mean time to detect and recover from model-serving incidents.",
    tags: ["incident response", "operations"],
  },
];

export const inferRules = [
  { domain: "D1", keywords: ["data", "feature", "ingest", "catalog", "etl", "schema", "pii"] },
  {
    domain: "D2",
    keywords: ["train", "metric", "validation", "tuning", "model", "classification", "regression"],
  },
  {
    domain: "D3",
    keywords: ["deploy", "endpoint", "pipeline", "batch", "orchestr", "inference", "rollout"],
  },
  {
    domain: "D4",
    keywords: ["monitor", "drift", "alarm", "security", "audit", "retrain", "latency"],
  },
];

export const defaultInferDomain = "D2";

export const mlaC01Course = {
  examMeta,
  domainBlueprint,
  prepPlaybooks,
  questionBank,
  serviceAtlas,
  topicSeeds,
  inferRules,
  defaultInferDomain,
};
