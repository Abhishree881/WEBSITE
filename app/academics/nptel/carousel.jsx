import React, { useEffect, useState } from "react";
import "../../../styles/about/carousel/carousel.css";

function Carousel(props) {
  const [i, setI] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1250);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scroll, setScroll] = useState(1);

  const AddOne = () => {
    let len = props.carouselData.length;
    if (i < len - 1 && scroll === 1) {
      setI(i + 1);
    } else if (scroll === 1) {
      setI(0);
    }
  };
  const ReduceOne = () => {
    let len = props.carouselData.length;
    if (i == 0) {
      setI(len - 1);
    } else {
      setI(i - 1);
    }
  };
  useEffect(() => {
    const id = setInterval(AddOne, 3000);
    return () => clearInterval(id);
  }, [AddOne]);
  return (
    <div
      className="w-full py-4 flex items-center justify-center"
      onMouseEnter={() => {
        setScroll(0);
      }}
      onMouseLeave={() => {
        setScroll(1);
      }}
    >
      <div
        className="relative w-full bg-gray-400 h-adjust rounded-2xl"
        style={{
          backgroundImage: `url(${props.carouselData[i].url})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absollute w-full h-adjust flex items-center">
          <div className="absolute flex z-[20] w-full items-center justify-between px-4">
            <div
              className="h-8 w-8 rounded-[50%] flex items-center justify-center pr-1 cursor-pointer"
              onClick={ReduceOne}
            ></div>
            <div
              className="h-8 w-8 rounded-[50%] flex items-center justify-center pl-1 cursor-pointer"
              onClick={AddOne}
            ></div>
          </div>
        </div>
        <div className="absolute flex z-10 h-auto mb-8 gap-1 w-full bottom-0 items-center justify-center overflow-hidden">
          {props.carouselData.map((index) => {
            return (
              <div
                className={
                  index.index === i
                    ? "bg-white h-[5px] w-[20px] border cursor-pointer"
                    : "bg-[rgba(110,110,110,0.67)] h-[5px] w-[20px] cursor-pointer"
                }
                onClick={() => setI(index.index)}
                style={{ maxWidth: `${windowWidth > 500 ? 20 : 15}px` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
