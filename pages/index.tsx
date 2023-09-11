import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ environment }) {
  const router = useRouter();

  useEffect(() => {
    function handleRouteChange() {
      console.log('CHANGE!');
    }

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ul>
      <li>ENV: {environment}</li>
      <li>
        <Link href="/a">a</Link>
      </li>
      <li>
        <Link href="/b">b</Link>
      </li>
    </ul>
  );
}

export async function getServerSideProps(context) {
  const query = context.query || '{}';
  const params = context.params || '{}';
  const environment = process.env.ENVIRONMENT || 'test';

  return {
    props: {
      query,
      params,
      environment,
    },
  };
}
