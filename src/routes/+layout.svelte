<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
  :global(body) {
    margin: 0px;
  }
 .app {
  min-height: 100vh;
  background: linear-gradient(#2ceafb, #7fff70);/*linear-gradient(#fbf6af, #c0ffba);linear-gradient(#afbafb, #ffbaba);linear-gradient(#64bfe6, #e5e591);*/
  margin: 0px;
  padding: 5px;
 }

 @media (prefers-color-scheme: dark) {
  .app {
    background: linear-gradient(#0a21a7, #a82828);
  }
  :global(body) {
    background-color: black;
  }
}
</style>
