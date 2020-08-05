import React from 'react';
import FooterBase from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/pablwoAraujo/AluraFlix">
        <img className="Logo" src={Logo} alt="https://github.com/logos" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/pablwoAraujo">
          Pablwo Araújo
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
