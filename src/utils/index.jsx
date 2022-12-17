export const getAccessToken = () => localStorage.getItem("token");
export const setAccessToken = (token) => localStorage.setItem("token", token);
export const deleteAccessToken = () => localStorage.clear();
export const getNewAccessToken = () => {
  fetch("http://localhost:4000/api/auth/refreshtoken", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      setAccessToken(data.accessToken);
      return data.accessToken;
    })
    .catch((err) => {
      console.error(err.message);
    });
};

export const handleLogOut = () => {
  fetch("http://localhost:4000/api/auth/logout", {
    credentials: "include",
  })
    .then(() => {
      deleteAccessToken();
      window.location = "/login";
    })
    .catch((err) => {
      console.error(err.message);
    });
};
