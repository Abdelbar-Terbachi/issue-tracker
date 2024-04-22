import IssueSummary from "./IssueSummary";
import { Box, Flex, Grid } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import BarChart from "./BarChart";
import LatestIssue from "./LatestIssue";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="7">
      <Flex direction="column" gap="9">
        <IssueSummary data={{ open, inProgress, closed }} />
        <BarChart data={{ open, inProgress, closed }} />
      </Flex>
      <Box>
        <LatestIssue />
      </Box>
    </Grid>
  );
}
