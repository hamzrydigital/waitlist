import PropTypes from 'prop-types';
import Avatar from '@/assets/images/avatar.png';
import { RatingChip, PaymentChip, MilestoneChip } from '../Chips/Chips';

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
  return (
    <div className='h-[496px] w-full py-10 md:h-[436px]'>
      <RatingChip
        // className='relative top-[95px] -left-[5px] sm:left-[0px]'
        className='relative top-[95px] left-[91px]  md:-left-[30px] md:top-[82px] lg:-left-[100px]'
        count={ratingCount}
        name={ratingName}
        img='https://picsum.photos/id/375/200'
      />
      <MilestoneChip
        count={milestoneCount}
        className='relative top-[-40px] -left-[13px] md:left-[257px] lg:left-[337px]'
      />
      <PaymentChip
        amount={paymentOne}
        className='relative top-[45px] left-[15px] sm:left-[406px] md:top-[-35px] md:left-[430px] lg:top-[-45px] lg:left-[680px]'
      />
      <PaymentChip
        amount={paymentTwo}
        className='relative top-[213px] left-[22px] md:top-[24px]'
      />
      <RatingChip
        className='relative top-[73px] left-[90px] md:top-[32px] md:left-[300px] lg:top-[0px] lg:left-[566px]'
        count={ratingCountTwo}
        name={ratingNameTwo}
        img={Avatar}
      />
      <MilestoneChip
        count={milestoneCountTwo}
        className='relative -top-[58px] -left-[1px] sm:left-[320px] md:top-[-93px] md:left-[550px] lg:left-[950px]'
      />
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
