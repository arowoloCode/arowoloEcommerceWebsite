import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import UserContent from "./components/UserContent";
import instance from "./utils/axios";

function User() {
  const [apiRes, setApiRes] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    instance
      .get("test/user")
      .then((data) => {
        setApiRes(true);
        setUser(data.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className='h-screen'>
      {!apiRes ? <Spinner /> : <UserContent user={user} />}
    </div>
  );
}

export default User;
