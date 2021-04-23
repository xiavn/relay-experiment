import { Component, ReactElement } from 'react';

type State = { error?: Error };

type Props = {
    fallback: ({
        error,
        retry,
    }: {
        error: Error;
        retry: () => void;
    }) => ReactElement;
    onRetry: () => void;
};

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    retry = () => {
        this.props.onRetry();
        this.setState({});
    };

    render() {
        const { error } = this.state;

        if (typeof error !== 'undefined') {
            return this.props.fallback({ error, retry: this.retry });
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
