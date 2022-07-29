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
            <Carousel height="400px" indicators="false" activeStyle="position=flex" navButtonsAlwaysInvisible="true">
                <Nav style={{backgroundImage: "url('https://picsum.photos/id/412/1920/600')"}}>
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
                <Nav style={{backgroundImage: "url('https://picsum.photos/id/413/1920/600')"}}>
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
                <Nav style={{backgroundImage: "url('https://picsum.photos/id/411/1920/600')"}}>
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