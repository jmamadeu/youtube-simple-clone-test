## Youtube Clone

Simple Youtube main pages clone using the [Youtube v3 API](https://developers.google.com/youtube/v3), [React(Next.js)](https://nextjs.org/) [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/) and [ChakraUI](https://chakra-ui.com/).

- List Videos
- Watch Videos
- Search Videos
- See history

## How to run

Clone the app on your machine

```bash
git clone https://github.com/jmamadeu/youtube-simple-clone-test.git
# or
gh repo clone jmamadeu/youtube-simple-clone-test
```

After that run

```bash
yarn && yarn dev
# or
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> To be able to load the videos you need to set up your `YoutubeAPIKEY`, [see here](https://console.cloud.google.com/projectcreate)

After that go to `.env.local` or create one and add the key `NEXT_PUBLIC_YOUTUBE_API_KEY=<YOUR_YOUTUBE_API_KEY>`

That's it, you're ready to go.

Made with :heart: by [João Amadeu](https://twitter.com/jmamadeu).