const { isDevelopmentEnv } = require('./server');

test('returns true when environment is development', () => {
  expect(isDevelopmentEnv('development')).toBe(true);
});

test('returns false when environment is not development', () => {
  expect(isDevelopmentEnv('production')).toBe(false);
});
