import { config, configs  } from 'typescript-eslint'
import pluginImportX from 'eslint-plugin-import-x'

const { createNodeResolver } = pluginImportX

export default config({
  extends: [configs.recommended],
  plugins: {
    'import-x': pluginImportX
  },
  settings: {
    'import-x/resolver-next': [
      createNodeResolver({
        extensions: ['.js', '.mjs', '.ts', '.mts', '.d.ts', '.json'],
      }),
    ],
  },
  rules: {
    'import-x/no-duplicates': ['error']
  }
})
