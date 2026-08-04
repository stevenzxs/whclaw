import { useTranslation } from 'react-i18next';
import type { LocalizedText } from '../config';

/**
 * Returns a picker that resolves a LocalizedText to the active language,
 * falling back to the other language when a field is missing.
 */
export function useLocalized() {
  const { i18n } = useTranslation();
  const lang: keyof LocalizedText = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  return (text: LocalizedText): string => text[lang] || text.en || text.zh;
}
