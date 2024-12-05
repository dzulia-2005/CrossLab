// export type SignInPayload = {
//   payload: { email: string; password: string };
// };

export type SignInPayload = {
  payload: {
    username: string; // If you're using username for login
    password: string;
  };
};

export type SignUpPayload = {
  payload: {
    username: string;
    password: string;
    confirmPassword: string;
    // first_name?: string;
    // last_name?: string;
    // email?: string;
  };
};

export type RefreshPayload = {
  payload: {
    refreshToken: string;
  };
};

export type MeResponse = {
  email: string;
  fullName: string;
};
