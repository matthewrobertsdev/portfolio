<script>
    import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Tech Notes</title>
	<meta name="description" content="Notes on Tech and Development" />
</svelte:head>

<div class="text-column">
  <h1>Tech Notes</h1>
  <h2><a href="{base}/notes/dark-mode">Implementing Dark Mode</a></h2>
  <h2><a href="{base}/notes/flexbox-interactive-demo">Flexbox Interactive Demo</a></h2>
</div>


<style>
  .content {
    max-width: 1000px;
    margin: auto;
  }
  h1, h2, h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    color: rgb(4, 0, 255);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (prefers-color-scheme: dark) {
  h1,h2,h3 {
    color: white;
  }
  a {
    color: rgb(0, 217, 255);
    text-decoration: none;
  }
}
</style>