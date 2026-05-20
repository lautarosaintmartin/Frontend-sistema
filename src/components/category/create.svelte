<script lang="ts">
    let categoryModel = $props()
    let id = $props.id();
</script>

{#if categoryModel.createDialog}
    <div
        class="w-full h-full text-black fixed top-0 left-0 flex flex-col items-center bg-transparent justify-center backdrop-blur-xl"
    >
        <div class="w-96 bg-white p-4 rounded-md">
            <form onsubmit={(e) => categoryModel.createCategory(e)}>
                <h2 class="text-lg font-bold">Crear Categoria</h2>

                <div class="p-2 flex flex-col">
                    <label for="name">Nombre de Categoria:</label>
                    <input
                        class="border border-gray-400 rounded-md p-2"
                        type="text"
                        name="name"
                        id={`name-${id}`}
                    />
                </div>

                <div class="p-2 flex flex-col">
                    <label for="email">Descripción:</label>
                    <input
                        class="border border-gray-400 rounded-md p-2"
                        type="text"
                        name="description"
                    />
                </div>
            </form>
        </div>
    </div>
{/if}
