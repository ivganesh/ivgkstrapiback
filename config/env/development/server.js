module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  proxy: true,
  allowedHosts: ['apicmsstrapi.ivgk.in', 'localhost'],
});
