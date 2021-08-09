import React, { Component } from 'react';

/**
 * A reusable component for handling errors in a React (sub)tree.
 */

export default class ErrorBoundary extends Component<{}> {
    state: { error: Error | null };

    constructor(props: {}) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return {
            error,
        };
    }

    render() {
        if (this.state.error !== null) {
            return (
                <div>
                    <div>Error: {this.state.error.message}</div>
                </div>
            );
        }
        return this.props.children;
    }
}
