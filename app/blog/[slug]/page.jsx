"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/8bit/card";

export default function BlogSlugPage() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/v1/blog/create?slug=${slug}`);
        const data = await response.json();
        if (response.ok) {
          setPost(data);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (!post) {
    return <div className="container mx-auto p-4">Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl">{post.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center gap-4 mb-2 text-zinc-400">
              <span>By {post.author?.name || "Unknown"}</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              {post.category && (
                <>
                  <span>•</span>
                  <span className="text-blue-400">{post.category.title}</span>
                </>
              )}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {post.thumbnail && (
            <img 
              src={post.thumbnail} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-none mb-8 border-[4px] border-black dark:border-white"
            />
          )}
          <div 
            className="prose prose-lg max-w-none text-zinc-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
