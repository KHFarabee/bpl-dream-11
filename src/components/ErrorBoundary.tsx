import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="container mx-auto my-12 p-8 text-center bg-red-50 border border-red-200 rounded-2xl max-w-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Failed to load players
            </h2>
            <p className="text-gray-600 mb-4">
              {this.state.error?.message || "An unexpected error occurred while loading player data."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-error btn-sm text-white"
            >
              Retry
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
