export type ParsedStorageItem<T> = { value: T; updatedAt: string };

export type StorageEntries = {
  username: StorageItem<string>;
  color: StorageItem<string>;
};

export type StorageKey = keyof StorageEntries;
export type StorageValue<T extends StorageKey> = StorageEntries[T]["value"];
export type StorageTimestamp<T extends StorageKey> =
  StorageEntries[T]["updatedAt"];

export type PersistFunction = <T extends StorageKey>(
  key: T,
  value: StorageValue<T>
) => void;

export type RetrieveFunction = <T extends StorageKey>(
  key: T
) => StorageValue<T> | null;

export type RetrieveOrFallbackFunction = <T extends StorageKey>(
  key: T,
  fallback: StorageValue<T>
) => StorageValue<T>;

export type KeyHasExpiredFunction = <T extends StorageKey>(key: T) => boolean;
