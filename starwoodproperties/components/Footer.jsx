import { Col, Row } from "react-bootstrap"
import { ImLocation2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"

const Footer = () => {
    return (
        <>
            <section id="footer" className="">
                <div className="text-dark container overflow-hidden">
                    <Row className="mt-4">
                        <Col lg={4} className="mt-5 pt-5">
                            <div id="footerLogoText">
                                <img src="/images/logo-dark.png" alt="logo" width={220} height={120} />
                                <p id="footerText">At STARWOOD PROPERTIES, we are committed to assisting you in all your real estate needs and this includes buying or selling property that you own or property that you have invested in.</p>
                            </div>
                        </Col>
                        <Col id="footerBox" lg={2} md={4} sm={10} className="mt-5 pt-5">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled">
                                <li className="my-4">Home</li>
                                <li className="my-4">For Sale</li>
                                <li className="my-4">For Rent</li>
                                <li className="my-4">Services</li>
                                <li className="my-4">About Us</li>
                                <li className="my-4">Contact Us</li>
                            </ul>
                        </Col>

                        <Col id="footerBox" lg={3} md={4} sm={10} className="mt-5 pt-5">
                            <h3>Property Services</h3>
                            <ul className="list-unstyled">
                                <li className="my-4">BLUEWATERS BAY</li>
                                <li className="my-4">Ocean House, Atlantis The Palm</li>
                                <li className="my-4">Oxford 212, Jumeirah Village Circle</li>
                            </ul>
                        </Col>

                        <Col id="footerBox" lg={3} md={4} sm={10} className="mt-5 pt-5">
                            <h3>Newsletter</h3>
                            <div className="d-flex">
                                <div>
                                    <input className="newsletter ps-3" placeholder="Name" type="text" id="email" name="email" />
                                </div>
                                <div>
                                    <button id="sendBtn2">Submit</button>
                                </div>
                            </div>
                            <div className="text-center mt-5 pt-4 terms">
                                <a href="">Terms & Conditions | Privacy Policy</a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="text-center text-white">
                    <p id="copyRight">© 2022 - Company | All right reserved.</p>
                    <p>Fyra and all related Marks are Trademarks of Fyra.com, Inc. or its affiliates</p>
                </div>
            </section>
        </>
    )
}

export default Footer