import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Avatar = ({ username, picture }) => {
  const hasPicture = picture !==" " ;

  const getInitialLetter = (name) => {
    return name.charAt(0).toUpperCase();
  };

  const convertToImage = (letter) => {
    // You can implement your logic here to convert the letter to an image representation
    // For simplicity, we'll just use a simple text representation
    return <div style={{ fontSize: '24px' }}>{letter}</div>;
  };

  return (
    <div>
      {hasPicture ? (
       <Link href="/profile">
        <Image src={picture}
            width={37} height={37} 
            className='rounded-full'
            alt='profile'/>
       </Link>
      ) : (
        convertToImage(getInitialLetter(username))
      )}
    </div>
  );
};

export default Avatar;


