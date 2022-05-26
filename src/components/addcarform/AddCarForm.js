import React from "react";
import useInput from "../../hooks/useInput";

function AddCarForm({onCarAdd}) {

    let name = useInput();
    let img = useInput();
    let price = useInput();

    const addCar = (e) => {
        e.preventDefault();
        if (typeof onCarAdd === 'function'){
            onCarAdd({
                name: name.value,
                img: img.value,
                price: price.value,
            });
        }
    }

    return (
        <form className="addCar">
            <div>
                <label htmlFor="">
                    Car name: <br/>
                    <input {...name} type="text" placeholder="name"/>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Car image: <br/>
                    <input {...img} type="text" placeholder="photo" />
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Car price: <br/>
                    <input {...price} type="text" placeholder="price"/>
                </label>
            </div>
            <button type='button' onClick={addCar}>Save</button>
        </form>
    )
}

export default AddCarForm;