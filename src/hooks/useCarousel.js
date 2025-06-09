import { useEffect, useRef, useState } from "react";

const defaultOptions = {
  scrollBehavior: "smooth",
  minItemWidth: 320,
};

export function useCarousel(
  itemsToView = "auto",
  options = defaultOptions,
  totalItems
) {
  const { scrollBehavior, minItemWidth } = options;
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [canMoveRight, setCanMoveRight] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [autoItemsToView, setAutoItemsToView] = useState(
    typeof itemsToView === "number" ? itemsToView : 1
  );
  const totalPositions = Math.max(totalItems - autoItemsToView + 1, 1);

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
      if (!containerRef.current || itemWidth == 0) return;
      const { scrollLeft } = containerRef.current;

      const newPosition = Math.round(scrollLeft / itemWidth);
      setCurrentPosition(newPosition);
      setCanMoveRight(newPosition < totalPositions - 1);
      setCanMoveLeft(newPosition > 0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [itemWidth, totalPositions]);

  // Update item width based on the number of items to view and the container width
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      const containerWidth = containerRef.current.clientWidth;
      let items = 1;
      if (containerWidth === 0) return;

      if (itemsToView === "auto" && containerWidth < minItemWidth) {
        items = 1;
        setAutoItemsToView(1);
        setItemWidth(containerWidth);
        return;
      }

      if (itemsToView === "auto") {
        items = Math.max(1, Math.floor(containerWidth / minItemWidth));
        setAutoItemsToView(items);
      } else {
        items = itemsToView;
        setAutoItemsToView(itemsToView);
      }
      setItemWidth(containerWidth / items);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [itemsToView, minItemWidth]);

  return {
    containerRef,
    sliderRef,
    handleMoveRight,
    handleMoveLeft,
    itemWidth,
    canMoveRight,
    canMoveLeft,
    currentPosition,
    totalPositions,
  };
}
