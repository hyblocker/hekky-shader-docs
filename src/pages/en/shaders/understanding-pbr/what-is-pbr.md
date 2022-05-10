---
layout: '@layouts/DocsPage.astro'
title: What is PBR?
setup: | 
  import CardInfo from '@components/CardInfo.astro'
  import CardTip from '@components/CardTip.astro'
  import CardHelp from '@components/CardHelp.astro'
  import CardWarning from '@components/CardWarning.astro'
  import Accordion from '@components/Accordion.astro'
  import AccordionTabbed from '@components/AccordionTabbed.astro'
  import AccordionTab from '@components/AccordionTab.astro'
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

> TODO: Specular reflection diagram ; Metal = 1, Rough = 0

**Diffuse Reflections** refer to light rays which are reflected randomly.

> TODO: Diffuse reflection diagram ; Metal = 0, Rough = 1 ; Albedo = red

<CardTip title="Light scattering">
Diffuse reflections aren't really "reflected". In reality the light is **absorbed** by the material, then scattered about.
</CardTip>

We can control if a surface uses specular reflections or diffuse reflections with the **metal mask** parameter. A surface **cannot** be half metallic and half dielectric (dielectric is the opposite of metal).

<CardHelp title="Other pipelines">
You might see **metal mask** referred to as `metalness`, `metallic` or `metal` in other shaders. These refer to the same property.
</CardHelp>

We can control the reflectivity of a surface via the **roughness** parameter. The rougher a surface is, the blurrier the reflections appear. The smoother a surface is, the smoother the reflections appear.

<CardInfo title="Smoothness">
Smoothness (or glossiness) is the inverse of roughness.
</CardInfo>

> TODO: Roughness diagram ; Metal = 1, Rough = user-controlled

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

> TODO: Lens

### Anisotropy

Anisotropy refers to stretched specular reflections. It's typically seen at angles around a point on a surface too. Brushed materials are common anisotropic materials.

![Shader Inspector](/shared/img/aniso-example.png)

<Accordion title="Among Us">
A hit social deduction game developed by Innersloth Studios.
</Accordion>

<AccordionTabbed title="Among Us No way">
<AccordionTab tabName="What">
A hit social deduction game developed by Innersloth Studios.
</AccordionTab>
</AccordionTabbed>