import { ROOM_CODE_LENGTH } from "../constants";
import { hexAlphabet, urlSafeAlphabet } from "./strings";

export const isValidUsername = (username?: string | null) => {
  if (username === undefined || username === null) return false;
  return username.length > 1 && username.length < 128;
};

export const isValidHex = (hex?: string | null) => {
  if (hex === undefined || hex === null) return false;
  return hex.split("").every((c) => hexAlphabet.includes(c));
};

export const isValidColorHex = (colorHex?: string | null) => {
  if (colorHex === undefined || colorHex === null) return false;
  return (
    colorHex.length === 7 &&
    colorHex.startsWith("#") &&
    isValidHex(colorHex.slice(1))
  );
};

export const isValidRoomCode = (roomCode?: string | null) => {
  if (roomCode === undefined || roomCode === null) return false;
  return (
    roomCode.length === ROOM_CODE_LENGTH &&
    roomCode.split("").every((c) => urlSafeAlphabet.includes(c))
  );
};
