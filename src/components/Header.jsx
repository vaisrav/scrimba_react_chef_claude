import headerLogo from '../assets/header-logo.png';

function Header() {
    return (
        <header className='header'>
            <img className='header_logo' src={headerLogo} alt="header logo" />
            <h1 className='header_title'>Chef Claude</h1>
        </header>
    )
}

export default Header;