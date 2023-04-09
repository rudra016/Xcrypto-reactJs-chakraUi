import {ChakraProvider,theme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    
   <ChakraProvider theme={theme}>
   <App /> 
   </ChakraProvider> 
  </StrictMode>
);

export const server=`https://api.coingecko.com/api/v3`

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

