---
layout: '@layouts/DocsPage.astro'
title: Editor Extensions
description: Learn more about the Editor Extensions included with Hekky Shaders
image: assets/hekky-shaders-banner.png
setup: | 
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Editor Extensions

Hekky PBR comes with a couple of Editor extensions to make the process of world creation easier.

> ### Table of Contents
> 
> - [Post Processing Setup](#post-processing-setup)
> - [Studio Lighting Mode](#studio-lighting-mode)
> - [Normal Map Conversion Tool](#normal-map-conversion-tool)

## Post Processing Setup

> Hekky > Setup Post Processing

A quick and easy tool to help you setup Post Processing in your Unity Project and Scene with sane default values.

<ComparisionCard beforeSrc="/shared/img/post-off.webp" beforeTxt="Post Processing Off" afterSrc="/shared/img/post-on.webp" afterTxt="Post Processing On" color="#fff"/>

## Studio Lighting Mode

> Press <kbd>F12</kbd>. You can go to Edit > Shortcuts.. to edit keybinds.

This allows you to mimic the Studio Lighting Mode seen in [Blender](https://blender.org/) inside the Unity Scene View. This is particularly useful for navigating dark scenes such as nightclubs.

![Studio Lighting](/shared/img/studio-lighting.webp)

## Normal Map Conversion Tool

> Right click a Normal Map texture, then select Convert > Normal map (GL 🡸🡺 DX)

Allows you to convert a normal map from OpenGL mode to DirectX mode, and vice-versa.