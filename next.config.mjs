
import NextPWA from 'next-pwa';

const withPWA = NextPWA({
  dest: 'public',
});

const config = {
  reactStrictMode: true,
  // other settings
  turbopack: {}, // Enable Turbopack with default settings
};

export default withPWA(config);
