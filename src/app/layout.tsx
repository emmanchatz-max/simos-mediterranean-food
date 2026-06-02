import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, we can't 
// use a static layout for the root. This layout is only
// used for the root page and other non-localized pages.
export default function RootLayout({children}: Props) {
  return children;
}
