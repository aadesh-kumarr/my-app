export default function Lostronaunt() {
    return (
      <div
        className="mx-auto  p-6 w-fit rounded-lg
                  border border-gray-700 shadow-xl  
                  flex flex-col justify-center items-center 
                  bg-neutral-900"
      >
        <p
          className="text-xl text-center text-amber-400 font-semibold 
                     bg-white bg-opacity-10 
                     w-fit p-4 mx-auto rounded-2xl shadow-md"
        >
          For Lostronaunt
        </p>
        <p className="mt-2 text-gray-300 italic">
          Solo project done during internship.
        </p>
  
        <div className="text-sm bg-neutral-800 bg-opacity-50 p-4 rounded-lg mt-4 w-full">
          <p className="text-left text-2xl text-amber-400 my-3">
            What was the Problem Statement?
          </p>
          <p className="text-gray-200">
            To keep a track on orders for a Scrubber brand at initial stages. The
            customer asked for a simple UI with strong backend functionalities.
            Must include the following:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Hardcoded email ids for log-in and usage.</li>
            <li>Basic CRUD operations.</li>
            <li>
              Message service to be done on order received and payment received.
            </li>
          </ul>
        </div>
      </div>
    );
  }
  