import React from "react";
import { Input } from "@/ui/Input";
import { Buttons } from "@/Pages/Auth/Authorization/style";
import { Checkbox } from "@/ui/CheckBox";
import { CheckboxWrapper, AgreementSpan } from "./style";
import { Button } from "@/ui/Button";

export const Registration = () => {
  return (
    <>
      <Input name="email" label="Email" />

      <Input
        name="password"
        type="password"
        label="Пароль"
        description={"Не менее 6 символов"}
      />

      <CheckboxWrapper>
        <Checkbox radio label="Исполнитель" />
        <Checkbox radio label="Заказчик" />
      </CheckboxWrapper>

      <Buttons>
        <Button type={"primary"} fit="cover">
          Зарегистрироваться
        </Button>
        <Button type={"secondary"} fit="cover">
          Назад
        </Button>
      </Buttons>

      <AgreementSpan>
        Нажимая на кнопку «Войти в систему» вы соглашаетесь <br /> с{" "}
        <a href="#">Политикой конфидекциальности</a> и{" "}
        <a href="#">пользовательским соглашением</a>
      </AgreementSpan>
    </>
  );
};
