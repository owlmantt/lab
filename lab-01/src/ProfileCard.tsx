import React from "react";
import myAvatar from "./assets/12.jpg";
const ProfileCard: React.FC = () => {
  const user = {
    name: "John Doe",
    bio: "Software Engineer, я существую!",
    image: myAvatar
  };
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };
    const imageStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px"
    };
    const nameStyle: React.CSSProperties = {
    fontSize: "1.5em",
    margin: "0 0 8px 0"
    };
    const bioStyle: React.CSSProperties = {
    fontSize: "1em",
    color: "#666"
    };
    return (
    <div style={cardStyle}>
    <img src={user.image} alt={user.name} style={imageStyle} />
    <h2 style={nameStyle}>{user.name}</h2>
    <p style={bioStyle}>{user.bio}</p>
    </div>
    );
    }  
export default ProfileCard;