import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//route lazy loading
const CountryList = React.lazy(() => import('@/containers/CountryList/CountryList'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<CountryList apiSuffix="all?fields=name" title="List of all countries" />} />
            <Route path="/allEU" element={<CountryList apiSuffix="regionalbloc/eu" title="List of EU countries" />} />
          </Routes>
        </Suspense>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
