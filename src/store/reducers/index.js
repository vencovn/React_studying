import {combineReducers} from "redux";
import {catalogReducer} from './catalog';
import {menuReduxReducer} from '../reducers/menu-redux';

export const reducers = combineReducers({
    catalog: catalogReducer,
    menu: menuReduxReducer
});
