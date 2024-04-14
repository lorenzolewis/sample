import { column, defineDb, defineTable } from "astro:db";

const Locales = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const I18nKeys = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    key: column.text(),
  },
});

const Translations = defineTable({
  columns: {
    localeId: column.number({ references: () => Locales.columns.id }),
    i18nKeyId: column.number({ references: () => I18nKeys.columns.id }),
    value: column.text(),
  },
});

const Navigation = defineTable({
  columns: {
    i18nKeyId: column.number({ references: () => I18nKeys.columns.id }),
    href: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Locales, I18nKeys, Translations, Navigation },
});
