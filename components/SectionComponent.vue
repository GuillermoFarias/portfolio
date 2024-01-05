<script setup lang="ts">
import type { SectionColumn } from "~~/types/index.d";

const defaultColumn: SectionColumn = {
  name: "defaultColumn",
  title: "defaultTitle",
  class: "col-12",
};

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Default Title",
  },
  columns: {
    type: Array as PropType<SectionColumn[]>,
    required: false,
    default: () => [],
  },
});
</script>
<template>
  <section class="fadein animation-duration-1000 w-full">
    <div class="grid">
      <!-- Only one column -->
      <div v-if="columns.length === 0" class="col-12 pt-0">
        <h2 class="text-2xl text-700 font-bold mt-1">
          <i class="pi pi-angle-double-right" style="font-size: 1.2rem"></i>
          {{ title }}
        </h2>
        <div class="col-12 pt-0">
          <slot />
        </div>
      </div>

      <!-- Multiple columns -->
      <template v-else-if="columns.length > 0" v-for="column in columns">
        <div :class="column['class']">
          <h2 class="text-2xl text-700 font-bold mt-1">
            <i class="pi pi-angle-double-right" style="font-size: 1.2rem"></i>
            {{ column["title"] }}
          </h2>
          <div class="col-12 pt-0">
            <slot :name="column['name']" />
          </div>
        </div>
        <slot :name="'after-' + column['name']" />
      </template>
    </div>
  </section>
</template>
<style scoped>
.xl\:col-8 {
  width: 64%;
}

.lg\:col-8 {
  width: 64%;
}

.md\:col-8 {
  width: 64%;
}

.sm\:col-8 {
  width: 64%;
}

.col-8 {
  width: 64%;
}

.xl\:col-4 {
    width: 32.4%;
}

.lg\:col-4 {
    width: 32.4%;
}

.md\:col-4 {
    width: 32.4%;
}

.sm\:col-4 {
    width: 32.4%;
}

.col-4 {
    width: 32.4%;
}

</style>
