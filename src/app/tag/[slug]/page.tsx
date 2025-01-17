import { BlogPostsPreview } from '@/components/BlogPostPreview';
import { BlogPostsPagination } from '@/components/BlogPostsPagination';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { wisp } from '@/lib/wisp';
import { CircleX } from 'lucide-react';
import Link from 'next/link';

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  return {
    title: `#${slug}`,
    description: `Posts tagged with #${slug}`,
  };
}

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { slug } = await params;
  const { page: paramPage } = await searchParams;
  const page = paramPage ? parseInt(paramPage as string) : 1;
  const result = await wisp.getPosts({ limit: 6, tags: [slug], page });
  return (
    <div className="container mx-auto mb-10 px-5">
      <Header />
      <Link href="/">
        <Badge className="px-2 py-1">
          <CircleX className="mr-2 inline-block size-4" />
          Posts tagged with <strong className="mx-2">#{slug}</strong>{' '}
        </Badge>
      </Link>
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination
        pagination={result.pagination}
        basePath={`/tag/${slug}/?page=`}
      />
      <Footer />
    </div>
  );
};

export default Page;
