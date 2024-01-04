<script setup lang="ts">
useHead({
  titleTemplate: "%s - Portfolio",
});

const personalEmail = "guillermodanilo08@gmail.com";
</script>
<template>
  <div class="flex justify-content-end mb-3">
    <ChangeThemeComponent />
    <ChangeLanguageComponent />
  </div>
  <div class="flex h-9rem xs:hidden">
    <div class="flex align-items-end justify-content-end mr-3">
      <div class="flex align-items-end justify-content-end mr-3">
        <AvatarComponent />
      </div>
      <div class="flex align-items-center justify-content-center">
        <div class="grid">
          <div class="col-12">
            <span
              class="xl:text-5xl lg:text-4xl md:text-4xml sm:text-4xl font-bold xs:pb-0"
              >Guillermo Farías
            </span>
          </div>
          <div class="col-12 xs:pt-0 sm:pt-0">
            <GradientText value="Senior Software Engineer"></GradientText>
          </div>
          <div class="col-12">
            <span class="text-500 text-lg mt-2">
              {{ $t("description.short") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-wrap text-center xl:hidden lg:hidden md:hidden sm:hidden"
  >
    <div class="flex align-items-center justify-content-center w-full">
      <AvatarComponent :size="8" :open-to-work="true" />
    </div>
    <div class="flex align-items-center justify-content-center">
      <div class="grid">
        <div class="col-12 mt-4">
          <span class="text-5xl font-bold xs:pb-0">Guillermo Farías </span>
        </div>
        <div class="col-12 xs:pt-0 sm:pt-0">
          <GradientText value="Senior Software Engineer"></GradientText>
        </div>
      </div>
    </div>
    <div class="col-12 hidden xs:block mt-3">
      <span class="text-700 text-lg">
        {{ $t("description.short") }}
      </span>
    </div>
  </div>
  <div class="flex align-items-center justify-content-center">
    <SocialLinksComponent />
  </div>
  <Divider></Divider>
  <div class="flex text-center">
    <div class="col-12 hidden xs:block mt-3">
      <span class="text-700 text-lg">
        {{ $t("description.long") }}
      </span>
    </div>
  </div>
</template>
