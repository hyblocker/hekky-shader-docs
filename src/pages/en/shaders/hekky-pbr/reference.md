---
layout: '@layouts/DocsPage.astro'
title: Shader Reference
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import PaywallIcon from '~/icons/PaywalledFeature.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Shader Reference
<CardInfo title="Paid Features">
Some features require a copy of [Hekky PBR Pro](https://patreon.com/hekky) to use. These features will have <PaywallIcon height="16px" width="16px"/> next to them.
</CardInfo>

> ### Table of Contents
> 
> - [Main](#main)
> - [Lighting](#lighting)
> - [Toon](#toon)
> - [Specular](#specular)
> - [Anisotropy](#anisotropy)
> - [Outline](#outline)

![Shader Inspector](/en/shader_inspector_full.png)

<CardInfo title="Sliders">
Sliders next to textures control the intensity of the texture!
</CardInfo>

**Rendering Mode** Allows you to change the material from opaque mode to transparency mode.

## Main

This section describes the base layer of a material using Hekky PBR.

- **Texture** The albedo / diffuse / base texture. Can also be tinted.
- **Metal Mask** Controls how "metallic" and reflective the material is. Other shaders may call this property `Metal Map`, `Metallness` or something similar.
- **Roughness Map** Controls how "rough" the material is.
- **Invert Roughness** Inverts the roughness map. Enable this if you want to use smoothness instead of a roughness.
- **Normal Map** Allows you to define surface bumps without increasing the polygon count.

## Lighting

This section describes how you may customise how a material reflects light using Hekky PBR.

- **Lighting Mode** Controls the lighting style of the material. You can choose between `Realistic`, `Toon` and `Unlit`.
- **Baked Specular** Enables specular lighting from baked light sources, such as lightmaps and light probes.

### Toon

This section describes how you can tweak the lighting to achieve a cartoon-esque look.

<ComparisionCard beforeSrc="/shared/img/toon-off.png" beforeTxt="Realistic Lighting" afterSrc="/shared/img/toon-on.png" afterTxt="Toon Lighting"/>

- **Math Gradient Start** Controls the start of the math gradient for toon shading.
- **Math Gradient End** Controls the end of the math gradient for toon shading.
- **Min Brightness** Controls the minimum brightness when using toon shading.
- **Max Brightness** Controls the maximum brightness when using toon shading.

### Specular

### Anisotropy

### Outline

This section controls outlines.

- **Enable Outline** Enables outline effects.
- **Outline Width** Controls the thickness of the outline.
- **Outline Colour** Controls the outline's colour.

## Emission

## Occlusion

## Other Modules

## Misc

- **Render Queue** Controls when to render this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.
- **Enable GPU Instancing** Allows Unity to draw objects using the **same mesh** and **same material** using one draw call, yielding performance.
- **Double Sided Global Illumination** Enables double sided global illumination for this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.