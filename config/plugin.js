module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('cloud-name'),
      api_key: env('api-key'),
      api_secret: env('api-secret'),
    },
  },
});
