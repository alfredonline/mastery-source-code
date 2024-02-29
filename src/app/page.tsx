import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </MaxWidthWrapper>
  );
}
