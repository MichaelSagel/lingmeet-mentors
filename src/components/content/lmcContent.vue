<template>
  <div class="lmc-content">
    <lmcBackground
      :png-path="backgroundTopPng"
    />

    <div class="lmc-content__container">
      <lmcBanner />
      <lmcStep />
      <lmcReason />
      <lmcEmailFormular />
    </div>

    <lmcBackground
      :png-path="backgroundBottomPng"
      position="bottom"
    />

    <lmcDesignIconGrub />
  </div>
</template>

<script setup>
import lmcBanner from './banner/lmcBanner.vue';
import lmcStep from './step/lmcStep.vue';
import lmcReason from './reason/lmcReason.vue';
import lmcEmailFormular from './emailFormular/lmcEmailFormular.vue';
import lmcBackground from './background/lmcBackground.vue';
import lmcDesignIconGrub from './lmcDesignIconGrub/lmcDesignIconGrub.vue';
import backgroundBottomPng from '../../assets/backgroundBottomPng.png';
import backgroundTopPng from '../../assets/backgroundTopPng.png';
</script>

<style scoped>
.lmc-content {
  position: relative;
}

.lmc-content__container {
  display: flex;
  flex-direction: column;
  padding: 48px;
}
</style>
