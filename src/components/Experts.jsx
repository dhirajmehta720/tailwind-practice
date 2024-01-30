import laptop from "../assets/laptop.jpg"
const Experts = () => {
  return (
    <div className="max-w-[1248px] mx-auto sm:flex flex-col md:grid grid-cols-2 my-8">
        <div className=" mx-auto col-span-1 w-[80%]">
            <img src={laptop} alt="" />
        </div>
        <div className="flex justify-center flex-col col-span-1">
            <h1 className="text-[#00df9a] font-bold m-2 sm:text-center md:text-left">LEARN FROM EXPERTS</h1>
            <p className="m-2" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias aperiam, incidunt excepturi consequuntur saepe eius, dolores doloribus magni voluptatem sint, quod est? Sunt impedit ratione maxime officia tempora modi ad ipsam? Aliquam!</p>
            <button className="bg-black w-[30%] md:ml-1 sm:mx-auto sm:my-2 mx-auto text-white p-3 mt-2 rounded-lg" >Get Started</button>
        </div>
    </div>
  )
}

export default Experts