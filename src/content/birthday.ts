// ✏️ Edit everything here — names, messages, captions and photos.
// Replace any photo by dropping a new file with the same name into /public/images/.

export const FRIEND_NAME = "Surya";
export const YOUR_NAME = "Honey";

export const nav = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "about-you", label: "About You" },
  { id: "surprise", label: "Surprise" },
  { id: "final", label: "Final Message" },
];

export const hero = {
  greeting: `Hey ${FRIEND_NAME}`,
  line: "Today isn't just another day...",
  reveal: "It's YOUR day.",
  button: "Open Your Surprise",
  image: "/images/friend-hero.jpg",
};

export const message = {
  title: `Happy Birthday, ${FRIEND_NAME}`,
  paragraphs: [
    "Some people come into our lives and somehow make ordinary moments feel special.",
    "You're one of those people.",
    "Thank you for all the laughs, random conversations, unforgettable memories, and all the little moments that somehow became my favorite memories.",
    "I'm genuinely lucky to have you as my crush.",
  ],
  image: "/images/memory-1.jpg",
};

export const timeline = [
  { year: "2024", title: "Where We Met", text: "On the same day back in 2024.", image: "/images/memory-8.jpg" },
  { year: "2025 March", title: "That First Conversation", text: "The very First Conversation through my fake Instagram Account.", image: "/images/memory-3.jpg" },
  { year: "2025 May", title: "When We Became Close", text: "Somewhere between the late-night talks.", image: "/images/memory-4.jpg" },
  { year: "2025", title: "Our Craziest Memories", text: "The Rare phone calls I made.", image: "/images/memory-5.jpg" },
  { year: "2025", title: "The Moments I'll Never Forget", text: "Those cute, endless conversations that made me feel like you were truly mine.", image: "/images/memory-6.jpg" },
  { year: "Today", title: "No Conversation", text: "I have never gone a single day without remembering you, but it’s hard for me to accept that you are no longer a friend to me, especially now that you are getting married.", image: "/images/memory-2.jpg" },
];

export const favoriteThings = [
  { icon: "smile", title: "Your Truthfulness", text: "I always admired how honest you were with me. You always told me the truth and never once lied to me." },
  { icon: "sparkle", title: "Your Quiteness", text:"You are such a gentle person, and that’s something I truly admire about you. That’s the only thing I have ever felt for you."},
  { icon: "heart", title: "Your Openness", text: "You were always so comfortable with me that you could ask me anything freely, without ever hesitating or worrying that I would judge you." },
  { icon: "ear", title: "The Way You Always Listen", text: "Even when I am not making sense, you somehow understand." },
  { icon: "chat", title: "Our Random Conversations", text: "Whenever I remember those cute little moments we shared, I just end up crying." },
  { icon: "star", title: "Simply Being You", text: "No edits needed. You're exactly the right amount of you." },
] as const;
// , story: "Still one of those memories that randomly comes back and makes me smile.",
// story: "Wrong turns, terrible snacks, perfect company. I'd do it all again tomorrow."
// story: "We talked about everything and nothing, and I realised how lucky I am.",
export const featuredMemories = [
  { title: "That One Day we spent at exhibition", date: "October 2024", image: "/images/memory-4.jpg" },
  { title: "The cute conversations", date: "All the time", image: "/images/memory-3.jpg" },
  { title: "The day you told me I looked good in blue frock.", date: "April 2026",  image: "/images/memory-5.jpg" },
];

export const surprise = {
  title: "Okay... I have one more thing for you",
  button: "Open It",
  message: [
    "No matter where life takes us, I hope we always find our way back to these little moments, these endless conversations, and this friendship.",
    "Here's to another year of memories.",
    `Happy Birthday, ${FRIEND_NAME}.`,
  ],
};

export const cake = {
  title: "Make a Wish",
  hint: "Close your eyes, make a wish, then tap the cake",
  done: "Wish made ✨",
};

export const finale = {
  intro: "One Last Thing...",
  lines: [
    "Thank you for being one of the most beautiful parts of my life.",
    "Here's to more adventures.\nMore laughter.\nMore happiness.\nMore unforgettable memories.",
    "And most importantly...",
    "More years of being friends.",
  ],
  closing: `Happy Birthday, ${FRIEND_NAME}.`,
  signature: `Made with love by ${YOUR_NAME}`,
  image: "/images/memory-2.jpg",
};

export const music = { src: "/audio/birthday-song.mp3" };
