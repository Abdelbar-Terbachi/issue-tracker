import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IsuueStatusFilter from "../list/IsuueStatusFilter";

const IssueActions = () => {
  return (
    <Flex className="mb-5" direction="row" justify="between">
      <IsuueStatusFilter />
      <Button>
        <Link href="/issues/new">Create</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
