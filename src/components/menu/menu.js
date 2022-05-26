import './menu.css';
import React from "react";
// const navMenu = ['home', 'about', 'download', 'contacts']
const navMenu = [
    { name: 'home', price: 20000, url: '/' },
    { name: 'about', price: 15000, url: 'about' },
    { name: 'Bentley continental', price: 50000, url: 'https://www.bentleymoscow.ru/wp/wp-content/uploads/NICK3765.jpg' },
    { name: 'Mercedes amg coupe', price: 18000, url: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }
]


function Menulist () {
    //
    // let [state, setState1] = useState(0);
    // let [menu, setMenu] = useState([]);
    //
    // setState1(123);
    return (
        <ul>
            {navMenu.map((item, index) =>
            <li key={index}><a href={item.url} target='_blank' rel="noreferrer">{item.name}</a></li>
                )}
        </ul>
    )

}

export default Menulist;