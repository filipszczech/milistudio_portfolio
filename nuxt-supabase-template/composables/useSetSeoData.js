export function useSetSeoData({ title, description, image = '', type='' }) {
    const route = useRoute();
    const formattedTitle = title.toLowerCase();
  
    useHead({
      title: `Website | ${formattedTitle}`,
    });
  
    useSeoMeta({
      description: `Website - ${description}`,
      ogTitle: `Website.pl - ${formattedTitle}`,
      ogDescription: `Zobacz ${formattedTitle} na stronie Website.`,
      ogImage: image,
      ogUrl: `https://website.pl${route.fullPath}`,
      twitterTitle: `Website - ${type}: ${formattedTitle}`,
      twitterDescription: `Website - ${description}`,
      twitterImage: image,
      twitterCard: 'summary_large_image',
    });
  }