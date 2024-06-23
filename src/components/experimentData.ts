export interface ExperimentData {
  title: string;
  description: string[];
  question: string;
  alt: string;
  origin: string;
  originLink: string;
}

const experimentData: Record<string, ExperimentData> = {
  "trolley-problem": {
    title: "The Trolley Problem",
    description: [
      "A trolley is heading down a track towards five people who are tied up and cannot move. You are standing next to a lever that can divert the trolley onto another track, where only one person is tied up. If you don't pull the lever, the trolley will keep on its original track and kill five people; if you pull it, the five will be saved, but the one on the other track will be killed.",
    ],
    question: "Is it right to pull the lever?",
    alt: "trolley car at night",
    origin: "Philippa Foot (1920-2010)",
    originLink: "https://www.britannica.com/topic/trolley-problem",
  },
  "marys-room": {
    title: "Mary's Room",
    description: [
      `Mary is a brilliant scientist who has been confined to a black-and-white room her entire life. She has access to all the scientific information about color. She knows everything about the wavelengths of light, the physiology of the eyes, and the brain processes involved in color vision.`,
      `However, Mary has never seen color herself; she has only experienced the world in black, white, and shades of gray.`,
      `One day, Mary is released from her black-and-white room and sees a red apple for the first time.`,
    ],
    question:
      "Does Mary learn something new about the color red when she sees the apple?",
    alt: "woman in a black and white room with messy bookshelves",
    origin: "Frank Jackson (1943-)",
    originLink: "https://plato.stanford.edu/entries/qualia-knowledge",
  },
  "ship-of-theseus": {
    title: "The Ship of Theseus",
    description: [
      "Theseus returned to Athens in a large ship with 30 oars. To honor the hero, the city residents preserved his ship.",
      "Over time, boards and other elements began to rot, so they were replaced with parts that were identical in function and appearance. Eventually, every part of the ship was replaced, from sails to oars. Athenians still came to admire the hero's ship.",
    ],
    question: "But is this the same ship that Theseus returned in?",
    alt: "ancient Greek ship being repaired",
    origin: "Plutarch (46-119 AD)",
    originLink:
      "https://www.laphamsquarterly.org/roundtable/restoring-ship-theseus",
  },
  "deceiving-demon": {
    title: "The Deceiving Demon",
    description: [
      `From your earliest memory, you have been under the control of a malicious demon who has tricked you into perceiving a fabricated reality. The sky, the air, the earth, colors, shapes, sounds, animals, people, and all external things are merely the delusions of dreams the demon has devised. Even your hands, eyes, flesh, blood, and senses are mere ideas conjured by the demon.`,
    ],
    question: "Is it possible that something like this is true?",
    alt: "malicious grinning huge demon staring at the tiny figure of a person",
    origin: "René Descartes (1596-1650)",
    originLink:
      "https://www.gutenberg.org/cache/epub/70091/pg70091-images.html#Meditat_II",
  },
  "sorites-paradox": {
    title: "The Sorites Paradox",
    description: [
      `You have a heap of ten thousand grains of sand, from which you remove one grain. You continue removing grains of sand, one by one, until you only have one grain remaining.`,
      `Is the heap still a "heap"? If not, when precisely did it change?`,
    ],
    question: `Can the removal of a single grain of sand turn a heap into a non-heap?`,
    alt: "pile of sand",
    origin: "Eubulides (~350 BC)",
    originLink: "https://plato.stanford.edu/entries/sorites-paradox",
  },
  "buridans-ass": {
    title: "Buridan's Ass",
    description: [
      `An electronic donkey needs to recharge its battery. Its clopity-clop metal hooves come to a halt as it finds itself equal distance from two charging stations. Unable to make a rational decision between the two, it stays put until it shuts down.`,
    ],
    question: `Is randomness, or even irrationality, a necessary part of existence?`,
    alt: "Robotic donkey standing still on tatami mats, with a goofy donkey painting in the background",
    origin: "Anonymous satire of moral determinist Jean Buridan (1359-1362)",
    originLink: "https://en.wikipedia.org/wiki/Buridan%27s_ass",
  },
  "blind-men-and-elephant": {
    title: "The Blind Men & the Elephant",
    description: [
      `A traveler leading an elephant passed a group of blind men. Never having experienced an "elephant," they asked to touch it. One touched its trunk, one its ear, one the tip of its tail, etc.`,
      `When they described it, the first said that it was like a snake; the second, that it was like a fan; the third, that it was like a broom, and so on.`,
    ],
    question: `Could our limited life experiences and perceptions actually be a deep misunderstanding of reality?`,
    alt: "men touching an elephant",
    origin: "Ancient Indian subcontinent",
    originLink:
      "https://www.accesstoinsight.org/tipitaka/kn/ud/ud.6.04.than.html",
  },
  "veil-of-ignorance": {
    title: "The Veil of Ignorance",
    description: [
      `You stand before an unfinished world with no human inhabitants. It's your task to decide how human societies across the world will operate. Once the decisions are finalized, those societies will spring into existence.`,
      `You will be reborn there as an infant.`,
      `But, you stand behind a veil of ignorance. You don't know where in the world you'll be born, or into what circumstances. You don't even know your sex, skin color, or any other genetics.`,
    ],
    question: `Would being in this position motivate you to structure the world such that all humans have the best lives possible?`,
    alt: "man standing on a glass platform staring down at the misty Earth",
    origin: "John Rawls (1921-2002)",
    originLink: "https://plato.stanford.edu/entries/original-position",
  },
  "experience-machine": {
    title: "The Experience Machine",
    description: [
      `There is an "experience machine" so advanced that it can give you any kind of experiences you desire. Everyone else on Earth can plug in, too, so there's no need to stay unplugged to serve them. There are boundless options: living on any kind of world with any kind of body, shifting enjoyments, challenges, or whatever you desire. Every two years, your experiences will end so that you can select new ones and continue.`,
    ],
    question: `Is there any solid reason NOT to plug in?`,
    alt: "woman wearing VR goggles surrounded by machinery",
    origin: "Robert Nozick (1938-2002)",
    originLink: "https://rintintin.colorado.edu/~vancecd/phil3160/Nozick1.pdf",
  },
  "life-you-can-save": {
    title: "The Life You Can Save",
    description: [
      `Running to catch a train to work or school, you see a small child alone in a pond. His head continually drops below the water, and he is beginning to splash desperately in attempts to reach the shore.`,
      `If you don't wade in and rescue him, he seems likely to drown. It would be safe and easy, but your new shoes and pants would get wet and muddy. You might even miss your train and be late for work. What should you do?`,
      `WAIT! The true question is not whether you should help the child, to which nearly everyone says yes. Every day on Earth, people who are doing OK spend money on non-essential items, while some are suffering and dying in far worse conditions.`,
    ],
    question: `Is neglecting to help the far less fortunate or even dying anywhere on Earth, assuming you could help with relatively small efforts, similar to neglecting to save the drowning child?`,
    alt: "child in a pond yelling and holding out their arms",
    origin: "Peter Singer (1946-)",
    originLink: "https://www.thelifeyoucansave.org/child-in-the-pond/",
  },
};

export default experimentData;
