import { useState } from "react";
import { default as ReactAvatar } from "react-avatar";
import { colors } from "./colors";
import { getInitials } from "./helpers";
import { Wrapper } from "./style";

type TProps = {
  name?: string;
  blackLength?: number;
  img?: any;
  color?: string;
  size?: number;
  round?: boolean;
  statusColor?: string;
};

const Avatar = ({
  name,
  blackLength,
  img,
  color,
  size,
  round,
  statusColor,
}: TProps) => {
  const [fallback, setFallback] = useState(false);
  const initials = getInitials(name ?? "NaN");
  const avatarSize = size?.toString();
  // @ts-ignore
  const avatarColor = ReactAvatar.getRandomColor(initials, colors);

  if (img && !fallback) {
    return (
      <Wrapper
        round={round}
        style={{
          borderColor: statusColor || "rgba(0,0,0,0)",
        }}
      >
        <img
          src={img}
          height={size}
          width={size}
          alt=""
          onError={() => setFallback(true)}
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper
      round={round}
      style={{ borderColor: statusColor || "transparent" }}
    >
      <ReactAvatar
        size={avatarSize}
        name={initials}
        maxInitials={blackLength}
        round={round}
        color={color || avatarColor}
      />
    </Wrapper>
  );
};

export default Avatar;
