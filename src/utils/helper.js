export const generateTime = ()=>{
    const date =new Date
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12;
    minutes = minutes < 10 ? '0'+minutes : minutes
    var strTime = hours + ":" + minutes + " "+ ampm;
    return strTime;
}
export const generateDate = ()=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if(dd<10) {
        dd = '0'+dd;
    }
    if(mm<10){
        mm = '0'+mm
    }
    const formattedday = dd + "-" + mm +"-" + yyyy
    return formattedday;
}