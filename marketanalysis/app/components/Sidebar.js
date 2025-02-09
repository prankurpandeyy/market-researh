import Link from "next/link";
import { Home, Save, Settings, Info } from "lucide-react";

function Sidebar() {
  return (
    <aside className=" bg-gray-300 w-64 min-h-screen p-4 border-r border-gray-200">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <h2 className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
            Menu
          </h2>
          <Link
            href="/"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200 focus:shadow-outline"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/saved-queries"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200 focus:shadow-outline"
          >
            <Save className="h-5 w-5" />
            <span>Saved Queries</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200 focus:shadow-outline"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200 focus:shadow-outline"
          >
            <Info className="h-5 w-5" />
            <span>About</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
export default Sidebar;
