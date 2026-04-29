<template>
  <div class="lmc-email-formular">
    <div>
      <div class="lmc-email-formular__header-container">
        <span class="lmc-email-formular__header-container_font">E-Mail</span>-Formular
      </div>

      <div class="lmc-email-formular__content-container">
        <div class="lmc-email-formular__content">
          Bald starten wir in Berlin. Melden Sie sich jetzt an und werden Sie Teil der Sprachcommunity.
        </div>
        
        <lmcEmailForm/>

      </div>

    </div>
    <img
      :src="brandenburgGate"
      class="lmc-email-formular__img"
    />
  </div>
</template>

<script setup>
import lmcEmailForm from '../../emailForm/lmcEmailForm.vue';
import brandenburgGate from '../../../assets/brandenburgGate.png'
</script>

<style scoped lang="scss">
.lmc-email-formular {
  display: flex;
  width: 100%;
  padding-top: 58px;
  padding-bottom: 70px;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  gap: 54px;
  
  @media (max-width: 1084px) {
    padding-top: 40px;
    flex-wrap: wrap-reverse;
  }
  
  @media (max-width: 721px) {
    padding-top: 28px;
    padding-bottom: 40px;
  }
}

.lmc-email-formular__header-container {
  font-size: 50px;
  max-width: 743px;
  text-align: start;
  line-height: 70px;
  
  @media (max-width: 721px) {
    font-size: 38px;
  }

  &_font{
    font-weight: 800;
  }
}

.lmc-email-formular__content-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media (max-width: 721px) {
    margin-top: 10px;
    gap: 22px;
  }
}

.lmc-email-formular__content {
  font-size: 20px;
  max-width: 571px;
  
  @media (max-width: 721px) {
    font-size: 16px;
  }
}

.lmc-email-formular__img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
</style>
