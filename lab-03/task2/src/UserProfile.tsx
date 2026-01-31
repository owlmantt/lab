import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); //
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError("Ошибка при загрузке");
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [userId]);

  if (loading) return <p>.Загрузка</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>{user?.name}</h3>
      <p>Email: {user?.email}</p>
    </div>
  );
};
export default UserProfile;