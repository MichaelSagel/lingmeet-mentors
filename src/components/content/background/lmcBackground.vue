<template>
  <div
    class="lmg-background"
    :class="position === 'top' ? 'lmg-background_top' : 'lmg-background_bottom'"
  >
    <img
      :src="pngPath"
      class="lmg-background-img"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    position?: 'top' | 'bottom',
    pngPath: string,
  }>(),
  {
    position: 'top',
  }
)
</script>

<style scoped lang="scss">
.lmg-background {
  position: absolute;
  z-index: -2;
  left: 0;

  &_top {
    top: 0;
    width: 100%;
    
    @media (max-width: 1645px) {
      width: 1920px;
      left: -275px;
    }

    @media (max-width: 719px) {
      left: -465px;
    }
  }

  &_bottom {
    width: calc(100% + 151px);
    left: -151px;
    bottom: 0;

    @media (max-width: 1645px) {
      width: 2291.31px;
      left: -426px;
    }
  }
}

.lmg-background-img {
  width: 100%;
  max-height: 1000px;
}
</style>
