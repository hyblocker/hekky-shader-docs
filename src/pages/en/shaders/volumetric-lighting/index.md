---
layout: '@layouts/DocsPage.astro'
title: Volumetric Lighting
description: A cheap and lightweight volumetric lighting solution
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardTip from '@components/CardTip.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Volumetric Lighting

<CardInfo title="Patreon only">
	This shader requires the 10 EUR tier or higher
</CardInfo>

Volumetric Lighting is a relatively simple volumetric lighting solution for Unity.

## What is this?

"Volumetric Lighting" is **NOT** a god-rays implementation. This solution simulates the lighting reflected by dust particles in the air.

<ComparisionCard beforeSrc="/shared/img/scene-no-volumetric-lighting.webp" beforeTxt="No Volumetric Lighting" afterSrc="/shared/img/scene-with-volumetric-lighting.webp" afterTxt="Volumetric Lighting" color="#fff"/>

## Setup

<CardTip title="Requires baked lighting">
This shader takes advantage of light probes to calculate volumetric lighting efficiently. As a result, if you wish to use this in a scene, make sure you have light probes wherever you want volumetric lighting, and that they are baked.
</CardTip>

Navigate to "Hekky/Examples/Prefabs", and drag the "VolumetricVolume" prefab into your scene. It will move with the camera once you enter play mode, build the project, or load the world in VRChat.

The script attached to this prefab anchors the mesh with the camera so that it always covers the entire screen, and can receive light probe data to quickly render volumetric lighting.

## Inspector

Intensity
: The overall intensity of the volumetric lighting.