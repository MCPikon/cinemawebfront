'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-full flex justify-center items-center p-5 md:p-3'>
      <div className='text-center'>
        <ExclamationCircleIcon className='mx-auto h-36 w-auto fill-gray-200 sm:h-40'/>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4'>Ha ocurrido un error!</h2>
        <button
          className='inline-block transition-colors ease-in-out px-3 py-2 font-semibold text-lg text-white rounded-lg focus:ring-4 focus:outline-none bg-teal-600 hover:bg-teal-700 focus:ring-teal-800'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Intenta otra vez
        </button>
      </div>
    </div>
  )
}