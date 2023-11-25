import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import NavItems from "@/components/nav-items";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white border-b border-gray-200">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            {/* TODO: Mobile Navigation */}

            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
