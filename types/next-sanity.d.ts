declare module 'next-sanity' {
    import { SanityClient } from '@sanity/client';
  
    interface ClientConfig {
      projectId: string;
      dataset: string;
      apiVersion: string;
      useCdn?: boolean;
      token?: string;
    }
  
    export function createClient(config: ClientConfig): SanityClient;
  }
  