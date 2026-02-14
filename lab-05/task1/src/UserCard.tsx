import React from "react";
import { User } from "./types";

interface UserCardProps {
user: User;
isActive?: boolean; 
children: React.ReactNode; 
}
const UserCard = ({
user,
isActive = true, // default value
children
}: UserCardProps) => {
return (
<div style={{ border: isActive ? '4px solid green': '2px solid gray', padding: '10px' }}>
<h2>{user.name}</h2>
<p>{user.email} | Age: {user.age}</p>
<div className="Status section">
{children}
</div>
</div>
);
};
export default UserCard