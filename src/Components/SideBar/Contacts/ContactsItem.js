import React from "react";
import { ContactsStyledItemContainer } from "./ContactsStyledItem";
import mobileSvg from "../../../images/mobile.svg";
import envelopSvg from "../../../images/envelop.svg";
import inSvg from "../../../images/linkedin.svg";
import gitSvg from "../../../images/github.svg";

const ContactsItem = () => {
  return (
    <ContactsStyledItemContainer className="contacts-container">
      <h2 className="contacts-title">Contacts</h2>

      <div className="mobile-number-container">
        <img className="icon" src={mobileSvg} alt="" />
        <a className="contacts-links" href="+380967787515">
          +380967787515
        </a>
      </div>

      <div className="mail-container">
        <img className="icon" src={envelopSvg} alt="" />
        <a className="contacts-links" href="mailto">
          y.p.p@i.ua
        </a>
      </div>

      <div className="in-container">
        <img className="icon" src={inSvg} alt="" />
        <a className="contacts-links" href="https://bit.ly/2WjY7VR">
          linkedin
        </a>
      </div>
      <div className="github-container">
        <img className="icon" src={gitSvg} alt="" />
        <a className="contacts-links" href="https://bit.ly/3i3WlR3">
          github
        </a>
      </div>
    </ContactsStyledItemContainer>
  );
};

export default ContactsItem;
