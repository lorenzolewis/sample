import { db, I18nKeys, Locales, Navigation, Translations } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Locales).values([{ id: 1, name: "English" }]);
  await db.insert(I18nKeys).values([{ id: 1, key: "Home Navigation" }]);
  await db
    .insert(Translations)
    .values([{ localeId: 1, i18nKeyId: 1, value: "Home" }]);
  await db.insert(Navigation).values([{ i18nKeyId: 1, href: "/" }]);
}
