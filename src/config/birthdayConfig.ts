export interface BirthdayPhoto {
  image: string;
  caption: string;
  video?: boolean;
}

export interface Quality {
  title: string;
  emoji: string;
}

export type Wish = string;
export type Dream = string;
export type Compliment = string;

const attachmentUrls = import.meta.glob('../attachments/*.{jpg,jpeg,png,mp4}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const attachment = (filename: string) => {
  const url = attachmentUrls[`../attachments/${filename}`];
  if (!url) throw new Error(`Missing birthday attachment: ${filename}`);
  return url;
};

export const birthdayConfig = {
  herName: "Aaisu ❤️",
  myName: "Your Love",

  // Set the birthday date and exact time here (24-hour format)
  // Format: "YYYY-MM-DDTHH:MM:SS"
  birthdayDate: "2026-10-01T01:55:00",

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
  finalBirthdayText: "Happy Birthday, Aaisu. ❤️",
  finalClosingLines: ["Keep smiling.", "Keep shining.", "Keep being YOU. ✨"],
  finalGoodbye: "Have the most beautiful birthday ever. 🎂❤️",

  celebrationText: "Happy Birthday ❤️",
  celebrationName: "My love, my kuchu puchu 🥰💖",
  celebrationSubText: "✨ You deserve a magical day. ✨",

  musicPath: "/music/birthday-song.mp3",

  photos: [
    { image: attachment('1000250709.jpg'), caption: 'Flowers for you, moments for us 🌸' },
    { image: attachment('1000250716.jpg'), caption: 'Hand in hand beneath the lights ❤️' },
    { image: attachment('1000250717.jpg'), caption: 'A sweet smile in the garden 😊' },
    { image: attachment('1000250718.jpg'), caption: 'Pink sleeves and a mirror smile 💗' },
    { image: attachment('1000250719.jpg'), caption: 'Your rosy little mirror moment 🌷' },
    { image: attachment('1000250720.jpg'), caption: 'Elegance dressed in white ✨' },
    { image: attachment('1000250721.jpg'), caption: 'Classic black and cream 🖤' },
    { image: attachment('1000250722.jpg'), caption: 'Your relaxed café pose ☕' },
    { image: attachment('1000250723.jpg'), caption: 'Blue blooms and your lovely pose 💙' },
    { image: attachment('1000250725.jpg'), caption: 'Those eyes framed in blue 👀' },
    { image: attachment('1000250726.png'), caption: 'Peachy and picture-perfect 🍑' },
    { image: attachment('1000250727.jpg'), caption: 'A little sparkle in white ✨' },
    { image: attachment('1000250728.jpg'), caption: 'A little daydream at the café ☕' },
    { image: attachment('1000250729.png'), caption: 'The flowers found their favorite person 🌼' },
    { image: attachment('1000250730.jpg'), caption: 'Cozy in blue beneath the garden lights 💙' },
    { image: attachment('1000250731.jpg'), caption: 'A closer look at that lovely smile ❤️' },
    { image: attachment('1000250732.jpg'), caption: 'A thoughtful moment together 🌸' },
    { image: attachment('1000250733.jpg'), caption: 'A graceful look among the greenery 🌿' },
    { image: attachment('1000250734.jpg'), caption: 'A full-length mirror moment ✨' },
    { image: attachment('1000250755.jpg'), caption: 'An evening in teal 💚' },
    { image: attachment('1000250756.jpg'), caption: 'Olive stripes and a mirror smile 😊' },
    { image: attachment('1000250757.jpg'), caption: 'A soft smile in white 🤍' },
    { image: attachment('1000250758.jpg'), caption: 'A quiet moment in white 🌙' },
    { image: attachment('1000250759.jpg'), caption: 'That gentle sideways smile 🥰' },
    { image: attachment('1000250760.jpg'), caption: 'A close-up wrapped in color 🌺' },
    { image: attachment('1000250761.jpg'), caption: 'A kiss blown just for the camera 💋' },
    { image: attachment('1000250762.jpg'), caption: 'Soft white, effortless grace 🤍' },
    { image: attachment('1000250764.jpg'), caption: 'Blue patterns and beautiful henna 💙' },
    { image: attachment('1000250879.jpg'), caption: 'Flowers and a hand held close 🌹' },
    { image: attachment('1000250880.jpg'), caption: 'Our anniversary table, our moment ❤️' },
    { image: attachment('1000250881.jpg'), caption: 'A bouquet in the pink swing 🌸' },
    { image: attachment('1000250882.jpg'), caption: 'A rose to remember our anniversary 🌹' },
    { image: attachment('1000250883.jpg'), caption: 'A quiet look beside the greenery 🌿' },
    { image: attachment('1000250884.jpg'), caption: 'A soft smile, hands folded 🥰' },
    { image: attachment('1000250885.jpg'), caption: 'One lovely smile, one peaceful pose ✨' },
    { image: attachment('1000250886.jpg'), caption: 'A sunny little close-up ☀️' },
    { image: attachment('1000250887.jpg'), caption: 'That sunshine-yellow smile 💛' },
    { image: attachment('1000250888.jpg'), caption: 'A bouquet and a staircase moment 💐' },
    { image: attachment('1000250889.jpg'), caption: 'A floral look beneath the lights 🌺' },
    { image: attachment('1000250890.jpg'), caption: 'A bouquet on a moonlit walk 🌙' },
    { image: attachment('1000250891.jpg'), caption: 'One of my favorite moments together ❤️' },
    { image: attachment('1000250892.jpg'), caption: 'Red, florals, and a confident pose 🌹' },
    { image: attachment('1000250893.jpg'), caption: 'Pretty in pink under the evening lights 💗' },
    { image: attachment('1000250895.jpg'), caption: 'A graceful moment in white 🤍' },
    { image: attachment('1000250897.png'), caption: 'A little more of your lovely floral look 🌸' },
    { image: attachment('1000252154.jpg'), caption: 'Those eyes and that lavender smile 💜' },
    { image: attachment('1000252155.jpg'), caption: 'A peaceful pose in the garden 🌿' },
    { image: attachment('1000252160.jpg'), caption: 'A bridal mirror moment, dressed in flowers 💐' },
    { image: attachment('1000252162.jpg'), caption: 'Four playful sides of your blue look 💙' },
    { image: attachment('1000252164.jpg'), caption: 'A car-ride selfie with a bow-filter smile 🎀' },
    { image: attachment('1000252165.jpg'), caption: 'A favorite candid memory ❤️' },
    { image: attachment('1000252166.jpg'), caption: 'A little moment that feels like you ✨' },
    { image: attachment('1000252169.jpg'), caption: 'One more lovely memory 🥰' },
    { image: attachment('1000252161.mp4'), caption: 'Your bridal glow, henna, and bangles ✨', video: true },
    { image: attachment('1000252167.mp4'), caption: 'That playful pout in black 🖤', video: true },
    { image: attachment('1000252168.mp4'), caption: 'A little night-time selfie together 🌙', video: true },
  ] as BirthdayPhoto[],

  // Special photos used in reveal and gift sections
  heroPhoto: attachment('1000250726.png'),
  beautifulGirlPhoto: attachment('1000250723.jpg'),
  giftPhoto: attachment('1000250882.jpg'),
  finalPhoto: attachment('1000252154.jpg'),

  // Beauty parade carousel photos (reuse from gallery)
  beautyParadePhotos: [
    attachment('1000250709.jpg'),
    attachment('1000250723.jpg'),
    attachment('1000250725.jpg'),
    attachment('1000250726.png'),
    attachment('1000250755.jpg'),
    attachment('1000250882.jpg'),
    attachment('1000250892.jpg'),
    attachment('1000252154.jpg'),
  ] as string[],

  enableMusic: true,
};

export type BirthdayConfig = typeof birthdayConfig;
