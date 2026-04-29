<template>
  <div
    v-if="!!showCookieComponent"
    class="lmc-cookie"
  >
    <div
      class="lmc-cookie__area"
      :class="{
        'lmc-cookie__area_radius': !showSetting,
      }"
    >
      <div class="lmc-cookie__header">
        <span>
          Wir verwenden Cookies
        </span>
        <button
          class="lmc-cookie__header-close-button"
          @click="showCookieComponent = false"
        >
          <img
            :src="iconClose"
            alt="Schließen"
          />
        </button>
      </div>
      <div v-if="!showSetting">
        <div class="lmc-cookie__text">
          {{ cookieText }}
        </div>
        <div class="lmc-cookie__button-grup">
          <button
            class="lmc-cookie__button lmc-cookie__button_settings"
            type="button"
            @click="showSetting = true"
          >
            Cookie-Einstellungen
          </button>

          <button
            class="lmc-cookie__button lmc-cookie__button_secondary"
            type="button"
            @click="rejectCookie"
          >
            Ablehnen
          </button>
            
          <button
            class="lmc-cookie__button lmc-cookie__button_primary"
            type="button"
            @click="acceptAllCookies"
          >
            Annehmen
          </button>
        </div>
      </div>

      <div v-else>
        <div
          v-for="item in cookieSettingsList"
          :key="item.type"
          class="lmc-cookie__settings-list"
        >
          <div class="lmc-cookie__settings-item">
            <div>
              <lmcCheckboxItem
                v-model="item.userAllowedToUseCookies"
                :label="item.checkboxLabel"
                :disabled="item.type === COOKIE_TYPE_MAP.necessaryConsent"
              />
            </div>

            <div>
              <div class="lmc-cookie__settings-explanation-header">{{ item.header }}</div>
              {{ item.text }}
            </div>
          </div>
        </div>
      
        <div class="lmc-cookie__button-grup">
          <button
            class="lmc-cookie__button lmc-cookie__button_settings"
            type="button"
            @click="rejectCookie"
          >
            Nur notwendige Cookies
          </button>

          <button
            class="lmc-cookie__button lmc-cookie__button_secondary"
            type="button"
            @click="saveCookie"
          >
            Auswahl speichern
          </button>
            
          <button
            class="lmc-cookie__button lmc-cookie__button_primary"
            type="button"
            @click="acceptAllCookies"
          >
            Alle Cookies akzeptieren
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  shallowRef,
} from 'vue';
import iconClose from '../../assets/close.svg?url';
import lmcCheckboxItem from '../checkbox/lmcCheckbox.vue';
import {
  COOKIE_TYPE_MAP,
  TCookieSettingDataMap,
  TCookieType,
} from './lmcCookie';

const showCookieComponent = shallowRef<boolean>(!localStorage.getItem("cookieConsent"));

const showSetting = shallowRef<boolean>(false);

const cookieText = shallowRef<string>(
  `Wir verwenden Cookies, um unsere Website zu verbessern.
  Über „Cookie-Einstellungen“ können Sie auswählen, welche Cookies erlaubt sind.
  Mit „Ablehnen“ werden ausschließlich technisch erforderliche Cookies gesetzt.
  Durch „Annehmen“ stimmen Sie der Verwendung aller Cookies zu.`
);


const cookieSettingsList = ref<TCookieSettingDataMap<TCookieType>[]>([
  {
    type: 'NECESSARY_CONSENT',
    header: 'Notwendige Cookies (immer aktiviert)',
    text: `Diese Cookies sind technisch erforderlich, damit die Website zuverlässig funktioniert.
    Dazu gehören Sicherheit, grundlegende Einstellungen, Serverkommunikation und Funktionen, die für den Betrieb unbedingt notwendig sind.
    Ohne diese Cookies kann die Website nicht korrekt bereitgestellt werden.`,
    checkboxLabel: 'Notwendige Cookies',
    userAllowedToUseCookies: true,
  },
  {
    type: 'ANALYTICS_CONSENT',
    header: 'Analyse-Cookies (Google Analytics 4)',
    text: `Diese Cookies ermöglichen die anonyme Erfassung von Nutzungsstatistiken.
    Wir erfahren, welche Seiten besucht werden und wie Besucher unsere Website verwenden.
    Die Daten helfen uns, Inhalte und Funktionen zu verbessern.
    Es werden keine personenbezogenen Daten für Werbung verwendet.`,
    checkboxLabel: 'Analyse-Cookies',
    userAllowedToUseCookies: false,
  },
]);

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function rejectCookie() {
  localStorage.setItem("cookieConsent", "accepted");
  localStorage.setItem("localAnalyticsConsent", "rejected");
  window.gtag(
    "consent",
    "update",
    {
      analytics_storage: "denied",
    }
  );
  showCookieComponent.value = false;
}

function acceptAllCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  localStorage.setItem("localAnalyticsConsent", "accepted");
  window.gtag(
    "consent",
    "update",
    {
      analytics_storage: "granted",
    }
  );
  showCookieComponent.value = false;
}

function saveCookie() {
  localStorage.setItem("cookieConsent", "accepted");

  window.gtag(
    "consent",
    "update",
    {
      analytics_storage: !cookieSettingsList
        .value
          .find((map) => map.type === "ANALYTICS_CONSENT")
            .userAllowedToUseCookies
              ? "denied"
              : "granted",
    }
  );

  showCookieComponent.value = false;
}
</script>

<style scoped lang="scss">
.lmc-cookie {
  max-height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
}

.lmc-cookie__area {
  background-color: white;
  box-shadow: -20px -20px 30px 0 rgba(0,0,0,0.2);
  padding: 26px 50px 50px 50px;
  max-width: 1193px;

  &_radius {
    border-radius: 20px 0 0 0;
  }
}

.lmc-cookie__header{
  font-size: 35px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 28px;
}

.lmc-cookie__header-close-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.lmc-cookie__header-close-button img {
  width: 16px;
  height: 16px;
}

  
.lmc-cookie__header-close-button:hover {
  background-color: #f0f0f0;
}

.lmc-cookie__header-close-button:focus {
  outline: 2px solid #f0f0f0;
  outline-offset: 2px;
}

.lmc-cookie__text {
  padding-top: 6px;
  white-space: pre-line;
}

.lmc-cookie__button-grup {
  padding-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}


.lmc-cookie__button {
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 999px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 223px;
  box-shadow: none;
  min-height: 50px;
  padding: 8px 16px;

  &_settings {
    color: #000000;
    background-color: transparent;
  }
  
  &_settings:hover {
    background-color: #f0f0f0;
  }
  
  &_settings:focus {
    outline: 2px solid #f0f0f0;
    outline-offset: 2px;
  }
  
  &_secondary {
    color: #000000;
    background-color: #D1D1D1;
  }
  
  &_secondary:hover {
    background-color: #b7b7b7;
  }
  
  &_secondary:focus {
    outline: 2px solid #515151;
    outline-offset: 2px;
  }
  
  &_primary {
    color: #fff;
    background-color: #cc0033;
  }
  
  &_primary:hover {
    background-color: #b0002c;
  }
  
  &_primary:focus {
    outline: 2px solid #cc003366;
    outline-offset: 2px;
  }
}

.lmc-cookie__settings-explanation-header {
  font-size: 24px;
  font-weight: 600;
}

.lmc-cookie__settings-list {
  padding-bottom: 28px;
}

.lmc-cookie__settings-item {
  display: grid;
  grid-template-columns: minmax(80px, 353px) auto;
  column-gap: 28px;
  align-items: start;
}
</style>
