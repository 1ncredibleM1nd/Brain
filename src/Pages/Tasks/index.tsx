import React, { useState } from "react";
import { PageHeader } from "@/styles/typography";
import { StyledLabel } from "@/ui/Input/style";
import { Stage1 } from "@/Pages/Tasks/Stages/stage1";
import { Stage2 } from "@/Pages/Tasks/Stages/stage2";
import { Stage3 } from "@/Pages/Tasks/Stages/stage3";
import { Stage4 } from "@/Pages/Tasks/Stages/stage4";
import { ProgressBar } from "@/ui/ProgressBar";

export const Tasks = () => {
  const [stage, setStage] = useState(4);

  const incrementStage = () => {
    setStage(stage + 1);
  };

  const decrementStage = () => {
    setStage(stage - 1);
  };

  return (
    <div>
      <PageHeader>Создать проект</PageHeader>
      <StyledLabel>Бриф</StyledLabel>
      <ProgressBar id="progress" value="50" />
      {stage === 1 && (
        <Stage1
          incrementStage={incrementStage}
          decrementStage={decrementStage}
        />
      )}
      {stage === 2 && (
        <Stage2
          incrementStage={incrementStage}
          decrementStage={decrementStage}
        />
      )}
      {stage === 3 && (
        <Stage3
          incrementStage={incrementStage}
          decrementStage={decrementStage}
        />
      )}

      {stage === 4 && (
        <Stage4
          incrementStage={incrementStage}
          decrementStage={decrementStage}
        />
      )}
    </div>
  );
};
