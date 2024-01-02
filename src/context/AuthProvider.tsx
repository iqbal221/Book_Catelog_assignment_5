import {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';

// export type User = {
//   email: string;
//   password: string;
// };

// export type UserData = {
//   data: any;
//   uid: number;
// };
export type Brand = {
  id: string;
  _id: string;
};

export interface UserContextInterface {
  userData: any;
  brand?: Brand;
  setUserData: Dispatch<SetStateAction<any>>;
  setBrand?: Dispatch<SetStateAction<Brand>>;
}

const initialState = {
  userData: null,

  setUserData: () => {},
  brand: {
    id: '',
    _id: '',
  },
  setBrand: () => {},
} as UserContextInterface;

export const AuthContext = createContext(initialState);

type UserProvideProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: UserProvideProps) => {
  // const [loading,setLoading] = useState(false)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  console.log(loading);

  useEffect(() => {
    if (token && userData === null) {
      axios
        .get(`http://localhost:5000/api/v1/auth`, {
          headers: {
            authorization: token,
          },
        })
        .then(res => {
          console.log(res);
          setUserData(res?.data?.data.email);
          setLoading(false);
        });
    }
  }, [userData, token]);

  // console.log({ userData });

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
