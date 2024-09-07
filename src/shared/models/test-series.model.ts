import { z } from "zod";

// Test Series containing a blueprint of the the questions and possible answers (and the correct answer)
export const TestSeriesBaseModel = z.object({
    _id: z.string().min(1),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
});

export type ITestSeriesBase = z.infer<typeof TestSeriesBaseModel>;