import { UserCircleIcon } from "@heroicons/react/24/solid";
import { fetchReviewsByImdbId } from "../lib/data";
import { Review } from "../lib/definitions";

export default async function ReviewList(
    { imdbId, isMovie } : { imdbId : string, isMovie : boolean}
) {
    const reviewList = await fetchReviewsByImdbId(imdbId);
    const type = isMovie ? 'Película' : 'Serie';

    if (reviewList.length === 0) {
        return (
            <div className='h-full flex justify-center items-center p-2 lg:p-5'>
                <div className='text-center md:w-1/3'>
                    <h2 className='text-xl md:text-2xl font-bold tracking-tight mt-4 mb-4'>No hay reviews de esta {type}.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="m-9">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Reviews de la {type}:</h1>
            {reviewList.map((review: Review) => (
                <div key={review.id} className="flex bg-slate-700/70 shadow-sm rounded-xl max-w-md p-3">
                    <UserCircleIcon className="fill-slate-300 size-10"/>
                    <span className="ms-2">
                        <h4 className="text-xl text-teal-300 font-bold tracking-tight">{review.title}</h4>
                        <p className="text-base opacity-90 text-pretty">{review.body}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}