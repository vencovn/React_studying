import React from "react";
import Modal from "../Modal";
class LoginLogout extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    login(){
        this.setState({
            isLogin: true
        });
    }
    logout(){
        this.setState({
            isLogin: false
        });

    }

    closeModal() {
        this.setState({
            isLogin: false
        });
    }

    render() {
        let isLogin = this.state.isLogin;
        return (
            <div>
                {isLogin ? (
                    <button onClick={(e) => this.logout(e)}>Выйти</button>
                ) : (
                    <button onClick={(e) => this.login(e)}>Войти</button>
                )}
                <Modal show={isLogin} onModalClose={this.closeModal.bind(this)}/>
            </div>
        );
    }
}

export default LoginLogout;