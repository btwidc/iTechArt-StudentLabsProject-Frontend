import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logoutAuthAction } from '../../store/actions/userActions';

import './SidebarNavMenu.scss';
import { sidebarNavItemsRoutes } from '../../routes/sidebarNavItemsRoutes';

interface SidebarNavProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SidebarNavMenu = ({ open, setOpen }: SidebarNavProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeSidebar = () => setOpen(!open);

    const handleLogout = async (e: any) => {
        e.preventDefault();
        dispatch(logoutAuthAction(navigate));
    };

    return (
        <div
            className={
                open ? 'sidebar-nav-container mobile' : 'sidebar-nav-container'
            }>
            <div className="sidebar-nav-menu-container">
                <button className="sidebar-nav-cancel" onClick={closeSidebar}>
                    <img src="/images/iconCancel.png" alt="Cancel icon" />
                </button>
                <Link
                    className="sidebar-nav-logo"
                    to="/"
                    onClick={closeSidebar}>
                    <img src={'/images/iTechArtLogo.png'} alt="iTechArt logo" />
                </Link>
                <div className="sidebar-nav-menu">
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            {sidebarNavItemsRoutes.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={item.className}
                                        onClick={closeSidebar}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                );
                            })}
                            <li className="nav-item">
                                <Link to="#" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SidebarNavMenu;
