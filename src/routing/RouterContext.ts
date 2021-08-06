import { createContext } from 'react';
import { RouterContextType } from './create-router';

const RouterContext = createContext<RouterContextType | null>(null);

export default RouterContext;
