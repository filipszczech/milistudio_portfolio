import { defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
    const { data } = await $fetch('https://strapi.lichtanski.com/api/categories');
    const sitemapUrls = data.map(category => ({ 
        loc: `/${category.slug}` 
    }));
    return sitemapUrls;
});