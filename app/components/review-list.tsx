import { StarIcon, TicketIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { fetchReviewsByImdbId } from "../lib/data";
import { Review } from "../lib/definitions";

export default async function ReviewList(
    { imdbId, isMovie } : { imdbId : string, isMovie : boolean}
) {
    const reviewList: Review[] = await fetchReviewsByImdbId(imdbId);
    const type = isMovie ? 'Película' : 'Serie';
    const stars = Array(5).fill(0);

    if (reviewList.length === 0)
        return (
            <div className='h-full flex justify-center items-center p-2 lg:p-5 mt-2'>
                <div className='text-center md:w-1/3'>
                    <TicketIcon className="fill-white m-auto size-14 md:size-16 rotate-12 transition hover:fill-teal-200 hover:scale-110"/>
                    <h2 className='text-xl md:text-2xl font-bold tracking-tight mt-2 mb-4'>No hay reviews de esta {type}.</h2>
                </div>
            </div>
        );

    return (
        <div className="m-9">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-3">Reviews de la {type}:</h1>
            <div className="block lg:grid gap-2 lg:grid-cols-3">
                {reviewList.map((review: Review) => {
                    if(reviewList.indexOf(review) % 2 == 0)
                        return <div key={review.id} className="flex flex-col mb-5 bg-slate-700/70 shadow-sm rounded-xl max-w-md p-3">
                                    <UserCircleIcon className="fill-slate-300 size-10"/>
                                    <span className="ms-1">
                                        <h4 className="text-xl text-teal-100 font-bold tracking-tight">{review.title}</h4>
                                        <div className="flex mt-1 mb-2">
                                            {stars.map((_: any, i: number) => (
                                                <StarIcon key={i} className={`size-5 ${review.rating > i ? "fill-teal-300" : "fill-slate-400/70"}`}/>
                                            ))}
                                        </div>
                                        <p className="text-base opacity-90 text-pretty">{review.body}</p>
                                        <p className="mt-2 font-light text-sm text-pretty text-gray-200 opacity-85">{`Creada el ${new Date(review.createdAt).toLocaleDateString('es-ES', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"})} 
                                        · Actualizada el ${new Date(review.updatedAt).toLocaleDateString('es-ES', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"})}`}</p>
                                    </span>
                                </div>
                        return <div key={review.id} className="flex flex-col mb-5 bg-teal-900/70 shadow-sm rounded-xl max-w-md p-3">
                                <UserCircleIcon className="fill-slate-300 size-10"/>
                                <span className="ms-1">
                                    <h4 className="text-xl text-white font-bold tracking-tight">{review.title}</h4>
                                    <div className="flex mt-1 mb-2">
                                        {stars.map((_: any, i: number) => (
                                            <StarIcon key={i} className={`size-5 ${review.rating > i ? "fill-teal-300" : "fill-slate-400/70"}`}/>
                                        ))}
                                    </div>
                                    <p className="text-teal-100 text-base opacity-90 text-pretty">{review.body}</p>
                                    <p className="mt-2 font-light text-sm text-pretty text-gray-200 opacity-85">{`Creada el ${new Date(review.createdAt).toLocaleDateString('es-ES', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"})} 
                                        · Actualizada el ${new Date(review.updatedAt).toLocaleDateString('es-ES', { year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"})}`}</p>
                                </span>
                               </div>
                })}
            </div>
        </div>
    )
}