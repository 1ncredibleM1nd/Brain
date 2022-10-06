import { styled } from "goober";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardWrapper = styled("div")`
  display: flex;
  width: 293px;
  margin-top: 28px;
  height: 299px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 16px 24px;
  box-shadow: 0 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 24px;
`;

export const CardImage = styled("div")`
  width: 261px;
  height: 157px;
  margin-bottom: 20px;
  border-radius: 16px;
  background-color: aliceblue;
`;
