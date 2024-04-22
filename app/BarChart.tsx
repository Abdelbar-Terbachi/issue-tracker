"use client";
import { Card } from "@radix-ui/themes";
import {
  BarChart as BarCharts,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

interface Props {
  data: {
    open: number;
    inProgress: number;
    closed: number;
  };
}

const BarChart: React.FC<Props> = ({
  data: { open, inProgress, closed },
}: Props) => {
  const data = [
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarCharts width={150} height={40} data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-9 )" }}
          />
        </BarCharts>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarChart;
