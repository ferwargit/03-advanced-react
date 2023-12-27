import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // call an API here or db
    setUser({ name: 'Vegan food truck' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>User: {user.name}</h2>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
};

export default UserChallenge;
