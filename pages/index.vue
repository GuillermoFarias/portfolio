<script setup lang="ts">
useHead({
  titleTemplate: "%s - Portfolio",
});

const lang = useState("lang", () => "es");
const year = new Date().getFullYear();
</script>
<template>
  <div class="flex justify-content-end mb-3">
    <ChangeThemeComponent />
    <ChangeLanguageComponent />
  </div>
  <div class="flex xs:hidden">
    <div class="grid">
      <div
        class="xl:col-9 xl:col-offset-2 lg:col-12 lg:col-offset-0 md:col-12 md:col-offset-0 sm:col-11 sm:col-offset-1"
      >
        <div class="flex justify-content-center">
          <div class="flex align-items-start">
            <div class="flex justify-content-center mr-5 flex-wrap">
              <AvatarComponent :size="9" />
              <div class="mt-0 p-0">
                <SocialLinksComponent />
              </div>
            </div>
            <div class="flex">
              <div class="grid">
                <div class="col-12">
                  <span
                    class="xl:text-5xl lg:text-5xl md:text-5xml sm:text-4xl font-bold"
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
  <div class="flex">
    <SectionComponent
      :columns="[
        {
          name: 'experience',
          title: $t('sections.experience'),
          class: 'xl:col-8 lg:col-8 md:col-8 sm:col-12 xs:col-12',
        },
        {
          name: 'skills',
          title: $t('sections.skills'),
          class: 'xl:col-4 lg:col-4 md:col-4 sm:col-12 xs:col-12',
        },
      ]"
    >
      <template #experience>
        <TimeLineComponent />
      </template>
      <template #after-experience>
        <Divider
          layout="vertical"
          class="lg:block md:block sm:hidden xs:hidden m-0 p-0"
        ></Divider>
      </template>
      <template #skills>
        <SkillsComponent />
      </template>
    </SectionComponent>
  </div>
  <Divider></Divider>
  <div class="flex">
    <SectionComponent :title="$t('sections.projects')">
      <ProjectsComponent />
    </SectionComponent>
  </div>
  <Divider></Divider>
  <div class="grid p-0 grid-nogutter surface-section text-800">
    <div
      class="col-12 md:col-6 p-4 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block text-5xl font-bold mb-1">{{
          $t("openToWork.title")
        }}</span>
        <div class="text-5xl text-primary font-bold mb-3">
          {{ $t("openToWork.subtitle") }}
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
          {{ $t("openToWork.description") }}
        </p>

        <SocialLinksComponent />
      </section>
    </div>
    <div
      class="col-12 md:col-6 overflow-hidden lg:block md:block sm:hidden xs:hidden"
    >
      <img
        src="/images/me.png"
        alt="Image"
        class="md:ml-auto block md:h-26rem"
        style="
          clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%);
          filter: opacity(0.5);
        "
      />
    </div>
    <!-- xmall -->
    <div class="col-12 xl:hidden lg:hidden md:hidden">
      <Image
        src="/images/me.png"
        alt="Image"
        width="100%"
        style="filter: opacity(0.5)"
      />
    </div>
  </div>
  <Divider></Divider>

  <div class="py-2 text-center">
    <AvatarComponent :size="3" :openToWork="false" />
    <div class="font-medium text-900 mt-2 mb-2">
      &copy; {{ year }} Guillermo Farías
    </div>
    <div class="flex align-items-center justify-content-center">
      <p v-if="lang === 'en'" class="text-600 mt-0 mb-2">
        Made with Nuxt.js and Primevue, hosted on Railway.
      </p>
    </div>
    <div class="flex align-items-center justify-content-center mb-3">
      <SocialLinksComponent />
    </div>
  </div>
</template>
