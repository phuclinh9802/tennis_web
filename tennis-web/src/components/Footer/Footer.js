import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="siteInfo">
                Address...           
                Phone...
                <a className="contact" href="/contact">Liên Hệ</a>
            </div>
        </footer>
    );
}

export default Footer;