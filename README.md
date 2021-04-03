# GugWeb

## Technology

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Material-UI
- Material UI CSS in JS - JSS
- Project is using Prettier and ES-lint
- Use node 14.15.5 or compatible

## Getting Started

Install by running:

```bash
yarn install
# or
yarn
```

then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- Each page has its own file
- Use material-UI components as much as possible
- Use components as much as possible. Put them in `/components` directory
- Keep root layout in `app.js`
- JSS is compatible with SASS (Visual Studio has some nice plugins for it)
- Material-ui has a theme. Use it as much as possible

### Git

- There is eslint and prettier before commit
- There is strict check before push (no errors, no warnings are allowed)
- use `yarn lint-prod` to see all errors and use `yarn format` to reformat and fix code
- use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) if possible

## Deploy

To get static web run:

```bash
yarn export
```

Deploy somewhere - TBD

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) - commit messages unification framework
- [Materil-UI](https://material-ui.com/) - react components, theme, layout, ...

## Troubleshooting

0 days since last trouble
