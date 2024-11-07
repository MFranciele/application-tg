import { useState } from 'react';
import './header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false); 

  const handleOpenModal = (event: any) => {
    event.preventDefault(); 
    setShowModal(true);  
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleOutsideClick = (event: any) => {
    if (event.target.classList.contains('modal')) {
      handleCloseModal();
    }
  };
  
  return (
    <header className="header">
      <h1>Application TG</h1>
      <nav>
        <ul>
          <li><a href="/about" onClick={handleOpenModal}>Sobre</a></li>
          <li><a href="https://github.com/MFranciele?tab=repositories">Docs</a></li>
        </ul>
      </nav>
      {showModal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <h2>Sobre</h2>
            <p>Essa aplicação tem como finalidade contribuir no estudo para 
              avaliar a eficácia do SIEM Graylog no ambiente de nuvem Azure para 
              detectar e auxiliar na resposta de incidentes cibernéticos, 
              utilizando o framework MITRE ATTACK como base de conhecimento. 
              Investigando como a ferramenta de SIEM do Graylog faz 
              aproveitamento do ambiente em nuvem para correlacionar e 
              visibilizar os eventos de segurança.</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;