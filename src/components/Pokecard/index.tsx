import { type FC } from "react";
import Image from "next/image";
import { capitalize } from "lodash";

import type { TPokeCardProps } from "./types";
import Link from "next/link";

const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const PokeCard: FC<TPokeCardProps> = ({ name, id }) => (
  <Link href={`/pokemon/${id}`}>
    <div className="flex p-4 flex-col items-center gap-4 rounded-md justify-center shadow-md hover:scale-105 cursor-pointer hover:shadow-lg  duration-300 ">
      <Image src={`${imgUrl}${id}.png`} alt={name} width={100} height={100} />

      <p className="text-sm text-gray-500">{capitalize(name)}</p>
    </div>
  </Link>
);

export default PokeCard;
