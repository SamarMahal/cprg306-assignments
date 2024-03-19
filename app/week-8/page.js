import React from 'react';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(0);

    const handleLogin = async () => {
        try {
          await gitHubSignIn();
        } catch (error) {
          console.error("Login failed:", error);
        }
      };
    
      const handleLogout = async () => {
        try {
          await firebaseSignOut();
        } catch (error) {
          console.error("Logout failed:", error);
        }
    };
    return (
        <div>
        {user ? (
          <>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button onClick={handleLogout}>Logout</button>
            <a href="/shopping-list">Go to Shopping List</a>
          </>
        ) : (
          <button onClick={handleLogin}>Login with GitHub</button>
        )}
      </div>      
        
    );
}