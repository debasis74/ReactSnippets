import { useEffect, useState } from "react";

const URL = "https://www.reddit.com/r/aww/top/.json?t=all";

const ImageCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImagData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const fetchImageData = async () => {
    try {
      const rawResponse = await fetch(URL);
      const response = await rawResponse.json();
      const data = response.data.children
        .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
        .map((item) => item.data.url_overridden_by_dest);
      setImagData(data);
      setIsLoading(false);
    } catch (e) {
      console.log("Error in fetchImageData" + e);
    }
  };

  const handleIncrementOrDecrement = (e, status) => {
    debugger;
    const counter = status.includes("inc") ? "+1" : "-1";
    if (imageIndex === 0 && status.includes("dec")) {
      setImageIndex(imageData.length - 1);
    } else if (imageIndex === imageData.length - 1 && status.includes("inc")) {
      setImageIndex(0);
    } else {
      setImageIndex((imageIndex) => imageIndex + Number(counter));
    }
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleIncrementOrDecrement(undefined, "inc");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <button onClick={(e) => handleIncrementOrDecrement(e, "dec")}>
            {"<"}
          </button>
          {
            <img
              src={imageData[imageIndex]}
              alt="No data"
              style={{
                width: "90vw",
                height: "90vh",
                objectFit: "cover",
              }}
            ></img>
          }
          <button onClick={(e) => handleIncrementOrDecrement(e, "inc")}>
            {">"}
          </button>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
