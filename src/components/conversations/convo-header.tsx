"use client";

import Link from 'next/link';
import { Analytics, BarChart, Bot, CalendarDays, Cog, Home, MessageSquare, Search, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const navLinks = [
    { href: "#", icon: Home, label: "Home" },
    { href: "/conversations", icon: MessageSquare, label: "Conversations" },
    { href: "#", icon: BarChart, label: "Analytics" },
    { href: "#", icon: Bot, label: "Training" },
    { href: "#", icon: Cog, label: "Settings" },
];

export function ConvoHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6 shrink-0">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span>ConvoQA</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
            {navLinks.map(link => (
                <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
                data-active={link.href === '/conversations'}
                >
                <link.icon className="h-4 w-4" />
                {link.label}
                </Link>
            ))}
            </nav>
        </div>

        <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-8 w-64 bg-muted" />
            </div>
            <Select defaultValue="7">
                <SelectTrigger className="w-[180px] hidden sm:flex bg-muted">
                    <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground"/>
                    <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Last 24 hours</SelectItem>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                </SelectContent>
            </Select>

            <Avatar className="h-9 w-9 border">
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
    </header>
  );
}
