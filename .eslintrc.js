module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme`
  extends: ['@manon/eslint-config'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
