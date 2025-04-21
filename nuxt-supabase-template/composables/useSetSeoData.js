export function useSetSeoData({ title, description, image = '', type='' }) {
    const route = useRoute();
    const formattedTitle = title.toLowerCase();
  
    useHead({
      title: `Milistudio - ${formattedTitle}`,
    });
  
    useSeoMeta({
      description: `Milistudio - ${description}`,
      ogTitle: `${formattedTitle}`,
      ogDescription: `Milistudio - ${description}`,
      ogImage: image,
      ogUrl: `https://website.pl${route.fullPath}`,
      twitterTitle: formattedTitle,
      twitterDescription: `Milistudio - ${description}`,
      twitterImage: image,
      twitterCard: 'summary_large_image',
    });
  }