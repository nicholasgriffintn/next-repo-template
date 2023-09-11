import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const { nonce } = ctx?.res?.locals || {};

    console.log('NONCE', nonce);

    return { ...initialProps, nonce };
  }

  render() {
    const { nonce } = this.props as unknown as { nonce: string };

    return (
      <Html lang="en-GB">
        <Head nonce={nonce} />
        <body data-theme="dark">
          <script nonce={nonce} dangerouslySetInnerHTML={{ __html: '' }} />
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
