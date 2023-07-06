import ShadedContainer from "@/components/ShadedContainer";
import styles from '@/styles/ForSale.module.css';
import { TbMathGreater } from "react-icons/tb"
import { MdLocationPin } from "react-icons/md"
import { HiCube } from "react-icons/hi"
import { MdCall } from "react-icons/md"
import { FaBed } from "react-icons/fa"
import { MdWhatsapp } from "react-icons/md"
import { Col, Container, Row } from "react-bootstrap";

export default function propertiesForSale() {
    return (
        <>
            <ShadedContainer mainHeading="Properties For Sale" currentPage="Properties For Sale" />

            <section className="container w-75">
                <h2 className={styles.offPlanProjects}>Property for Sale in Dubai</h2>
                <p className={styles.offPlanProjectsParagraph}>
                    Welcome to our _____ Property Portal, your one-stop destination for finding the perfect property for sale in Dubai. Dubai is a city of endless opportunities and possibilities, and we’re here to help you find the perfect property that meets all of your needs. With a diverse range of neighborhoods and communities, as well as a wide selection of luxurious properties, Dubai truly has something for everyone.
                </p> <br />

                <h2 className={styles.offPlanProjects}>Finding the Right Property for Sale in Dubai</h2>
                <p className={styles.offPlanProjectsParagraph}>
                    Dubai is constantly growing and evolving, with new developments and properties being added to the market all the time. With such a vast selection of properties for sale in Dubai, it can be overwhelming to know where to start your search. However, our property portal is here to simplify the process for you and make it easy to find the right property that meets your needs.
                </p> <br />
                <p className={styles.offPlanProjectsParagraph}>
                    We realize that every buyer has their own specific criteria when it comes to purchasing a property. Some buyers may be in search of a large villa with a private pool and garden, while others may be looking for a chic and modern apartment in the heart of the city. Regardless of your preferences, our property portal offers a comprehensive range of properties to select from.
                </p> <br />
                <p className={styles.offPlanProjectsParagraph}>
                    Our listings include a variety of property types, such as villas, townhouses, apartments, and more. We also have properties available in different locations throughout Dubai, ranging from established neighborhoods to up-and-coming areas. This enables you to quickly search for properties based on your preferred location and find one that meets your lifestyle and preferences.
                </p>
            </section>

            <section className="container w-75 mt-5 pt-5">
                <Container>
                    <Row>
                        <Col lg={9} md={7} sm={12}>
                            <h2 className={styles.offPlanProjects}>Dubai Properties For Sale</h2>
                        </Col>
                        <Col lg={3} md={5} sm={12}>
                            <h2 className={styles.offPlanProjects}>Popular Areas - For Sale</h2>
                            <section className="mt-3">
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> Bluewaters Island</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> Bluewaters Island</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> Bluewaters Island</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> City Walk</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />City Walk</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />City Walk</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />Jumeirah Circle</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />Jumeirah Circle</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />Jumeirah Circle</p>

                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="container w-75 mt-5 pt-5">
                <h2 className={styles.offPlanProjects}>Search for Properties in Dubai for Sale</h2>

                <Container>
                    <Row className="justify-content-evenly">
                        <Col lg={4} md={12} sm={12} className=" mt-5" >
                            <img src="/images/list1.png" className={styles.img} />
                        </Col>
                        <Col lg={5} md={12} sm={12} className=" mt-5" >
                            <h5 className={styles.offPlanProjects}>The Grove Dubai hills estate</h5>
                            <h3 className="" id={styles.offPlanProjects}>AED 1300,000</h3>
                            <div className="my-3">
                                <p className={styles.offPlanProjectsParagraph}><FaBed className={styles.icon2} /> 2 bed &nbsp; &nbsp; &nbsp;<FaBed className={styles.icon2} /> 2 bed &nbsp; &nbsp; <HiCube className={styles.icon2} /> 1,219 Sq.Ft.</p>
                            </div>
                            <p className={styles.offPlanProjectsParagraph}>View Details &gt; </p>
                            <div className="mt-1">
                                <p className={styles.offPlanProjectsParagraph}> <MdLocationPin className={styles.icon2} /> Marina Pinnacle - Dubai Marina - Dubai</p>
                            </div>
                            <div className="mt-3 w-100 text-center overflow-hidden">
                                <Row>
                                    <Col lg={6} md={6} sm={6} className="col-6 py-3" id={styles.button1}>
                                        <span className={styles.span}> <MdCall  className={styles.iconz} /> Call Now</span>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} className="col-6 py-3" id={styles.button2}>
                                        <span className={styles.span}> <MdWhatsapp /> Whatsapp</span>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}