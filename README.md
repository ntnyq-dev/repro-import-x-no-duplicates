# repro-import-x-no-duplicates

## Steps

1. Uncomment `// eslint-disable-next-line import-x/no-duplicates` in `src/index.ts`

2. Run scripts `lint`

you will get two report errors `'/Users/ntnyq/Desktop/github/ntnyq/repro-import-x-no-duplicates/node_modules/.pnpm/vue-router@4.5.0_vue@3.5.13_typescript@5.7.2_/node_modules/vue-router/dist/vue-router.mjs' imported multiple times.`
