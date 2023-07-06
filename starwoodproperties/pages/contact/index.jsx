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
            <section className="mt-5 mx-2">
                <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
            </section>
        </>
    )
}