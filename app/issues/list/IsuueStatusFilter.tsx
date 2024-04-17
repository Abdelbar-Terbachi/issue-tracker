"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const status: { label: string; value: Status | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

const IsuueStatusFilter = () => {
  const router = useRouter();

  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status !== "All" ? `?status=${status}` : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {status.map((stat) => (
          <Select.Item key={stat.value} value={stat.value || ""}>
            {stat.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IsuueStatusFilter;
