import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { LangProvider } from '@/i18n/LangContext';
import { HomePage } from '@/pages/HomePage.tsx';
import { MenuPage } from '@/pages/MenuPage.tsx';
import { CateringPage } from '@/pages/CateringPage.tsx';
import { DashboardPage } from '@/pages/DashboardPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="catering" element={<CateringPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  </StrictMode>,
);
