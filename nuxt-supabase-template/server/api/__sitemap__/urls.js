import { defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
    const res = await $fetch('/api/categories');
    const sitemapUrls = res.map(category => ({ 
        loc: `/${category.slug}` 
    }));
    return sitemapUrls;
});