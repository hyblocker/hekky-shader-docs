---
layout: '@layouts/DocsPage.astro'
title: Creating PBR Textures
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardHelp from '@components/CardHelp.astro'
---
# Creating PBR Textures

<CardInfo title="Note">
Creating PBR textures is a complex subject, and this guide **CANNOT** explain everything. This page will only give a surface level, basic understanding of authoring textures using a PBR workflow.
</CardInfo>

## Using existing PBR materials

Creating your own PBR materials from scratch is difficult, time consuming, and expensive. Thus there are a wide variety of freely available PBR textures you can use:

- [Ambient CG](https://ambientcg.com/) (Formerly CC0 Textures)\*\*
- [cgbookcase.com](https://www.cgbookcase.com/)
- [Share Textures](https://www.sharetextures.com/)
- [3D Textures by icons8](https://icons8.com/l/3d-textures/)\*

> \* **Requires** attribution (i.e. say that you got the textures from icons8) if using the **free license**. Paid license doesn't demand attribution.
>
> \*\* Uses Direct-X style normal maps. See [Normal map conversion](../misc/editor-extensions#normal-map-conversion-tool) for more information.

<CardHelp title="Substance Player">
Sometimes you'll find PBR textures offered in a `sbsar` file format. You can open these files in [Substance Player](https://substance3d.adobe.com/documentation/sp31/substance-player-2294742.html), and further tweak them to generate unique PBR textures. This route is preferred whenever possible over using random PBR textures, as due to these textures being freely available, users might feel that they are repetitive.
</CardHelp>

## Creating PBR textures from scratch

There are numerous methods and tools which can be used to create PBR textures. PBR textures are best created using either photogrammetry or tools designed with PBR texturing in mind.

### Tools you can use:

- [Substance Suite](https://www.adobe.com/products/catalog.html#category=3d-ar)
- [Blender](https://www.blender.org/)

### Which texture maps should you use?

Good PBR materials generally make use of a couple of texture maps:
- Base Colour / Diffuse / Albedo
- Normal Map
- Metallic Map
- Roughness Map
- Ambient Occlusion Map

A material that doesn't make use of one or more of the above texture maps isn't a bad material.