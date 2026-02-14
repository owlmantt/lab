import React, { useState } from 'react';
import type { User } from './types';
import UserCard from '../../task1/src/UserCard'; 
const INITIAL_DATA: User[] = [
{ name: "Alice", email: "alice@mail.com", age: 25 },
{ name: "Bob", email: "bob@mail.com", age: 30 },
{ name: "Elena", email: "elena@mail.com", age: 22 },
{ name: "Kay", email: "kay@mail.com", age: 21 },
{ name: "Jashna", email: "imcool@mail.com", age: 34 },
{ name: "Dent", email: "dent@mail.com", age: 36 },
{ name: "Alina", email: "alinaaa@mail.com", age: 22 },
];
const SearchApp =() => {
const [users] = useState<User[]>(INITIAL_DATA);
const [filteredUsers, setFilteredUsers] =useState<User[]>(INITIAL_DATA);
const [searchTerm, setSearchTerm] = useState("");
const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
const term = event.target.value;
setSearchTerm(term);
setFilteredUsers(
users.filter((u) =>
u.name.toLowerCase().includes(
term.toLowerCase()))
);
};
const handleClear = (
event: React.MouseEvent<HTMLButtonElement>
) => {
setSearchTerm("");
setFilteredUsers(users);
};
return (
    <div style={{ padding: '20px' }}>
      <h1>Поиск пользователей</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearch} 
          placeholder="Поиск по имени..."
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleClear}>Очистить</button>
      </div>

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} isActive={true}>
              <p>Пользователь найден в базе данных.</p>
            </UserCard>
          ))
        ) : (
          <p>Результатов не найдено</p>
        )}
      </div>
    </div>
  );
};

export default SearchApp