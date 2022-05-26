import {useState} from "react";
let users = [{
    id: 1,
    login: 'admin',
    pass: '123'
},{
    id: 2,
    login: 'user',
    pass: '321'
}]
function useApi(options = {}) {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    return {
        result,
        error,
        auth: (login, password) => {
            let user = users.find(u => u.login === login);
            if (user && user.pass === password) {
                setResult(user)
                setError(null)
            } else {
                setError('Ошибка входа в систему')
            }
        }
    };
}

export default useApi;