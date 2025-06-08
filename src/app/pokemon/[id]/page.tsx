import { notFound } from "next/navigation";
import Image from "next/image";

import type { IPokemon } from "@/types";

type Params = Promise<{ id: string }>;

export default async function PokemonPage(props: { params: Params }) {
  const params = await props.params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

  if (!res.ok) return notFound();

  const pokemon: IPokemon = await res.json();

  const artwork =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default ??
    pokemon?.sprites?.front_default;

  return (
    <main className="min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold capitalize mb-6 text-center">
        {pokemon.name}
      </h1>

      {artwork && (
        <Image
          src={artwork}
          alt={pokemon.name}
          width={300}
          height={300}
          priority
          className="rounded-2xl shadow-xl"
        />
      )}

      <section className="mt-8 grid gap-4 w-full max-w-2xl sm:grid-cols-2">
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">Basic Info</h2>
          <ul className="space-y-1 text-gray-700">
            <li>ID: {pokemon.id}</li>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Base Experience: {pokemon.base_experience}</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">Types</h2>
          <ul className="list-disc list-inside space-y-1">
            {pokemon.types.map((t) => (
              <li key={t.slot} className="capitalize">
                {t.type.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-4 sm:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Abilities</h2>
          <ul className="list-disc list-inside space-y-1">
            {pokemon.abilities.map((a) => (
              <li key={a.slot} className="capitalize">
                {a.ability.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-4 sm:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Stats</h2>
          <ul className="space-y-1">
            {pokemon.stats.map((s) => (
              <li key={s.stat.name} className="capitalize flex justify-between">
                <span>{s.stat.name}:</span>
                <span>{s.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
