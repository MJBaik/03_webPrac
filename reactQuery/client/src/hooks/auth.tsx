import { customAxios } from "../util/customAxios";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../stores/AuthStore";
import { signUpParams, logInParms } from "../interfaces/AuthInterface";

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: signUpParams) =>
      customAxios.post("/accounts/signup/", payload),

    onSuccess: (res) => {
      if (res.status == 204) {
        navigate("/login");
      } else if (res.status == 400) {
        for (const err of Object.keys(res.data)) {
          console.log(res.data[err][0]);
        }
      }
    },

    onError: (err) => {
      return;
    },
  });
};

export const useLogin = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const setAuth = useAuthActions();

  return useMutation({
    mutationFn: (payload: logInParms) =>
      customAxios.post("/accounts/login/", payload),

    onSuccess: (res) => {
      if (res.status == 200) {
        setCookie("authToken", res.data.key);
        setAuth(true);
        navigate("/");
      } else if (res.status == 400) {
        for (const err of Object.keys(res.data)) {
          console.log(res.data[err][0]);
        }
      }
    },

    onError: (err) => console.error(err),
  });
};

export const useLogout = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const setAuth = useAuthActions();

  return useMutation({
    mutationFn: () => customAxios.post("/accounts/logout/", {}),
    onSuccess: (res) => {
      removeCookie("authToken");
      setAuth(false);
      navigate("/");
    },
    onError: (err) => console.error(err),
  });
};
