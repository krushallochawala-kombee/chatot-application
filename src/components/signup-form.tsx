"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, CheckCircle, Circle, User, Headphones } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string()
    .min(8, { message: "At least 8 characters" })
    .refine((password) => /[A-Z]/.test(password), { message: "At least one uppercase letter" })
    .refine((password) => /[^A-Za-z0-9]/.test(password), { message: "At least one special character" }),
  role: z.enum(["admin", "support"], { required_error: "You need to select a role." }),
})

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      role: "admin",
    },
  })

  const passwordValue = form.watch("password");

  const passwordRequirements = [
    { text: "At least 8 characters", regex: /.{8,}/ },
    { text: "At least one uppercase letter", regex: /[A-Z]/ },
    { text: "At least one special character", regex: /[^A-Za-z0-9]/ },
  ]

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Account Created",
      description: "Your admin account has been successfully created.",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-[#2E3192] to-[#4F46E5] text-white p-12 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-lg -rotate-12 opacity-50 blur-sm"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/10 rounded-lg rotate-12 opacity-50 blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full opacity-50 blur-sm"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-lg text-primary-foreground/80">Manage your application with powerful admin tools</p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 bg-card">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground">Create Admin Account</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mt-2"></div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your full name as it appears on official documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      This email will be used for account verification
                    </FormDescription>
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
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </FormControl>
                     <div className="text-sm mt-2 space-y-1">
                      <p className="font-medium text-muted-foreground">Password requirements:</p>
                      <ul className="text-muted-foreground space-y-1">
                        {passwordRequirements.map((req, index) => {
                          const met = req.regex.test(passwordValue || "");
                          return (
                            <li key={index} className="flex items-center gap-2">
                              {met ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Circle className="h-4 w-4 text-muted-foreground/50" />}
                              <span>{req.text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Select Role</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem>
                          <FormControl>
                             <RadioGroupItem value="admin" className="sr-only" />
                          </FormControl>
                          <FormLabel className={cn("flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer", field.value === 'admin' && 'border-primary bg-primary/5')}>
                            <User className="mb-3 h-6 w-6 text-primary" />
                            Admin
                            <span className="text-xs text-muted-foreground font-normal mt-1">Full system access</span>
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                           <FormControl>
                             <RadioGroupItem value="support" className="sr-only" />
                          </FormControl>
                          <FormLabel className={cn("flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer", field.value === 'support' && 'border-primary bg-primary/5')}>
                             <Headphones className="mb-3 h-6 w-6" />
                             Support Staff
                             <span className="text-xs text-muted-foreground font-normal mt-1">Limited access</span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 text-primary-foreground hover:opacity-90 transition-all duration-300 text-base py-6">
                Create Account
              </Button>
            </form>
          </Form>
          <div className="mt-8 text-center text-sm">
            <Link href="/" className="font-medium text-primary hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
