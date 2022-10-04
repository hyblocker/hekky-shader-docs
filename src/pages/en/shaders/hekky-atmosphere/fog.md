---
layout: '@layouts/DocsPage.astro'
title: Atmospheric Fog
description: Fog effect to compliment Hekky Atmosphere
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardWarning from '@components/CardWarning.astro'
  import CardError from '@components/CardError.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
  import FeatureIncluded from '@icons/FeatureIncluded.astro'
---

# Atmospheric Fog

Atmospheric fog aims to add fog which takes the atmosphere into account. It allows fog to react properly to the time of day, and distance.

Fog is useful to help the viewer better perceive distance. It also provides more correct global illumination.

<ComparisionCard beforeSrc="/shared/img/atmospheric-fog-off.webp" beforeTxt="No fog" afterSrc="/shared/img/atmospheric-fog-on.webp" afterTxt="Atmospheric fog" color="#fff" />

<CardError title="Issues with Mie scattering">
Mie scattering (the haze from the sun) is currently not working properly.
</CardError>

<CardError title="Issues below y = 0">
The effect currently breaks when the camera, or parts of a mesh are below y = 0 right now. A fix is being investigated.
</CardError>

## Setup

To setup Atmospheric Fog:
- Drag the atmospheric fog prefab from Hekky/Examples/Prefabs into your scene.
- Scale up the mesh to encompass the entire visible region.