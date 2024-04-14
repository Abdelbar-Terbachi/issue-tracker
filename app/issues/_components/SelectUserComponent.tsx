import prisma from "@/prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const SelectUserComponent = async () => {
  const users = await prisma.user.findMany();

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign ..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Assign User</Select.Label>
          {users.map((user) => (
            <Select.Item value={user.id}>{user.name}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectUserComponent;
