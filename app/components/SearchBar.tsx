"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(() => event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    router.push(`/listings?q=${searchTerm}`);
  }

  function clearResults() {
    router.push("/listings");
    setSearchTerm(() => "");
  }

  return (
    <div className="form-control w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            type="search"
            placeholder='"React" or "San Francisco"'
            className="input input-bordered w-full max-w-xs"
            value={searchTerm}
            onInput={handleInput}
          />
        </div>
      </form>
      <button className="btn btn-neutral" onClick={clearResults}>
        Clear search
      </button>
    </div>
  );
}
