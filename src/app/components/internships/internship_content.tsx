import Image from "next/image";

export function Edureka() {
  return (
    <div className="border border-neutral-200 m-4 bg-gradient-to-br from-black/40 to-black/10">
      
    <div className="flex flex-col w-full items-center justify-center my-10 ">
      <div
        className="text-blue-600 text-4xl font-sans font-extrabold
                    border-neutral-800 border  rounded-lg bg-neutral-200 mb-2"
      >
        <h2>edureka!</h2>
      </div>
      <p className="text-xl pb-4 text-neutral-200 font-bold">Machine Learning and Data Science</p>
      <div className="flex flex-col items-center justify-center  w-fit mx-10">
        <Image
          src={"/online_certificates/edureka_data_science_internship.png"}
          width={400}
          height={100}
          alt={"Can't Load Image"}
          className="pb-5 rounded "
        />
        <div className="flex flex-col tracking md:flex-row gap-4 w-full px-8">
          <div className="border-blue-600 border p-5 rounded bg-neutral-200 ">
            <p className="text-neutral-800">
              Completed a{" "}
              <span className="font-bold">2-month machine learning internship</span>, gaining hands-on experience in:
            </p>
            <ul className="list-disc ml-5 font-semibold text-neutral-800">
              <li>Supervised learning</li>
              <li>Unsupervised learning</li>
              <li>Reinforcement learning</li>
            </ul>
          </div>
          <div className="border-blue-600 border p-5 rounded bg-neutral-200">
            <p className="text-neutral-800">
              Worked in a <span className="font-bold">team of 20 members</span> to develop models, implementing key algorithms like:
            </p>
            <ul className="list-disc ml-5 font-semibold text-neutral-800">
              <li>Linear regression</li>
              <li>Decision trees</li>
              <li>Neural networks</li>
            </ul>
          </div>
        </div>
          <p className="bg-white p-3 mt-5 w-max rounded-full mx-auto text-neutral-800">
            Successfully bridged theory with practical application.
          </p>
    
        </div>
    </div>
    </div>
  );
}


export function Lostronaunt(){

    return(
        <>
        
        
        </>
    )
}