import { Component, ReactElement } from 'react';

type State = { error?: Error };

type Props = {
    fallback: (error: Error) => ReactElement;
};

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        const { error } = this.state;

        if (typeof error !== 'undefined') {
            return this.props.fallback(error);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
