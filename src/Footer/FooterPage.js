import React from "react";
import { footer } from "react-bootstrap";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small pt-4">
          <div class="container">
            <div class="footer-copyright text-center py-3">
              © 2020 Copyright:
              <a href="https://www.mohp.gov.np/eng/">
                Nepal Ministry of Health
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
