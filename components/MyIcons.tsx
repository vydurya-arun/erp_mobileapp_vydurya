import React from "react";
import { SvgProps } from "react-native-svg";

type MyIconsProps = SvgProps & {
  size?: number;
  color?: string;
  icon: React.FC<SvgProps>;
};

const MyIcons = ({
  size = 24,
  color = "#323232",
  icon: Icon,
  ...props
}: MyIconsProps) => {
  return (
    <Icon
      width={size}
      height={size}
      color={color}
      {...props}
    />
  );
};

export default MyIcons;
