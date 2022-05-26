import './App.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import React from "react";
import {AuthContext} from "../../AuthContext";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import FeedBackPage from "../../pages/FeedBackPage";
import OurWorksPage from "../../pages/OurWorksPage";
import NotFound from "../../pages/NotFound";



class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount () {

    }

    componentWillUnmount() {

    }


    setUser = (user) => {
        console.log('user from app', user);
        this.setState({user});
    }


    render() {
        return (
            <AuthContext.Provider value = {{
                setUser: this.setUser,
                user: this.state.user
            }}>
            <div className='app'>
                <Header />
                <div className='body'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/feedback" element={<FeedBackPage />} />
                        <Route path="/our-works" element={<OurWorksPage />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
            </AuthContext.Provider>
        )
    }
}


export default App;
