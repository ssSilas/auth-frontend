import axios from "axios";

const url = "http://127.0.0.1:3050";

export const signIn = async (login, password) => {
  try {
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

export const createUser = async (name, email, login, password, roles) => {
  try {
    const req = await axios({
      url: "/auth/add-user",
      method: "POST",
      baseURL: url,
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
      },
      data: {
        name,
        email,
        login,
        password,
        roles
      },
    }).then((data) => {
      return data;
    });
    return req.data;
  } catch (error) {
    console.log(error)
    throw { message: error.response.data.message };
  }
};
