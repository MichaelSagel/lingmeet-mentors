import { shallowRef } from "vue";
import axios from 'axios';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const invalidEmail = shallowRef(false);

export async function sendEmail(payload: { email: string }) {
  // TODO: замени путь
  return axios.post('/api/email/send', payload);
}