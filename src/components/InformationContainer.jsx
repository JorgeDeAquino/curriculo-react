import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <p>(38) 99169-3288</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <p>jorgeaamsantos@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <p>Montes Claros / MG</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
