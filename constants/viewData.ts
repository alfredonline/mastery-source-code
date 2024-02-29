// where text that pertains to different views is stored
import { 
    Target,
    PlusCircle,
    Settings,
    LogOut,
    
} from "lucide-react"

export const loggedInUserNavItems = [
  {
    name: "My Goals",
    href: "/my-goals",
    Icon: Target,
  },
  {
    name: "Add Goal",
    href: "/new-goal",
    Icon: PlusCircle,
  },
  {
    name: "Settings",
    href: "/settings",
    Icon: Settings,
  }
];


export const loggedOutUserNavItems = [
  {
    name: "Log in",
    href: "/login",
  },
  {
    name: "Sign up",
    href: "/register",
  }
];