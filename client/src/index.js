import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
