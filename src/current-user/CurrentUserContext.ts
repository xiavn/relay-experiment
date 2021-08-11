import { createContext } from 'react';

export interface CurrentUserContextType {
    token: string | null;
    user: {
        id: string;
    } | null;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

export default CurrentUserContext;
