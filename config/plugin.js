module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'cloud-name',
      api_key: 'api-key',
      api_secret: 'api-secret',
    },
  },
});
