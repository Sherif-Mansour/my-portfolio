import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Background(props) {
  return (
    <>
      <Navbar />
      <div className="p-10 flex justify-center bg-white text-black">
        <div className="px-20">
          <h2 className="text-2xl font-bold text-black-500">Education</h2>
          <div>
            <div>
              <img className="SAIT" src={"/saitLogo.png"} alt="SAIT Logo-img" />
            </div>
            <p>
              <strong>Diploma: </strong>
              <ul>
                <li>Diploma in Software Development</li>
              </ul>
            </p>
          </div>
          <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-10" />
          <div>
            <div>
              <img className="MSVU" src={"/msvuLogo.png"} alt="MSVU Logo-img" />
            </div>
            <p className="mt-3">
              <strong>Degree: </strong>
              <ul>
                <li>Bachelor of Business Administration (Major: Accounting)</li>
              </ul>
              <br />
              <img
                className="MSVU"
                src={"/msvuBBA.png"}
                alt="MSVU BBA-img"
                width={400}
                height={400}
              />
            </p>
          </div>
          <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-10" />
          <div>
            <div>
              <h4>Queen Elizabeth Highschool</h4>
              <img
                className="QEHS"
                src={"/QEHS.png"}
                alt="QEHS Front Entrance-img"
                width={400}
                height={400}
              />
            </div>
            <p className="mt-3">
              <strong>Diploma: </strong>
              <ul>
                <li>High School Diploma</li>
              </ul>
              <br />
              <img
                className="QEHS"
                src={"/highschool.png"}
                alt="QEHS Diploma-img"
                width={400}
                height={400}
              />
            </p>
          </div>
        </div>

        <div className="px-20">
          <h2 className="text-2xl font-bold text-black-500">Certification</h2>
          <div>
            <div>
              <div>
                <Link
                  className="CCNA-link"
                  href="https://fminstitute.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="FMI"
                    src={"/FMILogo.png"}
                    alt="FMI Logo-img"
                  />
                </Link>
              </div>
              <p>
                <strong>Issued: </strong> July 2021
              </p>
              <p>
                <strong>Credential: </strong>ID FMI0171574
              </p>
              <br />
              <img
                className="FMI"
                src={"/AFM.png"}
                alt="AFM-img"
                width={400}
                height={400}
              />
            </div>
            <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-10" />
            <div>
              <div>
                <Link
                  className="CPA-link"
                  href="https://www.cpaalberta.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="CPA"
                    src={"/cpaLogo.png"}
                    alt="CPA Logo-img"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
              <p>
                <strong>Issued: </strong> April 2016
              </p>
              <p>
                <strong>Credential: </strong>ID C35002227
              </p>
              <br />
              <img
                className="CPA"
                src={"/cpa.png"}
                alt="CPA-img"
                width={400}
                height={400}
              />
              <img
                className="CPA"
                src={"/cma.png"}
                alt="CMA-img"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
