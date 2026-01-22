import { Separator } from "@/components/ui/separator";

export function PageHeader() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <span>Dashboard</span>
      </div>
      <h1 className="text-3xl font-semibold mb-1">Business Overview</h1>
      <p className="text-muted-foreground">
        A consolidated overview of your business's financial performance and recent activity.
      </p>
    </div>
  );
}