import { defineDb } from "astro:db";
import NavigationItems from "../src/models/NavigationItems";
import BlogPost from "../src/models/BlogPost";

// https://astro.build/db/config
export default defineDb({
  tables: { NavigationItems, BlogPost },
});
