<script>
  const texts = ["1", "2abc", "3", "4\nd\ne\nf", "5ghi", "6", "7\nj\nk\nl", ]
  const flexDirectionChoices = ['row', 'row-reverse', 'column', 'column-reverse']
  const justifyContentChoices = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
  const alignContentChoices = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']
  const alignItemsChoices = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
  let flexDirectionValue = 'row'
  let justifyContentValue = 'flex-start'
  let alignContentValue = 'flex-start'
  let alignItemsValue = 'flex-start'
  import Highlight from "svelte-highlight";
  import css from "svelte-highlight/languages/css";
  import "svelte-highlight/styles/material-darker.css";

  const displayFlexCode = 'display: flex'
  const flex1Code = 'flex: 1'
  const widthCode = 'width: 300;'
  const heightCode = 'height: 300;'
  const directionColumnCode = 'flex-direction: column;'
  const directionRowCode = 'flex-direction: row;'
  const flexWrapCode = 'flex-wrap: wrap;'
  const flexNoWrapCode = 'flex-wrap: nowrap;'
</script>

<svelte:head>
	<title>Flexbox Demo</title>
	<meta name="description" content="Interactive Flexbox Demo" />
</svelte:head>

<div class="content">
  <h1>Flexbox Interactive Demo</h1>
  <h2>Note: the demo is at the end of this page of notes.</h2>
  <p>Flexbox can take a little while to get the hang of sometimes.</p>
  <p>The principles of Flexbox are simple.  Flexbox is used to align items in a container.  The container has properties and the individual items can have properties too.</p>
  <h2>Opting-in</h2>
  <p>First there is opting-in to flex.  For your container, you add the following code:</p>
  <p class='code'>
    <Highlight language={css} code={displayFlexCode} />
  </p>
  <h2>Sizing</h2>
  <p>To make your flex container expand to fill the available space you can do:</p>
  <p class='code'>
    <Highlight language={css} code={flex1Code} />
  </p>
  <p>Or you can give it a width and height like so:</p>
  <p class='code'>
    <Highlight language={css} code={widthCode} />
  </p>
  <p class='code'>
    <Highlight language={css} code={heightCode} />
  </p>
  <h2>flex-direction</h2>
  <p>The next thing to consider is flex-direction.  Do you want your items to be laid out in a column:</p>
  <p class='code'>
    <Highlight language={css} code={directionColumnCode} />
  </p>
  <p>or in a row:</p>
  <p class='code'>
    <Highlight language={css} code={directionRowCode} />
  </p>
  <h2>flex-wrap</h2>
  <p>Then there is flex-wrap, which determines if your items will be wrapped within the container:</p>
  <p class='code'>
    <Highlight language={css} code={flexWrapCode} />
  </p>
  <p>or not:</p>
  <p class='code'>
    <Highlight language={css} code={flexNoWrapCode} />
  </p>
  <h2>justify-content</h2>
  <p>Then there is justify-content, which determines how items will be laid out in the same direction as the row or column.</p>
  <h2>align-content</h2>
  <p>Then there is align-content, which determines how items will be laid out perpendicular to the row or column.</p>
  <h2>align-items</h2>
  <p>Then there is align-items, which determines how items will be laid out perpendicular to the row or column but within the row or column.</p>
  <h2>Item Properties</h2>
  <p>There are also properties of the flex items: align-self, flex-basis, flex-shrink, and flex-grow.  I will not get into them here.</p>
  <h2>The Interactive Demo!</h2>
  <p>Here is a flex container with a defined width and height and flex-wrap: wrap.  Experiment with the menus to get a feel for flex.</p>
  <div class="flex-container">
    <label>flex-direction:</label>
    <select bind:value={flexDirectionValue} >
      {#each flexDirectionChoices as choice}
        <option value={choice}>
          {choice}
        </option>
      {/each}
    </select>
    </div>
  <div class="flex-container">
    <label>justify-content:</label>
    <select bind:value={justifyContentValue} >
      {#each justifyContentChoices as choice}
        <option value={choice}>
          {choice}
        </option>
      {/each}
    </select>
    </div>
    <div class="flex-container">
      <label>align-content:</label>
      <select bind:value={alignContentValue} >
        {#each alignContentChoices as choice}
          <option value={choice}>
            {choice}
          </option>
        {/each}
      </select>
      </div>
  <div class="flex-container">
    <div class="flex-container">
      <label>align-items:</label>
      <select bind:value={alignItemsValue} >
        {#each alignItemsChoices as choice}
          <option value={choice}>
            {choice}
          </option>
        {/each}
      </select>
      </div>
      </div>
  <div class="flex-container">
  <div class="flex-display" style={`flex-direction: ${flexDirectionValue}; justify-content: ${justifyContentValue}; align-content: ${alignContentValue}; align-items: ${alignItemsValue};`}>
    {#each texts as content}
    <div class="flex-item">{content}</div>
    {/each}
  </div>
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
  label, select {
    margin: 15px;
  }
  .flex-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
  }
  .flex-display {
    display: flex;
    width: 300px;
    height: 300px;
    background-color: rgb(255, 225, 0);
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .flex-item {
    background-color: rgb(38, 0, 255);
    padding: 15px;
    border-radius: 15px;
    margin: 5px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    white-space: pre-line
  }
  text {
    font-size: 100px;
    font-family: Arial, Helvetica, sans-serif;
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
  h1,h2,h3, p, label {
    color: white;
  }
  text {
    fill: white;
  }
  a {
    color: rgb(0, 217, 255);
    text-decoration: none;
  }
  .flex-display {
    background-color: rgb(38, 0, 255);
  }
  .flex-item {
    background-color: rgb(255, 225, 0);
    color: black;
  }
  .code {
    /*background-color: black;
    color: white;*/
    background-color: rgb(255, 226, 40);
  }
  select {
    background-color: rgb(30, 30, 30); color: white;
  }
}
</style>