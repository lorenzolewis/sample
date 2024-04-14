import { column, defineTable } from "astro:db";

export default defineTable({
  columns: {
    label: column.text(),
    href: column.text(),
  },
});
