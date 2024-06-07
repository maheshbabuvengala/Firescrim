import React from "react";

const Login = () => {
  return (
    <div>
      <form action="">
        <div className="con">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="con">
          <label htmlFor="email">Email</label>
          <input type="text" name="email " id="email" />
        </div>
        <div className="con">
          <label htmlFor="ffId">Free Fire Id</label>
          <input type="text" name="ffId" id="ffId" />
        </div>
        <div className="con">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
