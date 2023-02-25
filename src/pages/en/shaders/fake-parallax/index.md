---
layout: '@layouts/DocsPage.astro'
title: Hekky Fake Parallax Reference
description: A list of all properties for Hekky's Fake Parallax Shader
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardTip from '@components/CardTip.astro'
  import PaywallIcon from '@icons/PaywalledFeature.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Hekky Fake Parallax Cubemap

This simple shader allows you to fake parallax with a single cubemap. Use this to have more convincing windows while still being optimized since it's still a single cubemap lookup.

![Shader Inspector](/en/hekkyparallax_shader_inspector_full.webp)

Cull Mode
: Allows you to change the culling mode, or turn it off completely.

Texture
: The cubemap to use.

Radius
: Controls how much the cubemap will distort as you go further away from the center of the object.

Scale
: Altitude scale.

Capture Point
: A position (in meters) denoting where the camera was when capturing the cubemap / HDRI.

Only altitude
: Only affects altitude (height) if enabled.

Render Queue
: Controls when to render this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.

Double Sided Global Illumination
: Enables double sided global illumination for this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.
