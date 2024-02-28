import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import AllImages from "./AllImages";

const TopCategories = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("topCategories.json")
        .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setCategory(data);
          });
    }, [])

    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <section className="w-11/12 mx-auto mb-2">
      <div className="bg-white shadow-md relative -top-[40px] p-6">
        <h2 className="font-bold text-lg text-left mb-3">Top Categories</h2>
        <div className="slider-container pb-3">
          <Slider {...settings}>
            {
                category.map((item) => <h2 
                key={item.id} 
                >
                <div className="mr-6 relative">
                    <img className="md:h-[140px]" src={item.image} alt="" />
                    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">{item.name}</h2>
                </div>
                </h2>)
            }
          </Slider>
        </div>
      </div>
      <AllImages></AllImages>
    </section>
  );
};

export default TopCategories;
