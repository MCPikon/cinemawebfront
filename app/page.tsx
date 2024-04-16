import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 md:p-12">
      <h1 className="text-5xl font-extrabold tracking-tight">Te damos la bienvenida.</h1>
      <h2 className="text-4xl mt-0.5 font-semibold text-teal-500 tracking-tight">Descubre las nuevas películas, series y sus reseñas</h2>
      <h3 className="text-xl font-light text-slate-300 mt-3">En esta web encontrarás todo tipo de películas, series y sus respectivas reseñas escritas por la gente.</h3>
      <div className="w-full mt-9 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/dune2.webp" alt="dune part 2" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/fallout.webp" alt="fallout" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/dune.webp" alt="dune" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/godzilla-vs-kong-new-empire.webp" alt="godzilla vs kong: new empire" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/civil-war.webp" alt="civil war" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/monkey-man.webp" alt="monkey man" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/top-gun-maverick.webp" alt="top gun maverick" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/the-bear.webp" alt="the bear" width={1150} height={1725}/>
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/dune2.webp" alt="dune part 2" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/fallout.webp" alt="fallout" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/dune.webp" alt="dune" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/godzilla-vs-kong-new-empire.webp" alt="godzilla vs kong: new empire" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/civil-war.webp" alt="civil war" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/monkey-man.webp" alt="monkey man" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/top-gun-maverick.webp" alt="top gun maverick" width={1150} height={1725}/>
            </li>
            <li>
              <Image className="rounded-lg h-auto w-64" src="/carrusel/the-bear.webp" alt="the bear" width={1150} height={1725}/>
            </li>
          </ul>
      </div>
      <h3 className="text-base font-light text-gray-400 mt-3 opacity-90">Puedes seleccionar la categoría que prefieras <strong>(Películas o Series)</strong> en el menú de la parte izquierda.</h3>
    </main>
  );
}
