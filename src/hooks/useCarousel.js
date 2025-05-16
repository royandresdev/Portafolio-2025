import { useEffect, useRef, useState } from "react";

const defaultOptions = {
  scrollBehavior: "smooth",
};

export function useCarousel(itemsToView = 1, options = defaultOptions) {
  const { scrollBehavior } = options;
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [canMoveRight, setCanMoveRight] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);

  const handleMoveRight = () => {
    if (!containerRef.current) return;

    containerRef.current.scrollBy({
      left: itemWidth,
      behavior: scrollBehavior,
    });
  };

  const handleMoveLeft = () => {
    if (!containerRef.current) return;

    const { scrollLeft } = containerRef.current;

    if (scrollLeft > 0) {
      containerRef.current.scrollBy({
        left: -itemWidth,
        behavior: scrollBehavior,
      });
    }
  };

  // Update canMoveRight and canMoveLeft based on scroll position
  // This effect runs whenever the scroll position changes
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollWidth, scrollLeft, clientWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      setCanMoveRight(scrollLeft < maxScroll);
      setCanMoveLeft(scrollLeft > 0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [itemWidth]);

  // Update item width based on the number of items to view and the container width
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      const itemWidth = containerRef.current.clientWidth / itemsToView;
      setItemWidth(itemWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [itemsToView]);

  return {
    containerRef,
    sliderRef,
    handleMoveRight,
    handleMoveLeft,
    itemWidth,
    canMoveRight,
    canMoveLeft,
  };
}
