import { z } from 'zod';

export const BanUserSchema = z.object({
  reason: z.string().optional(),
});

export type BanUserDto = z.infer<typeof BanUserSchema>;
