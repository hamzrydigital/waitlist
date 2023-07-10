import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { StoreContext } from '@/context/Store';

function CustomForm({ value, formElements, status, onValidated }) {
  const { setLoading } = useContext(StoreContext);
  const router = useRouter();

  console.log(status);

  useEffect(() => {
    if (status === 'error') setLoading(false);
    if (status === 'sending') setLoading(true);
    if (status === 'success') router.push('/success');
  }, [router, setLoading, status]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.indexOf('@') > -1) {
      // Submits Form to Mailchimp
      const merge1Value =
        router.pathname === '/waitlist/client' ? 'Client' : 'Freelancer';
      onValidated({ EMAIL: value, MERGE1: merge1Value });
    }
  };

  return (
    <div className='mx-auto w-full max-w-md'>
      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-2 md:flex-row'
      >
        {formElements}
      </form>
    </div>
  );
}

// Mailchimp Wrapper Form
export function SubscriptionForm({ children, value }) {
  let id = 'b80962623e';
  let u = '5749b703f6ec75b763ba46600';

  const postUrl = `https://hamzry.us8.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          value={value}
          status={status}
          formElements={children}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
