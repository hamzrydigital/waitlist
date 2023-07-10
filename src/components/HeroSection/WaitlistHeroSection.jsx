import { useState, useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { StoreContext } from '@/context/Store';

import { Button } from '../Elements/Button/Button';
import { TextInput } from '../Elements/TextInput/TextInput';
import { SubscriptionForm } from '../Form/SubscriptionForm';

export function WaitlistHeroSection({
  title,
  heroImage,
  tagLine,
  description,
  span,
  buttonText,
}) {
  const [email, setEmail] = useState('');
  const { loading } = useContext(StoreContext);

  const handleEmailChange = (value) => setEmail(value);

  return (
    <header className='relative mx-auto flex max-w-7xl place-content-center px-6 py-20 md:py-32'>
      <Image
        className='bg-gray-500 '
        src={heroImage}
        fill
        alt='Hero Image'
        style={{ objectFit: 'cover' }}
        placeholder='blur'
      />

      <div className='z-10 grid place-items-center gap-y-10 text-white'>
        <div className='grid max-w-3xl gap-y-4'>
          <div className='grid place-items-center gap-2'>
            <h1 className='text-center text-xs uppercase tracking-widest'>
              {tagLine}
            </h1>
            <h2 className='w-5/6 text-center text-3xl font-bold lg:text-4xl'>
              {title}
            </h2>
          </div>

          {/* To place description text */}
          <p className='mx-auto max-w-md text-center text-sm text-white'>
            {description} <span className='text-green-400'>{span}</span>
          </p>
        </div>

        {/* Subscription form displayed at tab/desk view */}
        <div className='w-full md:block'>
          <div className='flex-col gap-y-2'>
            <p className='mx-auto w-full max-w-md text-sm text-white'>
              Join the waitlist to get notified when we launch
            </p>
            <SubscriptionForm value={email}>
              <TextInput
                type='email'
                value={email}
                disabled={loading}
                placeholder='Enter your email'
                onChange={handleEmailChange}
              />
              <Button type='submit' disabled={loading}>
                {buttonText}
              </Button>
            </SubscriptionForm>
          </div>
        </div>
      </div>
    </header>
  );
}

WaitlistHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
