import React from "react";
import { ContactsStyledItemContainer } from "./ContactsStyledItem";

const ContactsItem = () => {
  return (
    <ContactsStyledItemContainer className="contacts-container">
      <h2 className="contacts-title">Contacts</h2>

      <div className="mobile-number-container">
        <svg className="icon">
          <use
            href="../../../images/sprite.svg#icon-mobile"
            width="27"
            height="27"
          ></use>
        </svg>
        <a className="contacts-links" href="+380967787515">
          +380967787515
        </a>
      </div>

      <div className="mail-container">
        <svg className="icon">
          <use
            href="./images/sprite.svg#icon-envelop"
            width="27"
            height="27"
          ></use>
        </svg>
        <a className="contacts-links" href="mailto">
          y.p.p@i.ua
        </a>
      </div>

      <div className="in-container">
        <svg className="icon">
          <use
            href="./images/sprite.svg#icon-linkedin"
            width="27"
            height="27"
          ></use>
        </svg>
        <a
          className="contacts-links"
          href="https://www.linkedin.com/in/paul-yamchinsky-27375b83/"
        >
          https://www.linkedin.com/in/
          <br />
          paul-yamchinsky-27375b83/
        </a>
      </div>
      <div className="github-container">
        <svg className="icon">
          <use
            href="./images/sprite.svg#icon-github"
            width="27"
            height="27"
          ></use>
        </svg>
        <a className="contacts-links" href="https://github.com/yamchinsky">
          https://github.com/yamchinsky
        </a>
      </div>
    </ContactsStyledItemContainer>
  );
};

export default ContactsItem;
