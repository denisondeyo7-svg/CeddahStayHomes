import { useState } from "react";
function Navbar() {

    const[Open ,SetOpen]=useState(false);
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
                    <i className={Open ? "fas fa-xmark":"fas fa-bars"} onClick={()=>SetOpen(!Open)}></i>

                    
                </div>
                {Open &&(
                    <div className="menu">
                        <i className="fas fa-xmark" onClick={()=>SetOpen(false)}></i>
                        <a href="#home" onClick={()=>SetOpen(false)}>Home</a>
                        <a href="#about" onClick={()=>SetOpen(false)}>About</a>
                        <a href="#Testimonials" onClick={()=>SetOpen(false)}>Testimonials</a>
                        <a href="#Contact" onClick={()=>SetOpen(false)}>Contact</a>
                        <a href="">Tenants Page</a>
                    </div>
                )}

            </div>
        </header>
    );
}

export default Navbar;