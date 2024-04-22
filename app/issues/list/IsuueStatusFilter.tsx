"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const status: { label: string; value: Status | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

const IsuueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (status)
    return (
      <Select.Root
        defaultValue={searchParams.get("status") || ""}
        onValueChange={(status) => {
          const params = new URLSearchParams();
          if (status) params.append("status", status);
          if (searchParams.get("orderBy"))
            params.append("orderBy", searchParams.get("orderBy")!);
          const query = params.size ? "?" + params.toString() : "";
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
