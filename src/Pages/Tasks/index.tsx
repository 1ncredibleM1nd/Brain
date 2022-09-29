import React from "react";
import { PageHeader, BlockHeader } from "@/styles/typography";
import { ButtonWrapper } from "./style";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

export const Tasks = () => {
  return (
    <div>
      <PageHeader>Создать задачу</PageHeader>
      <BlockHeader>Информация о проекте</BlockHeader>
      <Input name="project-name" label="Название проекта" />
      <Input name="budget" label="Бюджет проекта" />
      <ButtonWrapper>
        <Button type="primary" size="md">
          Продолжить
        </Button>
        <Button type="secondary" size="md">
          Отменить
        </Button>
      </ButtonWrapper>
    </div>
  );
};
