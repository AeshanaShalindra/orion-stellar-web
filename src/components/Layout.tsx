import Head from "next/head";
// import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#fff" />
      </Head>
      {/* <nav>
        <Navigation />
      </nav> */}
      <main>{ children }</main>
      <style jsx>{`
          .root {
            display: block;
          }
          main {
            min-height: 100%;
          }
          @media (min-width: 769px) {
            /* .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            } */
          }
        `}
      </style>
    </div>
  );
}
