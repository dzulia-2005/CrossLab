import { atom } from "jotai";

export type User = boolean | null;

export const userAtom = atom<User>(null);
