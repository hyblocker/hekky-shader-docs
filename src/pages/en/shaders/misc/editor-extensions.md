---
layout: '@layouts/DocsPage.astro'
title: Editor Extensions
description: Learn more about the Editor Extensions included with Hekky Shaders
image: assets/hekky-shaders-banner.png
setup: | 
  import CardWarning from '@components/CardWarning.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# Editor Extensions

Hekky PBR comes with a couple of Editor extensions to make the process of world creation easier.

> ### Table of Contents
> 
> - [Post Processing Setup](#post-processing-setup)
> - [Studio Lighting Mode](#studio-lighting-mode)
> - [Normal Map Conversion Tool](#normal-map-conversion-tool)
> - [Auto High Quality MonoSH L1 Lightmaps](#auto-high-quality-monosh-l1-lightmaps)

## Post Processing Setup

> Hekky > Setup Post Processing

A quick and easy tool to help you setup Post Processing in your Unity Project and Scene with sane default values.

<ComparisionCard beforeSrc="/shared/img/post-off.webp" beforeTxt="Post Processing Off" afterSrc="/shared/img/post-on.webp" afterTxt="Post Processing On" color="#fff"/>

## Studio Lighting Mode

> Press <kbd>F12</kbd>. You can go to Edit > Shortcuts.. to edit keybinds.

This allows you to mimic the Studio Lighting Mode seen in [Blender](https://blender.org/) inside the Unity Scene View. This is particularly useful for navigating dark scenes such as nightclubs.

![Studio Lighting](/shared/img/studio-lighting.webp)

<CardWarning title="Materials Disappearing">
It has been reported that when using this mode, some materials disappear entirely from the scene view, or don't render properly in the scene view. If this happens to you, please contact me so that I can fix this for better behaviour.
</CardWarning>

## Normal Map Conversion Tool

> Right click a Normal Map texture, then select Convert > Normal map (GL 🡸🡺 DX)

Allows you to convert a normal map from OpenGL mode to DirectX mode, and vice-versa. Equivalent of inverting the green channel in an image editor.

## Auto High Quality MonoSH L1 Lightmaps

<ComparisionCard beforeSrc="/shared/img/bakery-monosh-lq.webp" beforeTxt="MonoSH (Normal Quality)" afterSrc="/shared/img/bakery-monosh-hq.webp" afterTxt="MonoSH (High Quality)" color="#000" />

[Bakery](https://assetstore.unity.com/packages/tools/level-design/bakery-gpu-lightmapper-122218) recently added support for MonoSH lightmaps. The default configuration for MonoSH lightmaps unfortunately suffer from lots of artifacts, as you can see above. Hekky Shaders come with a solution which forces a better compression format ([BC7](https://docs.microsoft.com/en-us/windows/win32/direct3d11/bc7-format)) which handles gradients significantly better than the default option. BC7 however results in larger texture sizes.

Whenever you bake a scene using Bakery with MonoSH directional mode, you'll see this pop-up:

![MonoSH popup](/en/monosh-popup.webp)

Clicking "Yes, use BC7" will always force L1 lightmaps to use the BC7 texture format. This pop-up will not re-open again once set.

If you wish to change this behaviour, you can change the settings by navigating to `Editor/HekkySettings`, and changing the "Bakery Force Mono SH High Quality" setting.

![Hekky Settings Bakery Force MonoSH](/en/hekky-settings-monosh.webp)