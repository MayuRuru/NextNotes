## Intro to this project

An app build in Next.js using Typescript and Tailwind.
I am using json-server to fetch data that I will migrate later on to a MongoDB.

I want to gather **resources** I use often, recommend **tech communities** or interesting **divulgation assets** and highlight **content creators** I value and follow on daily basis.

### Getting Started

Clone this repo.

- Run the fake api from json-server:

```bash
npm fake_api
```

- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resouces used

- [Next.js Beta Documentation](https://beta.nextjs.org/docs) - to try out the newest features of Next 13.

- This project takes examples from [`Midudev`](https://www.youtube.com/watch?v=tA-_vAz9y78) and [`Dave Gray`](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj) 's tutorials, along with [Learn Next.js](https://nextjs.org/learn).

I've implemented error Handling, used static Metadata and tried different fetching options for different paged and nested routes:

- Fetching data on the server using Server Components
- Fetching data in parallel using React Suspense
- Using Incremental Server Rendering
- Creating Client components for small interactive components
- Using static params to convert SSR to SSG for dynamic components
