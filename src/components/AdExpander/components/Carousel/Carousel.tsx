import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import arrowSvg from "./arrow.svg";

type Props = {
  children: JSX.Element[];
  show: number;
};

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const Carousel = ({ children, show }: Props) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [currentIndex, setCurrentIndex] = useState(0);

  const [length, setLength] = useState(children && children.length);

  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children && children.length);

    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [children]);

  if (windowSize.innerWidth >= 970) {
    show = 3;
  } else if (windowSize.innerWidth <= 970 && windowSize.innerWidth > 650) {
    show = 2;
  } else {
    show = 1;
  }

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="expander__section expander__section--carousel">
      <div className="carousel-title">
        <h3 className="carousel-title__heading">Genopfindelse af elbilen</h3>
        <p className="carousel-title__description">
          Megane E-Tech 100% electric er med dig, hvor end du tager hen.I kraft
          af Renaults R&D ekspertise har den en rækkevidde på op til 442 km.
        </p>
      </div>
      <div className="carousel">
        {currentIndex > 0 && (
          <button
            style={{ backgroundImage: `url(${arrowSvg})` }}
            onClick={prev}
            className="left-arrow"
          ></button>
        )}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="carousel__content-wrapper"
        >
          <div
            className={`carousel__content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - show && (
          <button
            style={{ backgroundImage: `url(${arrowSvg})` }}
            onClick={next}
            className="right-arrow"
          ></button>
        )}
      </div>
      <a target="_blank" href="https://showheroes.com/">
        <button className="carousel-btn action-btn">Find forhandler</button>
      </a>
    </div>
  );
};

export default Carousel;
