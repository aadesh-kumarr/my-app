import { useState } from "react";

export default function Switch({
  blog,
  setBlog,
}: {
  blog: boolean;
  setBlog: (value: boolean) => void;
}) {
  const [isPersonal, setIsPersonal] = useState(blog); // Initialize based on the blog prop

  // Function to handle clicks on Personal/Professional and update both local and parent state
  const handlePersonalClick = () => {
    setIsPersonal(true); // Set local state to personal
    setBlog(true); // Update parent state to personal
  };

  const handleProfessionalClick = () => {
    setIsPersonal(false); // Set local state to professional
    setBlog(false); // Update parent state to professional
  };

  return (
    <div className="">
      <div className="flex flex-row gap-2 justify-center p-2">
        {/* Personal button */}
        <p
          onClick={handlePersonalClick}
          className={`border-neutral-500 border p-2 px-5 rounded-full cursor-pointer ${
            isPersonal ? "bg-neutral-600 text-amber-400" : ""
          }`}
        >
          Personal
        </p>
        {/* Professional button */}
        <p
          onClick={handleProfessionalClick}
          className={`border-neutral-500 border p-2 rounded-full cursor-pointer ${
            !isPersonal ? "bg-neutral-600 text-amber-400" : ""
          }`}
        >
          Professional
        </p>
      </div>

    </div>
  );
}
