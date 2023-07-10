import Image from 'next/image';
import { useRouter } from 'next/router';

import waitlistImage from '@/assets/images/waitlist-image.svg';

export function WaitlistSection() {
  const router = useRouter();

  const handleFreelancerButtonClick = () => {
    router.push('/waitlist/freelancer');
  };

  const handleClientButtonClick = () => {
    router.push('/waitlist/client');
  };

  return (
    <div className='mt-16 flex flex-col place-items-center gap-24 py-12 md:flex-row md:py-24'>
      <div className='grid gap-4'>
        <div className='grid'>
          <h2 className='text-center text-3xl md:text-4xl'>
            Be a member of Hamzry Growing Community
          </h2>
        </div>
        <p className='text-center text-sm'>
          Are you tired of the traditional job market and looking for a more
          flexible and rewarding way to work? Work with the largest network of
          independent professionals and get things done-from quick turnarounds
          to big transformations.
        </p>
        <div className='flex justify-between pt-4'>
          <button
            className='border-2 border-[#108239] px-4 py-6 text-[#108239] hover:rounded-md hover:bg-[#108239] hover:text-white'
            onClick={handleFreelancerButtonClick}
          >
            Become a Freelancer
          </button>
          <button
            className='rounded-md bg-[#108239] px-8 py-6 text-white hover:rounded-none hover:border-2 hover:border-[#108239] hover:bg-white hover:text-[#108239]'
            onClick={handleClientButtonClick}
          >
            Become a Client
          </button>
        </div>
      </div>
      <div className='relative order-first mt-8 h-[240px] w-full sm:mt-24 sm:h-[308px] md:order-last md:mt-0 md:w-[1400px]'>
        <Image
          fill
          src={waitlistImage}
          alt='Hero Image'
          className='rounded-[24px]'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
