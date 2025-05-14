import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react"

const Carousel = ({ itemsToView = 1, children }) => {
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState("0px");

  const handleMoveRight = () => {
    if (!containerRef.current) return

    containerRef.current.scrollBy({ left: itemWidth, behavior: "smooth" })
  }

  const handleMoveLeft = () => {
    if (!containerRef.current) return

    containerRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" })
  }

  useEffect(() => {
    const itemsCarousel = containerRef.current.children[0].children;
    for (let item of itemsCarousel) {
      item.classList.add("carousel-item");
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const itemsCarousel = containerRef.current.children[0].children;
    const itemWidth = containerRef.current.clientWidth / itemsToView;
    for (let item of itemsCarousel) {
      item.style.width = `${itemWidth}px`
      setItemWidth(itemWidth)
    }
  }, [itemsToView])

  return (
    <div>
      <div id="carousel" className="w-full flex items-center mb-4">
        <button className="btn-secondary px-2 size-10" onClick={handleMoveLeft}>
          <Icon icon="material-symbols:arrow-right" height={24} className="rotate-180" />
        </button>
        <div className="carousel-container h-[560px] w-full flex overflow-x-scroll" ref={containerRef}>
          <div className="carousel-slider h-full flex">
            {
              children.map(child => <div className="carousel-item h-full px-2 overflow-hidden">{child}</div>)
            }
          </div>
        </div>
        <button className="btn-secondary px-2 size-10" onClick={handleMoveRight}>
          <Icon icon="material-symbols:arrow-right" height={24} />
        </button>
      </div>
      <div className="carousel-indicators">
        <div className="h-[12px] w-[32px] bg-grey-500 rounded"></div>
        <div className="h-[12px] w-[32px] bg-grey-500 rounded"></div>
        <div className="h-[12px] w-[32px] bg-grey-500 rounded"></div>
      </div>
    </div>
  )
}
export default Carousel
