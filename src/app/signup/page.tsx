import { SignUpForm } from "@/components/signup-form";
import { Toaster } from "@/components/ui/toaster";

export default function SignUpPage() {
    return (
        <main className="min-h-screen bg-background">
            <SignUpForm />
            <Toaster />
        </main>
    )
}