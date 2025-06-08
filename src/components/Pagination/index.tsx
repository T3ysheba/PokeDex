import { type FC } from "react";
import classNames from "classnames";

import type { TBasicPaginationProps } from "./types";

const BasicPagination: FC<TBasicPaginationProps> = ({
  totalPages,
  onChange,
  currentPage,
  setCurrentPage,
}) => {
  const basicItemActiveStyles = " text-gray-800 border-gray-800";
  const basicItemDisabledStyles =
    "text-gray-100 hover:border-gray-300 border-gray-300";
  const basicItemStyles =
    "p-2 rounded-md border border-gray-300  cursor-pointer hover:border-gray-600  duration-300";

  const nextPageChangeHandler = () => {
    if (totalPages > currentPage) {
      setCurrentPage(currentPage + 1);
      onChange(currentPage + 1);
    }
  };

  const prevPageChangeHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChange(currentPage - 1);
    }
  };

  const pageChangeHandler = (id: number) => {
    setCurrentPage(id);
    onChange(id);
  };

  const generatePageNumbers = () => {
    const buttons = [];
    const maxVisibleButtons = 3;
    const start = Math.min(
      Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2)),
      Math.max(totalPages - maxVisibleButtons + 1, 1)
    );
    const end = Math.min(start + maxVisibleButtons, totalPages + 1);

    if (start > 1) {
      buttons.push(
        <li
          key={1}
          onClick={() => pageChangeHandler(1)}
          className={classNames(basicItemStyles, {
            [basicItemActiveStyles]: 1 === currentPage,
          })}
        >
          1
        </li>
      );
      if (start > 2) {
        buttons.push(
          <li key="start" className={basicItemStyles}>
            ...
          </li>
        );
      }
    }

    for (let i = start; i < end; i++) {
      buttons.push(
        <li
          key={i}
          onClick={() => pageChangeHandler(i)}
          className={classNames(basicItemStyles, {
            [basicItemActiveStyles]: i === currentPage,
          })}
        >
          {i}
        </li>
      );
    }

    if (end <= totalPages) {
      if (end < totalPages) {
        buttons.push(
          <li
            key="end"
            className={classNames(basicItemStyles, basicItemDisabledStyles)}
          >
            ...
          </li>
        );
      }
      buttons.push(
        <li
          key={totalPages}
          onClick={() => pageChangeHandler(totalPages)}
          className={classNames(basicItemStyles, {
            [basicItemActiveStyles]: totalPages === currentPage,
          })}
        >
          {totalPages}
        </li>
      );
    }

    return buttons;
  };

  return (
    <ul className="flex gap-2">
      <li
        role="button"
        onClick={prevPageChangeHandler}
        className={classNames(basicItemStyles, {
          [basicItemDisabledStyles]: currentPage === 1,
        })}
      >
        {"<"}
      </li>

      {generatePageNumbers()}

      <li
        role="button"
        onClick={nextPageChangeHandler}
        className={classNames(basicItemStyles, {
          [basicItemDisabledStyles]: currentPage === totalPages,
        })}
      >
        {">"}
      </li>
    </ul>
  );
};

export default BasicPagination;
