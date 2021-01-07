import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 40px;

  img {
    min-width: 24px;
    min-height: 24px;
  }

  hr {
    height: 15rem;
    width: 0.1rem;
    color: #f1f1f1;
  }

  ul {
    list-style: none;

    li {
      color: #f1f1f1;
      padding: 1rem 0.5rem;
    }
  }
`;

export const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const LinkDownload = styled.a`
  writing-mode: vertical-rl;
  text-orientation: inherit;
  transform: rotate(-180deg);
  text-decoration: none;
  color: #f1f1f1;
  font-weight: 300;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const HighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding-left: 60px;

  img {
    width: 1;
  }

  h1 {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 0.4rem;
    padding-bottom: 1rem;
    width: 200%;
    z-index: 1;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 200;
    width: 200%;
    margin-top: 2rem;
    border-left: 0.1rem solid #f1f1f1;
    padding-left: 1rem;
    letter-spacing: 0.2rem;
    z-index: 1;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
`;
