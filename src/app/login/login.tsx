'use client'

import { Button } from "@/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { login } from "@/sevices/service"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"

interface IFormData {
    email: string,
    password: string
}

export function LoginForm() {
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm<IFormData>()
    const onSubmit: SubmitHandler<IFormData> = async (data) => {
        const { email, password } = data
        await login(email, password)
        router.push('/MyInfo/TimeOff')
        reset()
    }
    return (
        <div className="flex min-h-screen bg-black">
            <form className="max-w-sm m-auto" onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                {...register('password', { required: true })}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full"
                        >
                            Login
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}