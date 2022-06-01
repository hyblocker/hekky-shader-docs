---
layout: '@layouts/DocsPage.astro'
title: Using With VRChat
setup: |
  import CardError from '@components/CardError.astro'
---
# Using With VRChat

Hekky PBR is designed with [VRChat](https://hello.vrchat.com) in mind, and has VRChat specific integrations as a result.

<CardError title="Keywords">
Unity 2019.4.31f1 has a maximum **global** shader keyword limit of 384 keywords. When you exceed the global keyword limit, other shaders will start to break. Local keywords allow us to make use of keywords without affecting the global keyword limit, which means other shaders won't break. Hekky PBR makes use of **local** shader keywords as a result of this, but, the VRChat Avatar SDK has a bug which prompts you to remove local shader keywords. Please **DO NOT DO THIS**, as your materials **WILL BREAK**. If you would like to see this bug get resolved, go upvote [this canny](https://vrchat.canny.io/sdk-bug-reports/p/sdk-displays-custom-keyword-warning-for-local-shader-keywords).
</CardError>

## LTCGI

[Linearly Transformed Cosine Global Illumination (LTCGI)](https://github.com/pimaker/ltcgi) is a plug and play real-time lighting solution, which allows video players to emit light onto surfaces. Hekky PBR supports LTCGI, allowing materials which use it to receive light from video players! To set it up: enable LTCGI in the External Modules category. Setting up LTCGI itself is beyond the scope of this section; please read the instructions on GitHub for more information.

## AudioLink

[AudioLink](https://github.com/llealloo/vrc-udon-audio-link) is a VRChat addon which allows materials to react to music. Hekky PBR offers (currently basic) AudioLink support for materials, with plans for more advanced functionality down the road. To set up AudioLink enable AudioLink in the External Modules category. You can then configure AudioLink in the Emission category and test it using the AudioLink Debug section. Setting up AudioLink itself is beyond the scope of this section; please read the instructions on GitHub for more information.