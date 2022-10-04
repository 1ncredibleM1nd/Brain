import { styled } from "goober";

export const Wrapper = styled("div")<{ round?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0);

  & > div {
    font-family: Inter, sans-serif !important;
  }

  ${({ round }) =>
    round &&
    `
    border-radius: 50%;
    padding: 2px;

    img {
      object-fit: cover;
      border-radius: 50%;
    }`}
`;
