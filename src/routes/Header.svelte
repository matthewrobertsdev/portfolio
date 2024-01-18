<script>
  import { base } from '$app/paths';
	import { page } from '$app/stores';
  import { Menu, Close } from 'svelte-ionicons';
  import mattRobertsResume from '../lib/matt-roberts-resume.pdf'
  let innerWidth = 0;
  let menuShown = false;

	/** @param {MouseEvent} event */
	function toggleMenu(event) {
		menuShown = !menuShown
	}
</script>

<svelte:window bind:innerWidth />

<header>

  <!--{#if innerWidth >700}-->
	<nav class="main-nav">
		<ul>
      <li class="title" aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}>
        <a class="title" href="{base}/">Matt Roberts</a></li>
      <li aria-current={$page.url.pathname === `${base}/apps` ? 'page' : undefined}>
				<a class="link" href="{base}/apps">Apps</a>
			</li>
      <li aria-current={$page.url.pathname === `${base}/clients` ? 'page' : undefined}>
				<a class="link" href="{base}/clients">Clients</a>
			</li>
      <li aria-current={$page.url.pathname === `${base}/notes` ? 'page' : undefined}>
				<a class="link" href="{base}/notes">Notes</a>
			</li>
      <li>
				<a class="link" href={mattRobertsResume} target="_blank">Resume</a>
			</li>
		</ul>
	</nav>
  <!--{:else}
  <nav>
    <ul class="main-nav">
    <li class="title" aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}>
      <a class="title" href="{base}/">Matt Roberts</a></li>
    <button class="menu-button" on:click={toggleMenu}>
      {#if menuShown}
      <Close size={"35"}/>
      {:else}
      <Menu size={"35"}/>
      {/if}
    </button>
    </ul>
  </nav>
  <nav class="secondary-nav {menuShown ? "" : "hidden"}">
    <ul class="secondary-nav-list">
      <li aria-current={$page.url.pathname === `${base}/apps` ? 'page' : undefined}>
				<a class="link" href="{base}/apps" on:click={toggleMenu}>Apps</a>
			</li>
      <li aria-current={$page.url.pathname === `${base}/clients` ? 'page' : undefined}>
				<a class="link" href="{base}/clients" on:click={toggleMenu}>Clients</a>
			</li>
      <li aria-current={$page.url.pathname === `${base}/notes` ? 'page' : undefined}>
				<a class="link" href="{base}/notes" on:click={toggleMenu}>Notes</a>
			</li>
      <li>
				<a class="link" href={mattRobertsResume} target="_blank" on:click={toggleMenu}>Resume</a>
			</li>
		</ul>
  </nav>
  {/if}-->

</header>

<style>
  nav {
    margin: 0px;
  }
  .menu-button {
    margin: 10px;
    margin-left: 25px;
    background-color: rgb(255, 226, 40);
    color: black;
    border: 0px;
    cursor: pointer;
  }
  /*
  .main-nav {
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: rgb(255, 226, 40);
    margin: 0px;
    border-radius: 15px;
  }
  */
  .main-nav {
    background-color: rgb(255, 226, 40);
    margin: 0px;
    border-radius: 15px;
  }
  .secondary-nav {
    margin-top: -10px;
    text-align: center;
    background-color: rgb(255, 226, 40);
    border-radius: 15px;
  }
  .secondary-nav-list {
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: stretch;
  }
  .hidden {
    display: none;
  }
  /*
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 1;
    margin-left: -45px;
    font-family: Arial, Helvetica, sans-serif;
  }
  */
  /*
  ul {
    display: inline-block;
    list-style: none;
    margin-left: -45px;
    font-family: Arial, Helvetica, sans-serif;
  }
  */
  ul {
    margin-top: 0px;
    margin-left: -20px;
    display: inline-block;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    padding: 15px;
  }
  /*
  li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
  }
  */
  li {
    display: inline-block;
    margin: 5px;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
  }
  /*
  .link {
    color: rgb(4, 0, 255);
    font-size: 20px;
    text-decoration: none;
  }
  */
  .link {
    color: #0400F0;/*rgb(4, 0, 255);*/
    font-size: 17.5px;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  /*
  .title {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
  */
  .title {
    text-decoration: none;
    color: black;
    font-size: 17.5px;
    margin-right: 10px;
  }
  @media (prefers-color-scheme: dark) {
    .main-nav, .secondary-nav {
    background-color: black;
  }
    li {
      color: white;
    }
    .link {
    color: rgb(0, 217, 255);
  }
  .title {
    color: white;
  }
  .menu-button {
    filter: invert(100%);
    background-color: white;
    color: black;
    margin-top: 12px;
  }
}
@media only screen and (max-width: 700px) {
  li {
    margin: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }
  /*
  .title {
    margin-right: 25px;
  }
  */
  .link {
    /*display: block;*/
    display: inline-block;
    /*padding: 10px;*/
  }
  ul {
    margin-top: 15px;
    display: inline-block;
    padding: 0px;
    padding-left: 30px;
  }
}
</style>
