import { BlogPost, db, NavigationItems } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(NavigationItems).values([
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ]);
  await db
    .insert(BlogPost)
    .values([{ slug: "hello-world", content: "Heyyy!" }]);
}
