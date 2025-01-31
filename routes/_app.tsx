import type { PageProps } from "fresh";
import { Partial } from "fresh/runtime";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ramen Sasshi</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body f-client-nav>
        <Component />
      </body>
    </html>
  );
}
