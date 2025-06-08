import React from "react";
import clsx from "clsx";

import type { TSkeletonProps } from "./types";

const Skeleton = ({ className, skeletonCount = 1 }: TSkeletonProps) => {
  return (
    <>
      {new Array(skeletonCount).fill(0).map((_, index) => (
        <div
          key={index}
          className={clsx(
            "animate-pulse bg-gray-300 dark:bg-gray-400 rounded",
            className
          )}
        />
      ))}
    </>
  );
};

export default Skeleton;
