import { Navigate } from "react-router-dom";
import { userCurrentToken } from "../../redux/feature/authSlice";
import { useAppSelector } from "../../redux/hook";
import { ReactNode } from "react";

const ProtectedLayer = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedLayer;
