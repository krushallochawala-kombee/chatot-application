import { ChevronLeft, ChevronRight, FileDown, Mail, Play } from 'lucide-react';
import { Button } from '../ui/button';

export const TranscriptToolbar = () => (
    <div className="flex items-center justify-between p-2 border-t bg-card">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <ChevronLeft className="w-5 h-5"/>
            </Button>
            <Button variant="outline" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Play className="w-5 h-5"/>
            </Button>
            <Button variant="ghost" size="icon">
                <ChevronRight className="w-5 h-5"/>
            </Button>
            <p className="text-sm text-muted-foreground">Message 3 of 8</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
                <FileDown className="w-4 h-4 mr-2"/>
                PDF
            </Button>
             <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4 mr-2"/>
                Email
            </Button>
        </div>
    </div>
);