import { IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
        <div className="relative h-[90vh]">
          <img
            src="https://i.ibb.co/jwnBcph/jeb-buchman-Njrjrd-JE8-As-unsplash.jpg"
            alt="Banner Background"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-lg md:text-3xl lg:text-5xl font-bold mb-8 text-white text-center lg:px-44">
              Your local source of high-quality images <br />
              and videos directly from their creators
            </h1>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search photos and videos"
                className="px-4 lg:w-[850px] p-3 rounded-full border outline-none text-black"
              />
              <div className="absolute inset-y-0 end-0 flex items-center ps-3 mr-6 pointer-events-none">
                <button>
                  <IoSearch className="text-black" />
                </button>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-left lg:text-base text-xs">
              Recommended: summer, food, covid-19, real estate, love
            </p>
          </div>
        </div>
    </div>
  );
};

export default Banner;
