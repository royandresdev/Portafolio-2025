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
    <div
      className={`carousel-indicator ${isActive ? "isActive" : ""}`}
      role="tab"
      aria-selected={isActive}
      aria-label="Indicador de carrusel"
    ></div>
  );
};;

const Carousel = ({
  itemsToView,
  children,
  style,
}) => {
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
  } = useCarousel(itemsToView, { scrollBehavior: "smooth", minItemWidth: 320 }, children.length);
  return (
    <div>
      <div id="carousel" className="w-full flex items-center mb-4 gap-4">
        <button
          className={`carousel__button-left ${canMoveLeft ? "" : "opacity-0 cursor-default"
            }`}
          onClick={handleMoveLeft}
          disabled={!canMoveLeft}
          aria-label="Anterior"
        >
          <Icon
            icon="material-symbols:arrow-right"
            height={24}
            className="rotate-180"
          />
          <span>Anterior</span>
        </button>
        <div
          className="carousel-container"
          ref={containerRef}
        >
          <div className="carousel-slider h-full flex" ref={sliderRef} style={style}>
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
          className={`carousel__button-right ${canMoveRight ? "" : "opacity-0 cursor-default"
            }`}
          disabled={!canMoveRight}
          onClick={handleMoveRight}
          aria-label="Siguiente"
        >
          <span>Siguiente</span>
          <Icon icon="material-symbols:arrow-right" height={24} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-2" role="tablist">
        {Array.from({ length: totalPositions }, (_, index) => {
          const isActive = index === currentPosition;

          return <CarouselIndicator key={index} isActive={isActive} />;
        })}
      </div>
    </div>
  );
};
export default Carousel;
