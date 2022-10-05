import { BlockHeader } from "@/styles/typography";
import { Input } from "@/ui/Input";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import { Button } from "@/ui/Button";
import { TProps } from "@/Pages/Tasks/Stages/types";
import React from "react";
import { Checkbox } from "@/ui/CheckBox";
import { TextArea } from "@/ui/TextArea";

export const Stage2 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <BlockHeader>Информация о задаче</BlockHeader>
      <Input name="budget" label="Бюджет в рублях" />
      <Checkbox label="Бюджет не определен" />
      <Input
        name="count"
        label="Укажите необходимое количество концепций (вариантов дизайна)"
      />
      <Input name="using" label="Где будет использоваться дизайн?" />
      <Input
        name="likes"
        label="Какие образы, объекты, свойства или явления необходимо использовать  в дизайне??"
      />
      <Input
        name="dislikes"
        label="Какие образы, объекты, свойства или явления НЕ СТОИТ использовать в дизайне?"
      />
      <TextArea
        rows={5}
        placeholder="Например на Behance, Dribble и др."
        label="Пришлите ссылку на референсы или приложите примеры дизайна, которые кажутся вам удачными"
      />
      <ButtonWrapper>
        <Button type="primary" size="md" onClick={() => incrementStage()}>
          Продолжить
        </Button>
        <Button type="secondary" size="md" onClick={() => decrementStage()}>
          Назад
        </Button>
      </ButtonWrapper>
    </>
  );
};
