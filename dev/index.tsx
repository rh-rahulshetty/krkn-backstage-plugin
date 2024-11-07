import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstagePluginKrknChaosPlugin, BackstagePluginKrknChaosPage } from '../src/plugin';

createDevApp()
  .registerPlugin(backstagePluginKrknChaosPlugin)
  .addPage({
    element: <BackstagePluginKrknChaosPage />,
    title: 'Root Page',
    path: '/backstage-plugin-krkn-chaos',
  })
  .render();
