---
layout: '@layouts/DocsPage.astro'
title: What is PBR?
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardTip from '@components/CardTip.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import ComparisionCard from '@components/ComparisionCard.astro'
---
# What is PBR?

<CardInfo title="Note">
This explanation is not a technical one. It is designed to familiarise you with the core concepts of PBR, as understanding them well is important if you want to make or use good textures. This explanation will focus the concepts implemented inside of [Hekky PBR](/en/shaders/hekky-pbr/what-is-hekky-pbr/), but these should be exchangeable for other shaders too.
</CardInfo>

**Physically Based Rendering** (PBR) refers to the practise of using realistic (i.e. based on real life physics) shading and lighting algorithms to achieve the most photorealistic result possible in 3D rendering. While PBR is designed to mimic realistic shading and lighting, it does not mean that it can't be stylized.

<CardInfo title="Standardisation">
PBR is **NOT** standardised. Each application, shader and renderer have their own implementation of it. Luckily, the implementations are similar enough to be able to transfer PBR textures from one shader to another.
</CardInfo>

## Core concepts

### Reflections

In the real world, light rays get reflected off a surface and bounce around the scene. The way light gets reflected can be represented in one of two ways, based on how rough a surface is.

**Specular Reflections** refer to light rays which are reflected in the exact same angle they arrived in. This is basically a mirror, and what you normally think of as a reflection.

![Specular reflection example demonstrating a highly reflective surface](/shared/img/specular-reflection.png)

**Diffuse Reflections** refer to light rays which are reflected randomly. Diffuse reflections aren't really "reflected". In reality the light is **absorbed** (i.e. the light goes **inside** the material) by the material, then scattered about. Some of the light gets absorbed by the material itself, meaning that the light color can changed based on the material. This is why we perceive orange painted plastic as "orange" instead of white for example.

![Specular reflection example demonstrating a red and rough surface](/shared/img/diffuse-reflection.png)

We can control if a surface uses specular reflections or diffuse reflections with the **metal mask** parameter. A surface **cannot** be half metallic and half dielectric (a dielectric surface is the opposite of a metallic surface).

<CardHelp title="Other pipelines">
You might see **metal mask** referred to as `metalness`, `metallic` or `metal` in other shaders. These refer to the same property.
</CardHelp>

We can control the reflectivity of a surface via the **roughness** parameter. The rougher a surface is, the blurrier the reflections appear. The smoother a surface is, the smoother the reflections appear.

<CardInfo title="Smoothness">
Smoothness (or glossiness) is the inverse of roughness.
</CardInfo>

<div class="filament-renderer container">
    <canvas id="roughness" data-filamat="textured-userRough"}></canvas>

  <div class="filament-overlay">
      <div class="control">
          <div class="slidecontainer">
            <input style="width: 100%;" type="range" min="0" max="100" value="0" class="slider" data-type="filament-roughness" data-affects="roughness">
          </div>
          <span class="control-title  ">Roughness</span>
      </div>
  </div>
</div>

### Energy Conservation

One of the key principles of PBR rendering in comparision to other rendering methods is the principle of energy conservation. This means that a surface **never** reflects more light than it receives. The only exception to this is when a surface is said to be [emissive](#emission).

### Occlusion

Occlusion refers to the **lack** of light reaching a surface. It's used to tell the shader which parts of the model should be darker than others.

<ComparisionCard beforeSrc="/shared/img/ao-off.png" beforeTxt="Ambient Occlusion Off" afterSrc="/shared/img/ao-on.png" afterTxt="Ambient Occlusion On"/>

### Emission

Some surfaces, such as small LEDs, emit light, but are too small to be an entire light source. An emissive map is used to allow such surfaces to cast light.

### Light Scattering

Certain surfaces scatter light. This means that the light goes through them. This can be seen in **subsurface scattering** and **sheen**.

**Subsurface scattering** refers to when light goes through a solid surface and spreads around it before coming out from the other side. You might have noticed it when you put your hand in front of a light and your hand glowed an orange red colour. This behavior is called subsurface scattering, and can be seen on numerous surfaces, such as candles, curtains, and skin.

> TODO: Real life image of subsurface scattering ; Replace with render when Hekky PBR suppports it

**Sheen** refers to a special type of light behavior typically exhibited by cloths. Without sheen, cloth will most likely look "plastic"-like. This is because, in real-life, at grazing angles, cloth generally scatters more light than traditional materials.

> TODO: Sheen image, with before / after

### Refraction

In real-life, transparent and translucent surfaces refract light. This is most prominent on common surfaces like glass, plastic, and lenses.

<CardWarning title="Performance">
Refraction is an **expensive** graphical effect, and can negatively affect your framerate! Use it only if you **REALLY need to**. Using refraction for glass, for example, **will** negatively affect your performance!
</CardWarning>

> TODO: Lens / Glass

### Anisotropy

Anisotropy refers to stretched specular reflections. It's typically seen at angles around a point on a surface too. Brushed materials are common anisotropic materials.

![Anisotropy example](/shared/img/aniso-example.png)

<script is:inline src='/shared/js/filament.js'></script>
<script is:inline src="//unpkg.com/gl-matrix@2.8.1" ></script>
<script is:inline src="//unpkg.com/gltumble"></script>