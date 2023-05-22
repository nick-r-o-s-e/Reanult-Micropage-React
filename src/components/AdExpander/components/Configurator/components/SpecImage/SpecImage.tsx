import { useEffect, useState } from "react";
import "./SpecImage.scss";
import { ColorRing } from "react-loader-spinner";

type Props = {
  image: string;
};

function SpecImage({ image }: Props) {
  const [loaded, setLoaded] = useState(false);

  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [image]);

  return (
    <div className="config__image-wrapper">
      {loaded ? null : (
        <>
          <div className="coinfig__image--loader-container"></div>
          <div className="coinfig__image--loader">
            <ColorRing
              visible={true}
              height="25%"
              width="25%"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        </>
      )}

      <img
        className={`config__image ${!loaded ? "loading" : ""}`}
        onLoad={() => {
          setLoaded(true);
          setLoadingError(false);
        }}
        src={image}
        alt="car-image"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          setLoadingError(true);
        }}
        style={loadingError ? { display: "none" } : {}}
      />
    </div>
  );
}

export default SpecImage;
