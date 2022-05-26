import Card from "../card/card";
import React from "react";

class Catalogue extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/cars.json')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    cars: result
                })
            }
        )
    }
    delete(index) {
        let cars = this.state.cars;
        cars.splice(index, 1);
        this.setState({cars});
    }

    render () {
        let cars = this.state.cars;
        return (
            <div className="list">

                {cars.map((car, index) => (
                    <div key={cars.id}>
                        <Card data={car} onDelete={() => this.delete(index)}/>
                    </div>
                    ))}
            </div>
        )
    }

}

export default Catalogue;