<template>
  <form
    class="lmc-email-input"
    @submit.prevent="submit"
  >
    <div class="lmc-email-input__area">
      <input
        type="email"
        class="lmc-email-input__input"
        placeholder="E-mail"
        :disabled="!!isEmailSent"
        v-model="userEmail"
      />
      <button
        v-if="!!isPositionInside"
        class="lmc-email-input__button"
        :class="{
          'lmc-email-input__button_idle' : !isEmailSent,
          'lmc-email-input__button_sent' : !!isEmailSent,
        }"
        type="submit"
        :disabled="!!isEmailSent"
      >
        {{ buttonText }}
      </button>
    </div>
    
    <div
      v-if="!!invalidEmail"
      class="lmc-email-input_error-message"
    >
      Ungültige E-Mail-Adresse
    </div>
    
    <button
      v-if="!isPositionInside"
      class="lmc-email-input__button"
      :class="{
        'lmc-email-input__button_outside' : !isPositionInside,
        'lmc-email-input__button_idle' : !isEmailSent,
        'lmc-email-input__button_sent' : !!isEmailSent,
      }"
      :disabled="!!isEmailSent"
      type="submit"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script setup lang="ts">
import {
  computed,
  shallowRef,
} from 'vue';
import {
  sendEmail,
  EMAIL_REGEX,
  invalidEmail,
} from './lmcEmailForm';

withDefaults(
  defineProps<{
    isPositionInside?: boolean,
  }>(),
  {
    isPositionInside: false,
  }
)

const userEmail = shallowRef<string>();

const isEmailSent = shallowRef(false);

const buttonText = computed<string>(() => !isEmailSent.value ? "Beitreten" : "Danke");

function submit() {
  invalidEmail.value = false;

  if (!userEmail.value || !EMAIL_REGEX.test(userEmail.value)) {
    console.warn("Invalid email");
    invalidEmail.value = true;
    return;
  }

  sendEmail({
    email: userEmail.value,
  })
  .then(() => isEmailSent.value = true)
  .catch((error) => console.warn(error));
}

const gaCookies = document.cookie
  .split("; ")
  .filter(c => c.startsWith("_ga"))
  .reduce((acc, c) => {
    const [k, v] = c.split("=");
    acc[k] = v;
    return acc;
  }, {});
</script>

<style scoped lang="scss">
.lmc-email-input {
  font-size: 18px;
}

.lmc-email-input__area {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 999px;
  box-shadow:
    0 12px 24px rgba(0, 0, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.06);
  padding: 0;
  max-width: 320px;
  height: 44px;
  overflow: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Inter", Roboto, sans-serif;
  font-size: 18px;
  min-width: 100%;
}

.lmc-email-input__input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 0 16px;
  height: 100%;
  background: transparent;
  color: #1a1a1a;
}

.lmc-email-input__input::placeholder {
  color: #777;
  font-weight: 500;
}

.lmc-email-input__button {
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border-radius: 999px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 223px;
  width: 100%;
  box-shadow: none;

  &_outside {
    height: 50px;
    margin-top: 30px;
  }

  &_idle {
    background-color: #cc0033;
  }
  &_idle:hover {
    background-color: #b0002c;
  }
  &_idle:focus {
    outline: 2px solid rgba(204, 0, 51, 0.4);
    outline-offset: 2px;
  }

  &_sent {
    background-color: #1FA756;
  }
}

.lmc-email-input_error-message {
  color: #b00000;
  font-size: 16px;
}
</style>
