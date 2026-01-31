import React from "react";

const Greeting: React.FC = () => {
  const now = new Date(); 
  const hours = now.getHours();
  
  let text = "";
  let textColor = "";


  if (hours >= 6 && hours < 12) {
    text = "Good Morning!";
    textColor = "orange";
  } else if (hours >= 12 && hours < 18) {
    text = "Good Afternoon!";
    textColor = "blue";
  } else {
    text = "Good Evening!";
    textColor = "darkblue";
  }


  const greetingStyle: React.CSSProperties = {
    fontSize: "2em",
    fontWeight: "bold",
    color: textColor, 
    margin: "20px"  
  };

  return <h1 style={greetingStyle}>{text}</h1>;
};

export default Greeting;