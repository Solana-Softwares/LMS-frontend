import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// All the svg files
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/starred.svg";
import Documents from "../assets/draft.svg";
import { FaBook, FaSignOutAlt } from "react-icons/fa";

const Container = styled.div`
  position: fixed;
  z-index: 2;
`;

interface ButtonProps {
  clicked: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: var(--black);
  border: none;
  width: 3rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props: ButtonProps) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props: ButtonProps) =>
      props.clicked ? "rotate(135deg)" : "rotate(0)"};
  }

  &::after {
    top: ${(props: ButtonProps) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props: ButtonProps) =>
      props.clicked ? "rotate(-135deg)" : "rotate(0)"};
  }
`;

const SidebarContainer = styled.div`
  background-color: #2b2b2b;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

interface SlickBarProps {
  clicked: boolean;
}

const SlickBar = styled.ul<SlickBarProps>`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2b2b;

  padding: 2rem 0;

  position: absolute;
  top: 4rem;
  left: 0;

  width: ${(props: SlickBarProps) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

interface TextProps {
  clicked: boolean;
}

const Text = styled.span<TextProps>`
  width: ${(props: TextProps) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props: TextProps) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

interface ProfileProps {
  clicked: boolean;
}

const Profile = styled.div<ProfileProps>`
  width: ${(props: ProfileProps) => (props.clicked ? "14rem" : "4rem")};
  height: 3rem;

  padding: 0.5rem 1rem;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props: ProfileProps) => (props.clicked ? "8.5rem" : "0")};

  background-color: var(--black);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

interface DetailsProps {
  clicked: boolean;
}

const Details = styled.div<DetailsProps>`
  display: ${(props: DetailsProps) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  color: white;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <Container>
      <Button clicked={click} onClick={handleClick}>
        <FaBook />
      </Button>
      <SidebarContainer>
        <Logo>
          <img src="try.png" alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/team"
          >
            <img src={Team} alt="Team" />
            <Text clicked={click}>Team</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/calender"
          >
            <img src={Calender} alt="Calender" />
            <Text clicked={click}>Events</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/documents"
          >
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>About</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Testimonials</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={handleProfileClick}
            src="edit-marb.png"
            alt="Profile"
          />
          <div  className="flex items-center">
          <Details clicked={profileClick}>
            <Name>
              <a href="/#" className="text-md font-semibold ml-8 text-white mr-4">
                Sign Up
              </a>
            </Name>

            <Logout>
              <FaSignOutAlt />
            </Logout>
          </Details>
          </div>
        </Profile>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
