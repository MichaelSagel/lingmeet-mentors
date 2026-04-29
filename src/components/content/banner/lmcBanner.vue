<template>
  <div class="lmc-banner">
    <div class="lmc-banner__content-conteiner">
      <div class="lmc-banner__content">

        <div class="lmc-banner__logo">
          <img :src="logo" />
        </div>

        <div class="lmc-banner__title-conteiner">
          <span class="lmc-banner__title-conteiner_thick">
            Jeder kann
          </span>
          Lehrer sein
        </div>

        <div class="lmc-banner__text-conteiner">
          <span class="lmc-banner__text-conteiner_thick">
            Teilen Sie Ihre Muttersprache mit anderen
          </span>
          <span class="lmc-banner__title-conteiner_thin">
          ohne Unterricht, einfach durch Gespräche.
          </span>
        </div>

        <div class="lmc-banner__text-conteiner">
          <span class="lmc-banner__text-conteiner_thick">
            Treffen Sie Menschen, die Deutsch üben möchten
          </span>
          <span class="lmc-banner__title-conteiner_thin">
            ganz spontan, persönlich und gegen Bezahlung.
          </span>
        </div>

        <lmcEmailForm is-position-inside/>

      </div>

    </div>

    <div class="lmc-banner__image-container">
      <img
        :src="bannerImg"
        class="lmc-banner__image"
      />
    </div>
  </div>
</template>

<script setup>
import lmcEmailForm from '../../emailForm/lmcEmailForm.vue';
import bannerImg from '../../../assets/bannerImg.png';
import logo from '../../../assets/logo.svg?url';
</script>

<style scoped lang="scss">
.lmc-banner {
  display: flex;
  gap: 32px;
  padding-top: 120px;
  
  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
    gap: 64px;
    padding: 0;
  }
}

.lmc-banner__logo {
  position: absolute;
  top: 40px;
  
  @media (max-width: 1279px) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
  }
}

.lmc-banner__content-conteiner {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 1279px) {
    align-items: center;
    width: 100%;
  }
}

.lmc-banner__content {
  padding-right: 32px;
  max-width: 571px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  
  @media (max-width: 721px) {
    gap: 22px;
  }
}

.lmc-banner__title-conteiner {
  font-size: 50px;
  
  @media (max-width: 721px) {
    font-size: 36px;
  }

  &_thick {
    font-weight: 800;
  }
}

.lmc-banner__text-conteiner {
  font-size: 20px;
  
  @media (max-width: 721px) {
    font-size: 17px;
  }
  
  &_thick {
    font-weight: 800;
  }
}

.lmc-banner__image-container {
  display: flex;
}

.lmc-banner__image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
</style>
