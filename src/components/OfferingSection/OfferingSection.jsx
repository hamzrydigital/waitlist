import Image from 'next/image';
import PropTypes from 'prop-types';

import womenWithLaptop from '@/assets/images/women-with-laptop-smiling.png';

export function OfferingSection({ tagLine, title, description }) {
  return (
    <div className='flex flex-col place-items-center gap-10 py-12 md:flex-row md:py-24'>
      <div className='grid gap-4'>
        <div className='grid'>
          <p className='text-sm font-semibold text-[#108239]'>{tagLine}</p>
          <h2 className='text-3xl md:text-4xl'>{title}</h2>
        </div>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='relative order-first h-[240px] w-full sm:h-[308px] md:order-last md:w-[1400px]'>
        <Image
          fill
          src={womenWithLaptop}
          alt='Hero Image'
          className='rounded-[24px]'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
OfferingSection.propTypes = {
  tagLine: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
