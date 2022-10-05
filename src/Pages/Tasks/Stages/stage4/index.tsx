import React from "react";
import { TProps } from "@/Pages/Tasks/Stages/types";
import { Card } from "@/Pages/Tasks/Stages/stage4/Card";
import { BlockHeader } from "@/styles/typography";
import { Wrapper } from "./style";
import { Button } from "@/ui/Button";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import { BlockDescription } from "@/styles/typography";
import { Checkbox } from "@/ui/CheckBox";

const data = [
  {
    avatar: "SI",
    rating: 4.9,
    price: 3500,
    userName: "Сергей Иванов",
    profession: "UX/UI дизайнер, Дизайнер интерфейсов",
  },
  {
    avatar: "SI",
    rating: 4.9,
    price: 4500,
    userName: "Павел Обносов",
    profession: "UX/UI дизайнер",
  },
  {
    avatar: "AVBH",
    rating: 5.0,
    price: 6000,
    userName: "Александр Розенбаум",
    profession: "UX/UI дизайнер, Дизайнер интерфейсов",
  },
  {
    avatar: "CE",
    rating: 4.9,
    price: 4500,
    userName: "Павел Обносов",
    profession: "UX/UI дизайнер",
  },
];

export const Stage4 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <BlockHeader>Выберите подходящий способ оплаты и исполнителя</BlockHeader>
      <Checkbox radio label={"Сделка без риска"} value={"Что-то там"} />
      <BlockDescription>
        Оплата банковской картой с гарантией возврата и компенсацией
        материального ущерба до 10 000 ₽. Комиссия 11% + 35 ₽. <br />
        <a href="#">Подробнее</a>
      </BlockDescription>
      <Checkbox
        radio
        label={"Оплата с закрывающими документами"}
        value={"Что-то там"}
      />
      <BlockDescription>
        Откликнутся только юридические лица, ИП или самозанятые. Вы платите с
        расчётного счета компании и получаете закрывающие документы от
        исполнителя.
      </BlockDescription>

      <Wrapper>
        {data.map(({ avatar, rating, price, userName, profession }) => {
          return (
            <Card
              avatar={avatar}
              rating={rating}
              price={price}
              userName={userName}
              profession={profession}
            />
          );
        })}
      </Wrapper>
      <ButtonWrapper>
        <Button type="secondary" size="md" onClick={() => incrementStage()}>
          Назад
        </Button>
        <Button type="secondary" size="md" onClick={() => decrementStage()}>
          Выбрать позже
        </Button>
      </ButtonWrapper>
    </>
  );
};
