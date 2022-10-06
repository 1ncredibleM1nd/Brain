import { Input } from "@/ui/Input";
import React from "react";
import { Button } from "@/ui/Button";
import { Buttons } from "@/Pages/Auth/Authorization/style";

export const RequestPassword = () => {
  return (
    <>
      <Input
        name="email"
        label="Введите E-mail, указанный при регистрации"
        description="На данный адрес мы вышлем ссылку для сброса пароля. Вы сможете установить новый пароль и зайти в систему."
      />
      <Buttons>
        <Button type={"primary"} fit="cover">
          Получить ссылку
        </Button>
        <Button type={"secondary"} fit="cover">
          Назад
        </Button>
      </Buttons>
    </>
  );
};
