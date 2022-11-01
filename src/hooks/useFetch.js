import  { useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await (await fetch(url)).json();
      if (res.Response === "True") {
        setIsError({
          show: false,
          msg: "",
        });
        setMovie(res.Search || res);
      } else {
        setIsError({
          show: true,
          msg: res.Error,
        });
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${apiParams}`);
    }, 800);
    return () => {
      clearTimeout(timerOut);
      console.log("clear");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
