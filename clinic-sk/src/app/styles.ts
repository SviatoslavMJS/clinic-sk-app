import { styled } from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const ImageBackdrop = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
