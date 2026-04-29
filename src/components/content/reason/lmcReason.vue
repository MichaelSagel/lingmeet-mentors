<template>
  <div class="lmc-reason">
    <div class="lmc-reason__header-container">
      <span class="lmc-reason__header-container_font">
        Warum ist das für
      </span>Lehrer interessant?
    </div>
    
    <div class="lmc-reason__card-container">
      <lmcCard
        v-for="iconMap in iconList"
        :key="iconMap.id"
        :text="iconMap.text"
      >
        <template #icon>
          <component :is="iconMap.icon" />
        </template>
      </lmcCard>
    </div>
  </div>
</template>
 
<script setup lang="ts">
import { shallowRef } from 'vue';
import lmcCard from '../../card/card.vue';
import moneyIcon from '../../../assets/money.svg';
import kontakteIcon from '../../../assets/kontakte.svg';
import timelineIcon from '../../../assets/timeline.svg';
import meetingIcon from '../../../assets/meeting.svg';

const iconList = shallowRef([
  {
    id: 1,
    text: 'Geld zu verdienen, indem Sie Ihre Muttersprache sprechen.',
    icon: moneyIcon,
  },
  {
    id: 2,
    text: 'Knüpfen Sie neue Kontakte',
    icon: kontakteIcon,
  },
  {
    id: 3,
    text: 'Flexibler Zeitplan - Treffen, wann es Ihnen passt',
    icon: timelineIcon,
  },
  {
    id: 4,
    text: 'Echte Treffen - ohne Online-Calls und Chatnachrichten.',
    icon: meetingIcon,
  },
]);
</script>

<style scoped lang="scss">
.lmc-reason {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 721px) {
    padding-top: 62px;
  }
}

.lmc-reason__header-container {
  font-size: 50px;
  max-width: 743px;
  text-align: center;
  line-height: 70px;
  
  @media (max-width: 721px) {
    font-size: 38px;
  }

  &_font {
    font-weight: 800;
  }
}

.lmc-reason__card-container {
  padding-top: 34px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  
  @media (max-width: 721px) {
    padding-top: 22px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
</style>
