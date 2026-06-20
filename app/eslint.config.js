import js from '@eslint/js'
import react from 'eslint-plugin-react'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { window: 'readonly', document: 'readonly' },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // GUARDRAIL: scoraggia overflow-hidden su wrapper di alto livello.
      // Il controllo affidabile è scripts/check-guardrails.mjs (gira in build).
      'react/jsx-no-target-blank': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
