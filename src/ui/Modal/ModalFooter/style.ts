import { styled } from "goober";

export const ModalFooterWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;

  & > button {
    &:not(:last-of-type) {
      margin-right: 16px;
    }
  }

  @media (max-width: 320px) {
    flex-direction: column-reverse;
    justify-content: center;

    & > button {
      width: 100%;
      min-width: 100%;
      margin-right: 0 !important;

      &:last-of-type {
        margin-bottom: 16px;
      }
    }
  }
`;
