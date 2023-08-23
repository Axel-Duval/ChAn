import { PERSISTANCE_EXPIRATION_MILLIS } from "../constants";
import {
  KeyHasExpiredFunction,
  ParsedStorageItem,
  PersistFunction,
  RetrieveFunction,
  RetrieveOrFallbackFunction,
} from "../types/localStorage";

export const persist: PersistFunction = (key, value) => {
  const stringifiedValue = JSON.stringify({
    value,
    updatedAt: new Date().toISOString(),
  });
  return localStorage.setItem(key, stringifiedValue);
};

export const retrieve: RetrieveFunction = (key) => {
  if (keyHasExpired(key)) return null;
  const item = localStorage.getItem(key);
  if (item === null) return null;
  const parsedItem = JSON.parse(item) as ParsedStorageItem<typeof key>;
  return parsedItem.value;
};

export const retrieveOrFallback: RetrieveOrFallbackFunction = (
  key,
  fallback
) => {
  const value = retrieve(key);
  if (value === null) {
    persist(key, fallback);
    return fallback;
  }
  return value;
};

export const keyHasExpired: KeyHasExpiredFunction = (key) => {
  const item = localStorage.getItem(key);
  if (item === null) return true;
  const parsedItem = JSON.parse(item) as ParsedStorageItem<typeof key>;
  const diff = Date.now() - new Date(parsedItem.updatedAt).getTime();
  return diff > PERSISTANCE_EXPIRATION_MILLIS;
};
