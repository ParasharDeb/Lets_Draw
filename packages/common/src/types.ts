import z from "zod";
export const Userschema=z.object({
    username:z.string().min(3).max(20),
    password:z.string(),
    name:z.string()
})
export const Singin=z.object({
    username:z.string().min(3).max(20),
    password:z.string(),
})
export const Createroomschema=z.object({
    name:z.string().min(3).max(20)
})