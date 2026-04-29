<template>
  <div class="lmc-step">
    <div class="lmc-step__container">
      <div
        class="lmc-step__rectangle"
        style="background-color: #7462E0;"
      >
      <img :src="iconOne" />
      </div>
      <div class="lmc-step__text">
        Erstellen Sie ein Profil - geben Sie an, welche Sprache Sie unterrichten
      </div>
    </div>

    <div class="lmc-step__container">
      <div
        class="lmc-step__rectangle"
        style="background-color: #FF9838;"
      >
      <img :src="iconSecond" />
      </div>
      <div class="lmc-step__text">
        Erstellen Sie Ihr eigenes Sprach-Treffen - mit Thema und Ort - und erhalten Sie Anfragen von Interessenten
      </div>
    </div>

    <div class="lmc-step__container">
      <div
        class="lmc-step__rectangle"
        style="background-color: #DE133D;"
      >
        <img :src="iconThird" />
      </div>

      <div class="lmc-step__text">
        Helfen Sie anderen Deutsch zu verbessern
      </div>
    </div>
      <img
        :src="squareBashedCurveHorizontal"
        class="lmc-step__curve lmc-step__curve_horizontal"
      />
      <img
        :src="squareBashedCurveVertical"
        class="lmc-step__curve lmc-step__curve_vertical"
      />
  </div>
</template>

<script setup>
import iconOne from '../../../assets/icon1.svg?url';
import iconSecond from '../../../assets/icon2.svg?url';
import iconThird from '../../../assets/icon3.svg?url';
import squareBashedCurveVertical from '../../../assets/squareBashedCurveVertical.svg?url';
import squareBashedCurveHorizontal from '../../../assets/squareBashedCurveHorizontal.svg?url';
</script>

<style scoped lang="scss">
.lmc-step {
  display: flex;
  gap: 49px;
  justify-content: center;
  padding-top: 100px;
  
  @media (max-width: 721px) {
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
  }
}

.lmc-step__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  max-width: 405px;
  
  @media (max-width: 721px) {
    gap: 18px;
  }
}

.lmc-step__text {
  text-align: center;
  font-size: 20px;
  
  @media (max-width: 721px) {
    font-size: 16px;
  }
}

.lmc-step__rectangle {
  width: 115px;
  height: 115px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lmc-step__curve {
  position: absolute;
  max-width: 860px;
  width: 66%;
  z-index: -1;

  &_horizontal {
    @media (max-width: 721px) {
      display: none;
    }
  }

  &_vertical {
    display: none;
    
    @media (max-width: 721px) {
      display: inline;
      height: 17%;
      position: absolute;
      left: 5%;
      top: 33%;
    }
    
    @media (max-width: 677px) {
      height: 16%;
    }
    
    @media (max-width: 653px) {
      height: 15%;
    }
    
    @media (max-width: 604px) {
      height: 14%;
    }
    
    @media (max-width: 553px) {
      height: 17%;
    }
    
    @media (max-width: 527px) {
      height: 16%;
    }
    
    @media (max-width: 500px) {
      top: 29%;
    }
    
    @media (max-width: 477px) {
      height: 14%;
      top: 29%;
    }
    
    @media (max-width: 429px) {
      height: 13%;
      top: 29%;
    }
    
    @media (max-width: 392px) {
      height: 14%;
      top: 29%;
    }
    
    @media (max-width: 384px) {
      height: 15%;
      top: 28%;
    }
    
    @media (max-width: 379px) {
      top: 28%;
    }
    
    @media (max-width: 379px) {
      top: 27%;
    }
    
    @media (max-width: 369px) {
      height: 14%;
      top: 27%;
    }
  }
  
}
</style>
