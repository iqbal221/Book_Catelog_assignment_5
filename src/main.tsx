import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes.tsx';
import { Provider } from 'react-redux';
import store from './redux/features/store.ts';
import AuthProvider from './context/AuthProvider.tsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
);
