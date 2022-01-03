export interface payload {
  id: string;
  username: string;
  email: string;
}

export interface login {
  username: string;
  password: string;
}

export interface tokenResponse {
  token: string;
  type: string;
  exp: string;
}
