import { useRef, useState } from 'react';

type ReturnProps = {
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  scrollRef: React.RefObject<HTMLDivElement>;
  isDragging: boolean;
};

const useClassesSchedule = (): ReturnProps => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  /**
   * Handles the mouse down event to initiate dragging.
   *
   * @param {React.MouseEvent} e - The mouse event.
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const offsetX = scrollRef.current?.offsetLeft || 0;
    setStartX(e.pageX - offsetX);
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  /**
   * Handles the mouse move event to perform dragging.
   *
   * @param {React.MouseEvent} e - The mouse event.
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    e.preventDefault();

    const offsetX = scrollRef.current?.offsetLeft || 0;
    const currentX = e.pageX - offsetX;
    const walkDistance = currentX - startX;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walkDistance;
    }
  };

  /**
   * Handles the mouse up event to stop dragging.
   */
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    scrollRef,
    isDragging,
  };
};

export default useClassesSchedule;
