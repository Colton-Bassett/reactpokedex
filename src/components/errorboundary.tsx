import React, { ReactNode } from "react";

import styles from "../pages/home.module.css";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null };
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

export function ErrorComponent({
  type,
  description,
}: {
  type: string;
  description: string;
}) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorTitle}>Error: {type}</div>
      <div className={styles.errorDescription}>{description}</div>
    </div>
  );
}
