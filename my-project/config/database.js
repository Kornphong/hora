module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfoj1eg2i3mo4btrbtmg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'sample_p0uw'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'Hi04nDBO27mwMKDoxhxkerQgfk3dXHGW'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
