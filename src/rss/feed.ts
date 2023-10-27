import { Feed } from 'feed';

export const generateRssFeed = async (): Promise<string> => {
  //環境変数など任意のリンクをbaseUrlに入れる。
  const baseUrl ='https://next-toc.vercel.app/'
  const feed = new Feed({
    title: '会社名',
    description:
      '概要',
    id:baseUrl,
    link:baseUrl,
    language: 'ja',
    copyright: 'copyright',
    generator: baseUrl,
  });

 //データをとってくる。API経由やファイル経由を想定
const posts = getPosts(); // remove 'await' since getPosts() doesn't seem to be an async function

// make sure that getPosts() returns an array
function getPosts() {
    return [
        {
            title: '記事タイトルッ！！！',
            description: '記事の概要',
            date: '2021-10-10',
            url: '記事のurl',
        },
        {
            title: '記事タイトル2',
            description: '記事の概要2',
            date: '2022-10-10',
            url: '記事のurl2',
        },
    ];
}

//各記事をフィードに追加
posts.forEach((post) => {
    feed.addItem({
        title: post.title,
        description: post.description,
        date: new Date(post.date),
        id: post.url,
        link: post.url,
    });
});

// Output: RSS 2.0
  return feed.rss2();

//今回はxmlの生成ですが、atomやjsonファイルでの生成も可能です。
//feed.atom1()でatomファイル生成
//feed.json1()でjsonのファイル生成
};