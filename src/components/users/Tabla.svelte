<script lang="ts">
    import { onMount } from "svelte";


    let users = $state([
        {
            fullname: "Juan Perez",
            email: "juanperez02@gmail.com",
            edad: "28"
        }
    ])


</script>

<table>
    <thead>
        <tr>
            <th class = "p-2 border border-black bg-rose-400">Nombre</th>
            <th class = "p-2 border border-black bg-rose-400">Email</th>
            <th class = "p-2 border border-black bg-rose-400">Edad</th>
        </tr>
    </thead>
<tbody>
    {#each users as users}
        <tr>
            <td class = "px-2 border border-black bg-gray-400">{users.fullname}</td>
            <td class = "px-2 border border-black bg-gray-400">{users.email}</td>
            <td class = "px-2 border border-black bg-gray-400">{users.edad}</td>
        </tr>
    {/each}

</tbody>

</table>