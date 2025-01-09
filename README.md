# Template for Nuxt + Supabase projects

Template ready to build end deploy full-stack applications based on Nuxt and Supabase.
<br> 
Project includes set of important packages, ready to customize layouts, basic pages animation, error page and basic seo setup.

### Included and ready to use modules:
- '@nuxtjs/supabase', 
- '@nuxtjs/tailwindcss', 
- '@nuxt/image', 
- 'nuxt-mail', 
- '@pinia/nuxt', 
- '@nuxt/icon'.

## Setup

### Go to nuxt project folder and install dependencies:

```bash
# npm
npm install
```

### Create .env file:
- EMAIL_USER - gmail if you want to use nuxt-mail
- EMAIL_PASS - gmail one time password
- ENABLE_DEVTOOLS - set 'true' if you need devtools, disable on prod
- SUPABASE_URL - supabase account url
- SUPABASE_KEY - supabase public key

#### Start project:
```bash
# npm
npm run dev
```