import { getAuthsession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request){
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    try {
        if (slug) {
            const post = await prisma.post.findUnique({
                where: { slug },
                include: {
                    author: {
                        select: {
                            name: true,
                            image: true
                        }
                    },
                    category: true
                }
            });
            if (!post) {
                return NextResponse.json({ message: "Post not found"}, { status: 404 })
            }
            return NextResponse.json(post, { status: 200 })
        } else {
            const posts = await prisma.post.findMany({
                where: {
                    status: "PUBLISHED"
                },
                include: {
                    author: {
                        select: {
                            name: true,
                            image: true
                        }
                    },
                    category: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
            return NextResponse.json(posts, { status: 200 })
        }
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: "Could not fetch posts"}, { status: 500 })
    }
}

export async function POST(request){
    const session = await getAuthsession();
    if(!session || !session.user){
        return NextResponse.json({ message: "Unauthorized"}, { status: 401 })
    }
    // return console.log(session.user.id, ' sesion user id')
    const body = await request.json();
    const {title, slug, ogImage, content, excerpt, metaDescription, category, keywords, status} = body;
    console.log('Received body:', JSON.stringify(body));
    console.log('title:', title, 'content:', content, 'slug:', slug, 'category:', category);

    if(!title || !content || !slug || !category || !session.user.id){
        return NextResponse.json({ 
            message: 'Missing fields',
            missing: {
                title: !title,
                content: !content,
                slug: !slug,
                category: !category,
                authorId: !session.user.id
            }
        }, {status: 400 })
    }
    
    const statusOfPost = status || "DRAFT";

    try {
        let categoryCheck = await prisma.category.findUnique({
            where: { slug: category }
        })
    
        if(!categoryCheck){
            categoryCheck = await prisma.category.create({
                data: {
                    title: category.charAt(0).toUpperCase() + category.slice(1),
                    slug: category
                }
            })
        }
    
        const post = await prisma.post.create({
            data: {
                title,
                content,
                slug,
                thumbnail: ogImage || null,
                desc: metaDescription || null,
                keywords: keywords || null,
                excerpt: excerpt || null,
                authorId: session.user.id,
                catSlug: categoryCheck.slug,
                status: statusOfPost
            }
        })
        return NextResponse.json(post, { status: 201 })
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: "Could not save post"}, { status: 500 })
    }
}