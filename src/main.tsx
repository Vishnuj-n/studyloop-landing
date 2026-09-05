import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/react';
import { dark } from '@clerk/themes';
import App from './App';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './index.css';

const PUBLISHABLE_KEY = (import.meta as any).env?.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.warn("Missing VITE_CLERK_PUBLISHABLE_KEY in .env.local file");
}

const ClerkWithTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY || ''}
      appearance={(isDark ? dark : {}) as any}
    >
      {children}
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ClerkWithTheme>
          <App />
        </ClerkWithTheme>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);





