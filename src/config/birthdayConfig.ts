export interface BirthdayPhoto {
  image: string;
  caption: string;
}

export interface Quality {
  title: string;
  emoji: string;
}

export type Wish = string;
export type Dream = string;
export type Compliment = string;

export const birthdayConfig = {
  herName: "My Beautiful Girl",
  myName: "Your Love",

  // Set the birthday date and exact time here (24-hour format)
  // Format: "YYYY-MM-DDTHH:MM:SS"
  birthdayDate: "2026-12-25T00:00:00",

  heroMessage: "Something Special Is Waiting For You... ❤️",
  heroSubMessage: "For the most beautiful girl in the world",
  heroBottomMessage: "Keep smiling, beautiful. ❤️",

  revealHeading: "HAPPY BIRTHDAY ❤️",
  revealSubHeading: "To the most beautiful girl in the world",
  revealMessage:
    "Today the world celebrates the beautiful soul who makes every place a little brighter, every smile a little warmer and every moment a little more special.",

  beautifulGirlHeading: "Look At You... 🥹❤️",
  beautifulGirlSubHeading: "How can someone be this beautiful?",
  beautifulGirlBelowPhoto: "Absolutely beautiful. ❤️",
  beautifulGirlFinalLine: "That smile deserves its own celebration. ✨",

  galleryHeading: "Beautiful You ❤️",
  gallerySubHeading: "Every picture tells one simple truth...",
  galleryFinalLine: "You're absolutely gorgeous. 🥹",

  qualitiesHeading: "What Makes You So Special? ❤️",
  qualities: [
    { emoji: "😊", title: "Your beautiful smile" },
    { emoji: "👀", title: "Your gorgeous eyes" },
    { emoji: "🥹", title: "Your adorable laugh" },
    { emoji: "🌸", title: "Your kindness" },
    { emoji: "❤️", title: "Your beautiful heart" },
    { emoji: "✨", title: "Your confidence" },
    { emoji: "😍", title: "Your cute little expressions" },
    { emoji: "✨", title: "The way you light up every room" },
    { emoji: "😊", title: "The way you make people smile" },
    { emoji: "🫶", title: "And simply... YOU." },
  ] as Quality[],

  letterHeading: "A Little Birthday Letter For You 💌",
  letterParagraphs: [
    "My beautiful girl,",
    "Today is your day.",
    "A day to celebrate the beautiful person you are.",
    "I hope you always know just how special you are.",
    "I hope you always keep that beautiful smile.",
    "I hope you continue chasing every dream in your heart.",
    "I hope life gives you countless reasons to laugh, smile and feel loved.",
    "You deserve beautiful things.",
    "You deserve happiness.",
    "You deserve every beautiful moment that life has to offer.",
    "So today, forget everything else for a moment.",
    "Just smile.",
    "Because today the whole world is celebrating YOU.",
    "Happy Birthday, my beautiful girl. ❤️",
    "May your day be as beautiful, magical and unforgettable as you are.",
  ],

  cakeHeading: "Make A Wish, Beautiful... 🕯️",
  cakeInstruction: "Tap the candles ❤️",
  cakeWishMade: "Wish made! ❤️",
  cakeWishSubText: "And may every wish in your heart come true.",

  wishesHeading: "Birthday Wishes For You 🌸",
  wishes: [
    "May your smile never fade. ❤️",
    "May your heart always stay happy. 🌸",
    "May every dream you have come true. ✨",
    "May every new year of your life bring you more happiness. 🎀",
    "May you always have a reason to smile. 😊",
    "May you always feel loved and appreciated. ❤️",
    "May beautiful surprises find you everywhere. 🎁",
    "May this year be your most beautiful year yet. ✨",
    "May you always remain the wonderful person you are. 🫶",
    "May your days be filled with laughter and joy. 😊",
    "May you shine brighter with every passing year. ✨",
    "May love always surround you. ❤️",
    "May your heart find peace and happiness always. 🌸",
    "May life spoil you with beautiful moments. 💝",
    "May your beauty inside and out continue to grow. 🌹",
  ] as Wish[],

  dreamsHeading: "May All Your Dreams Come True ✨",
  dreamsIntro: [
    "Whatever your heart wishes for...",
    "Whatever dream you're quietly holding...",
    "Whatever beautiful place you want to reach...",
    "May life take you there. ❤️",
  ],
  dreams: [
    "✨ Happiness",
    "✨ Success",
    "✨ Peace",
    "✨ Beautiful experiences",
    "✨ New adventures",
    "✨ Everything your heart desires",
  ] as Dream[],

  giftHeading: "There's One More Surprise... 🎁",
  giftButton: "Open Your Gift ❤️",
  giftRevealMessage:
    "You are one of the most precious people in my life. ❤️",
  giftPersonalMessage:
    "Thank you for being you. For being the beautiful, kind and amazing person you are. The world is better with you in it.",

  beautyParadeHeading: "Okay... We Need To Talk About How Beautiful You Are. 😍",
  compliments: [
    "Too beautiful. ❤️",
    "Absolutely stunning.",
    "That smile! 🥹",
    "Okay... WOW. 😍",
    "How is this even possible?",
    "100/10. ❤️",
    "Beautiful doesn't even describe you.",
    "Simply breathtaking.",
  ] as Compliment[],

  finalHeading: "Before You Go... ❤️",
  finalLines: [
    "I just want you to remember one thing.",
    "You are incredibly special.",
    "You are beautiful.",
    "You are loved.",
    "And you deserve every beautiful thing this world has to offer.",
  ],
  finalBirthdayText: "Happy Birthday, My Beautiful Girl. ❤️",
  finalClosingLines: ["Keep smiling.", "Keep shining.", "Keep being YOU. ✨"],
  finalGoodbye: "Have the most beautiful birthday ever. 🎂❤️",

  celebrationText: "Happy Birthday ❤️",
  celebrationSubText: "✨ You deserve a magical day. ✨",

  musicPath: "/music/birthday-song.mp3",

  photos: [
    { image: "https://images.pexels.com/photos/18355488/pexels-photo-18355488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "That beautiful smile ❤️" },
    { image: "https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Absolutely gorgeous ✨" },
    { image: "https://images.pexels.com/photos/5920763/pexels-photo-5920763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Simply beautiful 🥹" },
    { image: "https://images.pexels.com/photos/719617/pexels-photo-719617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "That look. ❤️" },
    { image: "https://images.pexels.com/photos/7082205/pexels-photo-7082205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "My favorite smile." },
    { image: "https://images.pexels.com/photos/11929000/pexels-photo-11929000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Simply stunning." },
    { image: "https://images.pexels.com/photos/13140394/pexels-photo-13140394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Beautiful from every angle." },
    { image: "https://images.pexels.com/photos/18392646/pexels-photo-18392646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "How are you this beautiful? 🥹" },
    { image: "https://images.pexels.com/photos/21286432/pexels-photo-21286432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Pure beauty. 🌸" },
    { image: "https://images.pexels.com/photos/1890033/pexels-photo-1890033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "That smile though ❤️" },
    { image: "https://images.pexels.com/photos/10055420/pexels-photo-10055420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Radiant as always ✨" },
    { image: "https://images.pexels.com/photos/31006570/pexels-photo-31006570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Adorable. 🌸" },
    { image: "https://images.pexels.com/photos/2520446/pexels-photo-2520446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Sunshine in human form. ☀️" },
    { image: "https://images.pexels.com/photos/2616957/pexels-photo-2616957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Beautiful inside and out. ❤️" },
    { image: "https://images.pexels.com/photos/38956548/pexels-photo-38956548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "That joy on your face 🥹" },
    { image: "https://images.pexels.com/photos/30473344/pexels-photo-30473344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Effortlessly beautiful ✨" },
    { image: "https://images.pexels.com/photos/6418009/pexels-photo-6418009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "A whole vibe. 😍" },
    { image: "https://images.pexels.com/photos/27408698/pexels-photo-27408698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Confidence looks good on you. ✨" },
    { image: "https://images.pexels.com/photos/36093241/pexels-photo-36093241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Absolutely glowing. 🌟" },
    { image: "https://images.pexels.com/photos/10970135/pexels-photo-10970135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Cutest smile ever. 🥹" },
    { image: "https://images.pexels.com/photos/936069/pexels-photo-936069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Playful and beautiful. 🌸" },
    { image: "https://images.pexels.com/photos/7707368/pexels-photo-7707368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "That warmth in your eyes ❤️" },
    { image: "https://images.pexels.com/photos/3757027/pexels-photo-3757027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Music to my eyes. 🎶" },
    { image: "https://images.pexels.com/photos/39178016/pexels-photo-39178016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", caption: "Blooming beautiful. 🌸" },
  ] as BirthdayPhoto[],

  // Special photos used in reveal and gift sections
  heroPhoto: "https://images.pexels.com/photos/10658354/pexels-photo-10658354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  beautifulGirlPhoto: "https://images.pexels.com/photos/18355488/pexels-photo-18355488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  giftPhoto: "https://images.pexels.com/photos/719617/pexels-photo-719617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  finalPhoto: "https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",

  // Beauty parade carousel photos (reuse from gallery)
  beautyParadePhotos: [
    "https://images.pexels.com/photos/18355488/pexels-photo-18355488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/719617/pexels-photo-719617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/21286432/pexels-photo-21286432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/11929000/pexels-photo-11929000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/18392646/pexels-photo-18392646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/1890033/pexels-photo-1890033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2520446/pexels-photo-2520446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ] as string[],

  enableMusic: true,
};

export type BirthdayConfig = typeof birthdayConfig;
