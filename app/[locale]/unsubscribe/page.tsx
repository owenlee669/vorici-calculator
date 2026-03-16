import { unsubscribeFromNewsletter } from '@/actions/newsletter';

// 静态导出模式标志 - 后续接入API时设为 false
const IS_STATIC_EXPORT = true;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function UnsubscribePage(props: {
  searchParams: SearchParams;
}) {
  // 静态导出模式下直接显示提示
  if (IS_STATIC_EXPORT) {
    return (
      <div className='max-w-md mx-auto my-16 p-6 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-6'>Email Subscription Management</h1>
        <div>
          <p className='mb-4'>
            This feature is coming soon. Please contact support if you need help
            managing your email subscriptions.
          </p>
        </div>
      </div>
    );
  }

  let status: 'error' | 'success' = 'error';
  let email = '';
  let errorMessage =
    'An error occurred while processing your unsubscribe request';

  const searchParams = await props.searchParams;
  const token = searchParams.token as string;

  if (!token) {
    errorMessage = 'No unsubscribe token provided';
  } else {
    try {
      const result = await unsubscribeFromNewsletter(token);
      if (result.success) {
        status = 'success';
        email = result.email;
      }
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : errorMessage;
    }
  }

  return (
    <div className='max-w-md mx-auto my-16 p-6 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6'>Email Subscription Management</h1>

      {status === 'success' ? (
        <div>
          <p className='mb-4'>
            You have successfully unsubscribed from the email notifications.
          </p>
          <p className='text-sm text-gray-600'>Email: {email}</p>
          <p className='mt-6'>
            If you change your mind, you can re-subscribe at any time.
          </p>
        </div>
      ) : (
        <div>
          <p className='text-red-600 mb-4'>{errorMessage}</p>
          <p>
            Please ensure you used the correct unsubscribe link, or contact our
            support team for help.
          </p>
        </div>
      )}
    </div>
  );
}
