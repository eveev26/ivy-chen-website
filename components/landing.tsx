import Image from 'next/image';

export function Landing() {
  return (
    <div className='flex flex-row w-screen pl-48 pr-48 pt-44 pb-64 place-items-center justify-between container'>
    <Image src='/images/profile-1.svg' alt="about" width={600} height={600}></Image>
    <div className='flex flex-col gap-20'>
      <p className='flex text-3xl text-justify text-dark-brown'>
        hi! my name is
      </p>
      <p className='flex text-9xl text-justify text-dark-brown'>
        Ivy Chen
      </p>
      <div className='flex flex-col gap-12'>
        <p className='flex text-3xl text-justify text-dark-brown'>
        i&apos;m a software engineer
        </p>
        <button className='flex px-8 py-4 bg-pink text-dark-brown border-2 border-dark-brown text-xl rounded-lg hover:bg-opacity-80 transition-all duration-300 w-fit'>
        learn more about me
        </button>
      </div>
    </div>
  </div>
  )
}