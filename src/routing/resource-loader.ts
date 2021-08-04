/**
 * A cache of resources to avoid loading the same module twice. This is important
 * because Webpack dynamic imports only expose an asynchronous API for loading
 * modules, so to be able to access already-loaded modules synchronously we
 * must have stored the previous result somewhere.
 */
const resourceMap = new Map();

type loaderFunction = () => Promise<{ default: () => JSX.Element }>;

/**
 * A generic resource: given some method to asynchronously load a value - the loader()
 * argument - it allows accessing the state of the resource.
 */
class Resource {
    error: null;
    loader: loaderFunction;
    promise: null;
    result: () => JSX.Element || null;

    constructor(loader: loaderFunction) {
        this.error = null;
        this.loader = loader;
        this.promise = null;
        this.result = null;
    }

    /**
     * Loads the resource if necessary.
     */
    load() {
        let promise = this.promise;
        if (promise === null) {
            promise = this.loader().then((result) => {
                this.result = result.default;
            });
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
const resourceLoader = (moduleId: string, loader) => {
    let resource = resourceMap.get(moduleId);
    if (typeof resource === 'undefined' || resource === null) {
        const resource = new Resource(loader);
        resourceMap.set(moduleId, resource);
    }
    return resource;
};

export default resourceLoader;
