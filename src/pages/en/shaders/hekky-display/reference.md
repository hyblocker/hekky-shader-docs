---
layout: '@layouts/DocsPage.astro'
title: Hekky Display Reference
description: A list of all properties for Hekky Display
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardTip from '@components/CardTip.astro'
  import PaywallIcon from '@icons/PaywalledFeature.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Shader Reference

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

<CardHelp title="This shader is a variant">
	Most properties behave in the same manner as they do in [Hekky PBR](/en/shaders/hekky-pbr/reference)
</CardHelp>

![Shader Inspector](/en/hekkydisplay_shader_inspector_full.webp)

<CardInfo title="Sliders">
Sliders next to textures control the intensity of the texture!
</CardInfo>

Rendering Mode
: Allows you to change the material from opaque mode to transparency mode.

## Display

<CardTip title="Textures">
All textures share sampling settings the **Texture** sampling settings. The only exceptions are the **subpixel layout**, **matcap** textures.
</CardTip>

This section describes the behavior of a display expressed by a material using Hekky Display.

Display Texture
: The albedo / diffuse / base texture. Can also be tinted. Generally this would be a RenderTexture from a VideoPlayer.

Aspect Ratio
: The aspect ratio of the display, Defaults to 16:9. Used to ensure that videos maintain aspect ratio. To disable it, set the value to `1`. To use a custom aspect ratio, replace the `:` with a divide operator `/`. For example, using `4/3` sets the aspect ratio to 4:3.

Subpixel Layout
: A subpixel layout texture. Example textures are provided in `Assets/Hekky/Textures/SubpixelLayouts`. This texture is an RGB texture which gets multiplied with a pixel from the video texture.

Subpixel Scale X / Y
: Scales the subpixel texture along the X and Y axes. 1 means no scaling.

Subpixel Resolution
: The "physical" resolution of the display. To emulate a 1080p display for example, set the resolution to `1920` by `1080`.

Snap To Subpixels
: Snaps the display texture to the subpixel grid, which would remove gradients in subpixels, emulating LCDs better.

Overscan X / Y
: Adds an unlit, black border around the display. Useful for CRTs. This section doesn't get affected by the backlight.

Backlight
: Adds a backlight to the display, to emulate an LCD better.

Grayscale
: Turns the image grayscale, useful if you're trying to aim for a "vintage" look.

Flip in Mirrors
: Flips the screen when viewed through a mirror. Useful so that text remains readable.

Flip on Backside
: Flips the screen when viewed through the backface of a mesh. Useful so that text remains readable.

[//]: # "Throwing this into markdown blockquotes, i.e. > Content breaks the parser"
<blockquote>
## Strobing
*Strobing refers to the behavior exhibited primarily by CRTs when attempted to be recorded with incorrect shutter speed settings on a camera. This effect isn't present to the naked eye.*

Strobe In Cameras
: Enables strobing in VRChat Cameras

Size
: Controls the size of the strobing effect.

Period
: Controls the duration of the strobing effect.

Speed
: Controls the speed of the strobing effect.

Minimum Light
: The minimum light from dark areas under the strobing effect.

Strobe Start / Strobe End
: These control the start and end of the strobing effect. The strobe gets remapped such that the start is mapped to 0, and the end is mapped to 1.
</blockquote>

<CardHelp title="Glare">
	Since Hekky Display is built upon [Hekky PBR](/en/shaders/hekky-pbr/what-is-hekky-pbr), it automatically gets glare due to reflections. To mimic [anti-glare coating](https://en.wikipedia.org/wiki/Anti-reflective_coating), reduce the roughness slider to a value near 0.
</CardHelp>