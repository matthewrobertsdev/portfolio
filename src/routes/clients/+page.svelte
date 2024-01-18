<script>
  import teeHeeImage from '../../lib/images/tee-hee.png'
  import teeHeeVideo from '../../lib/videos/tee-hee.mp4'
  import wyzantProfileImage from '../../lib/images/wyzant-profile.png'
</script>
<svelte:head>
	<title>Clients</title>
	<meta name="description" content="Clients" />
</svelte:head>

<div class="content">
  <h1>Clients</h1>
  <h2>I have worked as a developer contractor and as a computer science tutor.</h2>
  <br/>
  <h2>Towards the start of my career I contracted for A&X Analytics.</h2>
  <p>I developed an iOS app using Swift, Xcode, UIKit, and CocoaPods. Retrieved, filtered, and
    displayed content from the server, allowing users to save to an in-app calendar. </p>
    <div class="flex-container">
    <video width="320" controls poster={teeHeeImage}>
      <source src={teeHeeVideo} type="video/mp4">
    Your browser does not support the video tag.
    </video>
  </div>
  <br/>
  <h2>I also worked as a highly rated independent tutor on the online app Wyzant.</h2>
  <p>I taught Java, Python, Javascript, and Swift and received 556 five star ratings. </p>
  <div class="flex-container">
    <img src={wyzantProfileImage} alt="Image of Matt Roberts's Wyzant profile with 557 ratings, 556 of which were 5 star ratings." class="wyzant-image">
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
</div>


<style>
  .flex-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
  }
  .content {
    max-width: 1000px;
    margin: auto;
  }
  h1, h2, h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    margin: 15px;
  }
  a {
    color: rgb(4, 0, 255);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    font-size: 20px;
    margin: 15px;
  }
  video {
    max-width: 100vw;
    margin: 15px;
  }
  .wyzant-image {
    max-width: 400px;
    margin: 15px;
  }
  @media (prefers-color-scheme: dark) {
  h1,h2,h3, p {
    color: white;
  }
  a {
    color: rgb(0, 217, 255);
    text-decoration: none;
  }
}
@media only screen and (max-width: 400px) {
  .wyzant-image {
    max-width: 95vw;
  }
}
</style>