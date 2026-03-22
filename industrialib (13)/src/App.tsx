/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Books } from './pages/Books';
import { BookDetail } from './pages/BookDetail';
import { Thinkers } from './pages/Thinkers';
import { ThinkerDetail } from './pages/ThinkerDetail';
import { Dictionary } from './pages/Dictionary';
import { History } from './pages/History';
import { Worldview } from './pages/Worldview';
import { CaseStudies } from './pages/CaseStudies';
import { Tools } from './pages/Tools';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="thinkers" element={<Thinkers />} />
          <Route path="thinkers/:id" element={<ThinkerDetail />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="history" element={<History />} />
          <Route path="worldview" element={<Worldview />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="tools" element={<Tools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
