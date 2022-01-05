import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch = (err, errInfo) => {
    console.error(err, errInfo);
  };

  render() {
    if (this.state.hasError) {
      return <h2>{this.props.fallback}</h2>;
    }
    return this.props.children;
  }
}
