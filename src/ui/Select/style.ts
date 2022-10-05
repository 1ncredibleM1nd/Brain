import { styled } from "goober";
import { forwardRef } from "react";
import { default as ReactSelect } from "react-select";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")<{ isDropdown: boolean; shadow: boolean }>`
${({ shadow }) =>
    shadow &&
    `
  & .Select__menu {
      border: none !important;
      outline: none;
      box-shadow: var(--select-shadow);
    }

    & .Select__control {
      border: none;
      box-shadow: none;
    }
`}

${({ isDropdown }) =>
    isDropdown &&
    `  & .Select__menu {
        border: none !important;
        background: none;
        outline: none;
        box-shadow: var(--select-shadow);
      }

      & .Select__control {
        background: none;
        border: none;
        box-shadow: none;
      }`}
`;

export const Label = styled("span")`
  display: block;
  max-width: 600px;
  font-weight: 500;
  margin-top: 26px;
  font-size: 14px;
  letter-spacing: 0.015em;
  margin-bottom: 8px;
  line-height: 20px;
  color: ${Palette.gray};
`;

export const StyledReactSelect = styled(ReactSelect)`
  .Select__control {
    width: 100%;
    max-width: 600px;
    border: 1px solid ${Palette.gray2};
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    font-size: 14px;
    height: 50px;
    min-height: 34px;

    &:hover {
      border-color: ${Palette.gray2};
    }

    .Select__placeholder {
      color: ${Palette.black3};
    }

    .Select__value-container {
      display: flex;
      padding: 0 0 0 16px;

      .Select__multi-value {
        display: flex;
        align-items: center;
        height: 29px;
        border-radius: 18px;
        margin-right: 6px;
        margin-bottom: 3px;
        padding: 6px 10px 6px 0;
        background-color: ${Palette.gray2};

        .Select__multi-value__remove {
          margin-left: 10px;
          color: ${Palette.gray2};

          &:hover {
            background-color: transparent;
            color: ${Palette.gray2};
          }
        }
      }
    }

    .Select__indicator-separator {
      display: none;
    }

    .Select__indicators {
      .Select__indicator {
        &.Select__clear-indicator {
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  &.error {
    border: 1px solid ${Palette.error};
    border-radius: 18px;
  }

  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
  }

  .Select__menu {
    border-radius: 8px;
    overflow: hidden;
  }

  .Select__option {
    background: transparent;
    color: black;

    &:focus {
      background-color: ${Palette.gray7};
    }

    &:hover {
      background-color: ${Palette.gray7};
    }
  }
`;

export const StyledOption = styled("div", forwardRef)`
  font-size: 14px;
  font-weight: 400;
  color: ${Palette.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 8px 8px 16px;
  cursor: pointer;

  &:hover {
    background: ${Palette.gray7};
  }
`;

export const StyledMultiValueLabel = styled("div", forwardRef)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledMultiValueRemove = styled("div", forwardRef)`
  display: block;
`;
