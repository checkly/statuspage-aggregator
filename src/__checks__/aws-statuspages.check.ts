enum AwsRegion {
  US_EAST_1 = "us-east-1", // N. Virginia
  US_EAST_2 = "us-east-2", // Ohio
  US_WEST_1 = "us-west-1", // N. California
  US_WEST_2 = "us-west-2", // Oregon
  EU_WEST_1 = "eu-west-1", // Ireland
  EU_WEST_2 = "eu-west-2", // London
  EU_WEST_3 = "eu-west-3", // Paris
  EU_CENTRAL_1 = "eu-central-1", // Frankfurt
  EU_NORTH_1 = "eu-north-1", // Stockholm
  AP_SOUTHEAST_1 = "ap-southeast-1", // Singapore
  AP_SOUTHEAST_2 = "ap-southeast-2", // Sydney
  AP_NORTHEAST_1 = "ap-northeast-1", // Tokyo
  AP_NORTHEAST_2 = "ap-northeast-2", // Seoul
  AP_SOUTH_1 = "ap-south-1", // Mumbai
  AP_EAST_1 = "ap-east-1", // Hong Kong
  ME_SOUTH_1 = "me-south-1", // Bahrain
  SA_EAST_1 = "sa-east-1", // São Paulo
  CA_CENTRAL_1 = "ca-central-1", // Canada Central
  AF_SOUTH_1 = "af-south-1", // Cape Town
  EU_SOUTH_1 = "eu-south-1", // Milan
  CN_NORTH_1 = "cn-north-1", // Beijing
  CN_NORTHWEST_1 = "cn-northwest-1", // Ningxia
}
enum AwsService {
  EC2 = "ec2", // Elastic Compute Cloud
  S3 = "s3", // Simple Storage Service
  RDS = "rds", // Relational Database Service
  Lambda = "lambda", // AWS Lambda
  DynamoDB = "dynamodb", // NoSQL Database Service
  VPC = "vpc", // Virtual Private Cloud
  IAM = "iam", // Identity and Access Management
  CloudFormation = "cloudformation", // Infrastructure as Code
  SNS = "sns", // Simple Notification Service
  SQS = "sqs", // Simple Queue Service
  CloudWatch = "cloudwatch", // Monitoring and Observability
  Route53 = "route53", // DNS and Domain Name Registration
  EBS = "ebs", // Elastic Block Store
  EFS = "efs", // Elastic File System
  ECS = "ecs", // Elastic Container Service
  EKS = "eks", // Elastic Kubernetes Service
  APIGateway = "apigateway", // API Gateway
  ElastiCache = "elasticache", // In-memory Caching
  Kinesis = "kinesis", // Data Streaming
  Redshift = "redshift", // Data Warehousing
  Glacier = "glacier", // Long-term Data Archival
  SES = "ses", // Simple Email Service
  EMR = "emr", // Elastic MapReduce
  CloudFront = "cloudfront", // Content Delivery Network
  CodeCommit = "codecommit", // Source Control Service
  CodeBuild = "codebuild", // Build and Test Code
  CodeDeploy = "codedeploy", // Automated Code Deployment
  CodePipeline = "codepipeline", // Continuous Delivery
}

// Example usage
const myService: AwsService = AwsService.EC2;

// Example usage
const myRegion: AwsRegion = AwsRegion.US_EAST_1;
