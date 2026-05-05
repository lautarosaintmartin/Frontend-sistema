
<script lang="ts">
    import { ROUTES } from "@core/utils/router";
    
    let { activePage } = $props();


</script>

<aside class = "bg-gray-200 w-40 flex flex-col gap-2 p-2">
    <div class = "p-2">
        <h1 class = "text-center font-bold uppercase border-b">Mi Inventario</h1>
    </div>

    {#each ROUTES.filter(x => !x.public) as route}
        <a href = {route.path} class="text-black text-shadow-md py-1 px-2 bg-gray-300 rounded-md">{route.name} </a>
    {/each}
</aside>