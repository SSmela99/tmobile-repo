import { FormState } from "@/app/feedback/actions";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError = ({ formState, name }: FieldErrorProps) => {
  const message = formState.errors.find((x) => x.input === name)?.message;
  return <span className="text-[10px] ml-1 -mt-1 text-red-400">{message}</span>;
};

export default FieldError;
