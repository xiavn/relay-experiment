import { useContext } from 'react';
import CurrentUserContext, {
    CurrentUserContextType,
} from './CurrentUserContext';

const useGetCurrentUser = (): CurrentUserContextType | null => {
    const currentUser = useContext(CurrentUserContext);
    return currentUser;
};

export default useGetCurrentUser;
