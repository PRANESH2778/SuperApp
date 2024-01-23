import React, { useEffect, useState } from 'react';
import { getNews } from '../../apis/news';
import { generateTime, generateDate } from '../../utils/helper';

const News = () => {
  const [date, setDate] = useState(" ");
  const [time, setTime] = useState(" ");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNews();
        console.log(response.data.articles)
        setNews(response.data.articles[20]);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Handle error state if needed
      }

      const getCorrectDate = generateDate();
      setDate(getCorrectDate);
      const getCorrectTime = generateTime();
      setTime(getCorrectTime);
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "28vw", height: "90vh", borderRadius: "19px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
        <div style={{width:"28vw",height:"60vh"}}>
          <img src={news.urlToImage} alt="Article" style={{width:"28vw",height:"60vh",borderRadius:"19px 19px 0px 0px",position:"relative"}}/>
          <div style={{position:"absolute",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.74)",fontSize:"15.05px",fontWeight:"500",color:"#FFFFFF",objectFit:"cover",width:"28vw",height:"20vh",top:"303px"}}>
          <p>{news.title}</p>
          <p>Date: {date}</p>
        <p>Time: {time}</p>
        </div>
        </div>
        
        <div style={{backgroundColor:"#FFFFFF",height:"30vh",borderRadius:"0px 0px 19px 19px",fontSize:"15px",fontWeight:"400",lineHeight:"25px",textAlign:"justify"}}>
          <p>{news.content}</p>
        </div>
      

    
    </div>
  );
}

export default News;
