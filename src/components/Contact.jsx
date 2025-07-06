const Contact = () => {
    return (
        <div className="border border-gray-300 shadow-md shadow-gray-400 rounded-md w-10/12 mx-auto my-10 p-5">
            <h2 className="font-extrabold text-gray-600 text-xl my-5">Get in Touch</h2>
            <div className="flex flex-col">
            <input placeholder="Enter you Name" className="m-2 p-1 w-6/12 rounded-sm outline-0 border border-gray-400 font-semibold text-gray-600 font-mono"/>
            <textarea placeholder="Type..." rows={8} className="m-2 p-1 w-6/12 rounded-sm outline-0 border border-gray-400 font-semibold text-gray-600 font-mono"/>
            <buton className="w-3/12 text-center mx-2 p-1 rounded-md outline-0 border border-gray-400 font-semibold bg-gray-400 text-white font-mono cursor-pointer">Submit</buton>
            </div>
        </div>
    )
}

export default Contact;