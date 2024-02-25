import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Button = Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSJ4bHHJNCe1r8T1eUrpgxwNPXzD7vgg4LGLFiB7LZcBs`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Frames Tutorial',
  description: 'A first code in my life',
  openGraph: {
    title: 'And the first frime in my life - Page=1 ID = 1',
    description: 'And a first code in my life',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSJ4bHHJNCe1r8T1eUrpgxwNPXzD7vgg4LGLFiB7LZcBs`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1><iframe src="https://miv.wtf"> </iframe></h1>
    </>
  );
}