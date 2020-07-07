import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";
import zowenmakes10 from "./zowenmakes10.png";
import "./Books.css";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false,
    };
    this.toggleLinks = this.toggleLinks.bind(this);
  }
  toggleLinks() {
    this.setState({
      showLinks: !this.state.showLinks,
    });
  }
  render() {
    return (
      <div>
        {/* Header */}
        <Container>
          <Row>
            <Col>
              <h1 className="page-header">
                The <span>Books</span>
              </h1>
            </Col>
          </Row>
        </Container>

        {/* Main Content */}
        <main className="content Books-content">
          <Container>
            <Row>
              <Col md={4}>
                <Image className="Book-img" src={zowenmakes10} fluid />
              </Col>
              <Col>
                <div className="Book-title-container">
                  <div className="Book-title">And Zowen Makes 10!</div>
                </div>
                <div className="Book-description">
                  <p>
                    The day has finally arrived. It’s the class field trip to
                    the Zoo. The children are so excited to see all the animals,
                    but Zowen has one thing on his mind.
                  </p>
                  <p>“Will there be something to eat?”</p>
                  <p>
                    Join Zowen and his classmates as they visit all the
                    fascinating animals at the zoo. Upon leaving the reptile
                    house, Miss Beverly lines up her class to count everyone
                    “just to be sure.” Much to her dismay, she and the children
                    discover that Zowen is missing! Where could he be?
                  </p>
                  <div className="text-center">
                    <p className="available">Available Now!</p>
                    <button
                      className="button mb-2 mt-2 mx-auto"
                      onClick={this.toggleLinks}
                    >
                      Buy the Book <i className="fas fa-chevron-down"></i>
                    </button>
                    <ul
                      className={`Book-links ${
                        this.state.showLinks && "show-links"
                      }`}
                    >
                      <li>
                        <a
                          href="https://www.amazon.com/dp/1098017986/ref=cm_sw_em_r_mt_dp_U_nZJ.Eb37WSYSG"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy on <i className="fab fa-amazon"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.barnesandnoble.com/w/and-zowen-makes-10-joan-parnell/1137274180?ean=9781098017989"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Buy on Barnes & Noble
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </main>

        {/* Footer */}
        <div className="Books-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Books;
