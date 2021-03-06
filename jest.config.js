module.exports = {
  globals: {
    'ts-jest': {
      // Tell ts-jest about our typescript config.
      // You can specify a path to your tsconfig.json file,
      // but since we're compiling specifically for node here,
      // this works too.
      tsconfig: {
        target: 'es2020',
      },
    },
  },
  // Transforms tell jest how to process our non-javascript files.
  // Here we're using babel for .js and .jsx files, and ts-jest for
  // .ts and .tsx files.  You *can* just use babel-jest for both, if
  // you already have babel set up to compile typescript files.
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    // If you're using babel for both:
    // "^.+\\.[jt]sx?$": "babel-jest",
  },
  // In webpack projects, we often allow importing things like css files or jpg
  // files, and let a webpack loader plugin take care of loading these resources.
  // In a unit test, though, we're running in node.js which doesn't know how
  // to import these, so this tells jest what to do for these.
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  // Tells Jest what folders to ignore for tests
  testPathIgnorePatterns: [`node_modules`, `\\.cache`],
  testURL: `http://localhost`,
  resolver: 'jest-webpack-resolver',
  setupFilesAfterEnv: ['./config/setupTest.js'],
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
};
