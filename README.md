# Tailwind v4

## Alpha (v4.0.0-alpha.18)

### Breaking Changes

- `tailwind.config.ts` is deprecated
  - Set all custom valuses in CSS variables. See https://github.com/hk01-digital/hk01-web/blob/poc/tailwind-v4/src/styles/twconfig/main.css
- Custom plugins and utility classes(`@apply blablabla`) are not supported in `alpha`. If you build this branch https://github.com/hk01-digital/hk01-web/tree/poc/tailwind-v4, you will see such error message as `Error: Cannot apply unknown utility class: cmp-page-grid`
- `prefix` is not supported in `alpha`
- These are build in:
  - `@import`handling - do not need `postcss-import`;
  - Vendor prefixing - do not need `autoprefixer`;
  - Nesting support - do not need `tailwindcss/nesting`;
  - Syntax transforms - support modern CSS features like `oklch()` colors.

### CSS variables

All the CSS variables set within `@theme { ... }` are available in the `:root` element. They are parsed both in build and run time.

- Naming convention - please follow the `ThemeKey` and `ColorThemeKey` prefixes at https://github.com/tailwindlabs/tailwindcss/blob/e000caa0bdaa9f67cc0ce7ea1ea43101af10ce32/packages/tailwindcss/src/theme.ts#L149
- Examples - https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/theme.css

### Playground

- Try this repo https://github.com/ritingliudd01/nextjs-14-tailwind-4
- The `@theme{}` of `./app/globals.css` is migrated from 01web `tailwind.config.ts`
- If you’re using the `Tailwind CSS IntelliSense` extension for `VS Code`, remember to switch to the prerelease version from the extension section.

## Beta (by end of August 2024)

- `tailwind.config.ts` might be coming back for easier migration from `v3` to `v4`
- Support custom plugins and utility classes
- Support `prefix`
- more at https://tailwindcss.com/blog/tailwindcss-v4-alpha
