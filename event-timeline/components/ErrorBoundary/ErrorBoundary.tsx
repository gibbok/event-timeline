import { logError } from "@/api/utils";
import React, { Component, ReactNode, ErrorInfo } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

type ErrorBoundaryProps = Readonly<{
  children?: ReactNode;
}>;

type ErrorBoundaryState = Readonly<{
  hasError: boolean;
}>;

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logError("fe-error", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}
