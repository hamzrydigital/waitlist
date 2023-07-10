import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from '../Elements/Button/Button';
import { PageMargin } from '../PageMargin/PageMargin';

import documentRating from '@/assets/illustrations/document-rating.svg';

export function FeaturesSection({ title, description, buttonText }) {
  return (
    <div className='bg-[#115B61]'>
      <PageMargin>
        <div className='flex flex-col gap-y-40 py-16 sm:gap-y-48 md:flex-row md:gap-y-10 md:py-24 lg:place-items-center lg:gap-x-10'>
          <div className='inine w-fill relative -top-[48px] h-[186px] md:h-[316px] md:w-[328px] lg:h-[346px] lg:w-[678px]'>
            <Image
              className='rounded-xl'
              src={documentRating}
              style={{ objectFit: 'cover' }}
              alt='User Avatar'
            />
          </div>
          <div className='mt-10 grid w-full gap-y-4 md:w-1/2'>
            <h2 className='text-2xl text-gray-800'>{title}</h2>
            <p className='text-base text-white'>{description}</p>
            <Button type='button' variant='inverse'>
              <a href='#subscription_section'>{buttonText}</a>
            </Button>
          </div>
        </div>
      </PageMargin>
    </div>
  );
}
FeaturesSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
