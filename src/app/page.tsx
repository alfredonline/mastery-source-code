import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button";
import { features, heroSubtext, heroText } from "../../constants/branding";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {heroText}
            <span className="text-blue-600 flex items-center justify-center">
              <div>and stay motivated. </div>{" "}
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            {heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <LoginLink
              href="/"
              className={buttonVariants({ variant: "default" })}
            >
              Log in
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "outline" })}>
              Sign up
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {features?.map((feature) => (
              <div
                key={feature.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<feature.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
