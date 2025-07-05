import z from "zod";
export const Userschema=z.object({
    username:z.string().min(3).max(20),
    password:z.string(),
    email:z.string()
})
export const SinginSchema=z.object({
    email:z.string().min(3).max(20),
    password:z.string(),
})
export const Createroomschema=z.object({
    name:z.string().min(3).max(20)
})