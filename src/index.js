import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './styles.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#fbfff6',
        color: '#123522',
      },
    },
  },
  fonts: {
    heading: "'Inter', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '999px',
        fontWeight: '800',
      },
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);


