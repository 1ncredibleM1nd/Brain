import React from "react";
import { Input } from "@/ui/Input";
import { TextArea } from "@/ui/TextArea";
import { BlockHeader } from "@/styles/typography";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import { Button } from "@/ui/Button";
import { TProps } from "@/Pages/Tasks/Stages/types";
import { Select } from "@/ui/Select";

export const Stage3 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <BlockHeader>Информация о компании</BlockHeader>
      <TextArea
        rows={5}
        label="Название компании / продукта"
        descr="Напишите существующие название (если есть) компании или продукта для которого будет разрабатываться дизайн. Что оно означает?"
      />
      <TextArea
        rows={5}
        label="Описание и общие сведения"
        descr="Расскажите подробнее о компании (продукте): из какой сферы, чем занимается компания, какие особенности продукта? Где территориально представлена ваша компания? Как давно на рынке?"
      />

      <Select label="К какому ценовому сегменту относятся товары или услуги компании?" />
      <TextArea
        rows={5}
        label="Ценности"
        descr="Опишите ценности, которых придерживается ваша компания / продукт"
      />

      <TextArea
        rows={5}
        label="Конкуренты"
        descr="Кто ваши конкуренты (можете поделиться ссылками на их сайт)? Есть ли среди них тот, на которого вы хотите быть похожи? Может есть те, от которых нужно отстроиться?"
      />

      <TextArea
        rows={5}
        label="Как бы вы описали свою целевую аудиторию? "
        descr="Возраст, род или сфера деятельности, характер, привычки, географическая принадлежность"
      />

      <Input name="adv" label="В чем ваше главное преимущество?" />

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
