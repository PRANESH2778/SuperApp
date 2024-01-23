import axios from "axios";

export const getNews = async()=>{
    try{
        const reqUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-23&sortBy=publishedAt&apiKey=cdf408082fd146be89a99801e937537c"
        const response = await axios.get(reqUrl);
        const data = response.data.articles[0];
        console.log(data)
        return response
    }catch(error){
        console.log(error)
    }
}