<template>
  <div class="lmg-footer">
    <img :src="logo"/>
    <div class="font-size-16">
      © 2025 LingMeet
    </div>
    <div class="lmg-footer__email-container">
      <img :src="email" />
      <span>
        E-Mail:
        <a
          href="mailto:hello@lingmeet.de"
          style="color: #DE133D;"
        >
          <!-- TODO: замени емаил -->
          hello@lingmeet.de
        </a>
      </span>
    </div>
  </div>
</template>

<script setup>
import logo from '../../assets/logo.svg?url';
import email from '../../assets/email.svg?url';
</script>

<style scoped lang="scss">
.lmg-footer {
  display: flex;
  justify-content: center;
  gap: 64px;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  background-color: #ffffff;
  padding: 44px 0 44px 0;
  font-size: 16px;
  
  @media (max-width: 721px) {
    flex-direction: column;
    gap: 28px;
    padding: 34px;
  }
}

.lmg-footer__email-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
