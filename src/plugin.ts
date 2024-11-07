import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const backstagePluginKrknChaosPlugin = createPlugin({
  id: 'backstage-plugin-krkn-chaos',
  routes: {
    root: rootRouteRef,
  },
});

export const BackstagePluginKrknChaosPage = backstagePluginKrknChaosPlugin.provide(
  createRoutableExtension({
    name: 'BackstagePluginKrknChaosPage',
    component: () =>
      import('./components/KrknProjectMainComponent').then(m => m.ProjectInfoComponent),
    mountPoint: rootRouteRef,
  }),
);
