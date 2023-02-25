---
layout: '@layouts/DocsPage.astro'
title: Hekky Atmosphere Reference
description: A skybox designed to replace the default Unity skybox
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
  import FeatureIncluded from '@icons/FeatureIncluded.astro'
---

# Shader Reference

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

<CardWarning title="Early access">
	This shader is currently in early access. It is likely stable enough to be used in projects, but I cannot garuantee this while it's in early access. The shader reference is also subject to change and may not accurately describe the shader.
</CardWarning>

> ### Table of Contents
> 
> - [Atmosphere](#atmosphere)
> - [Night Sky](#night-sky)
> - [Sun](#sun)
> - [Moon](#moon)
> - [Stars](#stars)
> 
![Shader Inspector](/en/hekkyatmosphere_shader_inspector_full.webp)

<CardInfo title="Sliders">
Sliders next to textures control the intensity of the texture!
</CardInfo>

## Atmosphere

Intensity
: Controls the intensity of the day sky. Effectively a brightness slider.

Color
: The colour of the atmosphere when the sun is up.

Ground
: The colour of the ground plane.

Mie Scattering Intensity
: The intensity of the mie scattering (the "halo" around the sun).

Fixed Altitude
: When enabled the camera's altitude is ignored.

Altitude
: Controls the altitude (in meters) of the camera. Useful when you want to take a player somewhere which is high up but don't want to deal with floating point precision issues.

<ComparisionCard beforeSrc="/shared/img/hekky-atmosphere-low-altitude.webp" beforeTxt="Low Altitude" afterSrc="/shared/img/hekky-atmosphere-high-altitude.webp" afterTxt="High Altitude" color="#fff" />

> There is a smooth transition from low to high altitude.

## Night Sky

Night Intensity
: The luminosity of the night sky. Effectively controls how bright the night sky is.

Night Color
: The colour of the night sky.

Light Pollution
: How much light pollution is in the scene currently.

Light Pollution Intensity
: The luminosity of light due to light pollution. Effectively controls how far it "leaks" into the atmosphere from the ground.

Light Pollution Color
: The colour of the lighting that's visible in the atmosphere due to light pollution.

![Light pollution example](/shared/img/hekky-atmosphere-light-pollution.webp)

> Light pollution

## Sun

Override Color
: Overrides the sun's colour.

Color
: The colour of the sun as seen from space. This colour then gets filtered through the atmosphere by the time it reaches the player's eyes (This filtering lets you have red sunsets).

Intensity
: Controls the luminosity of the sun. Effectively controls how bright the sun is.

Size
: The size of the sun in the atmosphere.

## Moon

Direction
: The direction of the moon. You most likely shouldn't touch this, and use the [Atmosphere System](/en/shaders/hekky-atmosphere/set-up-atmosphere#controlling-the-sky) instead as it better handles this.

Size
: The size of the moon in the sky.

Intensity
: The luminous intensity of the moon. Effectively controls how bright the moon is.

Albedo
: A cubemap of the moon's surface. There's a reason it's a cubemap and not a 2D texture, which will be revealed soon&trade;.

## Stars

Mode
: The current star rendering mode. Can select between "Procedural" and "HDRI". HDRI is recommended.

Threshold
: Allows you to change the material from opaque mode to transparency mode.

Color Shift
: Allows you to change the material from opaque mode to transparency mode.

Cubemap
: The cubemap which shows stars. For the best results, make sure this cubemap doesn't contain the sun and moon.

Intensity
: Allows you to change the material from opaque mode to transparency mode.

<ComparisionCard beforeSrc="/shared/img/hekky-atmosphere-stars-procedural.webp" beforeTxt="Procedural" afterSrc="/shared/img/hekky-atmosphere-stars-hdri.webp" afterTxt="HDRI" color="#fff" />
