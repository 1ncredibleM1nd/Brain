import { Icon } from "@/ui/Icon";
import React from "react";
import { PageHeader } from "@/styles/typography";
import {
  Wrapper,
  DataWrapper,
  ImgWrapper,
  Buttons,
  AgreementSpan,
  PasswordLink,
} from "./style";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

export const Authorization = () => {
  return (
    <Wrapper>
      <DataWrapper>
        <Icon name="logo-mini" width={28} height={22} />
        <PageHeader>Авторизация</PageHeader>
        <Input name="email" label="Email" />
        <Input name="password" label="Пароль" />
        <PasswordLink href="#">Забыли пароль ? </PasswordLink>
        <Buttons>
          <Button type={"primary"} fit="cover">
            Войти в систему
          </Button>
          <Button type={"secondary"} fit="cover">
            Зарегистрироваться
          </Button>
        </Buttons>

        <AgreementSpan>
          Нажимая на кнопку «Войти в систему» вы соглашаетесь <br /> с{" "}
          <a href="#">Политикой конфидекциальности</a> и{" "}
          <a href="#">пользовательским соглашением</a>
        </AgreementSpan>
      </DataWrapper>
      <ImgWrapper />
    </Wrapper>
  );
};
