import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";

import { SiIndiehackers } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-950 py-6 border-b sticky top-0 ">
      <div className="max-w-wrapper mx-auto flex items-center justify-between px-8">
        <Link href="/">
          <div className="flex items-center gap-2">
            <SiIndiehackers size={48} />
            <p className="font-bold text-lg hidden sm:block">IHacker</p>
          </div>
        </Link>

        <div className="flex gap-1">
          <Link href="/feedback">
            <Button variant="outline">Give us a Feedback</Button>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
