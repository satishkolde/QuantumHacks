// components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c36;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2023 Smart Washing Machine. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
