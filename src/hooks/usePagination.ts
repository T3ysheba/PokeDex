"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";

interface UsePaginationOptions {
  isSearchParams?: boolean;
  last_page: number;
}

const usePagination = ({
  isSearchParams = false,
  last_page,
}: UsePaginationOptions) => {
  const [currentPageState, setCurrentPage] = useState<number>(1);
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = useMemo(() => {
    const pageFromParams = Number(searchParams.get("page"));
    return isSearchParams
      ? isNaN(pageFromParams) || !pageFromParams
        ? 1
        : pageFromParams
      : currentPageState;
  }, [isSearchParams, searchParams, currentPageState]);

  const hasNextPage = currentPage < last_page;

  console.log(currentPage, last_page);

  const updatePage = (page: number) => {
    if (isSearchParams) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));
      router.push(`?${params.toString()}`);
    } else {
      setCurrentPage(page);
    }
  };

  const onNextClick = () => {
    if (currentPage < last_page) {
      updatePage(currentPage + 1);
    }
  };

  const onPreviousClick = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const onPageSelect = (page: number | string) => {
    if (page !== currentPage) {
      updatePage(Number(page));
    }
  };

  return {
    currentPage,
    onNextClick,
    onPreviousClick,
    onPageSelect,
    setCurrentPage,
    hasNextPage,
  };
};

export default usePagination;
