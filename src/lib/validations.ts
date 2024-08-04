import { z, ZodError } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(1, { message: "Too short" }),
  email: z.string().email("This is not a valid email"),
  feedback: z
    .string()
    .min(5, { message: "Too short" })
    .max(500, { message: "Too long" }),
});

export const fromErrorToFeedbackFormState = (error: unknown) => {
  if (error instanceof ZodError) {
    return {
      errors: error.errors.map((e) => ({
        input: e.path[0] as string,
        message: e.message,
      })),
      message: "Something went wrong",
      status: "",
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      status: "error",
      errors: [],
    };
  } else {
    return {
      message: "An unknown error occurred",
      status: "error",
      errors: [],
    };
  }
};
