module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1330),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5c8df95cbb82db4dc30949b437450916'),
    },
  },
});
