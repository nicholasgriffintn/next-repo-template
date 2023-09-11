import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
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
      <li>
        <Link href="/a">a</Link>
      </li>
      <li>
        <Link href="/b">b</Link>
      </li>
    </ul>
  );
}
