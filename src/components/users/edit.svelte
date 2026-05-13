<script lang="ts">
    let { userModel } = $props();
    let id = $props.id();
</script>

{#if userModel.editDialog}
    <div
        class="w-full h-full text-black fixed top-0 left-0 flex flex-col items-center bg-transparent justify-center backdrop-blur-xl"
    >
        <div class="w-96 bg-white p-4 rounded-md">
            <form>
                <h2 class="text-lg font-bold">Editar usuario</h2>
                <hr />
                <div class="p-2 flex flex-col">
                    <label for="username">Nombre de Usuario:</label>
                    <input
                        class="border border-gray-400 rounded-md p-2"
                        type="text"
                        name="username"
                        id={`username-${id}`}
                        value={userModel.user.username}
                    />
                </div>

                <div class="p-2 flex flex-col">
                    <label for="email">Correo Electronico:</label>
                    <input
                        class="border border-gray-400 rounded-md p-2"
                        type="email"
                        name="email"
                        id={`email-${id}`}
                        value={userModel.user.email}
                    />
                </div>
            </form>
            <div class="p-2 flex justify-end gap-2 mt-3">
                <button
                    class="bg-red-400 text-white px-4 py-2 rounded-md"
                    onclick={() => (userModel.editDialog = false)}
                >
                    Cancelar
                </button>
                <button
                    class="bg-blue-400 text-white px-4 py-2 rounded-md"
                    onclick={() => (userModel.editDialog = false)}
                >
                    Guardar
                </button>
            </div>
        </div>
    </div>
{/if}
