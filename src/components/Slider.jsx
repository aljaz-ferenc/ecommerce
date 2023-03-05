import { useState } from "react";

export default function Slider() {
    const [state, setState] = useState(1);

    function handleLeft() {
      if (state === 1) return;
      setState((prevState) => prevState - 1);
    }
  
    function handleRight() {
      if (state === 4) return;
      setState((prevState) => prevState + 1);
    }

  return (
    <div className="slider">
    {state === 1 || (
      <svg
        className="slider__chevron left"
        onClick={handleLeft}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        ></path>
      </svg>
    )}
    {state === 4 || (
      <svg
        onClick={handleRight}
        className="slider__chevron right"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        ></path>
      </svg>
    )}
    <div
      className="slider-image-container"
      style={{
        transform: `translate(-${window.innerWidth * (state - 1)}px)`,
      }}
    >
      <div className="image1"></div>
      <div className="image2"></div>
      <div className="image3"></div>
      <div className="image4"></div>
    </div>
  </div>
  )
}
