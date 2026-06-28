import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/8bit/card";

async function fetchAllUsers(){
    const res = await prisma.user.findMany();
    return res;
}

export default async function AdminAllUsers(){
    const users = await fetchAllUsers();

    return <section className="p-8 flex flex-col gap-4">
        {users.map((user, index)=> {
            return <Link key={user.id} href={`/user/${user.username}`} className="block">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Image className="size-20 border-[4px] border-black dark:border-white" src={user.image} width={50} height={50} alt={user.name} />
                        <div className="space-y-1">
                            <CardTitle className="text-lg">{user.name}</CardTitle>
                            <CardDescription>
                                <p className="text-zinc-300">{user.email}</p>
                                <p className="text-xs text-zinc-500">@{user.username}</p>
                            </CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        })}
    </section>
}
