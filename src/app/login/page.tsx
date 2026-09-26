'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LockKeyhole, Mail, Pizza } from "lucide-react"
import Image from "next/image";
import { FormEvent, useState } from "react"

function LoginPage() {
    const [remember, setRemember] = useState(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: Add your authentication logic here
    };

    return (
        <section className="flex min-h-screen w-full bg-orange-50">
            {/* Left: form */}
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2">
                <div className="mx-auto w-full max-w-md">
                    {/* Logo */}
                    <div className="mb-8 flex items-center justify-center gap-2">
                        <span className="flex size-9 items-center justify-center rounded-full bg-orange-500">
                            <Pizza className="size-5 text-white" />
                        </span>
                        <span className="text-lg font-semibold text-neutral-800">
                            Pizza
                        </span>
                    </div>

                    <Card className="border-none shadow-lg shadow-orange-900/5">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-orange-100">
                                <LockKeyhole className="size-5 text-orange-600" />
                            </div>

                            <CardTitle className="text-2xl">
                                Sign in
                            </CardTitle>

                            <CardDescription>
                                Enter your credentials to access your account
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">
                                        Email
                                    </Label>

                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="pl-9"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="password">
                                        Password
                                    </Label>

                                    <div className="relative">
                                        <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            className="pl-9"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Remember / Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="remember"
                                            checked={remember}
                                            onCheckedChange={(checked) =>
                                                setRemember(checked === true)
                                            }
                                        />

                                        <Label
                                            htmlFor="remember"
                                            className="cursor-pointer text-sm font-normal"
                                        >
                                            Remember me
                                        </Label>
                                    </div>

                                    <a
                                        href="#"
                                        className="text-sm font-medium text-orange-600 hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600"
                                >
                                    Log in
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <p className="mt-6 text-center text-sm text-neutral-500">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="font-medium text-orange-600 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>

            {/* Right: illustration */}
            <div className="relative hidden min-h-screen w-1/2 lg:block">
                <Image
                    src="/pizza_delivery.png"
                    alt="Pizza delivery illustration"
                    fill
                    sizes="50vw"
                    className="object-fill"
                    priority
                />

                {/* Gradient for text legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                    <h2 className="text-3xl font-semibold">
                        Hot, fresh, and on the way.
                    </h2>
                    <p className="mt-3 max-w-md text-white/80">
                        Sign in to track your order, save your favorite pizzas, and reorder in one tap.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LoginPage