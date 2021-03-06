[
  {
    _id: "dwarfRace",
    index: 1,
    name: "Dwarf",
    speed: 25,
    statsBonus: {
      statIncrease: [0, 0, 2, 0, 0, 0],
      desc: ["Your Constitution score increases by 2."]
    },
    genericTraits: [
      {
        alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order."
      },
      {
        age: "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years."
      },
      {
        size: "Medium"
      },
      {
        sizeDesc: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
      },
      {
        languageDesc: "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
      }
    ],

    startingProfs: [
      {
        name: "Battleaxes"
      },
      {
        name: "Handaxes"
      },
      {
        name: "Light hammers"
      },
      {
        name: "Warhammers"
      },
      {
        from: [
          {
            name: "Smith's tools"
          },
          {
            name: "Brewer's supplies"
          },
          {
            name: "Mason's tools"
          }
        ],
        type: "proficiency",
        choose: 1
      }
    ],

    racialTraits: [
      {
        name: "Darkvision (Dwarf)",

        desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
      },
      {
        name: "Dwarven Resilience",

        desc: "You have advantage on saving throws against poison, and you have resistance against poison damage."
      },
      {
        name: "Stonecunning",

        desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
      }
    ],
    subraces: [
      {
        name: "Hill Dwarf",

        desc: "As a hill dwarf, you have keen senses, deep intuition,and remarkable resilience.",

        traits: [
          {
            name: "Dwarven Toughness",
            desc: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 0, 0, 1, 0],
          desc: ["Your Wisdom score increases by 1."]
        }
      },
      {
        name: "Mountain Dwarf",

        desc: " As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration.",

        traits: [
          {
            name: "Dwarven Armor Training",
            desc: "You have proficiency with light and medium armor"
          }
        ],
        statsBonus: {
          statIncrease: [1, 0, 0, 0, 0, 0],
          desc: ["Your Strength score increases by 1."]
        }
      }
    ]
  },
  {
    _id: "elfRace",
    index: 2,
    name: "Elf",
    speed: 30,
    statsBonus: {
      statIncrease: [0, 2, 0, 0, 0, 0],
      desc: ["Your Dexterity score increases by 2."]
    },
    genericTraits: [
      {
        alignment: "Elves love freedom, variety, and self expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not."
      },
      {
        age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
      },
      {
        size: "Medium."
      },
      {
        sizeDesc: "Elves range from under 5 to over 6 feet tall and have slender builds."
      },
      {
        languageDesc: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
      }
    ],
    startingProfs: [
      {
        name: "Keen Senses",
        desc: "You have proficiency in the Perception skill."
      }
    ],

    racialTraits: [
      {
        name: "Darkvision (Elf)",
        desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
      },
      {
        name: "Fey Ancestry",
        desc: "You have advantage on saving throws against being charmed and magic can't put you to sleep."
      },
      {
        name: "Trance",
        desc: "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
      }
    ],
    subraces: [
      {
        name: "High Elf",
        desc: "As a high elf, you have a keen mind and a mastery of at least the basics of magic.",
        traits: [
          {
            name: "Elf Weapon Training",
            desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
          },
          {
            name: "Cantrip",
            desc: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
          },
          {
            name: "Extra Language",
            desc: "You can speak, read, and write one extra language of your choice."
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 0, 1, 0, 0],
          desc: ["Your Intelligence score increases by 1."]
        }
      },
      {
        name: "Wood Elf",
        desc: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.",
        traits: [
          {
            name: "Elf Weapon Training",
            desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
          },
          {
            name: "Fleet of Foot",
            desc: "Your base walking speed increases to 35 feet"
          },
          {
            name: "Mask of the Wild",
            desc: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist and other natural phenomena."
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 0, 0, 1, 0],
          desc: ["Your Wisdom score increases by 1."]
        }
      },
      {
        name: "Dark Elf (Drow)",
        desc: "Descended from an earlier subrace of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves, the drow have black skin that resembles polished obsidian and stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than most elves.",

        traits: [
          {
            name: "Drow Weapon Training",
            desc: "You have proficiency with the rapiers, shortswords, and hand crossbows."
          },
          {
            name: "Superior Darkvison",
            desc: "Your darkvision has a radius of 120 feet."
          },
          {
            name: "Sunlight Sensitivity",
            desc: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
          },
          {
            name: "Drow Magic",
            desc: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spell casting ability for these spells."
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 0, 0, 0, 1],
          desc: ["Your Charisma score increases by 1."]
        }
      }
    ]
  },
  {
    _id: "halflingRace",
    index: 3,
    name: "Halfling",
    speed: 25,
    statsBonus: {
      statIncrease: [0, 2, 0, 0, 0, 0],
      desc: ["Your Dexterity score increases by 2"]
    },
    genericTraits: [
      {
        alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways."
      },
      {
        age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century."
      },
      {
        size: "Small"
      },
      {
        sizeDesc: "Halflings average about 3 feet tall and weigh about 40 pounds."
      },
      {
        languageDesc: "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling."
      }
    ],
    startingProfs: [],

    racialTraits: [
      {
        name: "Lucky",
        desc: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
      },
      {
        name: "Brave",
        desc: "You have advantage on saving throws against being frightened."
      },
      {
        name: "Halfling Nimbleness",
        desc: "You can move through the space of any creature that is of a size larger than yours."
      }
    ],
    subraces: [
      {
        name: "Lightfoot",
        desc: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.",
        traits: [
          {
            name: "Naturally Stealthy",
            desc: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 0, 0, 0, 1]
        }
      },
      {
        name: "Stout",
        desc: "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood",
        traits: [
          {
            name: "Stout Resilience",
            desc: "You have advantage on saving throws against poison, and you have resistance against poison damage"
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 1, 0, 0, 0]
        }
      }
    ]
  },
  {
    _id: "humanRace",
    index: 4,
    name: "Human",
    speed: 30,
    statsBonus: {
      statIncrease: [1, 1, 1, 1, 1, 1],
      desc: ["Your ability scores each increase by 1"]
    },
    genericTraits: [
      {
        alignment: "Humans tend toward no particular alignment. The best and the worst are found among them."
      },
      {
        age: "Humans reach adulthood in their late teens and live less than a century."
      },
      {
        size: "Medium"
      },
      {
        sizeDesc: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall."
      },
      {
        languageDesc: "You can speak,read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with,including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."
      }
    ],
    startingProfs: [],
    racialTraits: [],
    subraces: []
  },
  {
    _id: "dragonbornRace",
    index: 5,
    name: "Dragonborn",
    speed: 30,
    statsBonus: {
      statIncrease: [2, 0, 0, 0, 0, 1],
      desc: [""]
    },
    genericTraits: [
      {
        alignment: "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains."
      },
      {
        age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80."
      },
      {
        size: "Medium"
      },
      {
        sizeDesc: "Dragonborn are taller and heavier than humans, standing w ell over 6 feet tall and averaging almost 250 pounds."
      },
      {
        languageDesc: "You can speak,read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants."
      }
    ],
    startingProfs: [],
    racialTraits: [
      {
        name: "Draconic Ancestry",
        desc: "You have draconic ancestry. Choose one type of Dragon from the Draconic Ancestry table. Your breath weapon and are determined by the dragon type, as shown in the table",

        name: "Breath Weapon",
        desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size,shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th  level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.",

        name: "Damage Resistance",
        desc: "You have resistance to the damage type associated with your draconic ancestry",

        draconicAncestryTable: {
          Black: {
            type: "Acid",
            breathWeapon: "5 by 30 ft. line (Dex. save)"
          },
          Blue: {
            type: "Lightning",
            breathWeapon: "5 by 30 ft. line (Dex. save)"
          },
          Brass: {
            type: "Fire",
            breathWeapon: "5 by 30 ft. line (Dex. save)"
          },
          Bronze: {
            type: "Lightning",
            breathWeapon: "5 by 30 ft. line (Dex. save)"
          },
          Copper: {
            type: "Acid",
            breathWeapon: "5 by 30 ft. line (Dex. save)"
          },
          Gold: {
            type: "Fire",
            breathWeapon: "15 ft. cone (Dex. save)"
          },
          Green: {
            type: "Poison",
            breathWeapon: "15 ft. cone (Con. save)"
          },
          Red: {
            type: "Fire",
            breathWeapon: "15 ft. cone (Dex. save)"
          },
          Silver: {
            type: "Cold",
            breathWeapon: "15 ft. cone (Con. save)"
          },
          White: {
            type: "Cold",
            breathWeapon: "15 ft. cone (Con. save)"
          }
        }
      }
    ],
    subraces: []
  },
  {
    _id: "gnomeRace",
    index: 6,
    name: "Gnome",
    speed: 25,
    statsBonus: {
      statIncrease: [0, 0, 0, 2, 0, 0],
      desc: [""]
    },
    genericTraits: [
      {
        alignment: "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those w ho tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious."
      },
      {
        age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years."
      },
      {
        size: "Small"
      },
      {
        sizeDesc: "Gnomes are between 3 and 4 feet tall and average about 40 pounds."
      },
      {
        languageDesc: "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world."
      }
    ],
    startingProfs: [],
    racialTraits: [
      {
        name: "Darkvision",
        desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet o f you as if it w ere bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      },
      {
        name: "Gnome Cunning",
        desc: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      }
    ],
    subraces: [
      {
        name: "Forest Gnome",
        desc: "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.",
        traits: [
          {
            name: "Natural Illusionist",
            desc: "You know the minor illusion cantrip. Intelligence is your spell casting ability for it."
          },
          {
            name: "Speak with Small Beasts",
            desc: "Through sounds and gestures, you can communicate simple ideals with Small or small beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
          }
        ],
        statsBonus: {
          statIncrease: [0, 1, 0, 0, 0, 0],
          desc: "Your Dexterity score increases by 1."
        }
      },
      {
        name: "Rock Gnome",
        desc: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes.",
        traits: [
          {
            name: "Artificer's Lore.",
            desc: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
          },
          {
            tinkerOptions: {
              name: "Tinker",
              desc: "You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth o f materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:",

              ClockworkToy: "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each o f your turns in a random direction. It makes noises as appropriate to the creature it represents.",

              FireStarter: "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.",

              MusicBox: "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed."
            }
          }
        ],
        statsBonus: {
          statIncrease: [0, 0, 1, 0, 0, 0],
          desc: ["Your ability scores each increase by 1"]
        }
      }
    ]
  },
  {
    _id: "halfElfRace",
    index: 7,
    name: "Half-Elf",
    speed: 30,
    statsBonus: {
      statIncrease: [0, 0, 0, 0, 0, 2],
      desc: ["Your Charisma score increases by 2, and two other ability scores of your choice increase by 1."]
    },
    genericTraits: [
      {
        alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love o f leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable."
      },
      {
        age: "Half-elves mature at the same rate humans do and reach adulthood around the age o f 20. They live much longer than humans, however, often exceeding 180 years."
      },
      {
        size: "Medium"
      },
      {
        sizeDesc: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall."
      },
      {
        languageDesc: "You can speak, read, and write Common, Elvish, and one extra language of your choice."
      }
    ],
    startingProfs: [],
    racialTraits: [
      {
        name: "Darkvision", 
        desc: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet o f you as if it w ere bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades o f gray."
      },
      {
        name: "Fey Ancestry",
        desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
      },
      {
        name: "Skill Versatility",
        desc: "You gain proficiency in two skills of your choice."
      },
    ],
    subraces: []
  },
  {
    _id: "halfOrcRace",
    index: 8,
    name: "Half-Orc",
    speed: 30,
    statsBonus: {
      statIncrease: [2, 0, 1, 0, 0, 0],
      desc: ["Your Strength score increases by 2, and your Constitution score increases by 1."]
    },
    genericTraits: [
      {
        alignment: "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil."
      },
      {
        age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years."
      },
      {
        size: "Medium"
      },
      {
        sizeDesc: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall."
      },
      {
        languageDesc: "You can speak, read, and write Common and Orc . Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script."
      }
    ],
    startingProfs: [
      {
        name: "Menacing",
        desc: "You gain proficiency in the Intimidation skill"
      }
    ],
    racialTraits: [
      {
        name: "Relentless Endurance",
        desc: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
      },
      {
        name: "Savage Attacks",
        desc: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
      }
    ],
    subraces: []
  },
  {
    _id: "tieflingRace",
    index: 9,
    name: "Tiefling",
    speed: 30,
    statsBonus: {
      statIncrease: [0, 0, 0, 1, 0, 2],
      desc: ["Your Intelligence score increases by 1, and your Charisma score increases by 2."]
    },
    genericTraits: [
      {
        alignment: "Tieflings might not have an innate tendency toward evil, but many o f them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment."
      },
      {
        age: "Tieflings mature at the same rate as humans but live a few years longer."
      },
      {
        size: "Medium"
      },
      {
        sizeDesc: "Tieflings are about the same size and build as humans."
      },
      {
        languageDesc: "You can speak, read, and write Common and Infernal."
      }
    ],
    startingProfs: [],
    racialTraits: [
      {
        name: "Darkvision",
        desc: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
      },
      {
        name: "Hellish Resistance",
        desc: "You have resistance to fire damage"
      },
      {
        name: "Infernal Legacy",
        desc: "You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells."
      }  
    ],
    subraces: []
  }
];
