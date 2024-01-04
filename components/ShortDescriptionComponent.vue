<script setup>
defineProps({
  language: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p class="text-700">
    {{ language.shortDescription }}
  </p>
</template>
