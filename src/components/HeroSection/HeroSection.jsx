import Image from 'next/image';

import heroHome from '@/assets/images/hero-home.png';

export function HeroSection() {
  return (
    <header className='relative mx-auto flex max-w-7xl place-content-center px-6 py-20 md:py-32'>
      <div className='z-10 grid place-items-center gap-y-10 text-white'>
        <div className='grid max-w-3xl gap-y-4'>
          <div className='grid place-items-center gap-2'>
            <h1 className='text-center text-xs uppercase tracking-widest'>
              A marketplace for digital services
            </h1>
            <h2 className='text-center text-3xl font-bold lg:text-4xl'>
              Hamzry is new
            </h2>
          </div>

          {/* To place description text */}
          <p className='mx-auto max-w-md text-center text-sm text-white'>
            Hamzry is a new platform that connects top clients from all over the
            world to{' '}
            <span className='text-green-400'>Nigerian Freelancers.</span>
          </p>
        </div>
      </div>

      <div className='absolute top-0 left-0 h-[40vh] w-[100%] md:h-[60vh]'>
        <Image
          className='bg-gray-500 '
          src={heroHome}
          fill
          alt='Hero Image'
          style={{ objectFit: 'cover', opacity: '0.9' }}
          placeholder='blur'
        />
      </div>
    </header>
  );
}
