// CustomRow.js (o il nome del tuo componente)
import React, { useContext } from 'react';
import './Style.scss'; // Assicurati di includere il file CSS personalizzato con i nuovi nomi di classe
import GlobalContext from './GlobalContext';

const MenuBar = () => {

  const { cssValue } = useContext(GlobalContext);

  const menuItems = [
    { label: 'ATENEO', link: '/home' },
    { label: 'DIDATTICA', link: '/about' },
    { label: 'RICERCA', link: '/services' },
    { label: 'TERZA MISSIONE', link: '/contact' },
    { label: 'INTERNATIONAL', link: '/blog' },
  ];

  return (
    <div className={`custom-row ${cssValue}`}>
      {menuItems.map((item, index) => (
        <a key={index} href={item.link} className="custom-column">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MenuBar;
