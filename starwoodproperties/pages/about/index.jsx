import ShadedContainer from "@/components/ShadedContainer";
import Head from "next/head";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai"
import { TbMathGreater } from "react-icons/tb"

export default function FirstPost() {
    return (
        <>
            <Head>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                <title>About Page</title>
            </Head>
            <section className="overflow-hidden">
            <ShadedContainer mainHeading="About Us" currentPage="About Us" />
                <div className="container w-75 ">
                    <div className="row overflow hidden">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <p>
                                At STARWOOD PROPERTIES, we are committed to assisting you in all your real estate needs and this includes buying or selling property that you own or property that you have invested in. Utilizing our database of buyers and sellers, a database that has been built, maintained and used to huge success and over many years, we guarantee stress free and rewarding transactions. <br /><br /> <br />
                                Through this intelligence, STARWOOD PROPERTIES will find the perfect match between a client’s investment criterion and a property investment opportunity. <br /><br /><br />
                                As a part of our services in this domain, STARWOOD PROPERTIES, and on behalf of developers and investors, also acts as sole seller and marketer of clients’ real estate assets and properties. <br /><br /><br />
                                We join forces with you as an integral part of a consortium to manage this process from beginning to end thus adding value and market insight while at the same time allowing our esteemed customers to focus on the bigger picture.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <div>
                                <img src="/images/about1.jpg" className="aboutImg1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container w-75 ">
                    <div className="row overflow hidden">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <div>
                                <img src="/images/about2.jpeg" className="aboutImg1" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <h4 className="fw-bold">What we offer you</h4>
                            <p>
                                A wealth of professional experience and knowledge of the real estate market, to assure you maximum return on your investment. A value-added partner offering extensive strategic and tactical real estate expertise. A vast database of prospective buyers, that enables us to sell your property in the shortest possible time, with the highest possible return.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container w-75 ">
                    <div className="row overflow hidden">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <h4 className="fw-bold">What you get in return</h4>
                            <p>
                                Maximum returns on your investments. <br />
                                Quick and accurate market research and advice to better manage your transactions. <br />
                                Stress free business transactions coupled with top of the line customer care and support.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <div>
                                <img src="/images/about2.jpeg" className="aboutImg1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="aboutOurPartnersSection text-center">
                    <h4 className="fw-bold mt-5 pt-5">Our partners</h4>
                    <p className="mt-4">Take a look at our selection of the best places around the world</p>

                    <div className="container w-75">
                        <div className="row overflow-hidden mb-5">
                            <div className="col-lg-2 col-ms-2 col-sm-4 col-12 my-3">
                                <div>
                                    <img src="/images/partner1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-ms-2 col-sm-4 col-12 my-3">
                                <div>
                                    <img src="/images/partner2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-ms-2 col-sm-4 col-12 my-3">
                                <div>
                                    <img src="/images/partner3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-ms-2 col-sm-4 col-12 my-3">
                                <div>
                                    <img src="/images/partner4.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-ms-2 col-sm-4 col-12 my-3">
                                <div>
                                    <img src="/images/partner5.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-ms-2 col-sm-4 col-12 my-3">
                                <div>
                                    <img src="/images/partner6.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonials */}
                <section>

                    <section class="testimonial text-center">
                        <div class="container">

                            <div class="heading white-heading">
                                Testimonial
                            </div>
                            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active">
                                        <div class="testimonial4_slide">
                                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                                            <p>Tabitha is the consummate professional. The sale of our unit could not be placed in better hands. Excellent Service All-Round! </p>
                                            <h4>Ben Miller</h4>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="testimonial4_slide">
                                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                                            <p>They made our home selling process easy and smooth! Their guidance and help was very much appreciated. We will definitely refer family and friends to them in the future.
                                            </p>
                                            <h4>Jane Doe</h4>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="testimonial4_slide">
                                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                                            <p>Committed, Hardworking and Professional. Very attentive and a pleasure to deal with. The best agency and the best experience!</p>
                                            <h4>Julien Marseille</h4>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </a>
                                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                    </section>

                </section>
            </section>
        </>
    )
}