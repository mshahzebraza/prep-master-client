import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Auth0Provider, useAuth0, User as Auth0User } from '@auth0/auth0-react';
import axios from '../../api/axios';
import { User } from './types';


interface AuthContextType {
  user: User | null;
  loginWithPopup: () => Promise<void>;
  loginWithEmailPassword: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<string | null>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { loginWithPopup, isAuthenticated, getAccessTokenSilently, user: auth0User, logout: signout } = useAuth0<Auth0User>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      if (isAuthenticated && auth0User) {
        await syncAuth0WithBackend();
      } else if (localStorage.getItem('persistant')) {
        await refreshToken();
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    initializeAuth();
  }, [isAuthenticated, auth0User]);

  const syncAuth0WithBackend = async () => {
    try {
      const auth0Token = await getAccessTokenSilently();
      const { sub, email, name, picture } = auth0User as Auth0User;
      const response = await axios.post('/auth/auth0-login', {
        auth0Id: sub, email, name, auth0Token, picture
      }, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });

      if (response?.data?.data?.accessToken) {
        setUser(response.data.data);
        localStorage.setItem('persistant', 'true');
      } else {
        setUser(null);
        localStorage.removeItem('persistant');
      }
    } catch (err) {
      console.error('Error syncing with backend:', err);
      setUser(null);
      localStorage.removeItem('persistant');
    }
  };

  const refreshToken = async (): Promise<string | null> => {
    try {
      const response = await axios.get('/auth/refresh', {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });
      if (response?.data?.data?.accessToken) {
        setUser(response.data.data);
        return response.data.data.accessToken;
      } else {
        throw new Error('No access token in refresh response');
      }
    } catch (err) {
      console.error('Error refreshing token:', err);
      setUser(null);
      localStorage.removeItem('persistant');
      return null;
    }
  };

  const loginWithEmailPassword = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await axios.post('/auth/login', { email, password }, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });

      if (response?.data?.data?.accessToken) {
        setUser(response.data.data);
        localStorage.setItem('persistant', 'true');
      } else {
        throw new Error('No access token in login response');
      }
    } catch (err) {
      console.error('Login error:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await axios.get('/auth/logout', { withCredentials: true });
      setUser(null);
      localStorage.removeItem('persistant');
      await signout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loginWithPopup,
    loginWithEmailPassword,
    logout,
    refreshToken,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface Auth0AuthProviderProps {
  children: ReactNode;
}

export const Auth0AuthProvider: React.FC<Auth0AuthProviderProps> = ({ children }) => {
  return (
    <Auth0Provider 
      domain={`dev-8fuccwoxftr03gm2.us.auth0.com`}
      clientId={`usCvvwoL2Hg0U8Lbe4hQ4gCEosXpIppl`}
      authorizationParams={{
        audience: 'https://api.prepmaster.com',
        redirect_uri: window.location.origin,
      }}
    >
      <AuthProvider>{children}</AuthProvider>
    </Auth0Provider>
  );
};