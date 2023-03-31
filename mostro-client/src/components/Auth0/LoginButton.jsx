import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from './LoginButton.module.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className={styled.button}>Inicia sesion</button>;
};

export default LoginButton;