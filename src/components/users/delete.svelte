<script lang="ts">
    let { user, deleteDialog = $bindable() } = $props();
</script>

{#if deleteDialog}
    <dialog
        open={deleteDialog}
        class="w-full h-full fixed top-0 lext-0 flex items-center bg-transparent justify-center backdrop-blur-xl"
    >
        <div class="bg-white p-4 rounded-md w-120">
            <button
                aria-label="Cerrar"
                class="close"
                onclick={() => (deleteDialog = false)}>X</button
            >

            <div class="p-4 flex justify-center">
                <h2 class="text-lg font-bold">
                    Desea eliminar el usuario {user.fullname}
                </h2>
            </div>
        </div>
    </dialog>
{/if}
