import React, { ReactNode } from "react";

import styles from "../pages/home.module.css";
import { Box, Typography } from "@mui/material";

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
    <Box className={styles.errorContainer}>
      <Typography className={styles.errorTitle}>Error: {type}</Typography>
      <Typography className={styles.errorDescription}>{description}</Typography>
    </Box>
  );
}
