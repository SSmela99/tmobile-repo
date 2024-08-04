"use client";

import Error from "@/components/error";

const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <Error error={error} reset={reset} />;
};

export default ErrorComponent;
