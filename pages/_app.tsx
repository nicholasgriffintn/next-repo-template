function App({ Component, pageProps }) {
  console.log('PAGE PROPS', pageProps);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
