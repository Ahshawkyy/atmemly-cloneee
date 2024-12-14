import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSwiper from "../../headerSwiper/HeaderSwiper.jsx";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import Sections from "../../sectionslider/Sections.jsx";
import LastAdd from "../../lastadd/LastAdd.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contactusc from "../../Component/Contactusc/Contactusc.jsx";
// @ts-ignore
import img1 from "../../../public/image/nodata.png";
// @ts-ignore
import img2 from "../../../public/image/Group46974.svg";
// @ts-ignore
import img3 from "../../../public/image/98877.svg";
// @ts-ignore
import img4 from "../../../public/image/Group20570.svg";
// @ts-ignore
import img5 from "../../../public/image/rotated-right-arrow-svgrepo-com2.svg";
// @ts-ignore
import img6 from "../../../public/image/94539.png";
// @ts-ignore
import img7 from "../../../public/image/Group20570.png";
// @ts-ignore
import img8 from "../../../public/image/rotated-right-arrow-svgrepo-com.svg";
// @ts-ignore
import img9 from "../../../public/image/logo-3.png";
// @ts-ignore
import img10 from "../../../public/image/Group205703.png";
// @ts-ignore
import img11 from "../../../public/image/Group20581.png";
// @ts-ignore
import img12 from "../../../public/image/Group20582.png";
// @ts-ignore
import img13 from "../../../public/image/Group20583.png";
// @ts-ignore
import img14 from "../../../public/image/Group46951.png";

const Home = () => {
  const [howwe, setHowWe] = useState([]);
  const [start, setStart] = useState([]);
  const [upload, setUpload] = useState([]);
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);

  const changee = (event) => {
    setSearch(event.target.value);
    setResponse(null);
  };
  const [about, setAbout] = useState([]);

  const sent = () => {
    getdata();
  };
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://api-atmemly.luxurylivinghomes.ae/api/pages/home"
      );
      // console.log(res.data.data.upload_app.locales.en.description);
      setHowWe(res.data.data.how_do_we_work.en.description);
      setStart(res.data.data.start_your_project.en.description);
      setUpload(res.data.data.upload_app.locales.en.description);
    }
    getData();
  }, []);

  useEffect(() => {
    async function about() {
      const res = await axios.get(
        "https://api-atmemly.luxurylivinghomes.ae/api/pages/general"
      );
      setAbout(res.data.data.site_description.en.description);
    }
    about();
  }, []);

  async function getdata() {
    const res = await axios.get(
      `https://api-atmemly.luxurylivinghomes.ae/api/search/${search}`
    );

    setResponse(res.data.data);
    console.log(res.data.data);
  }
  console.log(response);
  return (
    <>
      <NavBar />

      <section id="hero">
        <div className="container mx-auto px-6 space-x-6 flex lg:flex-row max-md:flex-col-reverse max-md:items-center  max-sm:flex-col-reverse  max-sm:items-center justify-between mt-[3rem]">
          <div className="flex flex-col justify-center w-1/2 2xl:ml-20 ">
            <h1 className="lg:ml-10 2xl:font-bold  lg:w-[95%] lg:text-5xl lg:font-bold  lg:pt-8   2xl:text-5xl 2xl:leading-[75px] xl:w-[100%] xl:text-5xl xl:font-bold xl:leading-[70px] xl:pt-8  fonts-pops text-neutral-700 w-[88%] lg:leading-[80px] md:text-5xl md:leading-normal ">
              We have a selection of the best{" "}
              <span className="text-sky-300">Freelancers</span> in the{" "}
              <span className="text-sky-300">Arab</span>
              World
            </h1>
            <h3
              className=" lg:ml-10
lg:w-[95%]
lg:text-2xl lg:font-semibold  lg:pt-8
 2xl:text-[27px] xl:text-[25px] xl:font-semibold  	 text-neutral-400 font-normal	fonts-pops pt-6   md:text-2xl"
            >
              We have a selected group of freelancers from various Arab worlds.
              You can get your service here with high quality and efficiency in
              many fields
            </h3>
            <div className="flex justify-between gap-1 lg:mt-12 lg:ml-10">
              <input
                onChange={changee}
                value={search}
                type="text"
                placeholder="Search"
                className="lg:text-sm lg:rounded-bl-lg lg:py-1 lg:rounded-tl-lg border border-neutral-400  2xl:rounded-tl-lg  xl:text-sm xl:rounded-bl-lg xl:py-1 xl:rounded-tl-lg   2xl:rounded-bl-lg 2xl:py-1 lg:p-4 md:p-2 lg:pl-3  md:rounded-tl-lg  md:rounded-bl-lg  lg:rounded-tr-2xl lg:rounded-br-[100px]  md:text-sm md:w-[100%] "
              />

              <button
                onClick={sent}
                className=" lg:py-4 lg:text-base lg:rounded-br-lg lg:rounded-tr-lg 2xl:py-4 2xl:text-base  xl:py-4 xl:text-base xl:rounded-br-lg xl:rounded-tr-lg  font-pops lg:bg-sky-300   hover:bg-white text-white  hover:text-sky-300   border border-sky-300 hover:border-sky-300  md:px-8 md:text-xs  md:pr-4  md:rounded-tr-lg  md:rounded-br-lg  lg:px-11  lg:rounded-tl-[100px] lg:rounded-bl-xl  transition-all ease-in-out duration-300"
              >
                Search
              </button>
            </div>
            <div>
              <ul>
                {response?.map((item) => {
                  if (item.slug === "test" && search !== "") {
                    return (
                      <li
                        key={item.id}
                        className="w-[100%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex-g"
                      >
                        {item.title}
                        <Link
                          to="/services"
                          className="bg-sky-300 hover:bg-white text-white hover:text-sky-300 border border-sky-300 hover:border-sky-300 px-4 py-2 rounded-lg transition-all ease-in-out duration-300 ml-[230px]"
                        >
                          Service
                        </Link>
                      </li>
                    );
                  }
                })}
                {response?.length === 0 && search !== "" && (
                  <li className="w-[100%] h-[300px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col">
                      <img
                        src={img1}
                        alt="No Data"
                        className="mx-auto my-auto mt-16"
                      />
                      <p className="mx-auto my-auto mt-4">No data found</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <HeaderSwiper />
          </div>
        </div>
      </section>

      <section id="how we">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center mt-11 w-[66%] xl:w-[80%] xl:mt-32  lg:w-[80%] lg:mt-32 ">
          <h1 className="font-medium 2xl:text-6xl xl:text-5xl lg:text-5xl fonts-pops text-neutral-700 text-sky-300">
            How we work ?
          </h1>

          <img src={img2} className="mt-6" alt="" />

          <span className="mt-3 ">
            <h1 className="lg:text-[12px]  lg:w-[100%] xl:text-[12px]  xl:w-[100%] font-medium  fonts-pops text-neutral-700  text-[14px] w-[909px] text-center leading-6 ">
              {howwe}
            </h1>
          </span>
        </div>
      </section>

      <section id="ask for" className="flex items-center justify-center mt-10">
        <div className="container border border-neutral-300 flex justify-center items-center p-[30px] w-[88%] xl:w-[100%] xl:p-[30px] xl:py-0">
          <div className="flex flex-col items-center justify-center w-1/3 py-12 xl:m-11 xl:py-8 ">
            <img src={img3} alt="" className="mt-3 xl:w-[90px] lg:w-[75px]" />
            <img src={img4} alt="" className="mt-3  lg:w-[30px]" />
            <h1 className="mt-3 mb-2 font-semibold lg:text-xl 2xl:text-3xl text-sky-300 font-pops xl:text-2xl ">
              Browse services
            </h1>
            <h2 className="mt-2 2xl:font-light text-center font-pops lg:text-[10px] lg:font-thin  xl:text-xs">
              Explore and compare services to choose what suite you the most
            </h2>
          </div>

          <img src={img5} alt="" className="xl:inline lg:hidden" />

          <div className="flex flex-col items-center justify-center w-1/3 py-12 xl:m-11 xl:py-8">
            <h1 className="mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops lg:text-xl xl:text-2xl">
              Ask for service
            </h1>
            <h2 className="mt-2 font-light text-center font-pops xl:text-xs lg:text-[10px] lg:font-thin">
              Make an order then follow up implementation with the freelancer
            </h2>
            <img src={img6} alt="" className="mt-3 xl:w-[90px] lg:w-[90px]" />
            <img src={img7} alt="" className="mt-3 lg:w-[30px]" />
          </div>

          <img src={img8} alt="" className="xl:inline lg:hidden" />

          <div className="flex flex-col items-center justify-center w-1/3 py-12 xl:m-11 xl:py-8">
            <img src={img9} alt="" className="mt-3 xl:w-[90px] lg:w-[90px]" />
            <img src={img10} alt="" className="mt-3 lg:w-[30px]" />
            <h1 className="mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops lg:text-xl xl:text-2xl">
              Receive
            </h1>
            <h2 className="mt-2 font-light text-center font-pops xl:text-xs lg:text-[10px] lg:font-thin">
              Receive your service with quality and time agreed on
            </h2>
          </div>
        </div>
      </section>

      <section
        id="about us"
        className="flex justify-center items-center  mt-10 bg-zinc-50  py-[62px] "
      >
        <div className="container flex items-center justify-center w-1/2 ">
          <img
            src={img11}
            alt="about-logo"
            className="mr-36 2xl:w-[60%] xl:w-[900px] lg:w-[75%] lg:mr-4   "
          />
        </div>
        <div className="container flex flex-col w-1/2 place-items-start">
          <span className="lg:text-xs xl:text-[12px] px-8 py-3 text-sm rounded-lg bg-cyan-50 text-sky-300 font-pops text-bold ">
            Who we are
          </span>
          <h1 className="mt-3 font-semibold xl:text-4xl lg:text-3xl 2xl:text-5xl text-sky-300 font-pops ">
            About Us
          </h1>
          <h3 className="lg:text-sm lg:text-wrap lg:w-[90%] xl:w-[100%] xl:text-sm mt-8 font-light font-pops mb-48 text-neutral-400 text-left w-[720px]">
            {about}
          </h3>
          <button className="py-3 text-center text-white transition-all duration-300 ease-in-out border rounded-lg lg:text-sm lg:px-8 lg:py-4 xl:text-sm xl:px-8 xl:py-4 bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 px-14">
            Show More
            <FontAwesomeIcon icon={faAnglesRight} className="ml-4" />
          </button>
        </div>
      </section>

      <section
        id="sections  "
        className="flex items-center justify-center mt-9 "
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-semibold lg:text-4xl xl:text-4xl 2xl:text-5xl text-sky-300 font-pops">
            Sections
          </h1>
          <img src={img2} className="mt-4 pb-14" alt="" />
          <Sections />
        </div>
      </section>

      <section
        id="start your"
        className="flex items-center justify-center mt-16 align-center bg-zinc-50"
      >
        <div className="container flex flex-col justify-between mt-16 xl:pl-20 place-items-start xl:w-2/3 lg:w-1/2 lg:-ml-28">
          <h1 className="lg:text-4xl xl:text-4xl 2xl:text-5xl 2xl:font-semibold text-sky-300 font-pops ">
            Start your own project now
          </h1>
          <h3 className="mt-8 2xl:font-light xl:text-sm lg:text-sm font-pops mb-16 text-neutral-800 text-left 2xl:w-[720px] ">
            {start}
          </h3>
        </div>
        <button
          className=" 
        lg:ml-32 lg:text-sm lg:px-1 lg:py-2  lg:w-[20%]
        xl:ml-32 xl:text-sm xl:px-8 xl:py-4 py-3 text-center text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 px-14"
        >
          Start Now
          <FontAwesomeIcon icon={faAnglesRight} className="xl:ml-4 lg:ml-2" />
        </button>
      </section>

      <section
        id="last add"
        className="flex items-center justify-center mb-16 mt-9 "
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="mt-16 lg:text-5xl xl:text-5xl xl:font-semibold text-sky-300 font-pops">
            Latest Added services
          </h1>
          <img src={img2} className="mt-4 pb-14 " alt="" />
          <LastAdd />
        </div>
      </section>
      <section className="bg-zinc-50">
        <div
          id="upload"
          className="flex justify-center items-center mt-9  bg-zinc-50 gap-40 container mx-auto pt-[72px]"
        >
          <div className="container flex flex-col w-1/2 place-items-start ">
            <h1 className="lg:text-[50px] lg:font-normal lg:pl-7  xl:text-[50px] xl:font-medium 2xl:text-5xl 2xl:font-semibold text-sky-300 font-pops  ">
              Upload App Now
            </h1>
            <h4 className="lg:text-[15px] lg:font-normal lg:pl-7  xl:text-base xl:font-light mt-8 mb-16 font-light font-pops ">
              {upload}
            </h4>
            <div className="flex gap-5 lg:w-[50%]">
              <img src={img12} alt="ios" />
              <img src={img13} alt="ios" />
            </div>
          </div>
          <div className="container w-1/2 xl:w-1/3 lg:w-1/3 lg:mr-14">
            <img src={img14} alt="atmemly-log" className="mx-auto" />
          </div>
        </div>
      </section>
      <Contactusc />
      <Footer />
    </>
  );
};

export default Home;
