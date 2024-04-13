import "react-loading-skeleton/dist/skeleton.css";
import { Status } from "@prisma/client";
import { Flex, Heading, Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetailPage = () => {
  const issue = {
    id: 0,
    title: "title",
    description: "title",
    status: Status.IN_PROGRESS,
    createdAt: "",
  };
  return (
    <div>
      <Skeleton width="20rem" />
      <Flex gap="4" my="4">
        <Skeleton width="5rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Card className="max-w-xl prose ">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
