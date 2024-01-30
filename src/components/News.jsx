const News = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-6 md:flex justify-between p-[50px]">
        <div>
          <h1 className="text-[40px] font-bold text-white">
            Want to learn Web dev.
          </h1>
          <span className="text-white">
            Sign up for the course and stay up to date
          </span>
        </div>
        <div className="w-[40%]">
          <input className="p-2 text-slate-400 rounded-md" type="text" placeholder="Email" />
          <button className="bg-black w-[34%] ml-1 text-white p-2 rounded-lg mt-8">
            Get Started
          </button>
          <p className="text-white">
            We care bout the protection of your data. Read our <br />
            <a className='text-black'>Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
