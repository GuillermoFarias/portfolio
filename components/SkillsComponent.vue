<script setup>
import Card from "primevue/card";
import Tag from "primevue/tag";
import TechIcon from "./TechIcon.vue";

const props = defineProps({
  language: {
    type: Object,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: false,
  },
});

const sections = [
  {
    title: props.language.sections.skills.technologies.title,
    icons: ["php", "java", "javascript", "typescript", "nodejs"],
  },
  {
    title: props.language.sections.skills.methodologies.title,
    tags: ["Scrum", "Kanban"],
  },
  {
    title: props.language.sections.skills.frameworks.title,
    icons: [
      "laravel",
      "symfony",
      "express",
      "nextjs",
      "nestjs",
      "nuxtjs",
      "loopback",
      "electron",
      "adonisjs",
      "spring",
      "springboot",
      "ionic",
    ],
  },
  {
    title: props.language.sections.skills.front.title,
    icons: ["vue", "react", "angular"],
  },
  {
    title: props.language.sections.skills.databases.title,
    icons: ["mysql", "postgresql", "redis", "mongodb"],
  },
  {
    title: props.language.sections.skills.cloud.title,
    icons: ["gcp", "azure", "aws", "digitalocean"],
  },
  {
    title: props.language.sections.skills.cloudplatforms.title,
    icons: ["railway", "netlify", "firebase", "cloudflare"],
  },
  {
    title: props.language.sections.skills.infrastructure.title,
    icons: ["terraform", "kubernetes", "rancher", "docker"],
  },
  {
    title: props.language.sections.skills.cicd.title,
    icons: ["github", "gitlab", "bitbucket", "aws", "drone"],
  },
  {
    title: props.language.sections.skills.more.title,
    icons: [
      "tailwindcss",
      "bootstrap",
      "materialize",
      "bulma",
      "chakraui",
      "arduino",
      "primevue",
    ],
  },
];
</script>
<template>
  <Card
    v-for="section in sections"
    v-bind:key="section.title"
    class="mb-4 mt-5"
    v-animateonscroll="{
      enterClass: 'fadein',
      leaveClass: 'fadeout',
    }"
    :unstyled="true"
  >
    <template #title>
      <h3 class="text-sm font-bold">
        {{ section.title }}
      </h3>
    </template>
    <template #content>
      <div v-if="section.tags">
        <Tag
          v-for="tag in section.tags"
          :key="tag"
          severity="primary"
          :value="tag"
          class="mr-2"
        ></Tag>
      </div>
      <TechIcon
        v-else-if="section.icons"
        v-for="icon in section.icons"
        :key="icon"
        :icon="icon"
        :dark="isDark"
        size="medium"
      />
    </template>
  </Card>
</template>
