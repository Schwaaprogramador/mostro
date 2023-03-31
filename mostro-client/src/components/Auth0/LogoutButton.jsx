import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from './LogoutButton.module.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className={styled.button} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Cerrar sesion
    </button>
  );
};

export default LogoutButton;