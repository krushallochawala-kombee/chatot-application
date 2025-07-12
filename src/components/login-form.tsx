"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
  rememberMe: z.boolean().default(false).optional(),
})

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically handle the login logic,
    // e.g., call an API endpoint.
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">
          LoginFlow
        </CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
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
                        placeholder="••••••••"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute inset-y-0 right-0 h-full px-3 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
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
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember me</FormLabel>
                    </div>
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
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300"
            >
              Sign In
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
