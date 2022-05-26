import Card from "../card/card";
import {useState, useEffect, useContext} from "react";
import AddCarForm from "../addcarform/AddCarForm";
import ShowHideForm from "../showHideForm/showHideForm";
import {AuthContext} from "../../AuthContext";


function CatalogueHook (){

    const [isAdd, setIsAdd] = useState(false)
    const [cars, setCars]= useState([]);
    let {user} = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:3000/cars.json')
            .then(res => res.json())
            .then((cars) => {
                setCars(cars)
            })
    }, []);

    function deleteCard(index) {
        cars.splice(index, 1);
        setCars([...cars]);
    }
    
    const addCar = (car) => {
        car.id = new Date().valueOf();
        setCars([...cars, car]);
        setIsAdd(false);
    }


    return(
        <>
            {user && <button onClick={() => setIsAdd(true)}>add car</button>}
            <ShowHideForm show={isAdd} onModalClose={() => setIsAdd(false)}>
                <AddCarForm onCarAdd={addCar} />
            </ShowHideForm>
             <div className="list">
                {cars.map((car, index) =>
                    <div key={car.id}>
                        <Card data={car} onDelete={() => deleteCard(index)}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default CatalogueHook;