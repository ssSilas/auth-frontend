import axios from "axios";

export const signIn = async (login, password) => {
  try {
    const url = "http://127.0.0.1:3050";
    const req = await axios({
      url: "/auth/login",
      method: "POST",
      baseURL: url,
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
      },
      data: {
        login,
        password,
      },
    }).then((token) => {
      return token;
    });
    return req.data;
  } catch (error) {
    console.log(error)
    throw { message: "Login e/ou senha inválidos" };
  }
};
