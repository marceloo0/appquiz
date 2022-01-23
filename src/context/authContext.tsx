import React, {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type User = {
  id: string;
  name: string;
  avatar: string;
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

GoogleSignin.configure({
  webClientId: '',
});

const USER_DATA = '@quiz:user';

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
    const { user } = await GoogleSignin.signIn();
    if (user) {
      const userData = {
        id: user.id,
        name: user.name as string,
        avatar: user.photo as string,
      };
      setData(userData);
      await AsyncStorage.setItem(USER_DATA, JSON.stringify(userData));
    }
    setIsLogging(true);
  };

  const signOutWithGoogle = async () => {
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem(USER_DATA);
    setData({} as User);
  };

  const signOut = useCallback(async () => {
    await auth().signOut();
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
