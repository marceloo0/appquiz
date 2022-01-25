import React, {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type ResponseToken = {
  type: string;
  params: {
    access_token: string;
  };
};

type AuthContextData = {
  isLogging: boolean;
  data: User;
  signOut: () => Promise<void>;
  signInWithGoogle: () => void;
  signOutWithGoogle: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const USER_DATA = '@quiz:user';
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<User>({} as User);
  const [isLogging, setIsLogging] = useState(false);

  const loadUserStorageData = async () => {
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_DATA);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;
      setData(userData);
    }

    setIsLogging(false);
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  const signInWithGoogle = async () => {
    setIsLogging(true);

    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as ResponseToken;

    if (type === 'success') {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`
      );
      const userInfo = await response.json();

      if (userInfo) {
        const userData = {
          id: userInfo.id,
          name: userInfo.given_name as string,
          avatar: userInfo.picture as string,
        };
        setData(userData);

        await AsyncStorage.setItem(USER_DATA, JSON.stringify(userData));
      }
    }
    setIsLogging(false);
  };

  const signOutWithGoogle = async () => {
    await AsyncStorage.removeItem(USER_DATA);
    setData({} as User);
  };

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(USER_DATA);
    setData({} as User);
  }, []);

  const values = useMemo(
    () => ({
      data,
      isLogging,
      signOut,
      signInWithGoogle,
      signOutWithGoogle,
    }),
    [isLogging, signOut, data]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
