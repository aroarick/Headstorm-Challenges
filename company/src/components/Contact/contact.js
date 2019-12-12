import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReCaptcha } from "react-recaptcha-v3";

function Contact() {
  return (
    <>
      <Container>
        <h1>Email Us</h1>

        <Form>
          <Form.Group>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" placeholder="Your message" rows="4" />
          </Form.Group>
          <p>
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and
            <a href="https://policies.google.com/terms">
              {" "}
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <ReCaptcha
            sitekey="6LcBUscUAAAAAE0tHcgT0mIdU527Pz-93hqQcOb1"
            action="homepage"
          />
        </Form>
      </Container>
    </>
  );
}

export default Contact;
