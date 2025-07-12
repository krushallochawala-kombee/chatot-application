"use client";

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, AlertTriangle, ShieldCheck } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
  rememberMe: z.boolean().default(false).optional(),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoginError(null);
    if (values.email === "admin@example.com" && values.password === "Password123!") {
      toast({
        title: "Admin Login Successful",
        description: "Redirecting to dashboard...",
      })
      router.push("/dashboard")
    } else if (values.email === "user@example.com" && values.password === "Password123!") {
        toast({
            title: "Login Successful",
            description: "Redirecting to conversations...",
        })
        router.push("/conversations")
    }
    else {
      setLoginError("Invalid email or password");
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-primary to-purple-600 text-primary-foreground p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-50 rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 space-y-4">
                <div className="bg-white/90 p-4 rounded-xl shadow-lg inline-block">
                    <ShieldCheck className="h-16 w-16 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Secure access to your account</h2>
            </div>
        </div>
        <div className="flex items-center justify-center p-8 sm:p-12">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
                    <p className="text-muted-foreground mt-2">Sign in to continue</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute inset-y-0 right-0 h-full px-3 text-muted-foreground hover:text-foreground"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                        ) : (
                                        <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        {loginError && (
                            <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-700">
                                <AlertTriangle className="h-4 w-4 text-red-600" />
                                <AlertDescription>{loginError}</AlertDescription>
                            </Alert>
                        )}
                        <div className="flex items-center justify-between">
                            <FormField
                                control={form.control}
                                name="rememberMe"
                                render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                    <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                    </FormControl>
                                    <FormLabel className="font-normal">Remember me</FormLabel>
                                </FormItem>
                                )}
                            />
                            <Link
                                href="#"
                                className="text-sm font-medium text-primary hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 text-primary-foreground hover:opacity-90 transition-opacity">
                            Sign In
                        </Button>
                    </form>
                </Form>
                 <div className="mt-6 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-medium text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
