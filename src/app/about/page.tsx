import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { config } from '@/config';
import { signOgImageUrl } from '@/lib/og-image';
import Markdown from 'react-markdown';

const content = `# About Me

Kia Ora! I'm John, a 24-year-old a software developer, digital enthusiast, and adventure seeker.

This blog is where I'll be documenting my life, travel, occasionally my software life, sharing my experiences, and hopefully inspiring others. 

So join me on my personal growth. Who knows, maybe my stories will inspire you to take that leap of faith.

Cheers,

John`;

export async function generateMetadata() {
  return {
    title: 'About Me',
    description: 'Learn more about Samantha and her travel adventures',
    openGraph: {
      title: 'About Me',
      description: 'Learn more about Samantha and her travel adventures',
      images: [
        signOgImageUrl({
          title: 'John',
          label: 'About Me',
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="blog-content prose m-auto mb-10 mt-20 dark:prose-invert lg:prose-lg">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
