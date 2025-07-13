import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

const handleSubmit = () => {
  if (!name || !message) {
    alert("Please fill all fields.");
  } else {
    alert("Form submitted successfully!");
  }
};

    return (
        <div className="border border-gray-300 shadow-md shadow-gray-400 rounded-md w-11/12 md:w-10/12 mx-auto my-10 p-5">
            <h2 className="font-extrabold text-gray-600 text-md md:text-xl my-3">Get in Touch</h2>
            <div className="flex flex-col">
            <input placeholder="Enter your Name" className="m-2 p-1 w-12/12 md:w-6/12 rounded-sm outline-0 border border-gray-400 font-semibold text-gray-600 font-mono"/>
            <textarea placeholder="Type..." rows={8} className="m-2 p-1 w-12/12 md:w-6/12 rounded-sm outline-0 border border-gray-400 font-semibold text-gray-600 font-mono"/>
            <button type="submit" onClick={()=> handleSubmit()}className="w-3/12 md:w-2/12 text-center mx-2 p-1 rounded-md outline-0 border border-gray-200 font-semibold bg-orange-400 text-white font-mono cursor-pointer">Submit</button>
            </div>
        </div>
    )
}

export default Contact;