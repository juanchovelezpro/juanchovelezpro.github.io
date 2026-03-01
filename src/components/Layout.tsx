import { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return <div className="app-shell">{children}</div>;
}
