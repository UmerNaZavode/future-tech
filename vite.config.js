// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import Handlebars from 'handlebars' // 👈 Импортируем runtime

// Регистрируем хелпер `eq`
Handlebars.registerHelper('eq', (a, b) => a === b)

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),

      // Передаём текущую страницу в шаблон
      context(pagePath) {
        if (pagePath.includes('index.html')) return { currentPage: 'home' }
        if (pagePath.includes('news.html')) return { currentPage: 'news' }
        if (pagePath.includes('podcasts.html')) return { currentPage: 'podcasts' }
        if (pagePath.includes('resources.html')) return { currentPage: 'resources' }
        return {}
      }
    })
  ]
})





// vite.config.js
// import { resolve } from 'path';
// import { defineConfig } from "vite";
// import handlebars from "vite-plugin-handlebars";
//
// export default defineConfig({
//   plugins: [
//     handlebars({
//       partialDirectory: resolve(__dirname, "partials"),
//     }),
//   ],
// });
