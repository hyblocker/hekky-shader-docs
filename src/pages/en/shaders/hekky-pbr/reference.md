---
layout: '@layouts/DocsPage.astro'
title: Hekky PBR Reference
description: A list of all properties for Hekky PBR
image: assets/hekky-pbr-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardTip from '@components/CardTip.astro'
  import PaywallIcon from '@icons/PaywalledFeature.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Shader Reference
<CardWarning title="Paid Features">
Some features require a copy of [Hekky PBR Pro](https://patreon.com/hekky) to use. These features will have <PaywallIcon height="16px" width="16px"/> next to them.
</CardWarning>

> ### Table of Contents
> 
> - [Main](#main)
> - [Lighting](#lighting)
> - [Toon](#toon)
> - [Specular](#specular)
> - [Anisotropy](#anisotropy)
> - [Emission](#emission)
> - [Matcap](#matcap)
> - [Occlusion](#occlusion)
> - [Outline](#outline)
> - [AudioLink](#audiolink)

![Shader Inspector](/en/hekkypbr_shader_inspector_full.webp)

<CardInfo title="Sliders">
Sliders next to textures control the intensity of the texture!
</CardInfo>

Rendering Mode
: Allows you to change the material from opaque mode to transparency mode.

## Main

This section describes the base layer of a material using Hekky PBR.

Texture
: The albedo / diffuse / base texture. Can also be tinted.

Metal Mask
: Controls how "metallic" and reflective the material is. Other shaders may call this property `Metal Map`, `Metallness` or something similar.

Roughness Map
: Controls how "rough" the material is.

Invert Roughness
: Inverts the roughness map. Enable this if you want to use smoothness instead of roughness.

Normal Map
: Allows you to define surface bumps without increasing the polygon count.

<CardTip title="Textures">
All textures share sampling settings the **Texture** sampling settings. The only exception is the matcap texture.
</CardTip>

## Lighting

This section describes how you may customise how a material reflects light using Hekky PBR.

Lighting Mode
: Controls the lighting style of the material. You can choose between `Realistic`, `Toon` and `Unlit`.

Baked Specular
: Enables specular lighting from baked light sources, such as lightmaps and light probes.

[//]: # "Throwing this into markdown blockquotes, i.e. > Content breaks the parser"
<blockquote>
#### Lighting Mode

Realistic
: uses a realistic lighting model, and aims for photorealism.

Toon
: toonifies the output of the realistic lighting model to achieve PBR toon shading.

Unlit
: uses light probes for shading. Doesn't get affected by any realtime lights.
</blockquote>

### Toon

This section describes how you can tweak the lighting to achieve a cartoon-esque look.

<ComparisionCard beforeSrc="/shared/img/toon-off.webp" beforeTxt="Realistic Lighting" afterSrc="/shared/img/toon-on.webp" afterTxt="Toon Lighting" color="#000"/>

Math Gradient Start
: Controls the start of the math gradient for toon shading. Should always be smaller or equal to `Math Gradient End`.

Math Gradient End
: Controls the end of the math gradient for toon shading. Should always be larger or equal to `Math Gradient Start`.

Min Brightness
: Controls the minimum brightness when using toon shading. Should always be smaller or equal to `Max Brightness`.

Max Brightness
: Controls the maximum brightness when using toon shading. Should always be larger or equal to `Min Brightness`.

Receive Shadows
: Disables shadows on this material.

Normal Reprojection
: Recalculates normals using a spherical mapping, assuming the mesh's origin as the center of the sphere. This is mainly intended for cartoony faces.

Base Normal Blend
: How much to blend between the model's normals and the reprojected normals.

### Specular

Specular
: How much to blend between the true color and the tinted specular color on specular highlights.

Specular Tint
: Allows you to change the color of specular highlights.

Specular Mode
: Allows you to toggle between isotropic (normal) and anisotropic specular modes.

Baked Specular
: Enable specular effects from baked light sources. These are not as accurate as realtime ones if not using [Directional](https://docs.unity3d.com/2019.4/Documentation/Manual/LightmappingDirectional.html) or [Bakery lightmapping modes](https://geom.io/bakery/wiki/index.php?title=Manual#Directional_mode).

### Anisotropy

<PaywallIcon height="16px" width="16px"/> Anisotropy Map
: A texture map that stores anisotropy. Red is anisotropic intensity. Green is anisotropic angle.

<PaywallIcon height="16px" width="16px"/> Angle Offset
: Allows you to offset the angles from 0°.

### Reflections

Force reflections mode
: Forces reflections to be interpreted as either box projected or spherical projected reflection probes.

### Emission

Emission
: Controls the object's emissiveness.

Intensity
: How bright to make the emission.

### Matcap

Enable Matcap
: Enables matcaps shading.

Texture
: The matcap texture.

Mask
: A mask texture. All channels other than red are ignored.

Border
: How much to offset the bounds matcap from the edge of the texture.

Replace, Add, Difference, Multiply, Overlay
: Different blend modes. Value controls their strength.

Reflection Blend
: How much to blend the matcap with cubemap reflections.

## Occlusion

Ambient Occlusion
: Controls how much ambient occlusion to apply to the object. Useful to help improve selfshadowing on non-lightmapped materials.

Exposure Occlusion
: Controls the effect ambient occlusion has on lightmap ambient occlusion. Doesn't effect per-material ambient occlusion.

## Outline

This section controls outlines.

Enable Outline
: Enables outline effects.

Outline Width
: Controls the thickness of the outline.

Outline Color
: Controls the outline's color.

## AudioLink

This section explains the various [AudioLink](https://github.com/llealloo/vrc-udon-audio-link) related controls Hekky PBR offers.

Enable Debug Mode
: Enables AudioLink Debug mode, which allows you to manually input parameters for AudioLink to ensure that it's functioning properly. Make sure that this is disabled in before uploading VRChat.

Bass / Low Mid / High Mid / Treble
: Controls the individual AudioLink channels.

[//]: # "Throwing this into markdown blockquotes, i.e. > Content breaks the parser"
<blockquote>
### AudioLink Emission

Multiply
: Multiplies the Emission strength with the specified AudioLink channel. Use the **Min/Max** sliders to adjust how intense you want the audio reactivity to be.

Add
: Adds the specified AudioLink channel to the Emission strength. Use the **Min/Max** sliders to adjust how intense you want the audio reactivity to be.
</blockquote>

## Other Modules

Bakery
: Enables [Bakery](https://assetstore.unity.com/packages/tools/level-design/bakery-gpu-lightmapper-122218) support. Required to use Bakery RNM or Bakery SH lightmapping modes, and must match whatever setting is used in Bakery.

LTCGI
: Enables [LTCGI](https://github.com/pimaker/ltcgi) support.

AudioLink
: Enables [AudioLink](https://github.com/llealloo/vrc-udon-audio-link) support.

## Misc

Render Queue
: Controls when to render this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.

Enable GPU Instancing
: Allows Unity to draw objects using the **same mesh** and **same material** using one draw call, yielding performance.

Double Sided Global Illumination
: Enables double sided global illumination for this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.