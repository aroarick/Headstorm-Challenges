import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-v3";

class Recaptcha extends Component {
  verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  render() {
    return (
      <div>
        <ReCaptcha
          sitekey="6LcBUscUAAAAAE0tHcgT0mIdU527Pz-93hqQcOb1"
          action="action_name"
          verifyCallback={this.verifyCallback}
        />

        <h2>Google ReCaptcha with React </h2>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component.{" "}
          <br />
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  }
}

export default Recaptcha;
