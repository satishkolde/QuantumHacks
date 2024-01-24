// components/Navbar.js
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #282c36;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 10%;
  padding: 2px;
  cursor: pointer;
  margin-right: 10px;
`;

const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Navbar = () => (
  <NavbarContainer>
    <h1>Smart Washing Machine</h1>
    <LoginContainer>
      <LoginButton>Login</LoginButton>
      <ProfileImage src="path/to/profile-image.jpg" alt="Profile" />
    </LoginContainer>
  </NavbarContainer>
);

export default Navbar;
