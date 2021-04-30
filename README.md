# Intercontinental Academia Website

## TL;DR

This website is designed to be re-used in the upcoming editions of the Intercontinental Academia with little to no technical effort.

The easiest way would be to contact IAS Paris to be added on the existing CMS and thus create content using a friendly web UI that will automatically update the website.

The CMS (forestry) setup is made so that you can generate a new edition of the Intercontinental Academia just by creating a document and selecting its vintage (currently ICA 4). The document has fields to pick the logo colors, the primary color of the website, and several other features. Once you have created an edition (called program in the CMS), you can then create sessions and meetings to populate these sessions.

If you want to reuse it on your own domain name (or for something else than Continental Academia), you can fork it and import it in [forestry.io](https://forestry.io/). THe Github CI/CD script should work out of the box for the forked repo, and update the website on its *Github pages* branch as soon as you add content.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Credits

We want wanted to support the organizers of the upcoming ICAs rather than just make this edition website.

The people being this team effort are:

-  Solène de Bonis (Mockup, UX and review)
-  Maja Mielke (Review and program officer)
-  Juliette Artus (Review)
-  Antoine Cordelois (Dev)
-  Simon Luck (Review)
-  Saadi Lahlou (Conductor)