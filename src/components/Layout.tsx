import { ReactNode } from 'react';
import styled from 'styled-components';


const LayoutWrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
