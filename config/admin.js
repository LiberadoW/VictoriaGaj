module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7500c2a73231963e7e80c4d8ab29c4cb'),
  },
});
