import { createFileRoute } from "@tanstack/react-router";
import { FRIEND_NAME } from "@/content/birthday";
import {
  BirthdayCake,
  BirthdayHero,
  BirthdayMessage,
  FavoriteThings,
  FinalMessage,
  FloatingNav,
  FriendshipTimeline,
  MemoryCards,
  MusicPlayer,
  SurpriseReveal,
} from "@/components/birthday/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy Birthday, ${FRIEND_NAME} ♥` },
      { name: "description", content: `A little birthday surprise and a journey through our friendship, made for ${FRIEND_NAME}.` },
      { property: "og:title", content: `Happy Birthday, ${FRIEND_NAME} ♥` },
      { property: "og:description", content: "A birthday surprise, our memories, and a few things I never say enough." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bd-root">
      <FloatingNav />
      <BirthdayHero />
      <BirthdayMessage />
      <FriendshipTimeline />
      <FavoriteThings />
      <MemoryCards />
      <SurpriseReveal />
      <BirthdayCake />
      <FinalMessage />
      <MusicPlayer />
    </main>
  );
}
