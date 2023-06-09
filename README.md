## Intro to this project

An app built in Next.js 13 using Typescript and Tailwind CSS.

I want to gather **references** I look up often, recommend **tech communities** or interesting **divulgation assets** and highlight **content creators** I value and follow on daily basis.

### Getting Started

- Install dependencies:

```bash
npm install
```

- Run the fake api from json-server:

```bash
npm run fake_api
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

### Next steps

- Migrate data from json-server to a MongoDB
- Unit testing
- Improve color scheme and UI
- Refactor code following DRY, YARN and SOLID principles
- Include new sections
- Add loading files and skeleton loaders
- Deploy in Vercel

## Resouces used

- [Next.js Beta Documentation](https://beta.nextjs.org/docs) - to try out the newest features of Next 13, along with [Learn Next.js](https://nextjs.org/learn).

- This project takes and adapts examples from [`Midudev`](https://www.youtube.com/watch?v=tA-_vAz9y78) and [`Dave Gray`](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj) 's tutorials.

I've implemented error Handling, used static Metadata and tried different fetching options for different pages and nested routes:

- Fetching data on the server using Server Components
- Fetching data in parallel using React Suspense
- Using Incremental Server Rendering
- Creating Client components for small interactive components
- Using static params to convert SSR to SSG for dynamic components
