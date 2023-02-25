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
> - [Reflections](#reflections)
> - [Subsurface Scattering](#subsurface-scattering)
> - [Emission](#emission)
> - [Matcap](#matcap)
> - [Occlusion](#occlusion)
> - [Outline](#outline)
> - [AudioLink](#audiolink)
> - [Other Modules](#other-modules)
> - [LTCGI Settings](#ltcgi-settings)
> - [Misc](#misc)

![Shader Inspector](/en/hekkypbr_shader_inspector_full.webp)

<CardInfo title="Sliders">
Sliders next to textures control the intensity of the texture!
</CardInfo>

Rendering Mode
: Allows you to change the material from opaque mode to transparency mode.

Alpha Clip
: Allows you to control the alpha clip threshold.

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

Enable POM
: Enables Parallax Occlusion Mapping.

Height Map
: Displacement or Height map texture, and how far it will protrude inwards.

Disable Beyond 0-1 UVs
: Clips the texture so that when the POM texture bleeds beyond the 0-1 range it clips to further sell the illusion of displacement. This however assumes all the UVs are contained within a 0-1 range

<ComparisionCard beforeSrc="/shared/img/pom-disabled.webp" beforeTxt="No POM" afterSrc="/shared/img/pom-enabled.webp" afterTxt="POM" color="#fff"/>

<CardWarning title="POM Performance">
POM is an expensive (slow) technique. Hekky PBR has a few optimisations to make POM less expensive than most implementations of POM, which means you'll be able to use POM more often, but still shouldn't be used for everything.
</CardWarning>

Normal Map
: Allows you to define surface bumps without increasing the polygon count.

<CardTip title="Textures">
All textures share the same **Texture** sampling settings, i.e. texture settings such as filtering mode, clamp or repeat tiling modes will be shared. The only exception is the matcap texture.
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

SSR
: Enables Screenspace Reflections.

<CardWarning title="Note">
The current SSR implementation is not as good as I would like it to be. As such, this will be getting reworked at some point in the future.
</CardWarning>

Blur
: Unused for now.

Edge Fade
: How far off the edge of the screen screen space reflections will extend to. They will smoothly blend with reflection probes.

Accuracy
: Controls the amount precision used when tracing the reflected ray.

Maximum steps
: The maximum amount of steps allowed to trace the reflected ray.

<CardTip title="Performance">
Screenspace Reflections are an expensive shader effect. Use this sparingly, and only whenever necessary (you can get pretty far with reflection probes alone)
</CardTip>

### Subsurface Scattering

<ComparisionCard beforeSrc="/shared/img/sss-off.webp" beforeTxt="Regular lighting" afterSrc="/shared/img/sss-on.webp" afterTxt="Subsurface Scattering" color="#fff"/>

Enable Subsurface Scattering
: Enables Subsurface Scattering.

Thickness Map
: A grayscale texture defining the thickness of a mesh.

SSS Color
: A color to be applied on subsurface scattering.

Intensity
: How intense the effect of subsurface scattering is.

<CardTip title="Occlusion">
Subsurface scattering is affected by occlusion, to better account for the lack of light from certain areas. The exact algorithm currently used to take occlusion into account will likely be reworked later to take occlusion into account in a more physically based manner.
</CardTip>

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

<CardInfo title="Variants">
Outlines are only available in the outline variant of this shader. To use outlines, select "Hekky/PBR/Standard (Outline)".
</CardInfo>

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
: Enables [Bakery](https://assetstore.unity.com/packages/tools/level-design/bakery-gpu-lightmapper-122218) support. Required to use Bakery RNM, Bakery SH or MonoSH lightmapping modes, and must match whatever setting is used in Bakery. [Learn more](/en/shaders/misc/bakery)

LTCGI
: Enables [LTCGI](https://github.com/pimaker/ltcgi) support.

AudioLink
: Enables [AudioLink](https://github.com/llealloo/vrc-udon-audio-link) support.

## LTCGI Settings

LTCGI Scale
: Skews the area of effect of an LTCGI light in 3D. This can be used to give the illusion of a surface "receiving more light".

LTCGI Intensity
: Controls the brightness of LTCGI lighting.

## Misc

Render Queue
: Controls when to render this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.

Enable GPU Instancing
: Allows Unity to draw objects using the **same mesh** and **same material** using one draw call, yielding performance.

Double Sided Global Illumination
: Enables double sided global illumination for this material. See the [Unity Docs](https://docs.unity3d.com/Manual/class-Material.html) for more information.