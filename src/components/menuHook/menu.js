import './menu.css';
import {useContext} from "react";
import {AuthContext} from "../../AuthContext";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Menulist () {
    let {user} = useContext(AuthContext)
    const menu = useSelector((state) => state.menu);

    return (
        <ul>
            {menu.map((item, index) =>
                    <li key={index}><Link to={item.url}>{item.name}</Link></li>
                )}
            {user && (<li>{user.login}</li>)}
        </ul>
    )

}

export default Menulist;