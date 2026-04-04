import { memo } from "react";


interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}


export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render (optimized)");
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});


export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    console.log("UserCardWithCompare render");
    return (
      <div style={{ border: "1px solid blue", margin: "5px", padding: "5px" }}>
        <h3>{user.name} (ID-based Compare)</h3>
        <p>{user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {

    return prevProps.user.id === nextProps.user.id;
  }
);