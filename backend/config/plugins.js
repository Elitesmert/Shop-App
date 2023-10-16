module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_DEPLOY_PLUGIN_HOOK"),
      apiToken: env("VERCEL_DEPLOY_PLUGIN_API_TOKEN"),
      appFilter: env("VERCEL_DEPLOY_PLUGIN_APP_FILTER"),
      teamFilter: env("VERCEL_DEPLOY_PLUGIN_TEAM_FILTER"),
      roles: ["strapi-super-admin"],
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
