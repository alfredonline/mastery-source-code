import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import NavItems from "./NavItems";
// import { buttonVariants } from "@/components/ui/button";
// import UserAccountNav from "./UserAccountNav";
// import MobileNav from "./MobileNav";
import { brandName } from "../../../constants/branding";
import Image from "next/image";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/dist/server";
import {
  loggedInUserNavItems,
  loggedOutUserNavItems,
} from "../../../constants/viewData";
import { buttonVariants } from "../ui/button";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* <MobileNav /> */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/" className="flex items-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {brandName}{" "}
                  </h2>{" "}
                  <div className="w-2" aria-hidden="true"></div>
                  <Image src="/arrow.svg" alt="hero" width={30} height={30} />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                {/* <NavItems /> */}
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user &&
                    loggedInUserNavItems.map((item, index) => {
                      return (
                        <Link
                          href={item.href}
                          key={index}
                          className="text-gray-900 hover:text-gray-900"
                        >
                          <item.Icon className="w-6 h-6" />
                          <span className="ml-2">{item.name}</span>
                        </Link>
                      );
                    })}
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-2">
                <LoginLink
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                  })}
                >
                  Log in
                </LoginLink>
                <RegisterLink 
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                >
                  Sign up
                </RegisterLink>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
