import {defineConfig} from 'vite';
import {copyFileSync, mkdirSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

export default defineConfig({
  base: '/581_Portfolio/',
  plugins: [{
    name: 'github-pages-static-routes',
    writeBundle(options) {
      const output = resolve(options.dir || 'dist');
      // Pages serves these real files for direct visits and refreshes.
      for (const slug of ['four-part-harmony', 'airsculpt']) {
        const caseStudy = resolve(output, 'projects', slug);
        mkdirSync(caseStudy, {recursive: true});
        copyFileSync(resolve(output, 'index.html'), resolve(caseStudy, 'index.html'));
      }
      writeFileSync(resolve(output, '.nojekyll'), '');
    },
  }],
});
