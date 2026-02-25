/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import EmiCalculatorPage from './pages/EmiCalculatorPage';
import GearPage from './pages/GearPage';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ComparePage from './pages/ComparePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/catalog" element={<Layout><CatalogPage /></Layout>} />
        <Route path="/emi-calculator" element={<Layout><EmiCalculatorPage /></Layout>} />
        <Route path="/gear" element={<Layout><GearPage /></Layout>} />
        <Route path="/compare" element={<Layout><ComparePage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
