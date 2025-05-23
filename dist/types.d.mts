import { BundledLanguage } from './langs.mjs';
import { BundledTheme } from './themes.mjs';
export * from '@shikijs/core/types';
import '@shikijs/types';

type BuiltinLanguage = BundledLanguage;
type BuiltinTheme = BundledTheme;

export { type BuiltinLanguage, type BuiltinTheme, BundledLanguage, BundledTheme };
