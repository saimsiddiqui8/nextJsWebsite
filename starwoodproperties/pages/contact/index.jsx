import ShadedContainer from "@/components/ShadedContainer";
import { ImLocation2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import Map from "@/components/Map";

export default function contactUs() {
    return (
        <>
            <ShadedContainer mainHeading="Contact Us" currentPage="Contact Us" />
            <section className="container w-75 mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h2 className="fw-bold">Send Your Massage</h2>
                        <div>
                            <form action="">
                                <input className="inputs ps-3" placeholder="Name" type="text" id="fname" name="fname" />  <br />
                                <input className="inputs ps-3" placeholder="Email" type="text" id="email" name="email" /> <br />
                                <input className="inputs ps-3" placeholder="Phone" type="text" id="phone" name="phone" /> <br />
                                <textarea className="inputs ps-3" id="message" placeholder="Message" name="message" rows="3" />
                            </form>
                        </div>
                        <button id="sendBtn">SEND</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h2 className="fw-bold">Contact info</h2>
                        <p>It is a long established fact that readewill be distracted by the readable content of a page when looking at ilayout.</p>
                        <ul className="list-unstyled">
                            <li className="mt-2"> <BsFillTelephoneFill fontWeight={900} /> <span className="ps-3"> 04-3298554 </span></li>
                            <li className="mt-2"> <AiOutlineMail fontWeight={900} /> <span className="ps-3"> Admin@starwoodproperties.ae </span></li>
                            <li className="mt-4"> <ImLocation2 fontWeight={900} /> <span className="ps-3">Regal tower , next to exchange tower, business bay on Shaikh zayed road. UAE. PO BOX 126646. </span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-3 mx-2">
                {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.072111375264!2d55.2066194!3d25.0673781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d23f22285ab%3A0x842f4d8e898a24ff!2sOxford%20212%20-%20Iman%20Developers!5e0!3m2!1sen!2s!4v1688768537003!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="mymap"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    )
}