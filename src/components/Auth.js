// src/Auth.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="flex justify-center mt-10">
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign in with Auth0
        </button>
      )}
    </div>
  );
};

export default Auth;
