import { LoginForm } from "@/components/login-form";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background">
      <LoginForm />
      <Toaster />
    </main>
  );
}
