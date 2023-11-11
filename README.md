This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After cloning the repo don't forget your
```bash
npm install
```

Add a .env with the value
```
DATABASE_URL=postgresql://[local username]:[local password]@localhost/resume_builder
```
If you don't know your password, you can reset by
```bash
psql
```
then
```postgres
ALTER USER your_username WITH PASSWORD 'new_password';
```

_If you don't have the local data, head over to **https://github.com/stzheng716/test_job_scraper** for where and how to get it_

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Database syncing

To bring schema into sync with current database if changes are made: 

```bash
npx prisma db pull
```

Then generate typescript types:

```bash
npx prisma generate
```