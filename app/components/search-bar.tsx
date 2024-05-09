'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
 
export default function SearchBar({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const WAIT_BETWEEN_CHANGE = 400;

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        
        if (term) params.set('query', term);
        else params.delete('query')
        
        replace(`${pathname}?${params.toString()}`);
    }, WAIT_BETWEEN_CHANGE)
 
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="searchBar" className="sr-only">
                Buscar
            </label>
            <input
                id='searchBar'
                type='text'
                className="peer block bg-slate-700 w-full rounded-md border-2 border-slate-500 py-[9px] pl-10 text-base outline-2 transition-colors placeholder:text-gray-400 lg:hover:border-teal-400 focus:border-teal-500 focus:outline-none"
                placeholder={placeholder}
                onChange={(e) => { handleSearch(e.target.value); }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400 peer-focus:text-teal-500" />
        </div>
  );
}