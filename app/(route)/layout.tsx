import "../globals.css";
interface LayoutProps {
    children: React.ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
    <main className="flex min-h-screen flex-col items-center justify-center px-16 pt-12">{children}</main>
);
};

export default Layout;