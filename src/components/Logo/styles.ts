import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface IShopCartProps {
  items?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  height: 60px;
  padding: 0 20px;

  @media (min-width: 768px) {
    height: 90px;
    padding: 0 60px;
  }
`;

export const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;

  transition: 0.2s filter ease-in;

  &:hover {
    filter: opacity(90%);
  }

  img {
    width: 75px;
    height: 41px;

    @media (min-width: 768px) {
      width: 150px;
      height: 67px;
    }
  }
`;

export const ShopCart = styled.div<IShopCartProps>`
  position: relative;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: #343a40;
    transition: 0.2s color ease-in;

    &:hover {
      color: ${lighten(0.2, `#343a40`)};
    }
  }

  span {
    position: absolute;
    text-align: center;
    background: #cc951f;
    color: #ffffff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    top: -13px;
    right: -10px;
    font-size: 14px;
    opacity: 0;

    ${(props) =>
      props.items > 0 &&
      css`
        opacity: 1;
      `};
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #343a40;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s border ease-in;

  &:hover {
    border-color: ${lighten(0.2, `#343a40`)};
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
