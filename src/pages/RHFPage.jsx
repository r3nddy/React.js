import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const registerFormSchema = z.object({
    username: z.string().min(3, {message: "minimal 3 huruf co"}).max(10, {message: "hanya boleh sampai 10 huruf"}),
    password: z.string().min(8, {message: "minimal 8 huruf co"}),
    age: z.coerce.number().min(18)
})

const RHFPage = () => {

    const form = useForm({
        resolver: zodResolver(registerFormSchema),
    });


    const handleRegisterUser = () => {
        alert("form Submitted");
    };


    return (
        <div>
            <h1>React Hook Form</h1>
            <form 
                onSubmit={form.handleSubmit(handleRegisterUser)}
                style={{display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label>
                    UserName:
                    <input type='text' {...form.register("username")}/>
                </label>
                <span style={{color: 'red'}}>{form.formState.errors.username?.message}</span>

                <label>
                    Password:
                    <input type='password' {...form.register("password")} />
                </label>
                <span style={{color: 'red'}}>{form.formState.errors.password?.message}</span>

                <label>
                    age:
                    <input type='number' {...form.register("age")} />
                </label>
                <span style={{color: 'red'}}>{form.formState.errors.age?.message}</span>

                <button style={{width: 'fit-content'}} >Register User</button>
            </form>
        </div>
    )
}
export default RHFPage