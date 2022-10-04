import { TProps } from "@/Pages/Tasks/Stages/types";
import { Card } from "@/Pages/Tasks/Stages/stage4/Card";
import { BlockHeader } from "@/styles/typography";

export const Stage4 = ({ incrementStage, decrementStage }: TProps) => {
  return (
    <>
      <BlockHeader>Выберите исполнителя </BlockHeader>
      <Card
        avatar={"SI"}
        rating={4.9}
        price={3500}
        userName="Сергей Иванов"
        profession="UX/UI дизайнер"
      />
    </>
  );
};
