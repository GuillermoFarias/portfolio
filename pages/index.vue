<script setup lang="ts">
useHead({
  titleTemplate: "%s - Portfolio",
});
</script>
<template>
  <div class="flex justify-content-end mb-3">
    <ChangeThemeComponent />
    <ChangeLanguageComponent />
  </div>
  <div class="flex h-11rem xs:hidden">
    <div class="flex flex align-items-center justify-content-center mr-4">
      <div
        class="flex align-items-center justify-content-center mr-4 flex-wrap"
      >
        <AvatarComponent :size="8" />
        <div class="mt-2">
          <SocialLinksComponent />
        </div>
      </div>
      <div class="flex align-items-center justify-content-center mt-3 sm:mt-2">
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
            <span class="text-700 text-lg mt-2">
              {{ $t("description.short") }}
            </span>
          </div>
          <div class="col-12">
            <ContactButtonsComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-wrap text-center xl:hidden lg:hidden md:hidden sm:hidden"
  >
    <div class="flex align-items-center justify-content-center w-full">
      <AvatarComponent :size="10" />
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
    <div class="col-12 mt-2">
      <span class="text-700 text-lg">
        {{ $t("description.short") }}
      </span>
    </div>
    <div class="col-12">
      <SocialLinksComponent />
    </div>
  </div>
  <Divider></Divider>
  <div class="flex text-center">
    <div class="col-12">
      <p class="text-700 font-italic">
        {{ $t("description.long") }}
      </p>
      <div class="xl:hidden lg:hidden md:hidden sm:hidden">
        <ContactButtonsComponent />
      </div>
    </div>
  </div>
  <Divider></Divider>
</template>
