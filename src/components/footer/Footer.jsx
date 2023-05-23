import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="address">
        <h3>Messegães, Monção 4950 Portugal</h3>
      </div>
      <div className="socials">
        <div>
          <a
            href="https://www.facebook.com/uniaodesportiva.osraianos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/udraianos/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="copyrights">
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          2023 All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
