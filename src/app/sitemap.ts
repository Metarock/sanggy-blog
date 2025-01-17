// <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     <sitemap>
//         <loc>https://sanggy-pov-blog.vercel.app/static/sitemap.xml</loc>
//     </sitemap>
//     <sitemap>
//         <loc>https://sanggy-pov-blog.vercel.app/blog/sitemap.xml</loc>
//     </sitemap>
//     <sitemap>
//         <loc>https://sanggy-pov-blog.vercel.app/tag/sitemap.xml</loc>
//     </sitemap>
// </sitemapindex>

import { config } from '@/config';
import { wisp } from '@/lib/wisp';
import { MetadataRoute } from 'next';
import urlJoin from 'url-join';

const staticPaths = ['about'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resultPosts = await wisp.getPosts();
  const resultTags = await wisp.getTags();

  const blogUrl = {
    url: urlJoin(config.baseUrl, 'blog'),
    lastModified: new Date(),
    priority: 0.8,
  };

  const posts = resultPosts.posts.map((post) => ({
    url: urlJoin(config.baseUrl, 'blog', post.slug),
    lastModified: new Date(post.updatedAt),
    priority: 0.8,
  }));

  const tagUrl = {
    url: urlJoin(config.baseUrl, 'tag'),
    lastModified: new Date(),
    priority: 0.8,
  };

  const tags = resultTags.tags.map((tag) => ({
    url: urlJoin(config.baseUrl, 'tag', tag.name),
    lastModified: new Date(),
    priority: 0.8,
  }));

  const staticUrls = staticPaths.map((path) => ({
    url: urlJoin(config.baseUrl, path),
    lastModified: new Date(),
    priority: 0.9,
  }));

  return [blogUrl, tagUrl, ...staticUrls, ...tags, ...posts];
}
