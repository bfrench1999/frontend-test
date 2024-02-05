const contentful = require("contentful/dist/contentful.browser");
export default ({ $config }, inject) => {
  // use default environment config for convenience
  // these will be set via `env` property in nuxt.config.js
  const config = {
    space: $config.spaceId,
    accessToken: $config.accessKey,
  };

  // export `createClient` to use it in page components
  const client = contentful.createClient(config);
  inject("contentful", client);
};
