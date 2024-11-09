import { useState, useEffect } from "react";
import Card from "./Card";

const URL = "https://meme-api.com/gimme/10";

const InfiniteScroll = () => {
  const [page, setPage] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const [memeData, setMemeData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

   // Scroll event listener
   const handleScroll = () => {
    debugger
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      !loading &&
      hasMore
    ) {
      setPage((prev) => prev + 1);
    }
  };
  
  const fetchMemeData = async () => {
    try {
      debugger
      setIsLoading(true);
      const response = await fetch(URL);
      const res = await response.json();
      setMemeData(res?.memes);
      setHasMore(res?.memes?.length ? true : false);
    } catch (e) {
      console.log("Failed in fetching data" + e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    debugger
    fetchMemeData();
  }, [page]);


  useEffect(() => {
    debugger
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <>
      {memeData.map((meme) => (
        <Card key={meme?.ups} meme={meme} />
      ))}
    </>
  );
};

export default InfiniteScroll;
