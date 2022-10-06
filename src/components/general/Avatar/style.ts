import { styled } from "goober";

type TProps = {
  round?: boolean;
  borderColor?: string;
};

export const Wrapper = styled("div")<TProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid rgba(0, 0, 0, 0);

  & > div {
    font-family: Inter, sans-serif !important;
  }

  ${({ borderColor }) =>
    borderColor &&
    `
    border-color: ${borderColor};
    `}

  ${({ round }) =>
    round &&
    `
    border-radius: 50%;
    img {
      object-fit: cover;
      border-radius: 50%;
    }`}
`;
