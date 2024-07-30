import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_english.png';
import "./Menu.css";

const Menu = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.logoLink}>
                <img src={logo} alt="Логотип" style={styles.logo} />
            </Link>
            <div style={styles.linksContainer}>
                <Link to="/" style={styles.link}>Главная</Link>
                <Link to="/game" style={styles.link}>Карточки</Link>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#ffddeb',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '10px 20px',
        zIndex: 100,
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
    },
    linksContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        margin: '0 15px',
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500',
        transition: 'color 0.3s',
        fontSize: '18px',
    },
    linkHover: {
        color: '#008BFF', // Цвет при наведении
    },
    logo: {
        width: '40px',
        height: '40px',
        cursor: 'pointer',
    },
};

export default Menu;
