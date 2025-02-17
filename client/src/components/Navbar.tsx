import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-8 flex items-center space-x-2">
          <SiDiscord className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">DiscordBot</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
          </Link>
          <Link href="/commands">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Commands
            </a>
          </Link>
          <Link href="/status">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Status
            </a>
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button
            size="sm"
            className="gap-2"
            onClick={() => window.open("https://discord.com/oauth2/authorize?your-bot-url", "_blank")}
          >
            <SiDiscord className="h-4 w-4" />
            Add to Discord
          </Button>
        </div>
      </div>
    </nav>
  );
}
