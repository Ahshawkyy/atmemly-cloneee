import img1 from "../../../public/image/Group46974.svg";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Contactusc = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for contacting us !");
    setFormData({
      phone: "",
      email: "",
      message: "",
    });
    // setIsSubmitted(true);
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };
  // const formDataArray = [formData];

  return (
    <>
      <section id="contact-us">
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto mt-[100px] mb-[60px]   px-6 flex flex-col items-center justify-center  xl:w-[66%] lg:w-[80%]  ">
            <h1 className="lg:text-5xl xl:text-5xl 2xl:text-6xl 2xl:font-medium fonts-pops text-neutral-700 text-sky-300">
              Contact Us
            </h1>
            <img src={img1} className="mt-6" alt="" />
            <div className="container flex gap-20 xl:gap-10 2xl:gap-20 xl:mt-16 xl:ml-28 lg:gap-1">
              <div className="flex flex-col 2xl:w-1/2 xl:w-1/8 2xl:pl-[55px] 2xl:pr-[12px]  xl:pl-28 lg:w-[100%] lg:pl-14">
                <h1 className="pb-2 text-neutral-500 font-pops 2xl:text-2xl xl:text-xs lg:text-xs">
                  Phone number
                </h1>
                <PhoneInput
                  country={"eg"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your phone number"
                  inputProps={{
                    required: true,
                  }}
                  containerStyle={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col 2xl:1/2 xl:w-1/3 lg:w-[100%]">
                <h1 className="pb-2 text-neutral-500 font-pops 2xl:text-2xl xl:text-xs lg:text-xs">
                  E-mail
                </h1>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Please Enter you Email"
                  className="p-2 text-xs border rounded border-neutral-300 font-pops"
                />
              </div>
            </div>
            <div className="container flex flex-col 2xl:w-full xl:w-3/4 pl-[55px]  pt-5">
              <h1 className="pb-2 text-neutral-500 font-pops 2xl:text-2xl xl:text-xs  lg:text-xs">
                Your Message
              </h1>
              <textarea
                name="message"
                id="message"
                placeholder="Please Enter you Message"
                className="border border-neutral-300 p-2 pb-[150px]   rounded text-xs font-pops "
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" mt-[20px] mx-[313px] ">
              <button
                type="submit"
                className="lg:text-sm lg:px-36 lg:py-2 xl:ml-20  xl:text-sm xl:px-36 xl:py-4  2xl:px-32 2xl:py-3 2xl:text-center xl:text-nowrap text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 font-pops"
              >
                Send
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="2xl:ml-4 xl:ml-2 xl:inline   lg:hidden  "
                />
              </button>
            </div>

            {/* <h1>{handleSubmit}</h1> */}
            {/* <h1>{formData.email}</h1>
              <h1>{formData.message}</h1> */}
            {/* لو هنظهر البيانات 
                  }
            {/* {isSubmitted && ( */}
            {/* <div className="mt-4">
                {formDataArray?.map(
                  (item, index) =>
                    item.email &&
                    item.message &&
                    item.phone && (
                      <div key={index}>
                        <h1>{item.email}</h1>
                        <h1>{item.message}</h1>
                        <h1>{item.phone}</h1>
                      </div>
                    )
                )}
              </div> */}
            {/* )} */}
          </div>
        </form>
      </section>
    </>
  );
};

export default Contactusc;
