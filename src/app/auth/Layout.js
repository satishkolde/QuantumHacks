// components/Layout.js
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const PageContainer = styled.div`
  background: linear-gradient(to bottom right, #87CEEB, #FF69B4); /* Updated background gradient */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout = ({ children }) => (
  <PageContainer>
    <Navbar />
    <ContentContainer>{children}</ContentContainer>
    <Footer />
  </PageContainer>
);

export default Layout;
