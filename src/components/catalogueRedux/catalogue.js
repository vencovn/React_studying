import Card from "../card/card";
import {useSelector, useDispatch} from 'react-redux';

import {addCar, deleteCar, loadCars} from "../../store/actions/catalog-actions";
import {useContext, useEffect, useState} from "react";
import ShowHideForm from "../showHideForm/showHideForm";
import AddCarForm from "../addcarform/AddCarForm";
import {AuthContext} from "../../AuthContext";


function CatalogueRedux (props){

    let dispatch = useDispatch();
    const [isAdd, setIsAdd] = useState(false)
    let {user} = useContext(AuthContext)
    // const [cars, setCars]= useState([]);
    let cars = useSelector((state) => state.catalog)

    useEffect(() => {
        dispatch(loadCars());
    }, [dispatch]);

    const delCar = (car) => {
        dispatch(deleteCar(car));
    }

    const addingCar = (car) => {
        dispatch(addCar(car));
        setIsAdd(false);
    }


    return (
        <>
            {user && <button onClick={() => setIsAdd(true)}>add car</button>}
            <ShowHideForm show={isAdd} onModalClose={() => setIsAdd(false)}>
                <AddCarForm onCarAdd={addingCar} />
            </ShowHideForm>
             <div className="list">
                {cars.map((car) =>
                    <div key={car.id}>
                        <Card data={car} onDelete={() => delCar(car)} />
                    </div>
                )}
            </div>

        </>
    )
}

export default CatalogueRedux;