"use client";

import { useFormState } from "react-dom";
import { sendFeedback } from "./actions";
import { useEffect, useRef } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FieldError from "@/components/Form/field-error";
import SubmitButton from "@/components/Form/submit-button";
import { useToast } from "@/components/ui/use-toast";

const FeedbackForm = () => {
  const [state, action] = useFormState(sendFeedback, {
    message: "",
    status: "",
    errors: [],
  });

  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    state.status === "success" && formRef.current?.reset();

    if (state.status !== "") {
      toast({
        title: state.message,
        variant: state.status === "success" ? "default" : "destructive",
      });
    }
  }, [state.message, state.status, toast]);

  return (
    <div className="max-w-wrapper mx-auto py-12 min-h-[800px] h-screen -mt-24 pt-24">
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-center text-3xl font-bold mb-6">Feedback Form</h2>
        <form
          action={action}
          className="flex flex-col gap-2 w-full md:w-96"
          ref={formRef}
        >
          <Label htmlFor="name">Name</Label>
          <Input placeholder="name" id="name" name="name" />
          <FieldError formState={state} name="name" />

          <Label htmlFor="email">Email</Label>
          <Input placeholder="email" id="email" name="email" />
          <FieldError formState={state} name="email" />

          <Label htmlFor="feedback">Feedback</Label>
          <Textarea
            placeholder="feedback"
            id="feedback"
            name="feedback"
            className="resize-none"
          />
          <FieldError formState={state} name="feedback" />

          <SubmitButton label="Send a feedback!" loading="Sending..." />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
