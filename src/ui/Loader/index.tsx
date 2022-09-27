import { observer } from "mobx-react-lite";
import { Wrapper } from "./style";

type TProps = {
  className?: string;
};

export const Loader = observer(({ className }: TProps) => {
  return (
    <Wrapper>
      <span />
      <span />
      <span />
    </Wrapper>
  );
});
