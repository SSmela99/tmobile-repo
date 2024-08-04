"use server";
import {
  feedbackSchema,
  fromErrorToFeedbackFormState,
} from "@/lib/validations";

export type FormState = {
  errors: { input: string; message: string }[];
  message: string;
  status: string;
};

export const sendFeedback = async (
  formState: FormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const { name, email, feedback } = feedbackSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      feedback: formData.get("feedback"),
    });

    console.log({ name, email, feedback });
  } catch (error) {
    return fromErrorToFeedbackFormState(error);
  }

  return {
    message: "Feedback has been sent",
    status: "success",
    errors: [],
  };
};
