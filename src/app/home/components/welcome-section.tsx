import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Home as HomeIcon, Search, Settings } from "lucide-react";

export function WelcomeSection() {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Welcome</h2>
        <p className="max-w-2xl text-muted-foreground">
          This is the page content area rendered by the page. The layout wraps
          it and composes the Hero and other sections.
        </p>
      </div>
      <div className="mt-10">
        <Dock>
          <DockItem>
            <DockIcon>
              <HomeIcon className="w-6 h-6" />
            </DockIcon>
            <DockLabel>Home</DockLabel>
          </DockItem>
          <DockItem>
            <DockIcon>
              <Search className="w-6 h-6" />
            </DockIcon>
            <DockLabel>Search</DockLabel>
          </DockItem>
          <DockItem>
            <DockIcon>
              <Settings className="w-6 h-6" />
            </DockIcon>
            <DockLabel>Settings</DockLabel>
          </DockItem>
        </Dock>
      </div>
    </section>
  );
}
