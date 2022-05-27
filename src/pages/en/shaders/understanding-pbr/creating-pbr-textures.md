---
layout: '@layouts/DocsPage.astro'
title: Creating PBR Textures
setup: | 
  import CardInfo from '@components/CardInfo.astro'
---
# Creating PBR Textures

<CardInfo title="Note">
Creating PBR textures is a complex subject, and this guide **CANNOT** explain everything. This page will only give a surface level, basic understanding of authoring textures using a PBR workflow.
</CardInfo>

## Using existing PBR materials

Creating your own PBR materials from scratch is difficult, time consuming, and expensive. Thus there are a wide variety of freely available PBR textures you can use:

- [Ambient CG](ambientcg.com/) (Formerly CC0 Textures)
- [cgbookcase.com](https://www.cgbookcase.com/)
- [3D Textures by icons8](https://icons8.com/l/3d-textures/)\*

> \* **Requires** attribution (i.e. say that you got the textures from icons8) if using the **free license**. Paid license doesn't demand attribution.

<CardInfo title="Substance Player">
Sometimes you'll find PBR textures offered in a `sbsar` file format. You can open these files in [Substance Player](https://substance3d.adobe.com/documentation/sp31/substance-player-2294742.html), and further tweak them to generate unique PBR textures. This route is preferred whenever possible over using random PBR textures, as due to these textures being freely available, users might feel that they are repetitive.
</CardInfo>

## Creating PBR textures from scratch

There are numerous methods and tools which can be used to create PBR textures. PBR textures are best used with 