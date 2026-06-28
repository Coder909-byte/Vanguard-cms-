import { getAuthsession } from "@/lib/auth";
import OgreError from "@/components/ui/8bit/OgreError";

export default async function AdminProtected({ children }) {
  const session = await getAuthsession();

  if (session?.user?.email === "jivesh.nazar@gmail.com") {
    return <OgreError />;
  }

  return children;
}
