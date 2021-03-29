import React from "react";
import "./ContactPage.css";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <div class="midParaContact">
        <p id="midTitleContact">Contact Us</p>
        <img
          id="contactImage"
          src="images/contact.svg"
          width="400"
          height="400"
          alt="Nepal Ministry of Health"
        ></img>
        <br />
        <p>
          <span class="midParaFirstWordsContact">Nepal Ministry of Health</span>
          <br />
          रामशाह पाथ, Kathmandu 44600, Nepal
          <br />
          info@mohp.gov.np
          <br />
          +977 1-4262543 ext. 4262802
        </p>
        <hr id="lineBreak" />

        <form>
          Submit your message below:
          <p>First name:</p>
          <input type="text" />
          <p>Last name:</p>
          <input type="text" />
          <p>Email:</p>
          <input type="text" />
          <p>Subject:</p>
          <input type="text" />
          <p>Message:</p>
          <textarea type="text" />
        </form>
        <br />
        <Button variant="primary">Submit</Button>
      </div>
    </div>
  );
}

export default Contact;
