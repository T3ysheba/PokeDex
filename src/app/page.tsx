"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { getPokemonId } from "@/utils";
import { Pagination, PokeCard, Skeleton } from "@/components";
import { getPokemonList } from "@/store/global/actions";
import { GlobalSelectors } from "@/store/global/selectors";
import { useAppDispatch, useAppSelector, usePagination } from "@/hooks";

function Home() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(GlobalSelectors.pokemonListState);

  const last_page = Math.floor(Number(data?.count) / 24);

  const { currentPage, setCurrentPage, onPageSelect } = usePagination({
    isSearchParams: true,
    last_page,
  });

  useEffect(() => {
    dispatch(getPokemonList({ page: currentPage, per_page: 24 }));
  }, [currentPage, dispatch]);

  const renderCards = data?.results?.map((element, index) => (
    <PokeCard
      key={index}
      name={element.name}
      id={getPokemonId(element.url) as string}
    />
  ));

  return (
    <main className="flex flex-col gap-12 items-center justify-between p-24">
      <h1 className="text-4xl font-bold">PokéDex</h1>

      <div className="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(124px,1fr))]">
        {isLoading ? (
          <Skeleton skeletonCount={28} className="w-35 h-42" />
        ) : (
          renderCards
        )}
      </div>

      <div className="flex items-center">
        <Pagination
          totalPages={last_page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onChange={(page) => onPageSelect(page)}
        />
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading PokéDex...</div>}>
      <Home />
    </Suspense>
  );
}
