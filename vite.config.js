import {defineConfig} from 'vite';
import {copyFileSync, mkdirSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

export default defineConfig({
  base: '/581_Portfolio/',
  plugins: [{
    name: 'github-pages-static-routes',
    writeBundle(options) {
      const output = resolve(options.dir || 'dist');
      const caseStudy = resolve(output, 'projects/four-part-harmony');
      mkdirSync(caseStudy, {recursive: true});
      // Pages serves this real file for direct visits and refreshes.
      copyFileSync(resolve(output, 'index.html'), resolve(caseStudy, 'index.html'));
      writeFileSync(resolve(output, '.nojekyll'), '');
    },
  }],
});
