---
layout: '@layouts/DocsPage.astro'
title: Setting up Hekky Atmosphere
description: A skybox designed to replace the default Unity skybox
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardTip from '@components/CardTip.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
  import FeatureIncluded from '@icons/FeatureIncluded.astro'
  import VideoPlayer from '@components/VideoPlayer.astro'
  import { SOCIALS } from '~/constants.js';
---

# Setting up Hekky Atmosphere

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

<CardTip title="VRChat">
	Hekky Atmosphere requires UdonSharp to work properly with VRChat. You can find the [latest stable release of UdonSharp here](https://github.com/vrchat-community/UdonSharp/releases/latest).
</CardTip>

<CardWarning title="Early access">
	This shader is currently in early access. It is likely stable enough to be used in projects, but I cannot garuantee this while it's in early access.
</CardWarning>

> The instructions below assume that you have imported a build of Hekky Shaders which include Hekky Atmosphere first.

## Setting up Hekky Atmosphere in a new scene.

To set up Hekky Atmosphere in a new scene:
1. Create a new Skybox Material. Then change it's shader to Hekky/Atmosphere
2. Drag the material into the scene window to apply it.
3. Find you sun light (usually called Directional light in a new scene), and add a new "Atmosphere System" component to it. This component is necessary as it performs some calculations which don't make sense to compute in the shader.
4. Create a new empty game object, and drag it into the Moon slot in the "Atmosphere System". This game object will control the moon's direction.

<br>

<VideoPlayer src="/shared/video/hekky-atmosphere-setup-speedrun.mp4" />

A sample scene is included in Hekky/Examples/Scenes/AtmosphereExample

## Controlling the sky

After [setting up the atmosphere system](#setting-up-hekky-atmosphere-in-a-new-scene), controlling the sky is relatively easy. To control the sun, rotate the directional light, the same way you would control the sun using the default unity skybox. To control the moon, rotate the moon game object you've created, and it will behave similarly to the sun, only it instead controls the moon! You can then play with the parameters in the material.

## Common issues

### The colors look off! / The sun doesn't glow!

Hekky Atmosphere is designed to work with post processing in mind. Therefore it is recommended to import and use post processing in scenes with Hekky Atmosphere.

### I can't create the look I want!

If Hekky Atmosphere doesn't suit your needs, or you're encountering difficulties while trying to set it up, please ask for help on the <a href={SOCIALS.discord}>Discord server</a>.