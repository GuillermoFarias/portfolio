<script setup>
import Avatar from "primevue/avatar";

const { getLocaleMessage } = useI18n();
const language = useState("lang", () => "es");
const isDark = useState("isDark", () => false);

const experience = ref([]);

const loadFromLanguage = async () => {
  const messages = getLocaleMessage(language.value);
  experience.value = messages.experience;
};

watch(language, (value) => {
  loadFromLanguage();
});

onMounted(() => {
  loadFromLanguage();
});
</script>
<template>
  <Timeline
    :value="experience"
    align="left"
    class="customized-timeline"
    :pt="{
      opposite: {
        style: 'flex: none !important; padding: 0 !important;',
      },
      connector: {
        style:
          'width: 1px !important;background-color: var(--surface-d) !important',
      },
    }"
  >
    <template #marker="slotProps">
      <Avatar
        :label="slotProps.item.company.avatar"
        :style="
          `background-color:` +
          slotProps.item.company.color +
          `; color: #ffffff`
        "
        shape="circle"
        v-animateonscroll="{
          enterClass: 'fadein',
        }"
      />
    </template>
    <template #content="slotProps">
      <a
        :href="slotProps.item.company.url"
        target="_blank"
        :style="
          `color:` + slotProps.item.company.color + `; text-decoration: none`
        "
        rel="noopener noreferrer"
        class="text-xl font-bold"
        v-animateonscroll="{
          enterClass: 'fadein',
        }"
      >
        {{ slotProps.item.company.name }}
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
          {{ slotProps.item.company.industry }}
          <br />
        </template>
        <template #content>
          {{ slotProps.item?.job?.description }}
          <Divider class="mb-0" />
          <h2 class="text-sm font-bold mt-2">
            {{ slotProps.item.technologies.title }}
          </h2>
          <TechIcon
            v-for="tech in slotProps.item.technologies"
            :key="tech"
            :icon="tech"
            :dark="isDark"
            size="medium"
            :hover="true"
          />
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<style scoped>
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

.p-card {
  border: var(--surface-d) 1px solid;
  box-shadow: none !important;
  border-radius: 2px;
}
</style>
