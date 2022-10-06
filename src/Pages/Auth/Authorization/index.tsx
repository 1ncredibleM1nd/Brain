import React from "react";
import { useForm } from "react-hook-form";
import { Buttons, PasswordLink } from "./style";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

type FormData = {
  email: string;
  password: string;
};

export const Authorization = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <>
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
    </>
  );
};
