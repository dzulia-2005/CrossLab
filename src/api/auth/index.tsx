import { httpClient } from "@/api";
import { AUTH_ENDPOINTS } from "@/api/auth/index.enum";
import {
  MeResponse,
  RefreshPayload,
  SignInPayload,
  SignUpPayload,
} from "@/api/auth/index.types";

export const signIn = ({ payload }: SignInPayload) => {
  return httpClient
    .post(AUTH_ENDPOINTS.SIGN_IN, payload)
    .then((res) => res.data);
};

// export const signUp = ({ payload }: SignUpPayload) => {
//   return httpClient
//     .post(AUTH_ENDPOINTS.SIGN_UP, payload)
//     .then((res) => res.data);
// };

export const signUp = ({ payload }: SignUpPayload) => {
  return httpClient
    .post(AUTH_ENDPOINTS.SIGN_UP, {
      username: payload.username,
      password: payload.password,
      first_name: payload.first_name || "", // Optional
      last_name: payload.last_name || "", // Optional
      email: payload.email || "", // Optional
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Sign-up failed:", error);
      throw error;
    });
};
export const signOut = () => {
  return httpClient.post(AUTH_ENDPOINTS.SIGN_OUT).then((res) => res.data);
};

export const refresh = ({ payload }: RefreshPayload) => {
  console.log("This is Payload: ", payload);

  return httpClient
    .post(AUTH_ENDPOINTS.REFRESH, payload)
    .then((res) => res.data);
};

export const me = () => {
  return httpClient.get<MeResponse>(AUTH_ENDPOINTS.ME).then((res) => res.data);
};
