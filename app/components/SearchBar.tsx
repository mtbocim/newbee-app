'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('');

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(() => event.target.value);
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        router.push(`/listings?q=${searchTerm}`);
    }

    function clearResults() {
        router.push('/listings');
        setSearchTerm('');
    }

    return (
        <div
            className="flex"
            style={{ width: '60%' }}
        >
            <div className="form-control">
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <div
                        className="search-container"
                        style={{
                            position: 'relative',
                            display: 'flex',
                            flexGrow: 1,
                            width: '600px',
                        }}
                    >
                        <SearchIcon className="search-icon" />
                        <input
                            type="search"
                            placeholder=' Enter search term, ex: "React" or "San Francisco"'
                            className="input input-bordered w-full"
                            style={{ paddingLeft: '30px', marginRight: '10px' }} // Adjust padding to account for the icon
                            value={searchTerm}
                            onInput={handleInput}
                        />
                    </div>
                </form>
            </div>
            <button
                className="btn btn-primary"
                onClick={clearResults}
            >
                Clear search
            </button>
        </div>
    );
}
