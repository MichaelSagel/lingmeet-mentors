export const COOKIE_TYPE_MAP = {
  necessaryConsent: 'NECESSARY_CONSENT',
  analyticsConsent: 'ANALYTICS_CONSENT',
} as const;

type TCookieMap = typeof COOKIE_TYPE_MAP;

export type TCookieType = TCookieMap[keyof typeof COOKIE_TYPE_MAP];

export type TCookieSettingDataMap<T extends TCookieType = TCookieType> = {
  type: T;
  header: string;
  text: string;
  checkboxLabel: string;
  userAllowedToUseCookies: T extends typeof COOKIE_TYPE_MAP['necessaryConsent']
    ? true
    : boolean;
};
