import {AuthContext} from "../AuthContext";
import {useContext} from "react";
import Counter from "../components/counters/counter";
import Timer from "../components/counters/timer";
import './ourWorksPage.css';
function OurWorksPage() {
    let {user} = useContext(AuthContext)
    return (
        <div>
            {user ? (
                <div className='works_container'>
                    <div>
                        <p>Счетчик</p>
                        <Counter />
                    </div>
                    <div>
                        <p>Таймер</p>
                        <Timer />
                    </div>

                </div>
            ) : (
                <div className='works_warning'>
                    <h1>Доступ к этой странице ограничен!</h1>
                    <h2>Пожалуйста, авторизуйтесь!</h2>
                </div>
            )}
        </div>

    )
}

export default OurWorksPage;