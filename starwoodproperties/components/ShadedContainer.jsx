import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { TbMathGreater } from "react-icons/tb"

export default function ShadedContainer({ mainHeading, currentPage }) {
    return (
        <>
            <section id="contactGradient">
                <div className="container w-75 pt-5">
                    <div className="d-flex text-white">
                        <div>
                            <AiFillHome />
                        </div>
                        <div id="homeWritten" className="ms-3 fw-bold">
                            <Link href="/" className="text-decoration-none text-white">
                                <p >Home</p>
                            </Link>
                        </div>
                        <div id="homeWritten" className="mx-3">
                            <TbMathGreater fontWeight={900} />
                        </div>
                        <div id="homeWritten2">
                            <p className="fw-bold" id="contactWritten">{currentPage}</p>
                        </div>
                    </div>
                    <h2 className="fw-bold pt-5 text-white">{mainHeading}</h2>
                </div>
            </section>
        </>
    )
}