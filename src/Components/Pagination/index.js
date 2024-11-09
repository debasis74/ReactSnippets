import { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

const ImageComponent = ({ data }) => {
  const { thumbnail, title } = data;
  console.log(thumbnail, title, "imageComponent");
  return (
    <div className={styles.imageComponent}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <span>{title}</span>
    </div>
  );
};

const Pagination = () => {
  const [errorState, setErrorState] = useState("");
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getLimit = () => {
    return currentPage * 10;
  };

  const fetchData = async () => {
    try {
      const limit = getLimit();
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}`
      );
      const data = await response.json();

      debugger;
      setData(data.products);
    } catch (e) {
      setErrorState("Something Went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <div className={styles.imageGrid}>
        {data?.slice(currentPage * 10 - 10, currentPage * 10).map((e) => (
          <ImageComponent key={e.id} data={e} />
        ))}
      </div>
      <div className={styles.pagination}>
        <span onClick={() => setCurrentPage((prev) => prev - 1)}>◀</span>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((e) => {
          return (
            <span
              key={e}
              onClick={() => setCurrentPage(e)}
              className={styles.pageNumber}
            >
              {e}
            </span>
          );
        })}
        <span onClick={() => setCurrentPage((prev) => prev + 1)}>▶</span>
      </div>
    </div>
  );
};

export default Pagination;
