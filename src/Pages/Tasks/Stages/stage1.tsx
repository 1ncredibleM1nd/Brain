import { BlockHeader } from "@/styles/typography";
import { Input } from "@/ui/Input";
import { StyledPicker } from "@/ui/DatePicker";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import { Button } from "@/ui/Button";
import { TProps } from "@/Pages/Tasks/Stages/types";
import React from "react";

export const Stage1 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <BlockHeader>Информация о проекте</BlockHeader>
      <Input name="project-name" label="Название проекта" />
      <Input name="budget" label="Бюджет проекта" />
      <ButtonWrapper>
        <Button type="primary" size="md" onClick={() => incrementStage()}>
          Продолжить
        </Button>
        <Button type="secondary" size="md" onClick={() => decrementStage()}>
          Отменить
        </Button>
      </ButtonWrapper>
    </>
  );
};
