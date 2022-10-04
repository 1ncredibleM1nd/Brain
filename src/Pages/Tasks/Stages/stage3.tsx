import { Input } from "@/ui/Input";
import React from "react";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import { Button } from "@/ui/Button";
import { TProps } from "@/Pages/Tasks/Stages/types";

export const Stage3 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <Input
        name="counts"
        label="Укажите необходимое количество концепций (вариантов дизайна) *"
      />
      <Input name="where" label="Где будет использоваться дизайн?" />
      <Input
        name="like"
        label="Какие образы, объекты, свойства или явления необходимо использовать в дизайне?"
      />
      <Input
        name="dontLike"
        label="Какие образы, объекты, свойства или явления НЕ СТОИТ использовать в дизайне?"
      />
      <Input
        name="refs"
        label="Пришлите ссылку на референсы или примеры дизайна, которые кажутся вам удачными"
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
