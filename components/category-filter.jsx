"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/8bit/button";
import { useState } from "react";

export default function CategoryFilter(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const [category, setCategory] = useState(searchParams.get('cat') || '')

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        params.set('cat', category);
        router.push(`/posts?${params.toString()}`)
    }

    return <form onSubmit={handleSubmit} className="flex gap-3">
        <input 
            value={category} 
            onChange={e=> setCategory(e.target.value)} 
            placeholder="Filter by category" 
            className="w-[300px] px-4 py-2 border-[4px] border-black dark:border-white rounded-none bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none font-retro"
            type="text" 
        />
        <Button type="submit" variant="primary">Filter</Button>
    </form>
}   
