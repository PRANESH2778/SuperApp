import { useEffect, useState } from "react";
import styles from "./List.module.css";
const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,
            options
          );
          const data = await response.json();
          console.log("API Response:", data);
          setMovies(data.results.splice(4, 4));
        } catch (error) {
          console.error("Error fetching movies:", error);
        } finally {
          setLoading(false);
        }
      };
    fetchMovies();
  }, []);
  return (
    <>
      <p className={styles.heading} style={{ overflowX: "hidden" }}>
        {genre}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                src={movie?.primaryImage?.url}
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "25vh",
                  borderRadius: "12px",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
