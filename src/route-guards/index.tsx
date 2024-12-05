// import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { userAtom } from "@/store/index";
import { useAtom } from "jotai";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  // const { user } = useAuthContext();
  const [user] = useAtom(userAtom);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children || <Outlet />;
};

export default AuthGuard;
