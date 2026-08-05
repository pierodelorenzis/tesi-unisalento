import React, {useContext} from 'react';
import './Style.scss';
import GlobalContext from './GlobalContext';

const MenuBar = () => {

    const {displayMode} = useContext(GlobalContext);

    const menuItems = [
        {label: 'ATENEO', link: '/home'},
        {label: 'DIDATTICA', link: '/about'},
        {label: 'RICERCA', link: '/services'},
        {label: 'TERZA MISSIONE', link: '/contact'},
        {label: 'INTERNATIONAL', link: '/blog'},
    ];

    return (
        <div className={`custom-row ${displayMode}`}>
            {menuItems.map((item, index) => (
                <a key={index} href={item.link} className="custom-column">
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default MenuBar;
