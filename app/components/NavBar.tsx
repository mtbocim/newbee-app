import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className='navbar shadow rounded-navbar bg-neutral'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost' href='/'>
          <Image
              src='/Bee_and_Text_Logo_transparent.png'
              width={300}
              height={250}
              alt='NewBee logo'
            />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a className='text-xl' href="/">Home</a>
            </li>
            <li>
              <a className='text-xl' href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className='flex navbar-end'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto'
            />
          </div>
        </div>
      </div>
    </>
  );
}
