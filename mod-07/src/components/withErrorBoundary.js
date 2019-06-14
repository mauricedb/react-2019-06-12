import React from "react";

function withErrorBoundary(WrappedComponent) {
  return class extends React.Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
      return { error };
    }
    componentDidCatch(error, info) {
      console.warn("Oops", error, info);
    }

    render() {
      const { error } = this.state;
      if (error) return <div>Error: {error.message}</div>;
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorBoundary;
