"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);


  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={50}
          height={50}
          className='object-contain'
        />
        <p className='logo_txt'>NoteAble</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create a note
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='  text-gray-900 hover:bg-gray-100 border border-gray-200 focus:ring-4 
                  focus:outline-none focus:ring-gray-100 font-small rounded-lg text-sm px-3 py-2.5 
                  text-center inline-flex items-center mr-2 mb-2' >
                   <Image src={`/assets/socials/${provider.id}.svg` }className="w-6 h-5 mr-2 -ml-1" width={20} height={20}/>
                  {provider.id}
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create a note
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='text-gray-900  hover:bg-gray-100 border border-gray-200 focus:ring-4 
                  focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 
                  text-center inline-flex items-center   hover:bg-[#FF9119]/80 mr-2 mb-2' >
                   <Image src={`/assets/socials/${provider.id}.svg` }className="w-6 h-5 mr-2 -ml-1" width={20} height={20}/>
                  {provider.id}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;