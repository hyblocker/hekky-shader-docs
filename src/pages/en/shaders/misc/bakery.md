---
layout: '@layouts/DocsPage.astro'
title: Editor Extensions
description: Learn more about the Editor Extensions included with Hekky Shaders
image: assets/hekky-shaders-banner.png
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardError from '@components/CardError.astro'
  import CardTip from '@components/CardTip.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Bakery

Bakery is a **paid** GPU lightmapper for Unity. You can [buy a copy of Bakery here](https://assetstore.unity.com/packages/tools/level-design/bakery-gpu-lightmapper-122218), and [buy a copy of Bakery RT Preview here](https://assetstore.unity.com/packages/tools/level-design/bakery-real-time-preview-164462).

<CardError title="Required hardware">
Bakery requires a NVIDIA GPU, preferably an RTX GPU. Bakery will **NOT** work on Intel or AMD GPUs. Please see [the Bakery Wiki for more information](https://geom.io/bakery/wiki/index.php?title=Main_Page).
</CardError>

> ### Table of Contents
> 
> - [Why use Bakery](#why-use-bakery)
> - [Directional Modes](#directional-modes)
> - [How do I get good results using Bakery](#how-do-i-get-good-results-using-bakery)

## Why use Bakery

Bakery takes advantage of the GPU to offer fast light baking. Bakery's lightmapper is more often than not noticeably faster than Unity's built in GPU lightmapper, and also supports more accurate lighting. Apart from that Bakery allows you to use more complex lightmap directional modes than Unity's progressive lightmapper, which more accurately store the way light bounces around a scene, which results in better lighting.

## Directional Modes

> What's the difference between None, Baked Normal Maps, Dominant Direction, RNM, SH and MonoSH?

| Name | Description | VRAM (Relative) |
| - | - | - |
| None | Stores the light colour, but no information regarding the way the light changes based on where you look at it from. Looks the worst | 2 |
| Baked Normal Maps | Ground truth, takes normal maps into account, but doesn't store any directionality information about them | 2 |
| Dominant Direction | Stores the light color and "dominant direction" of the light. Despite having some form of directionality it's not as accurate as RNM, SH and MonoSH. | 4 |
| RNM | Most memory demanding of them all; based on the Radiosity Normal Mapping technique popularised in HL2. Requires UdonBakeryAdapter | 6 |
| SH | Stores the light colour, and lighting information in all directions. This yields the best results. Requires UdonBakeryAdapter | 5 |
| MonoSH | Stores the same information as SH, but in a more efficient manner | 4 |

> Numbers above assume the lightmap textures are using the same resolution, and are **per-lightmap**

<CardInfo title="Most used mode">
***Dominant Direction*** is the most commonly used directional mode in VRChat. Few maps use RNM or SH due to their memory footprints. MonoSH, while relatively new, offers the same visual quality of SH at the same memory footprint as Dominant Direction.
</CardInfo>

## How do I get good results using Bakery

Lighting a scene well is a topic that is beyond the scope of this page. There are plenty of other resources on the internet if you wish to learn how to light a scene effectively.

It's important to keep a balance between lightmap quality and the memory footprint of lightmaps. This is why most VRChat world creators use Dominant Direction. MonoSH, which uses the same memory footprint as dominant direction, offers the best visual quality, for a fraction of the memory footprint of full SH. MonoSH also has the benefit of not requiring UdonBakeryAdapter.

<CardTip title="Mono SH quality">
MonoSH L1 lightmaps suffer heavily from compression artifacts, and as such I recommend using the BC7 texture format (High quality compression) for better results.
</CardTip>

<ComparisionCard beforeSrc="/shared/img/bakery-monosh-lq.webp" beforeTxt="MonoSH (Normal Quality)" afterSrc="/shared/img/bakery-monosh-hq.webp" afterTxt="MonoSH (High Quality)" color="#000" />

> These screenshots are real, and have not been altered.