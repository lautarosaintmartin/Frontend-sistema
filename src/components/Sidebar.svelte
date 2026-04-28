
<script lang="ts">
    import { ROUTES } from "@core/utils/router";
    
    let { activePage } = $props();


</script>

<aside>
    {#each ROUTES as route}

    <p class="text-white text-2xl">{route.name}</p>

    {/each}
</aside>