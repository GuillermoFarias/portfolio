<script setup>
import Timeline from "primevue/timeline";
import Avatar from "primevue/avatar";
import Card from "primevue/card";
import Divider from "primevue/divider";
import experience from "../data/experience.json";
import TechIcon from "./TechIcon.vue";
import { ref, watch } from "vue";

const events = experience;

const props = defineProps({
  language: {
    type: Object,
    required: true,
  },
  dark: {
    type: Boolean,
    required: false,
  },
});

watch(
  () => props.language.code,
  (newVal) => {
    languageCode.value = newVal;
  }
);

const languageCode = ref(props.language.code);
</script>
<template>
  <Timeline
    :value="events"
    align="left"
    class="customized-timeline"
    :pt="{
      opposite: {
        style: 'flex: none !important; padding: 0 !important;',
      },
    }"
  >
    <template #marker="slotProps">
      <Avatar
        :label="slotProps.item.avatar"
        :style="`background-color:` + slotProps.item.color + `; color: #ffffff`"
        shape="circle"
        v-animateonscroll="{
          enterClass: 'fadein',
        }"
      />
    </template>
    <template #content="slotProps">
      <a
        :href="slotProps.item.url"
        target="_blank"
        :style="`color:` + slotProps.item.color + `; text-decoration: none`"
        rel="noopener noreferrer"
        class="text-xl font-bold"
        v-animateonscroll="{
          enterClass: 'fadein',
        }"
      >
        {{ slotProps.item.company }}
        <i class="pi pi-link"></i>
      </a>
      <Card
        class="mt-2 mb-4"
        v-animateonscroll="{
          enterClass: 'fadein',
        }"
      >
        <template #title>
          {{ slotProps.item?.job?.title }}
        </template>
        <template #subtitle>
          <i class="pi pi-calendar"></i>
          {{ slotProps.item.from }} - {{ slotProps.item.to }}
          <div class="mt-2"></div>
          <i class="pi pi-building"></i>
          {{ slotProps.item.industry }}
          <br />
        </template>
        <template #content>
          {{
            slotProps.item?.job?.description ||
            slotProps.item?.job?.["description_" + languageCode]
          }}
          <Divider class="mb-0" />
          <h2 class="text-sm font-bold mt-2">
            {{ language.timeline.technologies.title }}
          </h2>
          <TechIcon
            v-for="tech in slotProps.item?.job?.technologies"
            :key="tech"
            :icon="tech"
            :dark="dark"
            size="medium"
            :hover="true"
          />
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<style>
.p-card .p-card-body {
  padding: 1rem !important;
}

.p-timeline-event-content {
  margin-top: 0.2rem !important;
}

.p-card-title {
  font-size: 1.3rem !important;
}

.p-card-content {
  padding: 0rem 0 !important;
  padding-top: 1rem !important;
}
</style>
