import { BlockHeader } from "@/styles/typography";
import { Input } from "@/ui/Input";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import { Button } from "@/ui/Button";
import { TProps } from "@/Pages/Tasks/Stages/types";
import React from "react";

export const Stage2 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <BlockHeader>Информация о компании</BlockHeader>
      <Input
        name="company"
        label={
          <>
            <p>Название компании / продукта</p>
            <p>
              Напишите существующие название (если есть) компании или продукта
              для которого будет разрабатываться дизайн. Что оно означает?
            </p>
          </>
        }
      />
      <Input
        name="description"
        label={
          <>
            <p>Описание и общие сведения</p>
            <p>
              Расскажите подробнее о компании (продукте): из какой сферы, чем
              занимается компания, какие особенности продукта? Где
              территориально представлена ваша компания? Как давно на рынке?
            </p>
          </>
        }
      />
      <Input
        name="sold"
        label={
          <>
            <p>Ценности *</p>
            <p>
              Опишите ценности, которых придерживается ваша компания / продукт
            </p>
          </>
        }
      />
      <Input
        name="competitors"
        label={
          <>
            <p>Конкуренты</p>
            <p>
              Кто ваши конкуренты (можете поделиться ссылками на их сайт)? Есть
              ли среди них тот, на которого вы хотите быть похожи? Может есть
              те, от которых нужно отстроиться?
            </p>
          </>
        }
      />
      <Input
        name="adv"
        label={
          <>
            <p>В чем ваше главное преимущество?</p>
            <p>
              Кто ваши конкуренты (можете поделиться ссылками на их сайт)? Есть
              ли среди них тот, на которого вы хотите быть похожи? Может есть
              те, от которых нужно отстроиться?
            </p>
          </>
        }
      />
      <Input
        name="buyer"
        label={
          <>
            <p>Как бы вы описали свою целевую аудиторию? </p>
            <p>
              Возраст, род или сфера деятельности, характер, привычки,
              географическая принадлежность
            </p>
          </>
        }
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
