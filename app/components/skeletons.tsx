// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden w-72 md:w-80 lg:w-72 xl:w-64 h-full rounded-xl bg-gray-700 shadow-sm`}
    >
      <div className="flex">
        <div className="h-96 w-72 md:w-80 lg:w-72 xl:w-64 rounded-md bg-gray-600" />
      </div>
      <div className="truncate px-4 py-4 mt-2">
        <div className="h-7 w-30 rounded-xl bg-gray-500" />
        <div className="mt-2 h-6 w-24 rounded-xl bg-gray-500" />
        <div className="mt-2 h-4 w-20 rounded-xl bg-gray-500" />
        <div className="mt-6 mb-2 h-8 w-24 rounded-lg bg-gray-500" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 lg:grid gap-6 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function VideoPlayerSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden h-[226px] w-[300px] md:h-[426px] md:w-[600px] rounded-xl bg-gray-700 shadow-sm`}
    />
  );
}

export function ReviewCardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden flex flex-col mb-5 bg-gray-700 shadow-sm rounded-xl max-w-md p-3`}>
      <div className="bg-slate-500 rounded-full size-9 my-2 mx-1"/>
      <div className="ms-1">
        <div className="bg-slate-500 w-60 h-6 rounded-xl"/>
        <div className="flex mt-2 mb-2 gap-1">
          <div className="bg-slate-500 size-5 rounded-full"/>
          <div className="bg-slate-500 size-5 rounded-full"/>
          <div className="bg-slate-500 size-5 rounded-full"/>
          <div className="bg-slate-500 size-5 rounded-full"/>
          <div className="bg-slate-500 size-5 rounded-full"/>
        </div>
        <div className="mt-3 bg-slate-500 w-72 md:w-96 lg:w-72 xl:w-80 2xl:w-96 h-4 rounded-xl"/>
        <div className="mt-1 bg-slate-500 w-60 md:w-72 lg:w-60 xl:w-72 h-4 rounded-xl"/>
        <div className="mt-4 flex flex-wrap">
          <div className=" bg-slate-500 w-24 h-3 rounded-xl me-2"/> 
          <div className="bg-slate-500 w-24 h-3 rounded-xl"/>
        </div>
      </div>
    </div>
  );
}

export function ReviewCardsSkeleton() {
  return (
    <div className="m-9">
      <div className={`${shimmer} relative overflow-hidden mb-3 h-8 w-48 bg-slate-700 rounded-xl`}/>
      <div className="block lg:grid gap-2 lg:grid-cols-2 xl:grid-cols-3">
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
      </div>
    </div>
  );
}