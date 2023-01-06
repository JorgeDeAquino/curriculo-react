import SocialNetworks from './SocialNetworks';

import Avatar from "../img/foto-perfil.png";

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Jorge Alexandre Foto" />
            <p className="title">Desenvolvedor Front End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download curriculo</a>
        </aside>
    )
}

export default Sidebar