import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const { nonce } = ctx?.res?.locals || {};

    return { ...initialProps, nonce };
  }

  render() {
    const { nonce } = this.props as unknown as { nonce: string };

    console.log('NONCE', nonce);

    return (
      <Html lang="en-GB">
        <Head />
        <body data-theme="dark">
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
