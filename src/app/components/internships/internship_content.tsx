import Image from "next/image";

export function Edureka() {
  return (
    <div
      className="border border-neutral-200 my-4 mx-0 p-2
               bg-gradient-to-br from-black/40 to-black/10 max-w-full overflow-clip"
    >
      <div className="flex flex-col w-full items-center justify-center my-10 ">
        <div
          className="text-blue-600 text-4xl font-sans font-extrabold
                    border-neutral-800 border  rounded-lg bg-neutral-200 mb-2"
        >
          <h2>edureka!</h2>
        </div>
        <p className="text-xl pb-4 text-neutral-200 font-bold text-center">
          Machine Learning and Data Science
        </p>
        <div className="flex flex-col items-center justify-center  w-fit">
          <Image
            src={"/online_certificates/edureka_data_science_internship.png"}
            width={300}
            height={100}
            alt={"Can't Load Image"}
            className="pb-5 rounded "
          />

          <div className="flex flex-col md:flex-row gap-4 w-full ">
            <div className="border-blue-600 border p-5 rounded bg-neutral-200 ">
              <p className="text-neutral-800">
                Completed a{" "}
                <span className="font-bold">
                  2-month machine learning internship
                </span>
                , gaining hands-on experience in:
              </p>
              <ul className="list-disc ml-5 font-semibold text-neutral-800">
                <li>Supervised learning</li>
                <li>Unsupervised learning</li>
                <li>Reinforcement learning</li>
              </ul>
            </div>
            <div className="border-blue-600 border p-5 rounded bg-neutral-200">
              <p className="text-neutral-800">
                Worked in a{" "}
                <span className="font-bold">team of 20 members</span> to develop
                models, implementing key algorithms like:
              </p>
              <ul className="list-disc ml-5 font-semibold text-neutral-800">
                <li>Linear regression</li>
                <li>Decision trees</li>
                <li>Neural networks</li>
              </ul>
            </div>
          </div>
          <p className="bg-white p-3 mt-5  rounded-full mx-auto text-neutral-800">
            Successfully bridged theory with practical application.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Lostronaunt() {
  return (
    <div
      className="border border-neutral-200 my-4 p-2
               bg-gradient-to-br from-black/40 to-black/10 max-w-full overflow-clip"
    >
      <div className="flex flex-col w-full items-center justify-center my-10 ">
        <div
          className="text-blue-600 text-4xl font-sans font-extrabold
                    border-neutral-800 border  rounded-lg bg-neutral-200 mb-2"
        >
          <Image
            src="/online_certificates/J.png"
            alt="oops!!"
            width={100}
            height={20}
          />{" "}
        </div>
        <p className="text-xl pb-4 text-neutral-200 font-bold text-center">
          Market Analysis and Web Development
        </p>
        <div className="flex flex-col items-center justify-center w-fit">
          <Image
            src="/online_certificates/lostronaunt.png"
            width={300}
            height={100}
            alt={"Can't Load Image"}
            className="pb-5 rounded "
          />
          <div className="flex flex-col md:flex-row gap-4 w-full ">
            <div className="border-blue-600 border p-5 rounded bg-neutral-200 ">
              <p className="text-neutral-800">
              Completed a <span className="font-bold">1-month internship</span> that provided an immersive experience focusing on both market analysis and app development. This internship allowed me to gain valuable insights into market trends and customer behavior while also honing my technical skills in developing applications, significantly enhancing my professional capabilities.    
                        </p>
            </div>
            <div className="border-blue-600 border p-5 rounded bg-neutral-200">
              <p className="text-neutral-800 font-bold">
                DEVELOPMENT ADVANTAGES
              </p>
              <ul className="list-disc ml-5 font-semibold text-neutral-800">
                <li> Gained knowledge of node and Next JS. </li>
                <li> Created a web-app single handedly. </li>
                <li> Worked as a Full stack developer.</li>
              </ul>
            </div>
            <div className="border-blue-600 border p-5 rounded bg-neutral-200">
              <p className="text-neutral-800 font-bold">ANALYSIS ADVANTAGES</p>
              <ul className="list-disc ml-5 font-semibold text-neutral-800">
                <li> Got knowledge of how the actual offline market works. </li>
                <li>
                  {" "}
                  Applied the gained knowledge to crearte a web app for managing
                  payments.{" "}
                </li>
              </ul>
            </div>
          </div>
          <p className="bg-white p-3 mt-5 rounded-full mx-auto text-neutral-800">
            Successfuly created a web-app that reduced the paperwork by 70%.
          </p>
        </div>
      </div>
    </div>
  );
}
