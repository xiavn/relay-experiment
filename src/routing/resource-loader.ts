import { FunctionComponent } from 'react';

/**
 * A cache of resources to avoid loading the same module twice. This is important
 * because Webpack dynamic imports only expose an asynchronous API for loading
 * modules, so to be able to access already-loaded modules synchronously we
 * must have stored the previous result somewhere.
 */
const resourceMap = new Map();

export type GenericComponent = any;

type loaderFunction = () => Promise<{ default: GenericComponent }>;

/**
 * A generic resource: given some method to asynchronously load a value - the loader()
 * argument - it allows accessing the state of the resource.
 */
export class Resource {
    _error: null;
    _loader: loaderFunction;
    _promise: Promise<GenericComponent> | null;
    _result: FunctionComponent | null;

    constructor(loader: loaderFunction) {
        this._error = null;
        this._loader = loader;
        this._promise = null;
        this._result = null;
    }

    /**
     * Loads the resource if necessary.
     */
    load() {
        let promise = this._promise;
        if (promise === null) {
            promise = this._loader()
                .then((result) => {
                    this._result = result.default;
                    return result.default;
                })
                .catch((error) => {
                    this._error = error;
                    throw error;
                });
            this._promise = promise;
        }
        return promise;
    }

    /**
     * Returns the result, if available. This can be useful to check if the value
     * is resolved yet.
     */
    get() {
        if (this._result !== null) {
            return this._result;
        }
    }

    /**
     * This is the key method for integrating with React Suspense. Read will:
     * - Return the data of the resource if available.
     * - Throw an error if the resource failed to load.
     * - "Suspend" if the resource is still pending (currently implemented as
     *   throwing a Promise, though this is subject to change in future
     *   versions of React)
     */
    read() {
        if (this._result !== null) {
            return this._result;
        } else if (this._error !== null) {
            throw this._error;
        } else {
            throw this._promise;
        }
    }
}

/**
 * A helper method to create a resource, intended for dynamically loading code.
 *
 * Example:
 * ```
 *    // Before rendering, ie in an event handler:
 *    const resource = resourceLoader('Foo', () => import('./Foo.js));
 *    resource.load();
 *
 *    // in a React component:
 *    const Foo = resource.read();
 *    return <Foo ... />;
 * ```
 *
 * @param {*} moduleId A globally unique identifier for the resource used for caching
 * @param {*} loader A method to load the resource's data if necessary
 */
const resourceLoader = (moduleId: string, loader: loaderFunction) => {
    let resource = resourceMap.get(moduleId);
    if (typeof resource === 'undefined' || resource === null) {
        const resource = new Resource(loader);
        resourceMap.set(moduleId, resource);
    }
    return resource;
};

export default resourceLoader;
