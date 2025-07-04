# Evalutation of UI libraries

The goal of this document is to evaluate candidate UI libraries for the new app we're starting. I'm evaluating three libraries here. For each I have created a simple prototype:

- **Primevue**: https://github.com/romario333/oliver-primevue
- **Vuetify**: https://github.com/romario333/oliver-vuetify
- **Shadcn-vue**: https://github.com/romario333/oliver-shadcn

## tl;dr

Both **Primevue** and **Vuetify** are well-maintained projects with a long history. Primevue is more flexible and has a company behind it. Vuetify is easier to use.

**Shadcn-vue** is the odd one. I have serious doubts about its "own your component implementation" approach, and also about the long-term health of the project. More on that later.

## Project health

To evaluate project health, it's useful to look at the contributor stats:

- primevue: https://github.com/primefaces/primevue/graphs/contributors
- vuetify: https://github.com/vuetifyjs/vuetify/graphs/contributors
- shadcn-vue:
  - https://github.com/unovue/shadcn-vue/graphs/contributors
  - https://github.com/unovue/reka-ui/graphs/contributors

PrimeVue has 3 active contributors, Vuetify 2 and shadcn-vue 1.

PrimeVue clearly wins here, especially do to the fact that it's being developed by a for-profit company.

Vuetify is a solid choice.

Both Primevue and Vuetify have long history and seem to be well-maintained. Shadcn-vue is relatively new (first commit in 2023) and the contribution activity seems to be slowing down. This is especially concerning because the project is a one-man show.

Another interesting metric is the number of weekly npm downloads:

- primevue: 300k
- vuetify: 662k
- shadcn-vue
  - `shadcn-vue` itself is just CLI, so number of downloads is a poor indicator
  - we can look at `reka-ui` though, which has 262k download. What I don't know is whether these are all shadcn-vue users.

With Shadcn-vue, there are some red flags:

- It's based on the shadcn (React). Shadcn itself is not without controversies. It heavily builds on radix, which has recently lost its core team and the future of the project is uncertain.
- There are occasional bugs in the documentation.

## Ease of use

Vuetify is the easiest to use. It's pretty straighforward to use, has good documentation and it's the fastest way to get a project up and running, especially if you're not a UX designer. Tradeoff here is, that it lacks on customizability, and basically locks you into the Material Design.

Primevue is a bit more complex, but once you get over the initial not very steep learning curve, it's as easy to use as Vuetify.

## Customization

Vuetify is the less flexible, if you use it, you'll use the Material Design.

Primevue is more flexible, offering two modes of UX customization:

- Styled mode
  - Styles are provided by the library as themes. These themes can be customized, or replaced with 3rd-party themes.
- Unstyled mode
  - The library implements only behavior of the components, not their design. You can provide your own design by using for example Tailwind.
  - Volt - new project by PrimeTek, similar to shadcn in philosophy: built with tailwind, uses unstyled Primevue. User copies the components into their repository and own the design part.

## Richness

Both Vuetify and Primevue offer a large number of components with rich behavior.

Shadcn-vue does not offer that many components, and also components provided do not satisfy all the requirements you would expect (e.g. no loading indication on button, no dropdown date picker control, no virtual scroller).

## Forms

All libraries are flexible as to what you can use for form validation.

## Localization

## Licenses

All libraries are offered under the standard OSS licenses and can be used free of charge, in commercial projects and without attribution.

-- TODO:

- licence - mit
- styled vs unstyled, customizability, UIKit
- localization
- form validation
- Shopify & Pohoda
- Bundle Size
- fix mobile view for the primevue
- https://www.figma.com/community/file/1154678001663255824/prime-4-0-free-version-of-design-system-kit
