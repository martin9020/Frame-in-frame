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
    
    `
     <!DOCTYPE html><head>
      <title>Game of Life Frame</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQYrWmN73VXtV4ShiDfWsFrzkT6FinvAkVpvaop9HnohD/5.png" />
      <meta property="og:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQYrWmN73VXtV4ShiDfWsFrzkT6FinvAkVpvaop9HnohD/5.png" />
      <meta property="fc:frame:button:1" content="Start" />
      <meta property="fc:frame:button:2" content="Pause" />
      <meta property="fc:frame:button:3" content="Reset" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/gameoflife.js" />
      <h1><iframe src="https://miv.wtf"> </iframe></h1>
      </head></html>`
    
  );
}