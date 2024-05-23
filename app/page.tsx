import Image from "next/image";
import { checkAPIHealth } from "./lib/data";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default async function Home() {
  const isUp = await checkAPIHealth();
  const carruselImgs = [
    {title: "Dune: Parte 2", source: "/carrusel/dune2.webp"},
    {title: "Fallout", source: "/carrusel/fallout.webp"},
    {title: "Dune", source: "/carrusel/dune.webp"},
    {title: "Godzilla vs Kong: El Nuevo Imperio", source: "/carrusel/godzilla-vs-kong-new-empire.webp"},
    {title: "Guerra Civil", source: "/carrusel/civil-war.webp"},
    {title: "Monkey Man", source: "/carrusel/monkey-man.webp"},
    {title: "Top Gun: Maverick", source: "/carrusel/top-gun-maverick.webp"},
    {title: "El Oso", source: "/carrusel/the-bear.webp"},
  ]
  return (
    <main className="p-6 md:p-12">
      <h1 className="text-5xl font-extrabold tracking-tight">Te damos la bienvenida.</h1>
      <h2 className="text-4xl mt-0.5 font-semibold text-teal-500 tracking-tight">Descubre las nuevas películas, series y sus reseñas</h2>
      <h3 className="text-xl font-light text-slate-300 mt-3">En esta web encontrarás todo tipo de películas, series y sus respectivas reseñas escritas por la gente.</h3>
      <div className="w-full mt-9 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {carruselImgs.map(item => (
              <li key={item.title}>
                <Image className="rounded-lg h-auto w-64" src={item.source} alt={item.title} width={1150} height={1725}/>
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {carruselImgs.map(item => (
              <li key={item.title}>
                <Image className="rounded-lg h-auto w-64" src={item.source} alt={item.title} width={1150} height={1725}/>
              </li>
            ))}
          </ul>
      </div>
      <h3 className="text-base font-light text-gray-400 mt-3 opacity-90">Puedes seleccionar la categoría que prefieras <strong>(Películas o Series)</strong> en el menú de la parte izquierda.</h3>
      {isUp ? <div className="opacity-75 mt-4 px-2 py-2 bg-slate-900 border-2 border-slate-700 inline-flex rounded-2xl items-center text-sm"><div className="bg-teal-300 size-3 me-2 rounded-full"/> Servidor funcionando correctamente.</div>
      : <div className="opacity-75 mt-4 px-2 py-2 bg-slate-900 border-2 border-slate-700 inline-flex rounded-2xl items-center text-sm"><ExclamationTriangleIcon className="fill-red-500 size-5 me-1.5"/> El servidor no funciona.</div>}
    </main>
  );
}
