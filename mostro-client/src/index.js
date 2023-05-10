import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
   <Provider store={store}>
        <Auth0Provider
          domain="dev-18zov1enqjrx8hn7.us.auth0.com"
          clientId="vhOGH5UxUBniAXtZnzs7xSvLq28rwj4T"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >

          <App />
          
          </Auth0Provider>
    </Provider>
  </BrowserRouter>
 
);


