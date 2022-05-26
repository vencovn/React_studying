import Catalogue from '../components/catalogue/catalogue';
import CatalogueHook from '../components/catalogueHook/catalogue';
import CatalogueRedux from "../components/catalogueRedux/catalogue";
import MenuRedux from "../components/menuRedux/menuRedux";
import AddMenuItemRedux from "../components/addMenuItemRedux/addMenuItemRedux";

function HomePage() {
    return (
        <div className='homePage'>
            <div className='catalogue_class'>
                <h1>Каталог на React Reducers</h1>
                <CatalogueRedux />
            </div><div className='catalogue_class'>
                <h1>Каталог на React Class</h1>
                <Catalogue />
            </div>
            <div className='catalogue_function'>
                <h1>Каталог на React Hooks</h1>
                <CatalogueHook />
                <MenuRedux />
                <AddMenuItemRedux />
            </div>

        </div>

    )
}

export default HomePage;