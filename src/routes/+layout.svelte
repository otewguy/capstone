<script>
    let {children} = $props();
</script>

<nav>
    <a href="/users">Users</a>
    <a href="/officers">Officers</a>
    <a href="/sites">Sites</a>
    <a href="/items">Items</a>
    <a href="/customers">Customers</a>
    <a href="/dos">DOs</a>
</nav>

{@render children()}

<style>
    :global(table, th, td) {
        border: 1px solid black;
    }
</style>