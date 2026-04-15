import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
