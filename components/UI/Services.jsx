import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better User Interfaces,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              I primarily focus on developing user interface with good quality codebase and make sure the outcome is matching your needs.
              Proficient with Reactjs, Nextjs, Typescript, CSS, SCSS, taiwlindcss and all the other tools in web development industry.
              Always eager to learn new technology and master it, as I am currently learning Blockchain
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
