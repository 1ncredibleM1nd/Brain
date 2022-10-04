import {
  Wrapper,
  AvatarWrapper,
  Params,
  ParamWrapper,
  Info,
  Name,
  HardSkills,
  Actions,
} from "./style";
import { Icon } from "@/ui/Icon";
import Avatar from "@/components/general/Avatar";
import { Button } from "@/ui/Button";
import { Palette } from "@/styles/constants";

type TProps = {
  avatar: string;
  rating: number;
  price: number;
  userName: string;
  profession: string;
};

export const Card = ({ ...props }: TProps) => {
  const { avatar, rating, price, userName, profession } = props;
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar name="Сергей Иванов" size={96} round img={avatar}></Avatar>
      </AvatarWrapper>
      <Params>
        <ParamWrapper>
          <Icon name="likes-icon" width={20} height={20} fill={Palette.green} />
          <Info color={Palette.green}>{rating}</Info>
        </ParamWrapper>
        <ParamWrapper>
          <Icon name="ruble-icon" width={20} height={20} />
          <Info color={Palette.violet}>от {price}</Info>
        </ParamWrapper>
      </Params>
      <Name>{userName}</Name>
      <HardSkills>{profession}</HardSkills>
      <Actions>
        <Button type="primary">Выбрать</Button>
        <Button type="secondary">В профиль</Button>
      </Actions>
    </Wrapper>
  );
};
