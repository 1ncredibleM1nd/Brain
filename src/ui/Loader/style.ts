import { keyframes, styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.heightCompensation {
    height: calc(100% - 40px);
  }

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${Palette.green1};
    color: ${Palette.green1};

    &:nth-child(1) {
      animation: ${keyframes`
        0% {
        transform: scale(1.4) ;
        }
        33% {
        transform: scale(1) ;
        }
        66% {
        transform: scale(1) ;
        }
        100% {
        transform: scale(1.4) ;
        }
        `} 1.5s infinite linear;
    }

    &:nth-child(2) {
      margin-left: 10px;
      animation: ${keyframes`
        0% {
        transform: scale(1) ;
        }
        33% {
        transform: scale(1.4) ;
        }
        66% {
        transform: scale(1) ;
        }
        100% {
        transform: scale(1) ;
        }
        `} 1.5s infinite linear;
    }

    &:nth-child(3) {
      margin-left: 10px;
      animation: ${keyframes`
        0% {
        transform: scale(1) ;
        }
        33% {
        transform: scale(1) ;
        }
        66% {
        transform: scale(1.4) ;
        }
        100% {
        transform: scale(1) ;
        }
        `} 1.5s infinite linear;
    }
  }
`;
