Practice repo for Nuxt3 

## 00-basics
### install
```shell
npx nuxi init 00-basics
```

### views 
- ```app.vue```  main entry point
- /layouts
  - NuxtLayout
- /pages
  - NuxtPage 
- /components 

### routing 
- NuxtLink
- dynamic and nesting routes
```
pages/
--about.vue
--posts/
----| [id].vue
```

### assets 
- /public
- /assets 

### config
- ```nuxt.config.ts```

### seo and meta 
- Nuxt provides <Title>, <Base>, <Script>, <NoScript>, <Style>, <Meta>, <Link>, <Body>, <Html> and <Head> components so that you can interact directly with your metadata within your component's template.

### transitions 
- layout 
- page

### server
- /server
- /server/api
- /server/routes
