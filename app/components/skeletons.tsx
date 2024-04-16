// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden w-64 h-full rounded-xl bg-gray-700 shadow-sm`}
    >
      <div className="flex">
        <div className="h-96 w-64 rounded-md bg-gray-600" />
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
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}