<script>
  import Highlight from "svelte-highlight";
  import css from "svelte-highlight/languages/css";
  import "svelte-highlight/styles/material-darker.css";

  const darkModeCode = 
`@media (prefers-color-scheme: dark) {
  h1, h2, h3, p {
    color: white;
  }
}`

</script>

<svelte:head>
	<title>Dark Mode</title>
	<meta name="description" content="Implementing Dark Mode" />
</svelte:head>

<div class="content">
  <h1>Implementing Dark Mode</h1>
  <p>Dark mode is essntial for modern UI development.  Many people want it.  I, for example, use it almost all the time.  So how do we do it?</p>
  <p>I'll talk about some of the fun similarities between two development suites with regards to dark mode: JavaScript, CSS, and HTML and Swift. </p>
  <p>Both of them use a declaritive and reactive style for working with dark mode.  This means generally you don't need to do much to support dark mode.  You simply state it, and it works, reacting to color schemes changes as they happen.</p>
  <h2>JavaScript, CSS, and HTML</h2>
  <p>When developing with Javascript, CSS, and HTML, typically you use CSS to redefine colors when the system is in dark mode.  You do this by redefining colors, background colors, etc. within a "media query" for dark mode.</p>
  <p>
    That would look something like this:
  </p>
  <p class="code">
  <Highlight language={css} code={darkModeCode} />
  </p>

  <p>
    You could define and redefine as many colors, background colors, etc. as you like inside of the media query's curly braces.
  </p>
  <h2>Swift</h2>
  <p>
    In Swift it is even simpler.  Inside of your asset catalog that should be created with every new Xcode project, you simply add a color asset, and select in appearances in the right sidebar "Any, Dark" or "Any, Light, Dark" and then add in light mode and dark mode versions of your color.  You then can create Colors, UIColors, or NSColors or select them in a storyboard (depending on what framework you are using) that reference the name of your color in the asset catelog that then can be used in your UI.
  </p>
  <h2>Summary</h2>
  <p>
    Kinda cool that two different development suites use the same idea right?  Define your colors and you can use them to your hearts content, and they will react to changes in system color scheme.
  </p>
  <h2>If you want to go deeper...</h2>
  <p>
    In both suites you can write framework specific code to do fancier things with color scheme, such as not using the system color scheme or working with colors that are not pre-defined.  It is a little more effort, but if you are proficient with coding it should be no trouble.
  </p>
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
  p {
    font-size: 20px;
    margin: 15px;
  }
  .code {
    font-size: 15px;
    border-radius: 2.5px;
    /*background-color: rgb(255, 226, 40);
    color: black;*/
    max-width: 600px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    /*background-color: #212121;*/
    background-color: rgb(255, 108, 40);
  }
  @media (prefers-color-scheme: dark) {
  h1,h2,h3, p {
    color: white;
  }
  a {
    color: rgb(0, 217, 255);
    text-decoration: none;
  }
  .code {
    /*background-color: black;
    color: white;*/
    background-color: rgb(255, 226, 40);
  }
}
</style>