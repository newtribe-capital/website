// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head:{
      charset: 'utf-8',
      title: "NewTribe Capital: Leading Web3 Blockchain Venture Capitalists",
      titleTemplate: "%s - NewTribe Capital: Leading Web3 Blockchain Venture Capitalists",
      meta: [
        { name: 'description', content: 'NewTribe Capital specializes in early-stage Web3 investments, supporting the growth of blockchain and crypto innovations across Asia, Europe, and MENA. Discover our portfolio, team, and unique ecosystem support.' },
        { property: 'theme-color', content: '#005EFF' },
        { property: 'keywords', content: 'Venture Capital, Crypto, Blockchain, Dubai, UAE, Investing, Web3 Investments, Blockchain Venture Capital, Crypto Projects, Early-stage Investments, Tokenomics, Macroeconomics, MENA Blockchain Ventures, Asia Crypto Investments, Europe Blockchain Startups, Web3 Ecosystem, Decentralized Technology, NewTribe Capital, Web3 Proprietary Investment, Defi Projects, Metaverse Investments, NFT Ventures, Launchpads, Web3 Gaming, Infrastructure, AI in Blockchain' },
        { property: 'og:title', content: 'NewTribe Capital: Leading Web3 Blockchain Venture Capitalists' },
        { property: 'og:description', content: 'NewTribe Capital specializes in early-stage Web3 investments, supporting the growth of blockchain and crypto innovations across Asia, Europe, and MENA. Discover our portfolio, team, and unique ecosystem support.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dezmjeesi/image/upload/v1694086675/SEO/Metaimage/Metaimage_Newtribe_y8adne.png' },
        { property: 'og:image:secure_url', content: 'https://res.cloudinary.com/dezmjeesi/image/upload/v1694086675/SEO/Metaimage/Metaimage_Newtribe_y8adne.png' },
        { property: 'og:url', content: 'https://www.newtribe.capital/' },
        { property: 'og:site_name', content: 'NewTribe Capital: Leading Web3 Blockchain Venture Capitalists' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:copyright', content: '© https://www.newtribe.capital/, 2023. All rights reserved' },
        { property: 'twitter:title', content: 'NewTribe Capital: Leading Web3 Blockchain Venture Capitalists' },
        { property: 'twitter:description', content: 'NewTribe Capital specializes in early-stage Web3 investments, supporting the growth of blockchain and crypto innovations across Asia, Europe, and MENA. Discover our portfolio, team, and unique ecosystem support.' },
        { property: 'twitter:image', content: 'https://res.cloudinary.com/dezmjeesi/image/upload/v1694086675/SEO/Metaimage/Metaimage_Newtribe_y8adne.png' },
        { property: 'twitter:site', content: 'https://www.newtribe.capital/' },
        { property: 'msapplication-TileColor', content: '#005EFF' },
        { property: 'msapplication-TileImage', content: 'https://res.cloudinary.com/dezmjeesi/image/upload/v1694086675/SEO/Metaimage/Metaimage_Newtribe_y8adne.png' },
      ],
      link: [

      ],
      script: [{
        children:`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "irbpwjhmo1");`
      }],
    }
  },
  css: [
    '@/assets/css/style.css',
  ],
  modules: ['nuxt-swiper'],
  // plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})