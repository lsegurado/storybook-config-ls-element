import { storybookPlugin } from "@web/dev-server-storybook";
import { esbuildPlugin } from '@web/dev-server-esbuild';
import resolveCssLSElementPlugin from "@lsegurado/ls-server/bin/utils/resolveCssLSElementPlugin.js";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export default {
  nodeResolve: true,
  open: true,
  watch: true,
  mimeTypes: {
    '**/*.css': 'js',
  },
  plugins: [
    storybookPlugin({ type: "web-components", configDir: join(dirname(fileURLToPath(import.meta.url)),'/dist') }),
    esbuildPlugin({
      ts: true,
      tsx: true,
      jsxFactory: "h.createElement",
      jsxFragment: "h.Fragment"
    }),
    {
      name: resolveCssLSElementPlugin.default.name,
      serve(context) {
        if (context.path.endsWith('.css')) {
          let contents = '';
          const onLoad = (_filter, onLoadFunction) => {
            contents = onLoadFunction({ path: join(process.cwd(), context.path) }).contents
          }
          resolveCssLSElementPlugin.default.setup({ onLoad });
          return contents;
        }
      },
    },
  ],
};