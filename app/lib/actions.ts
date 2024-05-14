'use server'

export async function createMovie(formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries())
    
    console.log(rawFormData);
}