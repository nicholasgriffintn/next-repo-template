import { useEffect } from 'react';

type Props = {
  statusCode: number;
};

function Error({ statusCode }: Props) {
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      console.error('Internal Server Error');
    }

    return () => {
      if (mounted) {
        mounted = false;
      }
    };
  }, [statusCode]);

  return null;
}

Error.getInitialProps = ({ res, err }) => {
  console.error({ err });

  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
