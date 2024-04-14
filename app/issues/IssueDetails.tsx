import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import IssueStatusComponent from "../components/IssueStatusComponent";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="4" my="4">
        <IssueStatusComponent status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="max-w-xl prose ">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
