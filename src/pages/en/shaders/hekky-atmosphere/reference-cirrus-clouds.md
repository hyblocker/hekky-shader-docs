---
layout: '@layouts/DocsPage.astro'
title: Hekky Cirrus Clouds Reference
description: A list of all properties for Hekky Cirrus Clouds
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardTip from '@components/CardTip.astro'
  import PaywallIcon from '@icons/PaywalledFeature.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
  import VideoPlayer from '@components/VideoPlayer.astro'
---
# Cirrus Clouds Shader Reference

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

![Shader Inspector](/en/hekkycirrusclouds_shader_inspector_full.webp)

Data Field
: A special texture which controls the cloudscape. The **red channel** controls the cloud type, while the **green channel** controls the cloud coverage.

<CardInfo title="Cloud what?">

Clouds are governed by a number of unique variables.

Cloud Coverage
: Controls how much "cloud" is at a given place. When this is 1 (white or 255) this means full coverage, i.e. the sky would be covered in clouds.

<VideoPlayer autoplay src="/shared/video/cloud-coverage-oscillation.mp4" />

Cloud Type
: Controls the "shape" of the cloud at a given place. Lower values mean the type of cloud used is less dense (i.e. covers less of the sky), while higher values mean that the type of cloud used is denser (i.e. covers more of the sky).

<VideoPlayer autoplay src="/shared/video/cloud-type-oscillation.mp4" />

</CardInfo>

Detail Scale
: Controls the size of the micro-details in clouds.

Data Field Scale
: Controls the size of the Data Field Texture.

Cloud Thickness
: Controls how much light passes through the clouds. Higher values mean "whiter" clouds.

Sun Lighting Strength
: Controls how much sun light clouds receive.

Ambient Color
: The color used for ambient lighting.

Ambient Intensity
: The intensity of ambient lighting.

Evolution Speed
: Controls how quickly clouds' shape evolves over time.

Wind Speed
: How fast clouds move with the wind.

Wind Direction
: The direction wind is blowing in.

Moon Light Color
: The color used for light given off by the moon.

Moon Light Intensity
: The intensity used for moon lighting.

Override Sun Light Color
: If enabled, overrides the main directional light's color with the given color.

Sun Light Color
: The color used for sun light.

Sun Light Intensity
: The intensity used for sun light color.
