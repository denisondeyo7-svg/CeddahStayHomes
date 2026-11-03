
function Navbar() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <h2>Ceddah <br />
                    <span className="logo-break">Stay Homes</span></h2>
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#Testimonials">Testimonials</a>
                    <a href="#Contact">Contact</a>
                </div>
                <div className="menubtn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    );
}

export default Navbar;