# Evalutation of UI Libraries

This document evaluates candidate UI libraries for our upcoming app. I've created simple prototypes for each:

- **Primevue**: https://github.com/romario333/oliver-primevue
- **Vuetify**: https://github.com/romario333/oliver-vuetify
- **Shadcn-vue**: https://github.com/romario333/oliver-shadcn

## tl;dr

Both **Primevue** and **Vuetify** are well-maintained projects with long histories. Primevue is more flexible and backed by a dedicated company. Vuetify offers better ease of use out-of-the-box.

**Shadcn-vue** raises concerns due to its "own your component code" approach and uncertain long-term viability.

## Project Health

### Contributor Activity

Contributor statistics provide a good insight into project health:

- [Primevue](https://github.com/primefaces/primevue/graphs/contributors): 3 active contributors
- [Vuetify](https://github.com/vuetifyjs/vuetify/graphs/contributors): 2 active contributors
- [Shadcn-vue](https://github.com/unovue/shadcn-vue/graphs/contributors), [Reka-ui](https://github.com/unovue/reka-ui/graphs/contributors): 1 active contributor

**PrimeVue** clearly leads here due to corporate backing and sustained activity. **Vuetify** is a solid choice as well.

**Shadcn-vue** seems to be essentially a one-man show.

### Long-term Sustainability

- **PrimeVue** and **Vuetify** are mature, continuously maintained projects.
- **Shadcn-vue** is newer (first commit in 2023), and activity is already slowing down, raising potential sustainability concerns.

### Popularity (Weekly npm Downloads)

- **PrimeVue**: ~300k
- **Vuetify**: ~662k
- **Shadcn-vue**: Difficult to assess; `shadcn-vue` itself is just CLI, so number of downloads is a poor indicator. Its underlying `reka-ui` library has ~262k weekly downloads, though unclear if exclusively from Shadcn-vue.

### Red Flags (Shadcn-vue)

- It's based on the Shadcn (React). Shadcn itself is not without controversies. It heavily builds on Radix, which has recently lost its core team and the future of the project is uncertain.
- Documentation occasionally has noticeable bugs.

## Ease of Use

**Vuetify** offers the best out-of-the-box experience, suitable for both desktop and mobile without significant customization. However, it ties you strictly to Material Design, limiting flexibility.

**Primevue** requires a slightly higher initial effort. Notable issues I ran into when working on the prototype:

- [Missing top navigator component](https://github.com/primefaces/primevue/issues/771)
- [Toast does not fit the screen on mobile](https://github.com/primefaces/primeng/issues/9930)

These issues, while inconvenient, are straightforward to address at the application level.

## Customization

- **Vuetify** offers limited flexibility due to adherence to Material Design.
- **Primevue** offers following customization modes:
  - **Styled Mode**: Predefined themes customizable or replaceable with third-party themes.
  - **Unstyled Mode**: Components only provide functionality; developers implement the design (e.g., using Tailwind).
  - **Volt**: A new PrimeTek project (2025) similar to Shadcn, enabling "own your component code" approach with Tailwind styling.

## Component Richness

Both **Vuetify** and **Primevue** offer extensive and feature-rich component sets.

**Shadcn-vue** provides fewer components with limited functionality. Some examples of missing nice-to-have functionalities: loading states for buttons, dropdown date pickers, virtual scrolling.

## Forms

All libraries are flexible as to what you can use for form validation.

## Localization

All libraries integrate seamlessly with `vue-i18n` for localization.

## Licenses

All libraries use standard OSS licenses, permitting commercial use without fees or attribution.

## Bundle size

- **Shadcn-vue** naturally excels here due to minimal built-in functionality.
- **Primevue**: I wasn't able to get tree-shaking to work. However I can manually specify which components to include in `nuxt.config.ts`. Further research is needed, see: https://github.com/primefaces/primevue-nuxt-module/issues/56
- **Vuetify**: Tree-shaking works seamlessly, though resulting bundles are somewhat larger than PrimeVue.
