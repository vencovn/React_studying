import './footer.css';

function Footer() {
    let year = new Date().getFullYear();
    return (

        <footer className='footer'>
            <div>
                Copyright &copy; {year}
            </div>
        </footer>
    )
}

export default Footer;