"use client";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { trpc } from "@/app/_trpc/client";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const hours = [
  { value: 50, label: "50 hours" },
  { value: 100, label: "100 hours" },
  { value: 150, label: "150 hours" },
  { value: 200, label: "200 hours" },
  { value: 250, label: "250 hours" },
  { value: 300, label: "300 hours" },
  { value: 350, label: "350 hours" },
  { value: 400, label: "400 hours" },
  { value: 450, label: "450 hours" },
  { value: 500, label: "500 hours" },
  { value: 550, label: "550 hours" },
  { value: 600, label: "600 hours" },
  { value: 650, label: "650 hours" },
  { value: 700, label: "700 hours" },
  { value: 750, label: "750 hours" },
  { value: 800, label: "800 hours" },
  { value: 850, label: "850 hours" },
  { value: 900, label: "900 hours" },
  { value: 950, label: "950 hours" },
  { value: 1000, label: "1000 hours" },
];

const weeks = [
  {
    value: 4,
    label: "4 weeks",
  },
  {
    value: 8,
    label: "8 weeks",
  },
  {
    value: 12,
    label: "12 weeks",
  },
  {
    value: 16,
    label: "16 weeks",
  },
  {
    value: 20,
    label: "20 weeks",
  },
  {
    value: 24,
    label: "24 weeks",
  },
  {
    value: 28,
    label: "28 weeks",
  },
  {
    value: 32,
    label: "32 weeks",
  },
  {
    value: 36,
    label: "36 weeks",
  },
  {
    value: 40,
    label: "40 weeks",
  },
  {
    value: 44,
    label: "44 weeks",
  },
  {
    value: 48,
    label: "48 weeks",
  },
  {
    value: 52,
    label: "52 weeks",
  },
];

const typesOfActivities = [
  {
    value: "reading",
    label: "Reading 📚",
  },
  {
    value: "television",
    label: "Television 📺",
  },
  {
    value: "movies",
    label: "Movies 🎬",
  },
  {
    value: "music",
    label: "Music 🎵",
  },
  {
    value: "speaking",
    label: "Speaking 🗣",
  },
];

const languageEmojiArray = [
  { language: "English", emoji: "🇺🇸" }, // United States
  { language: "Mandarin Chinese", emoji: "🇨🇳" }, // China
  { language: "Hindi", emoji: "🇮🇳" }, // India
  { language: "Spanish", emoji: "🇪🇸" }, // Spain
  { language: "French", emoji: "🇫🇷" }, // France
  { language: "Standard Arabic", emoji: "🇸🇦" }, // Saudi Arabia
  { language: "Bengali", emoji: "🇧🇩" }, // Bangladesh
  { language: "Russian", emoji: "🇷🇺" }, // Russia
  { language: "Portuguese", emoji: "🇵🇹" }, // Portugal
  { language: "Indonesian", emoji: "🇮🇩" }, // Indonesia
  { language: "Urdu", emoji: "🇵🇰" }, // Pakistan
  { language: "German", emoji: "🇩🇪" }, // Germany
  { language: "Japanese", emoji: "🇯🇵" }, // Japan
  { language: "Swahili", emoji: "🇹🇿" }, // Tanzania
  { language: "Telugu", emoji: "🇮🇳" }, // India
  { language: "Marathi", emoji: "🇮🇳" }, // India
  { language: "Turkish", emoji: "🇹🇷" }, // Turkey
  { language: "Tamil", emoji: "🇮🇳" }, // India
  { language: "Vietnamese", emoji: "🇻🇳" }, // Vietnam
  { language: "Korean", emoji: "🇰🇷" }, // South Korea
];

const formSchema = z.object({
  durationInHours: z.number(),
  timePeriod: z.number(),
  language: z.string(),
});

export default function AddGoalForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      durationInHours: 0,
      timePeriod: 0,
      language: "",
    },
  });

  const { mutate: submitRequest, isLoading } =
    trpc.submitNewImmersionPlan.useMutation({
      onSuccess: ({ data }) => {
        toast("Congratulations 🎉. Good luck with your immersion plan.", {
          duration: 5000,
          style: {
            backgroundColor: "#0f172a",
            color: "#ffffff",
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
    }) as any;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitRequest({
      _name: "hello",
    });
  };

  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  return (
    <Form {...form}>
      <h2 className="text-xl font-semibold">
        Tell us about your immersion plan
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Which language?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {languageEmojiArray.map((language) => (
                    <SelectItem
                      key={language.language}
                      value={language.language}
                    >
                      {language.language} {language.emoji}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="durationInHours"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="How many hours of immersion?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour.value} value={hour.value.toString()}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timePeriod"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Over how many weeks?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {weeks.map((week) => (
                    <SelectItem key={week.value} value={week.value.toString()}>
                      {week.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormDescription>
          <p>
            Now that you've told us about your immersion plan, let's talk about
            the activities you'll do to immerse yourself in the language.
          </p>
        </FormDescription>
        <h2 className="text-xl font-semibold">What activities will you do?</h2>
        <div className="flex flex-wrap gap-4">
          {typesOfActivities.map((activity) => {
            return (
              <div
                key={activity.value}
                className={`p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400 transition-all duration-300 ease-in-out ${
                  selectedActivities.includes(activity.value)
                    ? "bg-gray-100"
                    : "bg-white"
                } flex items-center justify-center max-w-48`}
                onClick={() => {
                  if (selectedActivities.includes(activity.value)) {
                    setSelectedActivities(
                      selectedActivities.filter(
                        (selectedActivity) =>
                          selectedActivity !== activity.value
                      )
                    );
                  } else {
                    setSelectedActivities([
                      ...selectedActivities,
                      activity.value,
                    ]);
                  }
                }}
              >
                <p>{activity.label}</p>
              </div>
            );
          })}
        </div>

        <Button type="submit" className="w-full">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
