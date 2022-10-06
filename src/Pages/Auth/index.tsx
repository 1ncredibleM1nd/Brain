import React, { useState } from "react";
import { Authorization } from "@/Pages/Auth/Authorization";
import { Registration } from "@/Pages/Auth/Registration";
import { PageHeader } from "@/styles/typography";
import { Wrapper, DataWrapper, ImgWrapper } from "./style";
import { Icon } from "@/ui/Icon";
import { Recovery } from "@/Pages/Auth/Recovery";

export type stageType = "auth" | "reg";

export const Auth = () => {
  const [stage, setStage] = useState<stageType>("reg"); //Todo Продумать логику
  return (
    <Wrapper>
      <DataWrapper>
        <Icon name="logo-mini" width={28} height={22} />
        <PageHeader stage={stage}>
          {stage === "auth" ? "Авторизация" : "Регистрация"}
        </PageHeader>
        {stage === "auth" ? <Authorization /> : <Recovery />}
      </DataWrapper>
      <ImgWrapper />
    </Wrapper>
  );
};
