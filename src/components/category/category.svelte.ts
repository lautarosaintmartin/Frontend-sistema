import { http } from '@core/http'
import Category from '../../pages/category.astro'

interface Category {
    id: number
    name: string
    description: string
}

class CategoryModel{
    
    category = $state <Category | null>(null) //usamos para guardar lo que selecciona un usuario
    categories = $state <Category[]>([]) //contiene 
    deleteDialog = $state(false)
    editDialog = $state(false)
    createDialog = $state(false) 

    selectedCategory = $state <Category | null>(null)

    async getCategory(){
        this.categories = await http.get(`${import.meta.env.PUBLIC_API_URL}/categories`)
    }

    async createCategory(e: Event){
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        await http.post<Category>(`${import.meta.env.PUBLIC_API_URL}/category`, data)
        this.getCategory()
        this.createDialog = false

    }

    async deleteCategory(){
        if (!this.selectedCategory) return
        await http.delete(`${import.meta.env.PUBLIC_API_URL}/category`)

        this.closeDialogs()
    }

    async editCategory(id: number, e: Event){
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!this.selectedCategory) return
        await http.patch(`${import.meta.env.PUBLIC_API_URL}/category/${id}`, data)

        this.getCategory();
        this.editDialog = false;
    }

    openCreateDialog(){
        this.createDialog = true
    }

    openDeletDialog(category: Category){
        this.selectedCategory = category
        this.deleteDialog = true
    }

    openEditDialog(category: Category){
        this.selectedCategory = category
        this.editDialog = false
    }

    closeDialogs(){
        this.deleteDialog = false
        this.editDialog = false
        this.createDialog = false 
        this.selectedCategory = null
    }

    showCreateModal(){
        this.category = null
        this.createDialog = true
    }

    showDeleteModal(category:Category)
    {
        this.category = category
        this.deleteDialog = true
    }

    showEditModal(cateogry:Category){
        this.category = cateogry
        this.editDialog = true
    }
}

export const categoryModel = new CategoryModel();