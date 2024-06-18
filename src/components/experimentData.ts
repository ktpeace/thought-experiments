export interface ExperimentData {
  title: string;
  description: string[];
  question: string;
}

const experimentData: Record<string, ExperimentData> = {
  "trolley-problem": {
    title: "The Trolley Problem",
    description: [
      "A trolley is heading down a track towards five people who are tied up and cannot move. You are standing next to a lever that can divert the trolley onto another track, where only one person is tied up. If you don't pull the lever, the trolley will keep on its original track and kill five people; if you pull it, the five will be saved, but the one on the other track will be killed.",
    ],
    question: "Is it right to pull the lever?",
  },
  "mary-and-color-red": {
    title: "Mary & the Color Red",
    description: [
      "Mary is a brilliant scientist who has been confined to a black-and-white room her entire life. She has access to all the scientific information about color. She knows everything about the wavelengths of light, the physiology of the eyes, and the brain processes involved in color vision. However, Mary has never seen color herself; she has only experienced the world in black, white, and shades of gray.",
      "One day, Mary is released from her black-and-white room and sees a red apple for the first time.",
    ],
    question:
      "Does Mary learn something new about the color red when she sees the apple?",
  },
  "ship-of-theseus": {
    title: "The Ship of Theseus",
    description: [
      "Theseus returned to Athens in a large ship with 30 oars. To honor the hero, the city residents preserved his ship.",
      "Over time, boards and other elements began to rot, so they were replaced with parts that were identical in function and appearance. Eventually, every part of the ship was replaced, from sails to oars. Athenians still came to admire the hero's ship.",
    ],
    question: "But is this the same ship that Theseus returned in?",
  },
  "deceptive-demon": {
    title: "The Deceiving Demon",
    description: [
      `From your earliest memory, you have been under the control of a malicious demon who has deceived you into perceiving this "reality." The sky, the air, the earth, colors, shapes, sounds, animals, people, and all external things are merely the delusions of dreams the demon has devised. Even your body -- your hands, eyes, flesh, blood, and senses -- are only impressions conjured by the demon.`,
    ],
    question: "Is it possible that something like this is true?",
  },
  "sorites-paradox": {
    title: "The Sorites Paradox",
    description: [
      `You have a heap of ten thousand grains of sand, from which you remove one grain. You continue removing grains of sand, one by one, until you only have one grain remaining.`,
      `Is the heap still a "heap"? If not, when precisely did it change?`,
    ],
    question: `Can the removal of a single grain of sand turn a heap into a non-heap?`,
  },
};

export default experimentData;
