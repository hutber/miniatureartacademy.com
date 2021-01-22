import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

import en from './locales/en.json'
import fr from './locales/fr.json'
import nl from './locales/nl.json'

// To add a new language, add the JSON file in ./lang.json, and add to messages and locales below.
const messages = { en, fr, nl }

export const locales = {
  en: 'English',
  nl: 'Flemish',
  fr: 'French',
}

const getMessages = locale => Object.assign({}, messages.en, messages[locale])

const Translations = ({ children }) => {
  const currentLocale = 'en'

  return (
    <IntlProvider locale={currentLocale} messages={getMessages(currentLocale)} textComponent={Fragment}>
      {children}
    </IntlProvider>
  )
}

export default Translations
