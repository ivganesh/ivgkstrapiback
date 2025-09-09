module.exports = [
  'strapi::errors',
  { name: 'strapi::security', config: {} },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://209.182.233.140:1337',
        'https://apicmsstrapi.ivgk.in'
      ],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
