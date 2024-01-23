import List from "../components/Movies/List";
import Profile from "../assets/profileSmall.png";
import styles from "../components/Movies/List.module.css";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));
  const navigate = useNavigate();
  const backtoBrowse = ()=>{
    navigate("/browse")
  }
  const ExitPage = ()=>{
    navigate("/")
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
          fontFamily:"Roboto"
        }}
      >
        <img 
          src={Profile}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
            cursor:"pointer"
          }}
          onClick={backtoBrowse}
        />
        <p
          style={{
            color: "green",
            fontSize: "3rem",
            margin: "1vw",
          }}
          className={styles.header}
        >
          Super app
        </p>
        <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}
        <button onClick={ExitPage} style={{bottom:"0",marginLeft:"44rem",width:"9vw",height:"6vh",borderRadius:"34px",backgroundColor:"#148A08",color:"white"}}>Exit</button>
      </div>
    </>
  );
};

export default Movies;
