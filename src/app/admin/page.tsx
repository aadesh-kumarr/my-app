export default function Admin() {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 fixed h-full w-full">
      <div className=" text-3xl text-neutral-200 text-center">
        welcome to admin
      </div>
      <div className="text-neutral-200 mt-10 p-5 flex flex-col">
        <p>Add a new blog</p>
        <textarea
          className="rounded w-full sm:w-3/4 h-1/3 text-black"
          placeholder="what's on yourr mind"
        />
        <div className="">
          <input type="radio" name="category" id="personal" /> 
          <label htmlFor="personal">personal</label>
          <br />          
          <input type="radio" name="category" id="proffesional" />
          <label htmlFor="proffesional">proffesional</label>
        </div>
        <button
          type="button"
          className="left-0 bg-neutral-500 w-fit mt-5 p-2 rounded-xl text-amber-400"
        >
          submit
        </button>
      </div>
    </div>
  );
}
