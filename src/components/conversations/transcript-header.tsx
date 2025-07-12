import { Bookmark, Download, Star, Users } from "lucide-react";
import { Button } from "../ui/button";

const ConfidenceBar = () => {
    const segments = [
        { color: 'bg-green-500', width: '35%' },
        { color: 'bg-green-500', width: '10%' },
        { color: 'bg-yellow-400', width: '5%' },
        { color: 'bg-green-500', width: '20%' },
        { color: 'bg-red-500', width: '8%' },
        { color: 'bg-green-500', width: '22%' },
    ];

    return (
        <div className="w-full h-2 flex rounded-full overflow-hidden bg-muted">
            {segments.map((seg, index) => (
                <div key={index} className={seg.color} style={{ width: seg.width }}></div>
            ))}
        </div>
    );
};


export const TranscriptHeader = () => (
    <div className="p-4 border-b">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-semibold text-lg">Conversation with Sarah Johnson</h2>
                <p className="text-xs text-muted-foreground mt-1">
                    Started May 16, 2023 - 10:32 AM • Agent: Michael Chen • Billing Inquiry
                </p>
            </div>
            <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon"><Bookmark className="w-5 h-5"/></Button>
                <Button variant="ghost" size="icon"><Star className="w-5 h-5"/></Button>
                <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2"/>Export</Button>
            </div>
        </div>
        <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium">Confidence Timeline:</p>
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-green-500 rounded-sm"/>High</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"/>Good</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm"/>Medium</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-red-500 rounded-sm"/>Low</div>
                </div>
            </div>
            <ConfidenceBar />
        </div>
    </div>
);
