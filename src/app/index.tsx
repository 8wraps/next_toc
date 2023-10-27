import { Feed } from 'feed';

function generateRss() {
    const feed = new Feed({
        title: 'My Blog',
        description: 'A blog about programming',
        id: 'https://example.com/',
        link: 'https://example.com/',
        image: 'https://example.com/logo.png',
        favicon: 'https://example.com/favicon.ico',
        author: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            link: 'https://example.com/about',
        },
        language: 'en',
        updated: new Date(),
        generator: 'My Blog Generator',
        feedLinks: {
            json: 'https://example.com/json',
            atom: 'https://example.com/atom',
            rss: 'https://example.com/rss',
        },
        ttl: 60,
        copyright: ''
    });

    // Add items to the feed
    feed.addItem({
        title: 'My First Post',
        id: 'https://example.com/posts/1',
        link: 'https://example.com/posts/1',
        description: 'This is my first blog post',
        content: 'This is my first blog post',
        author: [
            {
                name: 'John Doe',
                email: 'johndoe@example.com',
                link: 'https://example.com/about',
            },
        ],
        date: new Date(),
    });

    feed.addItem({
        title: 'My Second Post',
        id: 'https://example.com/posts/2',
        link: 'https://example.com/posts/2',
        description: 'This is my second blog post',
        content: 'This is my second blog post',
        author: [
            {
                name: 'John Doe',
                email: 'johndoe@example.com',
                link: 'https://example.com/about',
            },
        ],
        date: new Date(),
    });

    // Generate the XML feed
    const xml = feed.rss2();

    return xml;
}
