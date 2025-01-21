interface LogoProps {
  width: number;
  height: number;
}

import Image from "next/image";
import { FC } from "react";
import LogoImage from "../../../public/store.png";

export const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <div>
      <Image
        src={LogoImage}
        width={width}
        height={height}
        alt="store"
        className="object-contain"
      />
    </div>
  );
};
