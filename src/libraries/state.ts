import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const atomic = atom;

export const atomicStorage = atomWithStorage;

export const useAtomic = useAtom;

export const useAtomicValue = useAtomValue;

export const useAtomicSetter = useSetAtom;
