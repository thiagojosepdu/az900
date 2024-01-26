// index.js (Header)

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineQuestionCircle } from 'react-icons/ai'; // Remova a importação não utilizada
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
  return (
    <Navbar className="navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand logo" to="/">
        <AiOutlineHome />
        INICIO
      </Link>
      <Link className="navbar-brand" to="/pergunta">
        <AiOutlineQuestionCircle />
        PERGUNTAS
      </Link>
      {/* Restante do código... */}
    </Navbar>
  );
}

export default Header;
