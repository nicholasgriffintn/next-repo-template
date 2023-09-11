import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <p>
        We&apos;re unable to bring you the page you&apos;re looking for. Please
        try:
      </p>
      <ul className="list">
        <li>Double checking the URL.</li>
        <li>Hitting the refresh button on your browser.</li>
        <li>
          Checking that you have the correct permissions for the page you are
          trying to access.
        </li>
      </ul>
      <p>
        Alternatively, please visit the <Link href="/">homepage</Link>
      </p>
    </>
  );
}
