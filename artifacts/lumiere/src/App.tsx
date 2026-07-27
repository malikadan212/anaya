import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/layout/PageTransition';
import { Preloader } from '@/components/layout/Preloader';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/">
            <PageTransition>
              <HomePage />
            </PageTransition>
          </Route>
          <Route path="/shop">
            <PageTransition>
              <ShopPage />
            </PageTransition>
          </Route>
          <Route path="/product/:id">
            <PageTransition>
              <ProductPage />
            </PageTransition>
          </Route>
          <Route>
            <PageTransition>
              <NotFound />
            </PageTransition>
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showPreloader && <Preloader />}
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
