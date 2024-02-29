import {
    Timer
} from "lucide-react"

export const brandName = "Mastery" as const;

export const heroText = "Track the time you spend on your goals" as const;

export const heroSubtext = "Mastery helps you track your time and progress towards your goals." as const;

export const ctaTextOptions = {
    login: "Log in",
    register: "Sign up",
    getStarted: "Get started",
    logOut: "Log out",
} as const;

export const features = [
    {
        name: "Track your time",
        description: "Mastery helps you track your time and progress towards your goals.",
        Icon: Timer,
    },
    {
        name: "Set your goals",
        description: "Set your goals and track your progress.",
        Icon: Timer,
    },
    {
        name: "Stay focused",
        description: "Mastery helps you stay focused on your goals.",
        Icon: Timer,
    }
]