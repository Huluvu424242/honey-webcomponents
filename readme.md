[![Build Status](https://travis-ci.com/Huluvu424242/honey-webcomponents.svg?branch=master)](https://travis-ci.com/Huluvu424242/honey-webcomponents)
![Github CI](https://github.com/Huluvu424242/honey-webcomponents/workflows/Github%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@huluvu424242/honey-webcomponents.svg)](https://www.npmjs.com/package/@huluvu424242/honey-webcomponents)
[![npm](https://img.shields.io/npm/dm/@huluvu424242/honey-webcomponents.svg)](https://www.npmjs.com/package/@huluvu424242/honey-webcomponents)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@huluvu424242/honey-webcomponents)
[![Donate with paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://paypal.me/huluvu424242)
![Keybase BTC](https://img.shields.io/keybase/btc/huluvu424242)
# honey-webcomponents 
This is a suite of honey-webcomponents to deliver as an bundle.

## installation

npm install --save honey-webcomponents

## usage

```html
<script 
    type="module" 
    src='https://unpkg.com/@huluvu424242/honey-webcomponents@0.0.1/dist/honey-webcomponents/honey-webcomponents.js'>
</script>
```
To the [demo site](https://huluvu424242.github.io/honey-webcomponents/index.html)

[Vision of API (under construction)](src/components/honey-webcomponents/readme.md)

## demo

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="docs/index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<honey-speaker textids="text1,text2"></honey-speaker>
<p id="text1">fizz fizz fizz fizz</p>
<p id="text2">buzz buzz buzz buzz</p>
```
To the [live demo](https://huluvu424242.github.io/honey-webcomponents/index.html)

## become an supporter

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## releaselog

### v0.0.XX unpublished

* bug and feature description

### v0.0.1 published at 2021-01-12

* honey-speaker added


## internet links

* https://auth0.com/blog/creating-web-components-with-stencil/
* https://www.twilio.com/blog/2018/02/creating-and-publishing-web-components-with-stencil.html
* https://stenciljs.com/docs/introduction
* https://css-tricks.com/styling-a-web-component/
* https://meowni.ca/posts/part-theme-explainer/


## warranty

no warranty

## license

MIT License

## technology used

* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)
* [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [Shadow Parts](https://developer.mozilla.org/de/docs/Web/CSS/::part)


## browser support

### Web Speech API

Firefox

Maybe you must via about:config set media.webspeech.synth.enabled to true 

Generell

* [Can I use with browsers?](https://caniuse.com/#feat=speech-synthesis)

### Custom Elements

* [Can I use with browsers?](https://caniuse.com/#feat=mdn-api_window_customelements)

### CSS Custom Properties

* [Can I use with browsers?](https://caniuse.com/#search=css%20custom%20properties)

### Shadow Parts

Firefox

Maybe you must via about:config set the layout.css.shadow-parts.enabled to true.

Generell 

* [Can I use with browsers?](https://caniuse.com/#feat=mdn-css_selectors_part)
