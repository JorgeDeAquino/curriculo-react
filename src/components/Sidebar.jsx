import SocialNetworks from './SocialNetworks';

import Avatar from "../img/foto-perfil.png";

import "../styles/components/sidebar.sass";


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Jorge Alexandre Foto" />
            <p className="title">Desenvolvedor Front End</p>
            <SocialNetworks />
            <p>Informacoes de contato</p>
            <a href="" className="btn">Download curriculo</a>
        </aside>
    )
}

export default Sidebar