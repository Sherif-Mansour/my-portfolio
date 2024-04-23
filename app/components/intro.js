import Image from "next/image";
import Link from "next/link";

export default function Intro(props) {
  return (
    <div>
      <div className="py-24 pb-12 bg-white">
        <div id="profile">
          <div className="w-60 mx-auto mb-12 rounded-full overflow-hidden">
            <Image
              src="/Sherif.png"
              alt="Sherif-img"
              width={300}
              height={200}
            />
          </div>
          <div>
            <h2 className="w-1/2 text-black-500 text-3xl mx-auto text-center">
              Hello! I'm Sherif Mansour.
            </h2>
            <br />
            <p className="w-1/2 mx-auto text-black text-center">
              I am a dynamic and results-oriented professional with a strong
              foundation in accounting, financial modeling, and recent hands-on
              experience in Software Development. Armed with a Software
              Development Diploma from SAIT, I excel in web development,
              object-oriented programming, and database design. My unique blend
              of financial acumen and technical expertise positions me as an
              asset in delivering innovative solutions. Seeking a challenging
              Software Developer role to leverage my diverse skill set and
              contribute to cutting-edge projects.
            </p>
          </div>
          <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-20" />
          <div className="text-black" id="skills">
            <h2 className="text-3xl text-center text-black-500">My skills</h2>
            <div className="w-1/2 mx-auto text-left leading-relaxed py-10">
              <h3 className="text-2xl text-black-600">
                Technical / Programming
              </h3>
              <p>
                I possess a robust set of technical skills including proficiency
                in HTML, CSS, JavaScript, Python, C#, Java, SQL, React, Angular,
                and Spring frameworks. My experience with version control using
                Git, and development environments such as Visual Studio Code and
                Visual Studio 2022 allows me to efficiently collaborate and
                deliver high-quality solutions. Additionally, my expertise
                extends to database management with MySQL, and adept usage of
                Microsoft Excel, Word, and Project for comprehensive project
                management.
              </p>
            </div>
            <div className="w-1/2 mx-auto text-left leading-relaxed py-10">
              <h3 className="text-2xl text-black-600">Transferable</h3>
              <p>
                Alongside my technical prowess, I possess exceptional soft
                skills essential for effective collaboration and
                problem-solving. My communication skills enable me to articulate
                complex concepts clearly and foster strong team dynamics. With a
                keen eye for detail and critical thinking abilities, I excel in
                analyzing challenges and devising innovative solutions. I thrive
                in diverse environments, demonstrating adaptability and teamwork
                to achieve shared goals.
              </p>
            </div>
          </div>
          <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-24" />
          <div className="text-black text-center" id="contact-me">
            <h3 className="text-2xl text-black-500">
              Interested in working together?
            </h3>
            <div className="m-7">
              <h2 className="text-3xl text-black-400">Contact Me:</h2>
              <br />
              <p>
                <div>
                  <Link
                    className="inline-block text-center bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                    href="mailto:sherif.mansour88@gmail.com"
                  >
                    Email: sherif.mansour88@gmail.com <br />
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
