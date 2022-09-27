import { Wrapper, Item } from "@/ui/ButtonGroup/style";

type TProps = {
  value?: string | null;
  source: { [key: string]: string };
  onClick: (key: string) => void;
};

export const ButtonGroup = ({ source, value = null, onClick }: TProps) => {
  return (
    <Wrapper>
      {Object.keys(source).map((key: string, i) => (
        <Item
          key={key}
          active={(!value && i === 0) || value === key}
          onClick={() => onClick(key)}
        >
          {source[key]}
        </Item>
      ))}
    </Wrapper>
  );
};
