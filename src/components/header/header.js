import './header.css';
import Logo from "../logo/logo";
import Menulist from "../menuHook/menu";
import LoginLogout from "../LoginLogoutHook/LoginLogout";
function Header() {
    return (
        <header className='header'>
            <Logo />
            <Menulist />
            <LoginLogout />
        </header>
    )
}

export default Header;