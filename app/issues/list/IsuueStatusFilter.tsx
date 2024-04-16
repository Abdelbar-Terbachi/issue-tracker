"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const status: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

const IsuueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {status.map((stat) => (
          <Select.Item key={stat.value} value={stat.value || "All"}>
            {stat.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IsuueStatusFilter;
