"use client";
import React, { useState } from "react";
export default function Admin() {
  const initdata = {
    title: "",
    link: "",
    category: "",
    date: Date(),
    content: "",
  };
  const [data, setformdata] = useState(initdata);
  const [errors, setErrors] = useState({
    title: "",
    link: "",
    category: "",
    content: "",
  });

  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const formErrors = { title: "", link: "", category: "", content: "" };
    let isValid = true;

    if (!data.title) {
      formErrors.title = "Title is required";
      isValid = false;
    }
    if (!data.content) {
      formErrors.content = "Content is required";
      isValid = false;
    }
    if (!data.link) {
      formErrors.link = "Link is required";
      isValid = false;
    }
    if (!data.category) {
      formErrors.category = "Category is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form data to API
      console.log(data);
      // API call to submit data
      try{
        const response = await fetch('/api/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result);
            // Redirect to success page
            } catch (error) {
              console.error(error);
              }
      }
  };





  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 fixed h-full w-full">
      <div className="text-3xl text-neutral-200 text-center">
        welcome to admin
      </div>
      <div className="text-neutral-200 mt-10 p-5 flex flex-col">
        <form action="submit" onSubmit={handleSubmit}>
          <p>Add a new blog</p>
          <div className="border border-white p-4">
            <div className="flex flex-col ">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="rounded px-2 w-full sm:w-3/4 h-1/3 p-2 text-black"
                placeholder="Enter the title here"
                name="title"
                onChange={handlechange}
              />
              {errors.title && (
                <span className="text-red-500">{errors.title}</span>
              )}
            </div>

            <div className="flex flex-col my-3 h-2/3">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                className="rounded px-2 w-full sm:w-3/4 overflow-visible p-2 text-black"
                placeholder="What's on your mind"
                name="content"
                onChange={handlechange}
              />
              {errors.content && (
                <span className="text-red-500">{errors.content}</span>
              )}
            </div>

            <div className="flex flex-col my-3">
              <label htmlFor="link">Enter the relevant link</label>
              <input
                type="text"
                placeholder="Enter the link here"
                name="link"
                className="px-2 w-3/4 rounded text-black"
                id="link"
                onChange={handlechange}
              />
              {errors.link && <span className="text-red-500">{errors.link}</span>}
            </div>

            <div className="flex gap-5">
              <div>
                <input
                  type="radio"
                  name="category"
                  id="personal"
                  onChange={handlechange}
                  value={"personal"}
                />
                <label htmlFor="personal">Personal</label>
              </div>
              <br />
              <div>
                <input
                  type="radio"
                  name="category"
                  id="professional"
                  onChange={handlechange}
                  value={"professional"}
                />
                <label htmlFor="professional">Professional</label>
              </div>
              {errors.category && (
                <span className="text-red-500">{errors.category}</span>
              )}
            </div>

            <button
              type="submit"
              className="left-0 bg-neutral-500 w-fit mt-5 p-2 rounded-xl text-amber-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
