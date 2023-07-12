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
  highlightedDescription,
  buttonText,
}) {
  const [email, setEmail] = useState('');
  const { loading } = useContext(StoreContext);

  const handleEmailChange = (value) => setEmail(value);

  return (
    <header className='relative mx-auto flex max-w-7xl place-content-center px-6 py-20 md:py-32'>
      <Image
        src={heroImage}
        fill
        alt='Hero Image'
        style={{
          objectFit: 'cover',
          opacity: '80%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
        }}
        placeholder='blur'
      />

      <div className='z-10 grid place-items-center gap-y-10 py-9 text-white bg-blend-overlay md:py-0'>
        <div className='grid max-w-3xl gap-y-4'>
          <div className='grid place-items-center gap-2'>
            <h1 className='text-center text-xs font-bold uppercase tracking-widest'>
              {tagLine}
            </h1>
            <h2 className='w-5/6 py-6 text-center text-3xl font-bold md:py-0 lg:text-4xl'>
              {title}
            </h2>
          </div>

          {/* To place description text */}
          <p className='mx-auto max-w-md text-center text-sm text-white'>
            {description}{' '}
            <span className='text-green-400'>{highlightedDescription}</span>
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
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
