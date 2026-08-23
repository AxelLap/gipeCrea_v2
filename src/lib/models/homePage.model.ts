import z from "zod";

export const IntroSchema = z.object({
  id: z.string(),
  url: z.string(),
  title: z.string(),
  p1: z.string(),
  p2: z.string(),
  p3: z.string(),
  span: z.string(),
});
export type IntroSchemaGet = z.infer<typeof IntroSchema>;
export type IntroSchemaPut = z.infer<typeof IntroSchema>;
