import PropTypes from 'prop-types';
import Avatar from '@/assets/images/avatar.png';
import {
  RatingChip,
  PaymentChip,
  MilestoneChip,
  SpaceChip,
} from '../Chips/Chips';
import { useRouter } from 'next/router';

export function DecoratorSection({
  ratingCount,
  ratingName,
  milestoneCount,
  ratingCountTwo,
  ratingNameTwo,
  milestoneCountTwo,
  paymentOne,
  paymentTwo,
}) {
  const router = useRouter();
  const isFreelancerRoute = router.pathname === '/waitlist/freelancer';

  return (
    <div className='mb-10 w-full py-10 md:mb-0'>
      <RatingChip
        className='relative top-[95px] left-[91px]  md:-left-[30px] md:top-[82px] lg:-left-[100px]'
        count={ratingCount}
        name={ratingName}
        img='https://picsum.photos/id/375/200'
      />
      <MilestoneChip
        count={milestoneCount}
        className='relative top-[-40px] -left-[13px] md:left-[257px] lg:left-[337px]'
      />
      {isFreelancerRoute ? (
        <>
          <PaymentChip
            amount={paymentOne}
            className='relative top-[45px] left-[15px] sm:left-[406px] md:top-[-35px] md:left-[430px] lg:top-[-45px] lg:left-[680px]'
          />
          <PaymentChip
            amount={paymentTwo}
            className='relative top-[213px] left-[22px] md:top-[24px]'
          />
        </>
      ) : (
        <>
          <SpaceChip
            amount={paymentOne}
            className='relative top-[45px] left-[15px] hidden sm:left-[406px] md:top-[-35px] md:left-[430px] lg:top-[-45px] lg:left-[680px]'
          />
          <SpaceChip
            amount={paymentTwo}
            className='relative top-[213px] left-[22px] hidden md:top-[24px]'
          />
        </>
      )}
      <RatingChip
        className='relative top-[73px] left-[90px] md:top-[32px] md:left-[300px] lg:top-[0px] lg:left-[566px]'
        count={ratingCountTwo}
        name={ratingNameTwo}
        img={Avatar}
      />
      {isFreelancerRoute ? (
        <MilestoneChip
          count={milestoneCountTwo}
          className='relative -top-[58px] -left-[1px] sm:left-[320px] md:top-[-93px] md:left-[550px] lg:left-[950px]'
        />
      ) : (
        <MilestoneChip
          count={milestoneCountTwo}
          className='relative -top-[58px] -left-[1px] sm:left-[320px] md:top-[-145px] md:left-[550px] lg:left-[950px]'
        />
      )}
    </div>
  );
}

DecoratorSection.propTypes = {
  ratingCount: PropTypes.number.isRequired,
  ratingName: PropTypes.string.isRequired,
  milestoneCount: PropTypes.number.isRequired,
  ratingCountTwo: PropTypes.number.isRequired,
  ratingNameTwo: PropTypes.string.isRequired,
  milestoneCountTwo: PropTypes.number.isRequired,
  paymentOne: PropTypes.number.isRequired,
  paymentTwo: PropTypes.number.isRequired,
};
