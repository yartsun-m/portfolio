import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none motion-reduce:slide-in-from-bottom-0">
      {children}
    </div>
  );
}
