import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

function ProjectDetailRoute() {
  const { id } = useParams<{ id: string }>();
  return <ProjectDetail projectId={id ?? ''} />;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetailRoute />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </LanguageProvider>
  );
}
