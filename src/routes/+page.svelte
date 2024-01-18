<script>
  import profilePic from '../lib/images/profile.jpeg'
</script>

<svelte:head>
	<title>Matt Roberts</title>
	<meta name="description" content="Matt Roberts's Portfolio Page" />
</svelte:head>

<div class="content">
  <br/>
  <br/>
<div class="profile-container">
<img src={profilePic} class="profile" alt="Profile Picture of Matt Roberts with a blue shirt and tie">
</div>
<h1>Hi, I'm Matt. 👋🏻</h1>
  <h2>I'm a developer and QA engineer.</h2>
  <h3>Check out my apps, my work for clients, my tech notes, and my resume.</h3>
</div>

<style>
	.content {
    max-width: 1000px;
    margin: auto;
  }
  .profile {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    border-color: black;
    border-width: 4px;
    border-style: solid;
  }
  .profile-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  h1, h2, h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  @media (prefers-color-scheme: dark) {
  h1,h2,h3 {
    color: white;
  }
  .profile {
    border-color: white;
  }
}
</style>
