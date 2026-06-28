import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/8bit/card";
import { Layers, Pencil, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="w-full">
      <section className="flex justify-center h-[50vh] sm:h-[70vh] w-full ">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <div>
            <h1 className="text-2xl md:text-4xl uppercase tracking-normal leading-relaxed mb-4 block font-retro">Manage your content with Ease</h1>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 block mb-8">
              Streamline your content workflow, publish with confidence.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/sign-in" className="font-retro border-[4px] border-black dark:border-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-200 hover:bg-gray-300 transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-black px-4 py-1">Try it out!</Link>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
      </section>
      <section className="min-h-screen sm:min-h-[50vh] bg-zinc-900 w-full flex justify-center items-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icons.BlogCustomIcon className="w-8 h-8" />
                  Player Status
                </CardTitle>
                <CardDescription>Content Creator Level 5</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">Manage your content with Ease</p>
                <div className="mt-4 flex gap-2">
                  <div className="h-2 flex-1 bg-zinc-800 rounded-none">
                    <div className="h-full w-3/4 bg-blue-500"></div>
                  </div>
                  <span className="text-xs text-zinc-400">75%</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers size={24} />
                  Active Quest Log
                </CardTitle>
                <CardDescription>Current Missions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500"></span>
                    Publish 3 blog posts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500"></span>
                    Update SEO metadata
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500"></span>
                    Engage with audience
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap size={24} />
                  Game Config
                </CardTitle>
                <CardDescription>System Settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-zinc-300">
                  <div className="flex justify-between">
                    <span>Difficulty</span>
                    <span className="text-zinc-400">Normal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Auto-save</span>
                    <span className="text-green-400">ON</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notifications</span>
                    <span className="text-green-400">ON</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </section>
      <section className="h-[60vh] sm:h-[50vh] w-full flex flex-col justify-center items-start ">
          <div className="max-w-[50%] mx-auto space-y-3">
            <h4 className="font-bold text-2xl font-retro">
              Ready to Transform your Content Journey?
            </h4>
                    <p className="text-sm text-zinc-400">
                      Join thousands of content creators like you who chose Vanguard
                    </p>
            <div className="flex gap-2">
              <input className="bg-zinc-800 focus:outline-none border-[4px] border-black dark:border-white rounded-none px-2 py-[7px] text-sm text-zinc-300" type="text" placeholder="Enter your email" />
              <Button variant="outline" >Submit</Button>
            </div>
          </div>
      </section>
    </main>
  );
}
