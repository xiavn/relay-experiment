const USER_ID = 'userId';
const USER_TOKEN = 'userToken';

export const saveUserData = (id: string, token: string) => {
    localStorage.setItem(USER_ID, id);
    localStorage.setItem(USER_TOKEN, token);
};

export const readUserData = () => {
    const id = localStorage.getItem(USER_ID);
    const token = localStorage.getItem(USER_TOKEN);
    if (id !== null && token !== null) {
        return { id, token };
    }
    return null;
};

export const removeUserData = () => {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_TOKEN);
};
