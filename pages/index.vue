<template>
  <div>
    <HeroSection />
    <TechStack />
    <section id="projects">

      <ProjectList />
    </section>
  </div>
</template>

<script lang="ts" setup>

useHead({
  title: "Chibuzor Gregory Iheaneme - AI Automation Expert && Full Stack Developer",
  meta: [
    { name: "description", content: "Tech-driven professional transitioning from technical support to full-stack development, with over 4 years of experience in the web hosting industry." },
    { name: "keywords", content: "tech, ai, full-stack, code" },

    // Open Graph (Facebook, LinkedIn, etc.)
    { property: "og:title", content: "Chibuzor Gregory Iheaneme - AI Automation Expert && Full Stack Developer" },
    { property: "og:description", content: "Tech-driven professional transitioning from technical support to full-stack development, with over 4 years of experience in the web hosting industry." },
    { property: "og:image", content: "/greg.jpg" },
    { property: "og:url", content: "https://gregscolumn.com/" },
    { property: "og:type", content: "profile" },
    { property: "og:profile:first_name", content: "Chibuzor" },
    { property: "og:profile:last_name", content: "Iheaneme" },
    { property: "og:profile:username", content: "gregscolumn" },
    { property: "og:profile:gender", content: "male" },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Chibuzor Gregory Iheaneme - AI Automation Expert && Full Stack Developer" },
    { name: "twitter:description", content: "Tech-driven professional transitioning from technical support to full-stack development, with over 4 years of experience in the web hosting industry." },
    { name: "twitter:image", content: "/greg.jpg" },

    // Social Media Profile Links
    { property: "og:see_also", content: "https://www.linkedin.com/in/chibuzor-i" },
    { property: "og:see_also", content: "https://github.com/iheanemegregory-9" },
  ],
  link: [
    { rel: "canonical", href: "https://gregscolumn.com/" },
  ],
});


</script>

<style>

*{
  scroll-behavior: smooth;
}

</style>