import { TProps } from "@/Pages/Tasks/Stages/types";
import { Card } from "@/Pages/Tasks/Stages/stage4/Card";
import { BlockHeader } from "@/styles/typography";
import { Wrapper } from "./style";
import { Button } from "@/ui/Button";
import { ButtonWrapper } from "@/Pages/Tasks/style";
import React from "react";

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
      <BlockHeader>Выберите исполнителя </BlockHeader>
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
