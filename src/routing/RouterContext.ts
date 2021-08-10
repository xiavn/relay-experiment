import { createContext, useContext } from 'react';
import { RouterContextType } from './create-router';

const RouterContext = createContext<RouterContextType | null>(null);

export const useRouterContext = (): RouterContextType | null => {
    const router = useContext(RouterContext);
    return router;
};

export default RouterContext;
