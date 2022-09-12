import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
            Have something to say? We are here to help.
            Fill up the form or send email or call phone.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Karachi - Pakistan</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>anasaqeel.4444@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+92 3342233619</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://www.youtube.com/channel/UCjSbj0xD5862e-6802uShVQ">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/Anas-Aqeel/">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/anas.aqeel.12327/">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="#">
                <i className="https://www.linkedin.com/in/mohammad-anas-9b180b248/"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
