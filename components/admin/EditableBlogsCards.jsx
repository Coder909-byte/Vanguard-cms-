"use client";

import dateFormat from "@/utils/dateFormat";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/8bit/card";

export default function EditableBlogCards({ post }){
    const router = useRouter()
    const [currentStatus, setCurrentStatus] = useState(post.status)

    const handleDelete = async(id)=> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/delete/${post.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
        })
        if(res.ok){
            setCurrentStatus("DELETE");
            router.refresh();
        }
    }
    const handleConvertToDraft = async(id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/state`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ id, status: "DRAFT" })
        })
        if(res.ok){
            setCurrentStatus("DRAFT");
            router.refresh();
        }
    }
    const publishABlog = async(id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/state`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ id, status: "PUBLISHED" })
        })
        if(res.ok){
            setCurrentStatus("PUBLISHED");
            router.refresh();
        }
    }

    return <div className="flex ">
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>
                    <p className="text-sm text-zinc-300">{post.excerpt.substring(0, 15)}...</p>
                    <span className="text-xs text-zinc-500">{dateFormat(post.createdAt)}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2 items-center flex-wrap">
                    {currentStatus === "PUBLISHED" ? <Button onClick={()=> handleConvertToDraft(post.id)} variant="outline">Convert to Draft</Button> : <Button onClick={()=> publishABlog(post.id)} variant="success">Publish</Button>}
                    <Button onClick={()=> router.push(`/draft/${post.slug}`)} variant="outline">Edit</Button>
                    {currentStatus === "PUBLISHED" && <Button onClick={()=> router.push(`/blog/${post.slug}`)} variant="primary">View</Button>}
                    <Trash onClick={()=> handleDelete(post.id)} className="size-5 text-zinc-400 cursor-pointer" /> 
                </div>
            </CardContent>
        </Card>
    </div>
}
