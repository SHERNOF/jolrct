import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: hsla(0, 0%, 0%, 0);
  display: inline-block;
  text-shadow: #bbb 0 0 1px, #fff 0 -1px 2px, #fff 0 -3px 2px,
    rgba(0, 0, 0, 0.8) 0 30px 25px;
  transition: margin-left 0.3s cubic-bezier(0, 1, 0, 1);
  font-size: 4rem;
`;

export const StyledH2 = styled(StyledH1)`
  font-size: 3rem;
`;
