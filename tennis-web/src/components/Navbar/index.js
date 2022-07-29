import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
} from './NavbarElements';
import Carousel from "react-material-ui-carousel"

function Navbar() {
    return (
        <div>
            <Carousel height="600px" activeStyle="position=flex" navButtonsAlwaysInvisible="true" indicators={false}>
                <Nav style={{backgroundImage: "url('/images/IMG_4759_header.JPG')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
                    <NavMenu>
                        <NavLink to='/' activeStyle>
                            Trang Chủ
                        </NavLink>
                        <NavLink to='/course' activeStyle>
                            Khóa Học
                        </NavLink>
                        <NavLink to='/contact' activeStyle>
                            Liên Hệ
                        </NavLink>
                    </NavMenu>
                </Nav>
                <Nav style={{backgroundImage: "url('/images/IMG_0222_header.JPG')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
                    <NavMenu>
                        <NavLink to='/' activeStyle>
                            Trang Chủ
                        </NavLink>
                        <NavLink to='/course' activeStyle>
                            Khóa Học
                        </NavLink>
                        <NavLink to='/contact' activeStyle>
                            Liên Hệ
                        </NavLink>
                    </NavMenu>
                </Nav>
                <Nav style={{backgroundImage: "url('/images/IMG_3630_header.JPG')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
                    <NavMenu>
                        <NavLink to='/' activeStyle>
                            Trang Chủ
                        </NavLink>
                        <NavLink to='/course' activeStyle>
                            Khóa Học
                        </NavLink>
                        <NavLink to='/contact' activeStyle>
                            Liên Hệ
                        </NavLink>
                    </NavMenu>
                </Nav>
            </Carousel>
        </div>);
};

export default Navbar;