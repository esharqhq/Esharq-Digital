import 'server-only'
import { dictionaries, Language } from './dictionaries'

export const getDictionary = async (locale: Language) => dictionaries[locale] ?? dictionaries.en;
