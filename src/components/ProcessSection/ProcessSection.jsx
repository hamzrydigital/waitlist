import PropTypes from 'prop-types';
import { Button } from '../Elements/Button/Button';
import { useRouter } from 'next/router';
import blackWomenWithLaptop from '@/assets/images/black-woman-with-laptop.png';
import whiteBusinessPeople from '@/assets/images/white-business-people.png';
import { ClientProcessCard } from '../ProcessCard/ClientProcessCard';
import { FreelancerProcessCard } from '../ProcessCard/FreelancerProcessCard';

export function ProcessSection({ tagLine, title, description, buttonText }) {
  const router = useRouter();

  const isClientPage = router.pathname === '/waitlist/client';

  return (
    <>
      <div className='mx-auto grid max-w-3xl gap-y-24 py-10'>
        <div className='grid place-items-center items-center gap-y-2 text-center'>
          <p className='text-base font-semibold text-[#108239]'>{tagLine}</p>
          <div className='grid gap-y-4'>
            <h2 className='text-3xl font-bold md:font-medium'>{title} </h2>
            <p className='text-center text-sm md:text-base'>{description}</p>
          </div>
          <span className='mt-8'>
            <Button type='submit'>
              <a href='#subscription_section'>{buttonText}</a>
            </Button>
          </span>
        </div>
      </div>
      <div className='flex flex-col place-items-center gap-14 sm:flex-row'>
        {isClientPage ? (
          <>
            <ClientProcessCard
              variant={'fill'}
              type='Clients/Business Owners'
              img={whiteBusinessPeople}
              imgAlt='Business partners'
              description='You can use Hamzry to recruit and hire top-tier Nigerian talent for your long and short-term projects'
              title='Find and hire the talent'
            />
            <ClientProcessCard
              variant={'stroke'}
              type='Freelancers'
              img={blackWomenWithLaptop}
              imgAlt='woman with laptop'
              description='With our platform, you can sell your services as gigs or apply for projects, all while having complete control over your work schedule'
              title='Sell their service as gigs'
            />
          </>
        ) : (
          <>
            <FreelancerProcessCard
              variant={'stroke'}
              type='Freelancers'
              img={blackWomenWithLaptop}
              imgAlt='woman with laptop'
              description='With our platform, you can sell your services as gigs or apply for projects, all while having complete control over your work schedule'
              title='Sell their service as gigs'
            />
            <FreelancerProcessCard
              variant={'fill'}
              type='Clients/Business Owners'
              img={whiteBusinessPeople}
              imgAlt='Business partners'
              description='You can use Hamzry to recruit and hire top-tier Nigerian talent for your long and short-term projects'
              title='Find and hire the talent'
            />
          </>
        )}
      </div>
    </>
  );
}

ProcessSection.propTypes = {
  title: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
