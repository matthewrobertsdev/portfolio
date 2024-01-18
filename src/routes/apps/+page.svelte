<script>
  import filterArtImage from '../../lib/images/filter-art.png'
  import clockSuiteImage from '../../lib/images/clock-suite.png'
  import spiffyClockImage from '../../lib/images/spiffy-clock.png'
</script>

<svelte:head>
	<title>Apps</title>
	<meta name="description" content="Apps" />
</svelte:head>

<div class="content">
  <h1>Apps</h1>
  <h3>I have various projects in the works, but here are apps I have released:</h3>
  <h2>Filter Art</h2>
  <p>Filter Art let's you quickly edit images to get cool results.  You decide how you filter your images with Filter Art.  Some images will naturally filter into cooler images so play around with it and you'll get a feel for what makes for a good filtered image.  It is for both iOS and Mac.</p>
  <p>It is coded in SwiftUI but dips into UIKit and AppKit where needed.</p>
  <div class="image-container">
  <img src={filterArtImage} class="iphone-image">
  </div>
  <br/>
  <h2>Clock Suite</h2>
  <p>Clock Suite let's you have the components of a clock app, each in their own window and with customizable colors across the whole app.  It is for macOS and predates Apple's Clock app for mac.</p>
  <p>It is coded in AppKit but could use an update to SwiftUI.</p>
  <div class="image-container">
    <img src={clockSuiteImage} class="mac-image">
    </div>
    <br/>
    <h2>Spiffy Clock</h2>
    <p>Spiffy Clock is for iOS and let's you have a nice fullscreen clock with customizable colors and the choice to display seconds.</p>
    <p>It is coded in React Native but could use an update to use TypeScript.</p>
    <div class="image-container">
      <img src={spiffyClockImage} class="iphone-image">
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
</div>

<style>
  
  .content {
    max-width: 1000px;
    margin: auto;
  }
  .iphone-image {
    border-radius: 30px;
  }
  .mac-image {
    border-radius: 10px;
  }
  .image-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
  }
  img {
    max-width: 95vw;
  }
  h1, h2, h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
    font-size: 20px;
    margin: 15px;
  }
  @media (prefers-color-scheme: dark) {
  h1,h2,h3, p {
    color: white;
  }
}
</style>
