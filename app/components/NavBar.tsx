import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className='navbar shadow rounded-navbar bg-neutral'>
        <div className='navbar-start'>
          <div style={{paddingLeft: '20px'}}>
          <a href='/'>
            <Image
              src='/NewBee_title.png'
              width={220}
              height={220}
              alt='NewBee logo'
            />
          </a></div>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
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
              {/* <li>
                <a href='/'>
                  <b>HOME</b>
                </a>
              </li> */}
              <li>
                <a href='/listings'>
                  <b>JOB LISTINGS</b>
                </a>
              </li>
              <li>
                <a href='/devs'>
                  <b>DEVS</b>
                </a>
              </li>
              <li>
                <a href='/about'>
                  <b>ABOUT</b>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex navbar-end'>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              {/* <li>
                <a className='text-l' href='/'>
                  <b>HOME</b>
                </a>
              </li> */}
              <li>
                <a href='/listings'>
                  <b>JOB LISTINGS</b>
                </a>
              </li>
              <li>
                <a className='text-l' href='/devs'>
                  <b>DEVS</b>
                </a>
              </li>
              <li>
                <a className='text-l' href='/about'>
                  <b>ABOUT</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
