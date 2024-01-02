import { ReactNode, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(AuthContext);

  const { pathname } = useLocation();

  console.log(setIsLoading);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!userData && !isLoading) {
    return <Navigate to="/signin" state={{ path: pathname }} />;
  }

  return children;
}
