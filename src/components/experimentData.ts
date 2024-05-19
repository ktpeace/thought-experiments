export interface Experiment {
  title: string;
  description: string[];
  question: string;
}

const experimentData: Record<string, Experiment> = {
  "trolley-problem": {
    title: "The Trolley Problem",
    description: [
      "The Trolley Problem is a famous dilemma in moral philosophy. Imagine a trolley is heading down a track towards five people who are tied up and cannot move. You are standing next to a lever that can divert the trolley onto another track, where only one person is tied up.",
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
      "Does Mary learn something new when she experiences the color red directly?",
  },
  "ship-of-theseus": {
    title: "The Ship of Theseus",
    description: [
      "The Ship of Theseus is a thought experiment that raises questions about the nature of identity and change. Imagine a ship that belongs to the hero Theseus. Over time, the ship's wooden parts begin to rot and are replaced with new, identical parts.",
      "Eventually, every part of the ship has been replaced. The question arises: Is this still the same ship that Theseus sailed, or is it a completely different ship because none of the original parts remain?",
    ],
    question:
      "What defines the identity of an object? Is it the continuity of its components, or the continuity of its form and function?",
  },
};

export default experimentData;
