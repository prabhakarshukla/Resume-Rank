import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "./sidebar-context";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      <SidebarProvider>
        <div className="flex min-h-svh w-full">
          <Sidebar />
          <MobileSidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <Navbar />
            <main className="flex-1 px-4 py-6 md:px-6 lg:px-8">
              <div className="mx-auto w-full max-w-7xl">{children}</div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
