import './card.css';
import {AuthContext} from '../../AuthContext';
import {useContext} from "react";

function Card({data:{name, price, img}, onDelete}) {

    const {user} = useContext(AuthContext);

    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={img}
                    alt={name}
                />
            </div>
            <h3>{name}</h3>
            <p>{price}$</p>
            {user && <button className="card-button" type="button" onClick={onDelete}>X</button>}
        </div>
    );
}

export default Card;