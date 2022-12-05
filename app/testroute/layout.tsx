import { HTMLAttributes } from 'react';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
export default Layout;
