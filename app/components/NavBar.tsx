"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(() => event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    router.push(`/listings?q=${searchTerm}`);
    setSearchTerm(() => "");
  }

  return (
    <>
      <div className="navbar shadow rounded-navbar bg-neutral">
        <div className="navbar-start">
          <a href="/">
            <Image
              src="/Bee_and_Text_Logo_transparent.png"
              width={300}
              height={250}
              alt="NewBee logo"
            />
          </a>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">
                  <b>HOME</b>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <b>JOB LISTINGS</b>
                </a>
              </li>
              <li>
                <a href="/devs">
                  <b>DEVS</b>
                </a>
              </li>
              <li>
                <a href="/about">
                  <b>ABOUT</b>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-l" href="/">
                  <b>HOME</b>
                </a>
              </li>
              <li>
                <a href="/listings">
                  <b>JOB LISTINGS</b>
                </a>
              </li>
              <li>
                <a className="text-l" href="/devs">
                  <b>DEVS</b>
                </a>
              </li>
              <li>
                <a className="text-l" href="/about">
                  <b>ABOUT</b>
                </a>
              </li>
            </ul>
          </div>
          <div className="form-control">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered rounded-box w-24 md:w-auto"
                value={searchTerm}
                onInput={handleInput}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
