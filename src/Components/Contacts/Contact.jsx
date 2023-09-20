import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://reelarchers.azurewebsites.net/sendmail",
        { name, email, message }
      );
      res.status === 200 && window.alert("Email send successful!");
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  // const data = [
  //   { name: "Address", text: "P.O. BOX 3407-00100, Nairobi" },
  //   { name: "Hours", text: "Monday - Saturday: 8:00 AM - 5:00 PM" },
  //   { name: "Phone", text: "+254 701123511" },
  //   { name: "Email", text: "info@reelarcherstudios.com" },
  // ];

  return (
    <section className="py-10 lg:py-24 h-max text-[#000000] px-10 xl:py-16" 
    >
      <div className="flex flex-col px-2 mx-auto max-w-5xl md:flex-row xl:max-w-7xl md:space-x-10 xl:px-0">
        <div className="space-y-5 md:w-1/2">
          <div className="space-y-3">
            <h2 className="contact text-center mt-24 font-semibold text-4xl text-[#ffffff]">
                    We understand the important decision of finding the 
                    right architect for your project and it is equally important to us.
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#3d3c3aa9] p-5 mt-10 text-black rounded-lg space-y-5 md:mt-0 md:p-10 md:w-1/2"
        >
          <label className="block">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              className="w-full outline-none border py-3 px-2 rounded"
            />
          </label>
          <label className="block">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className="w-full outline-none border py-3 px-2 rounded"
            />
          </label>
          <label className="block">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              type="text"
              placeholder="Your Message"
              rows={window.screen.width > 768 ? "7" : "3"}
              className="w-full outline-none border p-2 rounded"
            />
          </label>
          <label className="block">
            <input
              onClick={(e) => handleSubmit(e)}
              type="submit"
              value="Submit"
              className="w-1/4 text-[#ffffff] font-semibold bg-black outline-none border p-2 rounded-lg cursor-pointer"
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default Contact;
