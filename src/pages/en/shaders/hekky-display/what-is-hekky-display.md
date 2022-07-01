---
layout: '@layouts/DocsPage.astro'
title: What is Hekky Display?
description: Learn more about Hekky Display
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import PaywallIcon from '@icons/PaywalledFeature.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# What is Hekky Display?

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

Hekky Display is a variant of [Hekky PBR](/en/shaders/hekky-pbr/what-is-hekky-pbr) designed for use specifically with displays. This shader allows displays such as TVs and monitors to render subpixels, force the video texture to fit within a specific aspect ratio, and offers a number of features for [video players](https://docs.vrchat.com/docs/video-players) in [VRChat](https://vrchat.com/).

![Subpixel rendering of a Display using Hekky Display](/shared/img/display-subpixels.webp)

Hekky Display supports numerous features:

- Physically Based Lighting (see [Hekky PBR](/en/shaders/hekky-pbr/reference) for more info)
- Flipping the video texture in mirrors and on the back face to maintain readability
- Force fitting aspect ratio
- LED backlighting
- Subpixel rendering, with customisable sub-pixel layouts
- Overscanning
- CRT strobing in cameras