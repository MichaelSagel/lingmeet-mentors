<template>
  <div class="card" role="group" :aria-label="text">
    <div class="card__icon">
      <slot name="icon" />
    </div>
    <p class="card__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<style scoped lang="scss">
.card {
  padding: 16px;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.card__icon {
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background: #F6F8FA;
  display: grid;
  place-items: center;
  
  @media (max-width: 721px) {
  width: 90px;
  height: 90px;
  }
}

.card__text {
  margin: 0;
  max-width: 256px;
  color: #414141;
  font-size: 20px;
  line-height: 1.55;
  letter-spacing: .2px;
  text-align: center;
  
  @media (max-width: 721px) {
    font-size: 16px;
  }
}
</style>
