import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
const Footer = () => {
  return (
    <Footer className="footer">
      <div className="leftFooter">
        <h1>POLASH.</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="socialContainer">
          <div className="socialIcon">
            <Facebook />
          </div>
          <div className="socialIcon">
            <Instagram />
          </div>
          <div className="socialIcon">
            <Twitter />
          </div>
          <div className="socialIcon">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="centerFooter">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Wishlist</li>
          <li>Terms</li>
          <li>Order Tracking</li>
          <li>More..</li>
        </ul>
      </div>
      <div className="rightFooter">
        <h1>Contact</h1>
        <div className="contactItem">
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>
        <div className="contactItem">
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className="contactItem">
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </Footer>
  );
};

export default Footer;
