import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full p-[100px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[70px]">
        <div className="text-2xl md:text-3xl">Learn With us</div>
        <div className="text-white text-[30px] md:text-[70px]">
          Grow with us
        </div>
        <div className="text-white text-[25px] md:text-[50px]">
          Learn{" "}
          <ReactTyped
            strings={["Web developement", "Competitive prog."]}
            typeSpeed={90}
            backSpeed={90}
            loop
          />
        </div>
        <button className="bg-black w-[20%] text-white p-3 rounded-lg mt-8" >Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
