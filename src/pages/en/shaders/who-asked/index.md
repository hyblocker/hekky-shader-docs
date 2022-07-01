---
layout: '@layouts/DocsPage.astro'
title: Who Asked
description: An audio-reactive radar shader
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardTip from '@components/CardTip.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Who Asked

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

Who Asked is a simple radar shader, with AudioLink functionality because "it's funny&trade;".

> ### Table of Contents
> 
> - [Rings](#rings)
> - [Radar](#radar)
> - [AudioLink](#audiolink)
> - [Misc](#misc)

![Shader Inspector](/en/whoasked_shader_inspector_full.webp)

## Rings

Rings
: Number of rings to render.

Ring Color
: Color of the rings.

Ring Thickness
: Thickness of each ring.

Ring Emission
: How emissive the ring should be.

## Radar

Radar Color
: The color of the radar.

Radar Width
: The width of the radar.

Radar Alpha
: The transparency of the radar.

Radar Fade From Edge
: Controls the fade threshold from the edge of the radar.

Radar Fade Intensity
: Controls how gradual the fade on the radar is.

Radar Emission
: How emissive the radar should be.

## AudioLink

Radar AudioLink
: Enables AudioLink.

Radar Band
: The audio channel to react to.

Radar Emission
: The maximum emission when using AudioLink.

Ring Phase Offset Angle
: The maximum additional angle the phase offset should use.

## Misc

Turn Speed
: How fast the radar will spin.

Fallback Texture
: A fallback texture which is used in the event that the shader fails to load and resorts to a fallback shader.

Render Queue
: Controls when to render this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.

Double Sided Global Illumination
: Enables double sided global illumination for this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.