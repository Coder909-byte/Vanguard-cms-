"use client";

import Editor from "@/components/Editors";
import { useRouter } from "next/navigation";

export default function DraftPage() {
  const router = useRouter();

  const handleSave = async (data) => {
    try {
      const response = await fetch("/api/v1/blog/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Error saving post:", result.message);
        alert(result.message || "Failed to save post");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      alert("An error occurred while saving");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Editor onSave={handleSave} />
    </div>
  );
}