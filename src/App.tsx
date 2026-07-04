import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import PageShell from '@/components/PageShell';
import ScrollManager from '@/components/ScrollManager';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

function ProjectDetailRoute() {
  const { id } = useParams<{ id: string }>();
  return <ProjectDetail projectId={id ?? ''} />;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageShell>
              <Home />
            </PageShell>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PageShell>
              <ProjectDetailRoute />
            </PageShell>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </LanguageProvider>
  );
}
