import { customAlphabet } from "nanoid";
import { ROOM_CODE_LENGTH } from "../constants";
import { vibrantColorHexPalette } from "./colors";
import { urlSafeAlphabet } from "./strings";

const randomUsername = () => customAlphabet(urlSafeAlphabet)(6);
const randomRoomCode = () => customAlphabet(urlSafeAlphabet)(ROOM_CODE_LENGTH);
const randomKey = () => customAlphabet(urlSafeAlphabet)(6);
const randomVibrantColorHex = () => vibrantColorHexPalette[Math.floor(Math.random() * vibrantColorHexPalette.length)];

export const Random = {
  username: randomUsername,
  room: randomRoomCode,
  color: randomVibrantColorHex,
  key: randomKey,
} as const;
