import React from "react";
import { footer } from "react-bootstrap";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small pt-4">
          <hr />
          <div class="container">
            <div class="footer-copyright text-center py-3">
              Made with <a href="https://reactjs.org/">React</a>
              <br />© 2021 Copyright:{" "}
              <a href="https://www.mohp.gov.np/eng/">
                Nepal Ministry of Health
              </a>
            </div>
            <br />
          </div>
        </footer>
      </div>
    );
  }
}
