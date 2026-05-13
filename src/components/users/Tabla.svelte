<script lang="ts">
    import { onMount } from "svelte";
    import Delete from "./delete.svelte";
    import Edit from "./edit.svelte";
    import { userModel } from "./user.svelte";

    onMount(async () => {
        await userModel.getUsers()
    });
</script>

<Delete { userModel }/>
<Edit { userModel }/>

<table class="flex-1 w-full bg-slate-400 dark:bg-gray-900 dark:text-white">
    <thead>
        <tr class="">
            <th class="bg-gray-800 text-white text-left px-2">Nombre</th>
            <th class="bg-gray-800 text-white text-left px-2">Gmail</th>
            <th class="bg-gray-800 text-white px-2">Acciones</th>
        </tr>
    </thead>
    <tbody>
        {#each userModel.users as user}
            <tr class="odd:bg-gray-100 dark:odd:bg-gray-700">
                <td class="px-2 py-1">{user.username}</td>
                <td class="px-2 py-1">{user.email}</td>
                <td>
                    <div class="flex justify-center gap-2">
                        <button
                            onclick={() => ((userModel.showEditModal(user)))}
                            aria-label="Editar"
                            class="bg-gray-800 text-white px-3 py-2 rounded-md my-1"
                        >
                            🖋️
                        </button>
                        <button
                            onclick={() => ((userModel.showDeleteModal(user)))}
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
