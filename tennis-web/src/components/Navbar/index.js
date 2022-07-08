import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Trang Chủ
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        Giới Thiệu
                    </NavLink>
                    <NavLink to='/course' activeStyle>
                        Khóa Học
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        Huấn Luyện Viên
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Liên Hệ
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>);
};

export default Navbar;