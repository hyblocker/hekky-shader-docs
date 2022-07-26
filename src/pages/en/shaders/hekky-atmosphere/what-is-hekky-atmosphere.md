---
layout: '@layouts/DocsPage.astro'
title: What is Hekky Atmosphere?
description: A skybox designed to replace the default Unity skybox
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
  import FeatureIncluded from '@icons/FeatureIncluded.astro'
---

# What is Hekky Atmosphere?

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

<CardWarning title="Early access">
	This shader is currently in early access. It is likely stable enough to be used in projects, but I cannot garuantee this while it's in early access.
</CardWarning>

Hekky Atmosphere is a procedural skybox shader which is designed to replace the default Unity skybox. It allows for significantly higher fidelity skies with minimal effort. For a complete list of features please view the [shader reference](/en/shaders/hekky-atmosphere/reference).

## Comparisons

Below is a list of images comparing Hekky Atmosphere with the default Unity skybox. Both images were captured with the same sun direction and camera direction to better show the difference.

<ComparisionCard beforeSrc="/shared/img/hekky-atmosphere0.webp" beforeTxt="Hekky Atmosphere" afterSrc="/shared/img/unity-skybox0.webp" afterTxt="Unity Skybox" color="#fff" />

<ComparisionCard beforeSrc="/shared/img/hekky-atmosphere1.webp" beforeTxt="Hekky Atmosphere" afterSrc="/shared/img/unity-skybox1.webp" afterTxt="Unity Skybox" color="#fff" />

<ComparisionCard beforeSrc="/shared/img/hekky-atmosphere2.webp" beforeTxt="Hekky Atmosphere" afterSrc="/shared/img/unity-skybox2.webp" afterTxt="Unity Skybox" color="#fff" />

<ComparisionCard beforeSrc="/shared/img/hekky-atmosphere3.webp" beforeTxt="Hekky Atmosphere" afterSrc="/shared/img/unity-skybox3.webp" afterTxt="Unity Skybox" color="#fff" />

## Features

Hekky Atmosphere contains a number of features, most of which aren't available in the default Unity skybox:

| Feature | Hekky Atmosphere | Unity skybox |
| ------- | ---------------- | ------------ |
| Rayleigh / Mie Scattering | <FeatureIncluded height="1.5rem" width="1.5rem"/> | <FeatureIncluded height="1.5rem" width="1.5rem"/> |
| Colour Accurate Rayleigh / Mie Scattering | <FeatureIncluded height="1.5rem" width="1.5rem"/> |   |
| Sun Darkening (visible during sunset) | <FeatureIncluded height="1.5rem" width="1.5rem"/> |   |
| Moon | <FeatureIncluded height="1.5rem" width="1.5rem"/> |   |
| Stars | <FeatureIncluded height="1.5rem" width="1.5rem"/> |   |
| Light pollution | <FeatureIncluded height="1.5rem" width="1.5rem"/> |   |
| Exiting the atmosphere | <FeatureIncluded height="1.5rem" width="1.5rem"/> |  |
| Artist controllable colours\* | <FeatureIncluded height="1.5rem" width="1.5rem"/> | <FeatureIncluded height="1.5rem" width="1.5rem"/> |

\* Currently Hekky Atmosphere only allows you to configure the ground's colour, and night sky colours. The day sky is currently hardcoded, but I have plans to allow you to control it's colours.

More features for Hekky Atmosphere are planned, and will be revealed when they're ready.