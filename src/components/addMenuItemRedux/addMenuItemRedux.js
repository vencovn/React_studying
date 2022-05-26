import useInput from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import { ADD_MENU_ITEM } from "../../store/actions/menu-redux-actions";

function AddMenuItemRedux () {

    let dispatch = useDispatch();

    let name = useInput('');
    let url = useInput('');
    const addItem = (event) => {
      event.preventDefault();
      dispatch({
          type: ADD_MENU_ITEM,
          payload: {
              name: name.value,
              url: url.value
          }
      })
      console.log(name.value, url.value)
    }
    return (
        <form>
            <div>
                <label>
                    Заголовок <br/>
                    <input {...name}/>
                </label>
            </div><div>
                <label>
                    URL <br/>
                    <input {...url}/>
                </label>
            </div>
            <button onClick={addItem}>Сохранить</button>
        </form>
    )
}

export default AddMenuItemRedux;