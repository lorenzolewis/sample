import { column, defineTable } from "astro:db";

export default defineTable({
  columns: {
    slug: column.text({ unique: true }),
    content: column.text(),
  },
});
