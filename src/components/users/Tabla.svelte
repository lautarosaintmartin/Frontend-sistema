<script lang="ts">
    import { onMount } from "svelte";
    import Delete from "./delete.svelte";
    import Edit from "./edit.svelte";

    let userSelector = $state({});
    let deleteDialog = $state(false);
    let editDialog = $state(false);

    let users = $state([
        {
            fullname: "Juan Perez",
            email: "juanperez02@gmail.com",
            edad: "28",
        },
        {
            fullname: "Lautaro Saint Martin",
            email: "lautarosaintmartin2@gmail.com",
            edad: "19",
        },
        {
            fullname: "Miguel Montenegro",
            email: "miguelito2@gmail.com",
            edad: "48",
        },
    ]);
</script>

<Delete bind:deleteDialog user={userSelector} />
<Edit bind:editDialog user={userSelector} />

<table class="flex-1 w-full bg-slate-400 dark:bg-gray-900 dark:text-white">
    <thead>
        <tr class="">
            <th class="bg-gray-800 text-white text-left px-2">Nombre</th>
            <th class="bg-gray-800 text-white text-left px-2">Gmail</th>
            <th class="bg-gray-800 text-white text-left px-2">Edad</th>
            <th class="bg-gray-800 text-white px-2">Acciones</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <tr class="odd:bg-gray-100 dark:odd:bg-gray-700">
                <td class="px-2 py-1">{user.fullname}</td>
                <td class="px-2 py-1">{user.email}</td>
                <td class="px-2 py-1">{user.edad}</td>
                <td>
                    <div class="flex justify-center gap-2">
                        <button
                            onclick={() => (
                                (editDialog = true), (userSelector = user)
                            )}
                            aria-label="Editar"
                            class="bg-gray-800 text-white px-3 py-2 rounded-md my-1"
                        >
                            🖋️
                        </button>
                        <button
                            onclick={() => (
                                (userSelector = user), (deleteDialog = true)
                            )}
                            aria-label="Eliminar"
                            class="bg-red-500 text-white px-3 py-2 rounded-md my-1"
                        >
                            🗑
                        </button>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
