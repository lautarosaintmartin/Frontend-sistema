
<script lang="ts">
    import { ROUTES } from "@core/utils/router";
    
    let { activePage } = $props();


</script>

<aside class = "bg-gray-200 w-40 flex flex-col gap-2 p-2">
    {#each ROUTES.filter(x => !x.public) as route}
        <a href = {route.path} class="text-black text-xl p-1 bg-gray-500 rounded-md text-center">{route.name} </a>
    {/each}
</aside>