import { Metadata } from 'next';
import IndexPageClient from './page-client';

export const metadata: Metadata = {
  title: 'Index Page',
  description: 'This is the index page',
}

export default function IndexPage() {
  return <IndexPageClient />
}
