import { WorkData } from "../components/Timeline";

const workdata: WorkData[] = [
  {
    jobtitle: "Chatbot Developer",
    company: "Growth Acceleration Partners",
    descriptions: [
      "Built a Slack-integrated chatbot for company policy lookup using Flask and Slack Bolt.",
      "Processed documents with ChromaDB and Hugging Face embeddings for query-based retrieval.",
      "Leveraged Mixtral-8x7B (AWS Bedrock) for summarizing relevant document fragments.",
      "Managed document storage in AWS S3 and deployed services via AWS App Runner and ECR with Docker.",
      "Configured AWS IAM permissions and secured keys with AWS Secrets Manager.",
    ],
    dates: "June 2024 - August 2024",
    logolink: null,
    is_left: true,
  },
  {
    jobtitle: "Python Engineer",
    company: "Growth Acceleration Partners",
    descriptions: [
      "Built an app to upload Slack deal channel conversations to HubSpot deals every 24 hours.",
      "Integrated Slack and HubSpot APIs using Flask and Slack Bolt.",
      "Deployed on Microsoft Azure Web App with data stored in Azure SQL Server.",
    ],
    dates: "December 2024 - Present",
    logolink: null,
    is_left: false,
  },
];

export default workdata;
