import { LoginForm } from "@/components/login-form";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background p-4">
      <LoginForm />
      <Toaster />
    </main>
  );
}
