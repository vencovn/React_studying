
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteItem,loadMenu} from "../../store/actions/menu-redux-actions";

function MenuRedux (){
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu)

    useEffect(() => {
        dispatch(loadMenu());
    }, [dispatch]);

    const delMenuItem = (item) => {
        dispatch(deleteItem(item));
    }
    return (
        <ul>
            {menu.map(item => (
                <li key={item.id}><a href={item.url}>{item.name}</a><button onClick={() => delMenuItem(item)}>Delete</button></li>
            ))}
        </ul>
    )
}

export default MenuRedux;