import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(1),
});
