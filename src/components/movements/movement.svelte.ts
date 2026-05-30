import { http } from '@core/http'

enum MovementType {
    IN = 'IN',
    OUT = 'OUT'
}

interface Movement
{
    id: number
    type: MovementType
    date: Date
    amount: number
    priceUnit: number
    user: { id: number, fullname: string }
    product: { id: number, name: string }
}

class MovementModel
{
    movement = $state <Movement | null>(null)
    movements = $state <Movement[]>([])
    deleteDialog = $state(false)
    editDialog = $state(false)
    createDialog = $state(false)
    messageError = $state({ type: '', date: '', amount: '', priceUnit: '' })

    async getMovements()
    {
        this.movements = await http.get(`${import.meta.env.PUBLIC_API_URL}/movements`);
    }

    async deleteMovements(id: number)
    {
        await http.delete(`${import.meta.env.PUBLIC_API_URL}/movements/${id}`);
        this.getMovements();
        this.deleteDialog = false;
    }

    async editMovement(id: number, e: Event)
    {
        try{
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement)
            const data = Object.fromEntries(formData)

            await http.patch(`${import.meta.env.PUBLIC_API_URL}/movements/${id}`, data);
            this.getMovements();
            this.editDialog = false;
        }catch(error: any){
            this.messageError = error
        }
    }

    async createMovements(e: Event){
        try{
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement)
            const data = Object.fromEntries(formData)

            //   // Convertir fecha a ISO8601
            // if (data.date) {
            // data.date = new Date(data.date as string + 'T00:00:00.000Z').toISOString()
            // }
            
            await http.post<Movement>(`${import.meta.env.PUBLIC_API_URL}/movements`, data)
            this.getMovements()
            this.createDialog = false
        }catch(error: any){
            this.messageError = error
        }
    }

    showCreateModal(){
        this.movement = null
        this.createDialog = true
        this.messageError = { type: '', date: '', amount: '', priceUnit: '' }
    }

    showEditModal(movement: Movement)
    {
        this.movement = movement
        this.editDialog = true
    }

    showDeleteModal(movement: Movement){
        this.movement = movement;
        this.deleteDialog = true;
    }
}

export const movementModel = new MovementModel()