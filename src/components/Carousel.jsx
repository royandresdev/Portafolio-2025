import { Icon } from "@iconify/react/dist/iconify.js";
import { useCarousel } from "../hooks/useCarousel";
import { Children } from "react";

const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item h-full px-2 overflow-hidden" style={{ width }}>
      {children}
    </div>
  );
};

const Carousel = ({ itemsToView, children }) => {
  const {
    containerRef,
    sliderRef,
    handleMoveLeft,
    handleMoveRight,
    itemWidth,
  } = useCarousel(itemsToView, { scrollBehavior: "smooth" });
  return (
    <div>
      <div id="carousel" className="w-full flex items-center mb-4">
        <button className="btn-secondary px-2 size-10" onClick={handleMoveLeft}>
          <Icon
            icon="material-symbols:arrow-right"
            height={24}
            className="rotate-180"
          />
        </button>
        <div
          className="carousel-container h-[560px] w-full flex overflow-x-scroll"
          ref={containerRef}
        >
          <div className="carousel-slider h-full flex" ref={sliderRef}>
            {
              //Asegura que el children sean un array
              Children.toArray(children).map((child, index) => {
                return (
                  <CarouselItem key={index} width={`${itemWidth}px`}>
                    {child}
                  </CarouselItem>
                );
              }
              )
            }
          </div>
        </div>
        <button
          className="btn-secondary px-2 size-10"
          onClick={handleMoveRight}
        >
          <Icon icon="material-symbols:arrow-right" height={24} />
        </button>
      </div>
      <div className="carousel-indicators">
        <div className="h-[12px] w-[32px] bg-grey-500 rounded"></div>
        <div className="h-[12px] w-[32px] bg-grey-500 rounded"></div>
        <div className="h-[12px] w-[32px] bg-grey-500 rounded"></div>
      </div>
    </div>
  );
};
export default Carousel;
