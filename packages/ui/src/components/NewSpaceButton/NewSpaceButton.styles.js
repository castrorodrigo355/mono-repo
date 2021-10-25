import styled from 'styled-components';

export const StyledButton = styled.button`
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  min-width: 200px;
  cursor: pointer;
  transition: 0.3s all ease-out;
  position: relative;
  background: transparent;
  color: #fff;
  border: none;
  display: block;
  z-index: 100;
  padding: 10px;

  ::before {
    content: '';
    width: 94%;
    height: 40px;
    border-radius: 25px;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #fff;
    background: ${({ theme }) => theme.sidebarListBackground};
    transition: 0.2s all ease-out;
    transform: scale(1);
    opacity: 1;
    z-index: -1;
    margin: 10px 5px;
    box-sizing: border-box;
  }
  ::after {
    content: '';
    width: 94%;
    height: 40px;
    border-radius: 25px;
    background: ${({ theme }) => theme.newSpaceButtonHover};
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0);
    opacity: 0;
    transition: 0.2s all ease-out;
    z-index: -1;
    margin: 10px 5px;
    box-sizing: border-box;
  }

  :hover {
    ::before {
      transform: scale(0);
      opacity: 0;
    }
    ::after {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
