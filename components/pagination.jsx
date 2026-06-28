"use client";

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/8bit/button";

export default function Pagination({ currentPage, totalItems, perPage, ...props }) {
    const router = useRouter();
    const totalPages = Math.ceil(totalItems/ perPage)
    const handlePageChange = (page) => {
        console.log(page, ' page no')
        if(page < 1 || page > totalPages) return;
        router.push(`?page=${page}`)
    }

    return <div {...props}> 
        <div className="flex justify-center gap-2">
            <Button
                disabled={currentPage == 0 || currentPage == 1}
                onClick={()=> handlePageChange(parseInt(currentPage) - 1)}
                variant="outline">
                Prev
            </Button>
            {Array.from({ length: totalPages}, (_, index)=> {
                return <Button 
                    key={index + 1}
                    onClick={()=> handlePageChange(index + 1)} 
                    variant={currentPage == index+1 ? "default" : "outline"}
                    className="min-w-[40px]"
                >
                    {index + 1}
                </Button>
            })} 
            <Button
                disabled={currentPage == totalPages}
                onClick={()=> handlePageChange(parseInt(currentPage) + 1)}
                variant="outline">
                Next
            </Button>
        </div>
    </div>
}
