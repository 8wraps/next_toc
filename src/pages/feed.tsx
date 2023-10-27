import { generateRssFeed } from '@/rss/feed';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = await generateRssFeed();
  console.log(xml);
  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate'); // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};
const Page = (): null => null;
export default Page;

