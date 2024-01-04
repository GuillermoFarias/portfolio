<script setup lang="ts">
import { useConfigStore } from "~/store/config";
import { useI18n } from "#imports";

const i18n = useI18n();
const darkTheme = "/themes/bootstrap4-dark-blue/theme.css";
const lightTheme = "/themes/bootstrap4-light-blue/theme.css";

const configStore = useConfigStore();
const isDark = useState("isDark", () => configStore.isDark);
const lang = useState("lang", () => configStore.lang);
i18n.setLocale(lang.value);

useHead({
  title: "Guillermo Farías",
  meta: [
    {
      name: "description",
      content:
        "Sr. Software Engineer with 7+ years of experience in the software industry.",
    },
  ],
  script: [{ innerHTML: "console.log('Hola! ¿Qué haces aquí 👀?')" }],
  link: [
    {
      id: "theme-link",
      rel: "stylesheet",
      href: () => (isDark.value ? darkTheme : lightTheme),
    },
  ],
});

watch(isDark, (isDark) => {
  configStore.setIsDark(isDark);
  useHead({
    link: [
      {
        id: "theme-link",
        rel: "stylesheet",
        href: () => (isDark ? darkTheme : lightTheme),
      },
    ],
  });
});

watch(lang, (value) => {
  configStore.setLang(value);
  i18n.setLocale(value);
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
