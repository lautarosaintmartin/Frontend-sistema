<script lang="ts">
    let { user, editDialog = $bindable() } = $props();
    let id = $props.id();
</script>

{#if editDialog}
    <div
        class="w-full h-full text-black fixed top-0 left-0 flex flex-col items-center bg-transparent justify-center backdrop-blur-xl"
    >
        <form class="w-96 bg-white p-4 rounded-md">
            <h2 class="text-lg font-bold">Editar usuario</h2>
            <hr />
            <div class="p-2 flex flex-col">
                <label for="fullname">Nombre de Usuario:</label>
                <input
                    class="border border-gray-400 rounded-md p-2"
                    type="text"
                    name="fullname"
                    id={`fullname-${id}`}
                    value={user.fullname}
                />
            </div>

            <div class="p-2 flex flex-col">
                <label for="email">Correo Electronico:</label>
                <input
                    class="border border-gray-400 rounded-md p-2"
                    type="email"
                    name="email"
                    id={`email-${id}`}
                    value={user.email}
                />
            </div>
        </form>
    </div>
{/if}
