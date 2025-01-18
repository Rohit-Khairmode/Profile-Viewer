import { Profile } from "./types";

export const profiles: Profile[] = [
  {
    id: 0,
    name: "Lord Shiva",
    description:
      "One of the principal deities of Hinduism, known as the Destroyer in the Holy Trinity. A symbol of meditation, wisdom, and cosmic energy.",
    image:
      "https://th.bing.com/th/id/OIP.X7ST3n0Amo2-w3s5FP4C7AHaJQ?rs=1&pid=ImgDetMain",
    contacts: {
      phone: 0,
      email: "shiva@kailash.com",
      address: "Mount Kailash, Himalayas",
    },
    coordinates: {
      latitude: 31.0675,
      longitude: 81.3095,
    },
    hobbies: ["Meditation", "Dance (Tandava)", "Cosmic Energy"],
    achievements: [
      "Consumed the deadly poison Halahala during the Samudra Manthan to save the universe.",
      "Known as the Adiyogi, the first yogi, and teacher of yoga to mankind.",
      "Performed the Tandava, the cosmic dance symbolizing creation, preservation, and destruction.",
      "Granted boons to countless devotees, including Ravana and Arjuna, showcasing his compassion.",
      "Known for his simplicity, renunciation, and dwelling in Mount Kailash.",
      "Unified the Trimurti (Brahma, Vishnu, and Shiva), representing supreme cosmic power.",
      "Revered across cultures and ages as a symbol of meditation, transformation, and divine wisdom.",
    ],
    socialMedia: [
      { platform: "facebook", url: "https://example.com/lordshiva" },
      { platform: "instagram", url: "https://divineteachings.shiva" },
    ],
  },
  {
    id: 1,
    name: "Cristiano Ronaldo",
    description:
      "Portuguese professional footballer known for his exceptional skill, speed, and dedication.",
    image:
      "https://i.dailymail.co.uk/i/pix/2016/03/09/12/31E3788800000578-3483891-image-a-45_1457528279946.jpg",
    contacts: {
      phone: 1234567890,
      email: "ronaldo@realmadrid.com",
      address: "Madeira, Portugal",
    },
    coordinates: {
      latitude: 32.666,
      longitude: -16.924,
    },
    hobbies: ["Football", "Fitness", "Philanthropy"],
    achievements: [
      "Won 5 Ballon d'Or awards, showcasing his dominance in global football.",
      "Top scorer in UEFA Champions League history with over 130 goals.",
      "Led Portugal to victory in the 2016 UEFA Euro, their first major international title.",
      "Won league titles in England, Spain, and Italy, cementing his legacy in top leagues.",
      "Holds the record for most appearances and goals in the UEFA Champions League.",
      "First player to score 800 career goals in professional football.",
      "Renowned for his philanthropic efforts, including significant donations to hospitals and disaster relief.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/cristiano" },
      { platform: "Twitter", url: "https://twitter.com/cristiano" },
      { platform: "Facebook", url: "https://facebook.com/cristiano" },
    ],
  },
  {
    id: 2,
    name: "Rohit Sharma",
    description:
      "Indian cricketer and captain known for his explosive batting and leadership.",
    image:
      "http://ts1.mm.bing.net/th?id=OIP.vupzB_EvidRn9bBJfmUbqAHaEK&pid=15.1",
    contacts: {
      phone: 9876543210,
      email: "rohit@bcci.com",
      address: "Mumbai, India",
    },
    coordinates: {
      latitude: 19.076,
      longitude: 72.8777,
    },
    hobbies: ["Cricket", "Travel", "Wildlife Conservation"],
    achievements: [
      "First player in cricket history to score three double centuries in ODIs.",
      "Captain of the Mumbai Indians, winning 5 IPL titles under his leadership.",
      "Holds the record for the highest individual score in ODI cricket, scoring 264 runs.",
      "Led India to victory in the 2018 Asia Cup and multiple bilateral series.",
      "Only batsman to hit five centuries in a single ICC World Cup (2019).",
      "Received the Rajiv Gandhi Khel Ratna award in 2020 for outstanding achievements in sports.",
      "Known for his calm captaincy and ability to win pressure games.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/rohitsharma45" },
      { platform: "Twitter", url: "https://twitter.com/ImRo45" },
      { platform: "Facebook", url: "https://facebook.com/RohitSharma45" },
    ],
  },
  {
    id: 3,
    name: "Karn (Mahabharat)",
    description:
      "A legendary warrior known for his unwavering loyalty and incredible archery skills.",
    image:
      "https://th.bing.com/th/id/OIP.17suR-FKN9y3G1c6HS_qAQHaEW?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    contacts: {
      phone: 0,
      email: "karn@mythology.com",
      address: "Anga Kingdom, Ancient India",
    },
    coordinates: {
      latitude: 25.611,
      longitude: 85.141,
    },
    hobbies: ["Archery", "Charity", "Philosophy"],
    achievements: [
      "Crowned the King of Anga by Duryodhana for his unmatched valor and skill.",
      "Mastered celestial weapons under the tutelage of Lord Parashurama.",
      "Demonstrated unmatched bravery in the Kurukshetra War, defending his allies fiercely.",
      "Known for his incredible generosity, often referred to as 'Daanveer Karna.'",
      "Fought against formidable warriors like Arjuna, showcasing his strategic brilliance.",
      "Sacrificed his kavach (armor) and kundal (earrings) to Lord Indra, an act of selflessness.",
      "Remembered as a tragic hero who upheld loyalty and dharma, even against adversity.",
    ],
    socialMedia: [
      { platform: "Mythology Forums", url: "https://example.com/karn" },
    ],
  },
  {
    id: 4,
    name: "Thor",
    description:
      "The Norse God of Thunder, protector of Asgard, and wielder of Mjölnir.",
    image:
      "https://th.bing.com/th/id/OIP.MwYm0XyDtWBfeCqkchtKvAHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    contacts: {
      phone: 0,
      email: "thor@asgard.com",
      address: "Asgard, Nine Realms",
    },
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    hobbies: ["Combat", "Adventuring", "Protecting Realms"],
    achievements: [
      "Wielded the enchanted hammer Mjölnir, a weapon of immense power.",
      "Defeated numerous enemies of Asgard, including Frost Giants and Dark Elves.",
      "Played a pivotal role in protecting the Nine Realms from existential threats.",
      "Fought alongside the Avengers to defeat Thanos and reverse the Blip.",
      "Became worthy of Mjölnir after proving his humility and strength of character.",
      "Known for his strength, courage, and unwavering dedication to Asgard.",
      "Inspired countless legends in Norse mythology and beyond.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/thor" },
      { platform: "Twitter", url: "https://twitter.com/thor" },
      { platform: "Asgardian Blog", url: "https://asgard.thor" },
    ],
  },
  {
    id: 5,
    name: "Captain America",
    description: "The first Avenger, a symbol of hope, courage, and justice.",
    image:
      "https://images.hdqwalls.com/wallpapers/avengers-4-captain-america-4k-5r.jpg",
    contacts: {
      phone: 0,
      email: "cap@avengers.com",
      address: "Brooklyn, New York, USA",
    },
    coordinates: {
      latitude: 40.6782,
      longitude: -73.9442,
    },
    hobbies: ["Leadership", "Strategy", "Training"],
    achievements: [
      "Led the Avengers as a symbol of hope and resilience during critical battles.",
      "Wielded Mjölnir and proved his worthiness during the fight against Thanos.",
      "Defended freedom and justice as a super-soldier in World War II.",
      "Sacrificed himself to crash a Hydra plane and protect millions of lives.",
      "Fought relentlessly for the good of humanity, even when outmatched.",
      "Passed on the legacy of Captain America to Sam Wilson with dignity.",
      "Iconic for his unyielding sense of duty and moral integrity.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/captainamerica" },
      { platform: "Twitter", url: "https://twitter.com/captainamerica" },
      { platform: "SHIELD Network", url: "https://shield.gov/captainamerica" },
    ],
  },
  {
    id: 6,
    name: "Logan",
    description:
      "A mutant with extraordinary regenerative abilities and adamantium claws.",
    image: "https://images.hdqwalls.com/wallpapers/logan-2017-movie-qhd.jpg",
    contacts: {
      phone: 0,
      email: "logan@xmen.com",
      address: "Alberta, Canada",
    },
    coordinates: {
      latitude: 53.9333,
      longitude: -116.5765,
    },
    hobbies: ["Exploration", "Survival", "Fighting"],
    achievements: [
      "Survived decades as a mutant with advanced healing abilities and adamantium claws.",
      "Led the X-Men on numerous missions to save humanity and mutantkind.",
      "Sacrificed himself to protect a young mutant (Laura) and secure a better future.",
      "Defeated iconic villains like Magneto and Sabretooth in intense battles.",
      "Known for his indomitable will and combat expertise across generations.",
      "Served in wars, including World War II, showcasing his unbreakable spirit.",
      "Became a symbol of redemption and leadership among the X-Men.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/logan" },
      { platform: "Twitter", url: "https://twitter.com/wolverine" },
      { platform: "Mutant Forums", url: "https://mutants.wolverine" },
    ],
  },
  {
    id: 7,
    name: "Lucifer",
    description:
      "The Devil himself, known for his charm, wit, and rebellion against Heaven.",
    image:
      "https://th.bing.com/th/id/OIP.qhksOKmISfVHb3iWkz3efAHaEu?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    contacts: {
      phone: 0,
      email: "lucifer@hell.com",
      address: "Los Angeles, USA",
    },
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    hobbies: ["Music", "Solving Crimes", "Charismatic Debates"],
    achievements: [
      "Ruled Hell as the Devil, maintaining balance between Heaven and Hell.",
      "Abandoned his throne to explore human emotions and desires on Earth.",
      "Assisted in solving complex murder cases using his intellect and charm.",
      "Faced celestial adversaries, proving his ability to protect those he loved.",
      "Redeemed himself by embracing humanity and rejecting his darker nature.",
      "Became a loyal friend and ally to humanity despite his divine origins.",
      "Served as a bridge between the divine and mortal worlds.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/lucifer" },
      { platform: "Twitter", url: "https://twitter.com/lucifer" },
      { platform: "Hell Blog", url: "https://hell.lucifer" },
    ],
  },
  {
    id: 8,
    name: "Thomas Shelby",
    description: "The cunning and ambitious leader of the Peaky Blinders gang.",
    image:
      "https://th.bing.com/th/id/OIP.QW0rgba0QuMkE5PBgb9whQHaI3?w=193&h=231&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    contacts: {
      phone: 0,
      email: "shelby@peakyblinders.com",
      address: "Birmingham, England",
    },
    coordinates: {
      latitude: 52.4862,
      longitude: -1.8904,
    },
    hobbies: ["Business", "Horse Racing", "Strategy"],
    achievements: [
      "Built a criminal empire in Birmingham during the interwar period.",
      "Strategically defeated rival gangs and established political connections.",
      "Became a Member of Parliament, influencing decisions for personal and community gain.",
      "Managed to outmaneuver powerful adversaries like Luca Changretta and Oswald Mosley.",
      "Maintained family loyalty while expanding the Shelby business empire.",
      "Displayed exceptional leadership, intelligence, and resilience under pressure.",
      "Widely respected for his sharp wit and calculated decision-making.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/thomasshelby" },
      { platform: "Twitter", url: "https://twitter.com/thomasshelby" },
      { platform: "Shelby Blog", url: "https://peakyblinders.shelby" },
    ],
  },
  {
    id: 9,
    name: "Bjorn",
    description: "Son of Ragnar Lothbrok, a great Viking warrior and leader.",
    image:
      "https://th.bing.com/th/id/OIP.gPHjkKjItupZ33lVodX5_AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    contacts: {
      phone: 0,
      email: "bjorn@vikings.com",
      address: "Kattegat, Scandinavia",
    },
    coordinates: {
      latitude: 58.995,
      longitude: 10.58,
    },
    hobbies: ["Exploration", "Battle", "Leadership"],
    achievements: [
      "Earned the title 'Bjorn Ironside' for his legendary strength and resilience.",
      "Led Viking raids across Europe, expanding Norse influence and wealth.",
      "Ruled as a powerful and wise king of Kattegat, earning loyalty from his people.",
      "Defeated numerous adversaries, including kings and legendary warriors.",
      "Embarked on dangerous expeditions, discovering new lands and riches.",
      "Renowned for his bravery and strategic brilliance in battles.",
      "Remembered as a pivotal figure in Viking history and lore.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/bjornironside" },
      { platform: "Twitter", url: "https://twitter.com/bjornironside" },
      { platform: "Viking Blog", url: "https://vikings.bjorn" },
    ],
  },
  {
    id: 10,
    name: "Rollo",
    description:
      "Brother of Ragnar Lothbrok, a strong and ambitious Viking warrior.",
    image:
      "https://mythologian.net/wp-content/uploads/2017/01/rollo-vikings-duke-of-normandy.jpg",
    contacts: {
      phone: 0,
      email: "rollo@vikings.com",
      address: "Normandy, France",
    },
    coordinates: {
      latitude: 49.442,
      longitude: 1.102,
    },
    hobbies: ["Fighting", "Raiding", "Building Alliances"],
    achievements: [
      "Fought valiantly alongside Ragnar Lothbrok in early Viking raids.",
      "Served as the Duke of Normandy, establishing a lasting legacy in France.",
      "Struggled with identity and loyalty, balancing family ties and personal ambitions.",
      "Showed exceptional bravery and skill in battles against the Franks.",
      "Played a key role in expanding Viking influence in continental Europe.",
      "Defied expectations, rising from the shadow of his brother Ragnar.",
      "Became a symbol of ambition, strength, and the complexities of leadership.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/rolloviking" },
      { platform: "Twitter", url: "https://twitter.com/rolloviking" },
      { platform: "Viking Blog", url: "https://vikings.rollo" },
    ],
  },
  {
    id: 11,
    name: "Ragnar",
    description:
      "Legendary Norse hero and king, known for his sagacity and adventurous spirit.",
    image:
      "https://th.bing.com/th/id/OIP.n6_F1nX0gMK_eSIau3ssAgHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    contacts: {
      phone: 0,
      email: "ragnar@vikings.com",
      address: "Kattegat, Scandinavia",
    },
    coordinates: {
      latitude: 58.995,
      longitude: 10.58,
    },
    hobbies: ["Exploration", "Strategy", "Legacy Building"],
    achievements: [
      "Led numerous Viking raids, becoming a legendary Norse hero and explorer.",
      "Founded Kattegat, a central hub for Viking trade and culture.",
      "Ambitiously sought to explore the West, eventually discovering new lands.",
      "Overcame betrayal and adversity, showcasing resilience and adaptability.",
      "Defeated countless enemies, earning fame as a brilliant strategist and warrior.",
      "Inspired his people through his vision, courage, and relentless pursuit of glory.",
      "Left a lasting impact on Norse mythology and Viking history.",
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/ragnarlothbrok" },
      { platform: "Twitter", url: "https://twitter.com/ragnarlothbrok" },
      { platform: "Viking Blog", url: "https://vikings.ragnar" },
    ],
  },
  {
    id: 13,
    name: "Indrajith (Meghanada)",
    description:
      "A legendary warrior and son of Ravana, known for his valor, mastery of celestial weapons, and devotion to his father.",
    image:
      "https://i.pinimg.com/originals/b6/e2/4f/b6e24f7b22e81d08995cd68ee33aa7dc.jpg",
    contacts: {
      phone: 0,
      email: "indrajith@lankakingdom.com",
      address: "Lanka (Modern-day Sri Lanka)",
    },
    coordinates: {
      latitude: 7.8731,
      longitude: 80.7718,
    },
    hobbies: ["Warfare", "Mastery of Astras", "Devotion"],
    achievements: [
      "Possessed celestial weapons and unparalleled archery skills.",
      "Mastered divine knowledge and warfare under the guidance of great sages.",
      "Fought bravely in the Mahabharata, earning recognition as an unmatched warrior.",
      "Known for his unwavering loyalty to Duryodhana and adherence to dharma.",
      "Demonstrated extraordinary generosity, earning the title 'Daanveer Indrajith.'",
      "Immortalized in legends as a hero embodying skill, valor, and devotion.",
      "Inspired generations through his tales of courage and selflessness.",
    ],
    socialMedia: [
      { platform: "Mythology Forums", url: "https://example.com/indrajith" },
    ],
  },
];
export function getProfileById(id: number) {
  return profiles.find((profile) => profile.id === id);
}
