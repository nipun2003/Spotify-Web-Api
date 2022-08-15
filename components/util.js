

export const getGreeting = ()=>{
    const today = new Date();
    const hour = today.getHours();
    if(hour > 6 & hour < 12) return "Good Morning";
    if(hour >=12 & hour < 6) return "Good Afternoon";
    return "Good Evening"
}

export const getPlayListId = (playlist) => {
    const url = playlist.href;
    return url.slice(url.lastIndexOf("/") + 1);
  };