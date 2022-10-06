import { Input } from "@/ui/Input";
import React from "react";
import { Buttons } from "@/Pages/Auth/Authorization/style";
import { Button } from "@/ui/Button";

export const Recovery = () => {
  return (
    <>
      <Input
        name="password"
        type="password"
        label="Пароль"
        description={"Не менее 6 символов"}
      />

      <Input name="password-again" label="Повторите пароль" type="password" />

      <Buttons>
        <Button type={"primary"} fit="cover">
          Войти в систему
        </Button>
        <Button type={"secondary"} fit="cover">
          Назад
        </Button>
      </Buttons>
    </>
  );
};
