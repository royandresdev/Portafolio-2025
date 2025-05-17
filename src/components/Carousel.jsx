import { Icon } from "@iconify/react/dist/iconify.js";
import { useCarousel } from "../hooks/useCarousel";
import { Children } from "react";

const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="carousel-item h-full px-2 overflow-hidden"
      style={{ width }}
    >
      {children}
    </div>
  );
};

const CarouselIndicator = ({ isActive }) => {
  return (
    <div className={`carousel-indicator ${isActive ? "isActive" : ""}`}></div>
  );
};

const Carousel = ({ itemsToView, children }) => {
  const {
    containerRef,
    sliderRef,
    handleMoveLeft,
    handleMoveRight,
    canMoveLeft,
    canMoveRight,
    itemWidth,
    totalPositions,
    currentPosition,
  } = useCarousel(itemsToView, { scrollBehavior: "smooth" }, children.length);
  return (
    <div>
      <div id="carousel" className="w-full flex items-center mb-4">
        <button
          className={`btn-secondary px-2 size-10 ${canMoveLeft ? "" : "opacity-0 cursor-default"}`}
          onClick={handleMoveLeft}
          disabled={!canMoveLeft}
        >
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
              })
            }
          </div>
        </div>
        <button
          className={`btn-secondary px-2 size-10 ${canMoveRight ? "" : "opacity-0 cursor-default"
            }`}
          disabled={!canMoveRight}
          onClick={handleMoveRight}
        >
          <Icon icon="material-symbols:arrow-right" height={24} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: totalPositions }, (_, index) => {
          const isActive = index === currentPosition;

          return <CarouselIndicator key={index} isActive={isActive} />;
        })}
      </div>
    </div>
  );
};
export default Carousel;
