import { httpClient } from "@/api";
import { refresh } from "@/api/auth";
import { queryClient } from "@/main";
import { afterSignInSuccess } from "@/pages/auth/logIn/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHttpInterceptor = () => {
  const navigate = useNavigate();
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);

  useEffect(() => {
    httpClient.interceptors.response.use(
      (res) => {
        return res;
      },
      (resErr) => {
        const refreshToken = localStorage.getItem("refreshToken");

        if (resErr.status === 401 && refreshToken) {
          setIsRefreshLoading(true);

          refresh({ payload: { refreshToken: refreshToken } })
            .then((res) => {
              afterSignInSuccess({
                accessToken: res.accessToken,
                refreshToken: res.refreshToken,
              });
              queryClient.invalidateQueries({ queryKey: ["me"] });
              navigate("/home");
            })
            .catch(() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              navigate("auth/logIn");
            })
            .finally(() => {
              setIsRefreshLoading(false);
            });
        }

        if (resErr.status === 401) {
          navigate("auth/logIn");
        }

        return resErr;
      },
    );
  }, []);

  return { isRefreshLoading };
};