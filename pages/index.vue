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
  <div class="flex h-9rem">
    <div class="flex align-items-end justify-content-end mr-3">
      <div class="flex align-items-end justify-content-end mr-3">
        <Avatar class="profile-xlarge border-2 xs:ml-4" shape="circle">
          <div
            style="
              position: relative;
              text-align: center;
              color: white;
              top: 2px;
            "
          >
            <Image
              src="https://avatars.githubusercontent.com/u/11460907?v=4"
              alt="Image"
              width="100%"
              class="pb-0"
            />
            <a :href="`mailto:` + personalEmail" target="_blank">
              <Tag
                value="Open to work"
                severity="success"
                class="w-full text-sm font-bold"
                style="
                  position: absolute;
                  bottom: -1px;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  border-radius: 50px;
                  cursor: pointer;
                "
              />
            </a>
          </div>
        </Avatar>
      </div>
      <div class="flex align-items-center justify-content-center">
        <div class="grid">
          <div class="col-12">
            <span
              class="xl:text-5xl lg:text-5xl md:text-5xml sm:text-4xl xs:text-4xl font-bold xs:pb-0"
              >Guillermo Farías
            </span>
          </div>
          <div class="col-12 xs:pt-0 sm:pt-0">
            <GradientText
              value="Senior Software Engineer"
              size="3xl"
            ></GradientText>
          </div>
          <div class="col-12 xs:hidden">
            <span class="text-500 text-lg mt-2">
              {{ $t("description.short") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex text-center">
    <div class="col-12 hidden xs:block mt-3">
      <span class="text-500 text-lg">
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
      <span class="text-500 text-lg">
        {{ $t("description.long") }}
      </span>
    </div>
  </div>
</template>
<style>
.topbar {
  height: 50px;
  width: 100%;
}

.profile-xlarge {
  width: 9rem;
  height: 9rem;
}

.p-avatar img {
  width: 100%;
  height: auto;
}
</style>
