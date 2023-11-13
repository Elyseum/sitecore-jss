/*
 * Represents the type of config object available within the generated temp/config.js
 */
export interface JssConfig extends Record<string, string | undefined> {
  sitecoreApiKey?: string;
  sitecoreApiHost?: string;
  sitecoreEdgeUrl?: string;
  sitecoreEdgeContextId?: string;
  siteName?: string;
  graphQLEndpointPath?: string;
  defaultLanguage?: string;
  graphQLEndpoint?: string;
  layoutServiceConfigurationName?: string;
  publicUrl?: string;
}
