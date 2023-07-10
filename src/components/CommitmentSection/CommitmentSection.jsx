import { HiStar } from 'react-icons/hi';

import { Button } from '../Elements/Button/Button';

export function CommitmentSection() {
  return (
    <div className='mx-auto grid max-w-4xl place-items-center gap-y-10 py-20'>
      <div className='grid place-items-center gap-y-2 text-center'>
        <div className='flex'>
          <HiStar color='#E8B535' size={20} />
          <HiStar color='#E8B535' size={20} />
          <HiStar color='#E8B535' size={20} />
          <HiStar color='#E8B535' size={20} />
          <HiStar color='#E8B535' size={20} />
        </div>
        <h1 className='text-2xl text-[#115B61] md:text-3xl'>
          We&apos;re committed to providing a user-friendly and secure platform
          for both freelancers and clients.
        </h1>
      </div>
      <Button type='button'>
        <a href='#subscription_section'>Join the Waitlist</a>
      </Button>
    </div>
  );
}
