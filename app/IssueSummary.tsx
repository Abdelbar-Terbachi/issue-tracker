import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open", value: open, status: "OPEN" },
    { label: "Closed", value: closed, status: "CLOSED" },
    { label: "In Progress", value: inProgress, status: "IN_PROGRESS" },
  ];
  return (
    <Flex gap="5">
      {containers.map((container) => (
        <Card>
          <Flex direction="column" gap="1 ">
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
