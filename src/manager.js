import { addons } from '@web/storybook-prebuilt/addons';
import { themes } from './themes';
import { STORY_RENDERED, DOCS_RENDERED } from '@web/storybook-prebuilt/core-events';

const storageTheme = JSON.parse(localStorage.getItem('theme')) || 'light';

addons.setConfig({
  theme: themes[storageTheme],
});

addons.register('@lsegurado/theme-listener', (api) => {
  const channel = api.getChannel();
  channel.on(STORY_RENDERED, () => {
    const newStorageTheme = JSON.parse(localStorage.getItem('theme')) || 'light';
    api.setOptions({
      theme: themes[newStorageTheme],
    });
  });
  channel.on(DOCS_RENDERED, () => {
    const newStorageTheme = JSON.parse(localStorage.getItem('theme')) || 'light';
    api.setOptions({
      theme: themes[newStorageTheme],
    });
  });
});
