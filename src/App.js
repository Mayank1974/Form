import React, { useState } from "react";
// import Rise from '../public/image/Rise.png'

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing the entire form data");

    console.log(formData);
  }
  // h-[80%]
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col bg-[url('../public/image/Rise.png')] bg-cover bg-repeat ">
      <h1 className="font-bold text-4xl mb-2 text-purple-600">Form</h1>
      <div className="w-[10rem] h-1 rounded-lg bg-purple-500"></div>
      <form
        onSubmit={submitHandler}
        action=""
        className=" bg-[url('../public/image/bg.jpg')]  flex flex-col bg-cover mt-6 w-[40%]  px-[4rem] py-12 rounded-lg shadow-lg shadow-purple-900 relative"
      >
        <div className="mt-[]">
          <label
            htmlFor="firstname"
            className="text-white  text-[15px] font-bold"
          >
            First Name
          </label>
          <br />
          <input
            type="text"
            placeholder="First name"
            onChange={changeHandler}
            name="firstname"
            value={formData.firstname}
            className="border-2  rounded px-1 w-[100%]"
          />

          <br />
          <label
            htmlFor="lastname"
            className="text-white  text-[15px] font-bold"
          >
            Last Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Last name"
            onChange={changeHandler}
            name="lastname"
            value={formData.lastname}
            className="border-2 rounded px-1 w-[100%]"
          />

          <br />
          <label htmlFor="email" className="text-white  text-[15px] font-bold">
            Email
          </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
            className="border-2 rounded px-1 w-[100%]"
          />

          <br />
          <label htmlFor="email" className="text-white text-[15px] font-bold">
            Description
          </label>
          <textarea
            className="border-2 rounded px-1 w-[100%]"
            name="comment"
            placeholder="enter your comment here"
            value={formData.comment}
            onChange={changeHandler}
          ></textarea>

          <br />
          <input
            onChange={changeHandler}
            type="checkbox"
            name="isVisible"
            className="border-2 rounded mr-3 text-purple-600 "
            id="isVisible"
            checked={formData.isVisible}
          />
          <label
            htmlFor="isVisible"
            className="text-white text-[15px] font-bold"
          >
            Am I Visible ?
          </label>
          <br />
          <fieldset className="border-white border px-2 text-white flex justify-between h-18 font-mono items-center">
            <legend>
              <pre> Mode : </pre>
            </legend>
            <div>
              <input
                type="radio"
                name="mode"
                className="border-2 rounded mr-3 "
                onChange={changeHandler}
                value="Online-Mode"
                id="Online-mode"
                checked={formData.mode === "Online-Mode"}
              />
              <label
                htmlFor="Online-Mode"
                className="text-white text-[15px] font-bold"
              >
                Online Mode
              </label>
            </div>
            <br />
            <div>
              <input
                type="radio"
                name="mode"
                onChange={changeHandler}
                className="border-2 rounded mr-3 "
                value="Offline-Mode"
                id="offline-mode"
                checked={formData.mode === "Offline-Mode"}
              />
              <label
                htmlFor="Offline-Mode"
                className="text-white text-[15px] font-bold"
              >
                Online Mode
              </label>
            </div>
          </fieldset>
          <br />
          <div className="w-[100%]">
            <label htmlFor="favCar" className="font-bold text-white">
              Select Your Fav Car :{" "}
            </label>
            <select
              name="favCar"
              id="favCar"
              className="text-black  font-serif font-bold rounded-lg px-2"
              value={formData.favCar}
              onChange={changeHandler}
            >
              <option value="">Select Fav Car</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Fortuner">Fortuner</option>
              <option value="Thar">Thar</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
            </select>
          </div>

          <br />
          <div className="flex justify-center items-center bg-purple-600 rounded-md px-2  font-bold text-xl w-[50%] mx-[25%]">
            <button className="text-white">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
