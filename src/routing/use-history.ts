import { useRouterContext } from './RouterContext';

const useHistory = () => {
    const router = useRouterContext();
    return router?.history;
};

export default useHistory;
