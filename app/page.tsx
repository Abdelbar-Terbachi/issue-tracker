import IssueSummary from "./IssueSummary";
import { Flex } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import BarChart from "./BarChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  return (
    <Flex direction="column" gap="5">
      <BarChart open={open} inProgress={inProgress} closed={closed} />
      {/* <LatestIssue /> */}
    </Flex>
  );
}
