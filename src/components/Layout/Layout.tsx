import styled from 'styled-components';

import Header from '../Header/Header';

const MainLayout = styled.main`
  margin-top: 60px;
`;

/* Base layout component that wraps our entire app */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout>
      <Header />
      {children}
    </MainLayout>
  );
};
export default Layout;
