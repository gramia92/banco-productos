module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: [
    "node_modules/(?!@angular|rxjs|tslib)"
  ],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: false
    },
  },
  moduleNameMapper: {
    // Mapea estilos CSS a un mock para que no fallen las importaciones
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Mapea assets o imágenes a mocks si usas importaciones
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  }
};
