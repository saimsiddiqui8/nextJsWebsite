import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import { TbMathGreater } from "react-icons/tb"
import { Button, Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const notify = () => toast.success("Message sent!");
  const notifyError = () => toast.error("Error!");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_hdz9rko", "template_hrcknca", e.target, "Uu5KYI12-abXQGk7m").then(res => {
      const inputField = document.getElementById("form");
      inputField.reset();
      notify();
    }).catch(() => {
      notifyError();
    })
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.hero}>
        <Container className='w-75 py-5'>
          <Row className='py-5 mb-5'>
            <Col lg={6} md={6} sm={12} >
              <div>
                <h3 className='text-white' style={{ fontWeight: 1000 }}>Best Real Estate Agency In Dubai</h3>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className='text-center'>
              <Row className='pb-5 text-end'>
                <Form className='w-75 px-4 opacity-75' id='form' onSubmit={handleSubmit}>
                  <h3 className='text-center pt-4 pb-2 text-light fw-bold'>REGISTER YOUR INTEREST</h3>
                  <Form.Group className="mb-3 pt-3" controlId="formBasicText">
                    <Form.Control className="text-light input" name="name" required type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="input text-light" name="email" required type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicText">
                    <Form.Control className="input text-light" name="contact" type="text" placeholder="Contact number" required />
                  </Form.Group>
                  {/* <Form.Group className="mb-2">
                      <Form.Control className="input text-light" name="message" as="textarea" placeholder="Message" required rows={4} />
                    </Form.Group> */}
                  <Button style={{ fontWeight: "600" }} value="send" type="submit" className="mb-4 w-100 bg-dark  text-light hbtn2 hb-fill-right2">
                    Submit
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <main id='mainHomeWrapper' className='container w-75'>
        <section className=' text-white text-center'>
          <div className='row overflow-hidden'>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 text-center'>
                <div className={styles.main}>
                  <div className='text-center pt-3 pb-1'>
                    <img src='/images/logos1.png' width={50} alt='logos' />
                  </div>
                </div>
                Buy Property
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 text-center'>
                <div className={styles.main}>
                  <div className='text-center pt-3 pb-1'>
                    <img src='/images/logos1.png' width={50} alt='logos' />
                  </div>
                </div>
                Rent Property
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 text-center'>
                <div className={styles.main}>
                  <div className='text-center pt-3 pb-1'>
                    <img src='/images/logos1.png' width={50} alt='logos' />
                  </div>
                </div>
                Sell Your Property
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 text-center'>
                <div className={styles.main}>
                  <div className='text-center pt-3 pb-1'>
                    <img src='/images/logos1.png' width={50} alt='logos' />
                  </div>
                </div>
                Property Developers
              </div>
            </div>

          </div>
        </section>

        <section className=''>
          <div className='mt-5'>
            <h2 className={styles.offPlanProjects}>OFF PLAN PROJECTS</h2>
            <p className={styles.offPlanProjectsParagraph}>
              Off-plan properties in Dubai are the most popular choice among investors. Driven Properties offers the best under-construction projects in Dubai from top developers such as Meraas, Emaar, Dubai Properties, and many others, as well as amazing payment plans. If you are looking for Dubai off plan properties for an investment or to buy for yourself, get in touch with our property investment experts.
            </p>
          </div>

          <div>

            <div className='row '>

              <div className="col-lg-4 col-md-4 col-sm-12">

                <Card className='rounded shadow mt-3'>
                  <Card.Img variant="top" src="/images/card1.webp" />
                  <Card.Body className='text-center'>
                    <Card.Title>Rivana at The Valley </Card.Title>
                    <Card.Text>
                      The Valley
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">

                <Card className='rounded shadow mt-3'>
                  <Card.Img variant="top" src="/images/card2.webp" />
                  <Card.Body className='text-center'>
                    <Card.Title>Rivana at The Valley </Card.Title>
                    <Card.Text>
                      The Valley
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">

                <Card className='rounded shadow mt-3'>
                  <Card.Img variant="top" src="/images/card3.webp" />
                  <Card.Body className='text-center'>
                    <Card.Title>Rivana at The Valley </Card.Title>
                    <Card.Text>
                      The Valley
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

            </div>

            <div className='row'>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card className='rounded shadow mt-3'>
                  <Card.Img variant="top" src="/images/card4.webp" />
                  <Card.Body className='text-center'>
                    <Card.Title>Rivana at The Valley </Card.Title>
                    <Card.Text>
                      The Valley
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card className='rounded shadow mt-3'>
                  <Card.Img variant="top" src="/images/card5.webp" />
                  <Card.Body className='text-center'>
                    <Card.Title>Rivana at The Valley </Card.Title>
                    <Card.Text>
                      The Valley
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Card className='rounded shadow mt-3'>
                  <Card.Img variant="top" src="/images/card6.webp" />
                  <Card.Body className='text-center'>
                    <Card.Title>Rivana at The Valley </Card.Title>
                    <Card.Text>
                      The Valley
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h2 className={styles.offPlanProjects}>READY PROJECTS</h2>
            <p className={styles.offPlanProjectsParagraph}>
              Driven Properties offers property investment and consultation services to help individuals find their ideal property that will meet their budget and specifications. If you are interested in investing in the new ready-to-move-in projects in Dubai, make sure you get in touch with our experienced consultants and get complete information about the ready-to-move-in properties in Dubai, available for primary and secondary sales. Whether it is for investment or for your own use, our experts will make sure you have a seamless journey.
            </p>
          </div>

          <div className='row'>

            <div className="col-lg-4 col-md-4 col-sm-12">

              <Card className='rounded shadow mt-3'>
                <Card.Img variant="top" src="/images/card7.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Rivana at The Valley </Card.Title>
                  <Card.Text>
                    The Valley
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">

              <Card className='rounded shadow mt-3'>
                <Card.Img variant="top" src="/images/card8.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Rivana at The Valley </Card.Title>
                  <Card.Text>
                    The Valley
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">

              <Card className='rounded shadow mt-3'>
                <Card.Img variant="top" src="/images/card9.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Rivana at The Valley </Card.Title>
                  <Card.Text>
                    The Valley
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>

          <div className='mt-5'>
            <h2 className={styles.offPlanProjects}>FIND PROPERTIES FOR SALE AND RENT</h2>
            <p className={styles.offPlanProjectsParagraph}>
              Driven Properties is an award-winning real estate brokerage and property management company headquartered in Dubai. Since its inception in 2012, the company has been raising standards for the industry, and has grown into one of the leading full-service real estate consultancies in the region. <br /> <br />
              In a city that is synonymous with real estate, our deeply knowledgeable consultants are offering their expertise and unparalleled service to most demanding clients from all over the world. <br /> <br />
              Apart from the well-earned reputation for highly personalized service and immaculate customer experience, Driven Properties is making its name as one of the most reliable sources when it comes to information on the property and market trends in Dubai. <br /> <br />
              Whether you are looking for a property in Dubai that is available for sale or for rent, we have a team of real estate experts who can assist in finding the right property in popular Dubai areas. Apart from helping you find property in Dubai we also offer a variety of real estate services that include property management, mortgage advisory, relocation services, property investment, property valuation, property brokerage and more.
            </p>
          </div>

          <div className='row'>

            <div className="col-lg-4 col-md-4 col-sm-12">

              <Card className='rounded shadow mt-3'>
                <Card.Img variant="top" src="/images/card10.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Rivana </Card.Title>
                  <Card.Text>
                    
                    <div className='d-flex text-center justify-content-evenly borderTop'>
                      <div>For Sale</div>
                      <div>For Rent</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">

              <Card className='rounded shadow mt-3'>
                <Card.Img variant="top" src="/images/card11.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Rivana </Card.Title>
                  <Card.Text>
                    
                    <div className='d-flex text-center justify-content-evenly borderTop'>
                      <div>For Sale</div>
                      <div>For Rent</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">

              <Card className='rounded shadow mt-3'>
                <Card.Img variant="top" src="/images/card12.webp" />
                <Card.Body className='text-center'>
                  <Card.Title>Rivana </Card.Title>
                  <Card.Text>
                    
                    <div className='d-flex text-center justify-content-evenly borderTop'>
                      <div className='borderLeft'>For Sale</div>
                      <div className='borderRight'>For Rent</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>

          <div className='mt-5'>
            <h2 className={styles.offPlanProjects}>DUBAI AREAS</h2>
            <p className={styles.offPlanProjectsParagraph}>
              Our wide database of property listings makes it possible and hassle-free for you to find your desired unit, according to your budget and area preferences. Whether it’s Arabian Ranches, Downtown, JLT, or Jumeirah or Downtown, we can help you find your dream home in Dubai. <br /> <br />
              Finding the right apartment, villa or property to rent or to buy at a preferred location in Dubai may be a daunting task to an individual, but with the help of our industry experts it becomes much easier to navigate through Dubai areas for the right budget friendly properties.<br /> <br />
              Driven Properties, a leading real estate brokerage in Dubai, can help you find the right property based on your needs and preferences. You can search properties from popular areas such as Dubai Marina, Palm Jumeirah, Dubai Land, City Walk Dubai, Damac Hills, Dubai Hills Estate, Bluewaters Island and many more.
            </p>
          </div>

          {/* service */}

          <div>

            <Tabs
              defaultActiveKey="home"
              id="justify-tab-example"
              className="mb-3 mt-5"
              justify
            >
              <Tab eventKey="home" title="City Walk">
                <section className='tabBackground'>
                  <div className="tabShade">
                    <div className="bottomLeftText">
                      <h2 className="fw-bold1">City Walk</h2>
                      <p className="fw-bold">Apartments for sale & rent</p>
                      <button className='learnMore'>Learn More..</button>
                    </div>
                  </div>
                </section>
              </Tab>


              <Tab eventKey="Book Marketing Service" title="Bluewaters Island">
                <section className='tabBackground2'>
                  <div className="tabShade">
                    <div className="bottomLeftText">
                      <h2 className="fw-bold1">Bluewaters Island</h2>
                      <p className="fw-bold">Waterfront apartments</p>
                      <button className='learnMore'>Learn More..</button>
                    </div>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="Book Writing Service" title="Business Bay">
                <section className='tabBackground3'>
                  <div className="tabShade">
                    <div className="bottomLeftText">
                      <h2 className="fw-bold1">Business Bay</h2>
                      <p className="fw-bold">Apartments, Office Space, Retail & Commerial</p>
                      <button className='learnMore'>Learn More..</button>
                    </div>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="Book Editing Service" title="Jumeirah Village Circle">
                <section className='tabBackground4'>
                  <div className="tabShade">
                    <div className="bottomLeftText">
                      <h2 className="fw-bold1">Jumeirah Village Circle</h2>
                      <p className="fw-bold">Apartments, Villas, Townhouses for sale & rent</p>
                      <button className='learnMore'>Learn More..</button>
                    </div>
                  </div>
                </section>
              </Tab>
            </Tabs>
          </div>


        </section>

        <section className=''>
          <div className="mt-5">
            <h2 className={styles.offPlanProjects}>OUR REAL ESTATE SERVICES</h2>
          </div>
          <p>Driven Properties offers the full scope of real estate services, creating the perfect one-stop solution when it comes to all your real estate questions and needs. Whether it is full management of your property, help with financing, interior design or turning your property to a holiday home, our team can assist you every step of the way.</p> <br />
          <p>Since 2012, Driven Properties has grown as one of the leading real estate agencies in Dubai and offers an array of real estate services that include real estate property brokerage, commercial brokerage, real estate property management, investment and different types of consultancy. Reach out today to have all your questions answered.</p>

          <div className='row overflow-hidden text-white'>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 ps-3'>
                <div className={styles.main}>
                  <div className='pt-3 pb-1'>
                    <img src='/images/service1.png' width={90} alt='service' />
                  </div>
                </div>
                <h6 className='fw-bold mt-3'>
                  Property Management
                </h6>
                <p className="boxesHeading">Learn More  <TbMathGreater color='#4EC0B0' /></p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 ps-3'>
                <div className={styles.main}>
                  <div className='pt-3 pb-1'>
                    <img src='/images/service2.png' width={90} alt='service' />
                  </div>
                </div>
                <h6 className='fw-bold mt-3'>
                  Mortgage Advisory
                </h6>
                <p className="boxesHeading">Learn More  <TbMathGreater color='#4EC0B0' /></p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 ps-3'>
                <div className={styles.main}>
                  <div className='pt-3 pb-1'>
                    <img src='/images/service3.png' width={90} alt='service' />
                  </div>
                </div>
                <h6 className='fw-bold mt-3'>
                  Property Investment
                </h6>
                <p className="boxesHeading">Learn More  <TbMathGreater color='#4EC0B0' /></p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mt-4 shadow-sm'>
              <div className='boxes bg-dark pb-3 ps-3'>
                <div className={styles.main}>
                  <div className='pt-3 pb-1'>
                    <img src='/images/service4.png' width={90} alt='service' />
                  </div>
                </div>
                <h6 className='fw-bold mt-3'>
                  Property Valuation
                </h6>
                <p className="boxesHeading">Learn More  <TbMathGreater color='#4EC0B0' /></p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  )
}
