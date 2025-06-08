import type { useStateType } from "@/types";

export type TBasicPaginationProps = {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
  setCurrentPage: useStateType<number>;
};
