<script>
    export let data;
    const { items } = data;
    console.log("+page.svelte");
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h1>Comments</h1>
<div>
    {#each items as i}
        <li>{i.name}</li>
    {/each}
</div>
