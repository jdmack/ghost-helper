var evidence_keys = [
    {
        key: "emf_level_5",
        name: "EMF Level 5"
    },       
    {
        key: "spirit_box",
        name: "Spirit Box"
    },
    {
        key: "fingerprints",
        name: "Fingerprints"
    },
    {
        key: "ghost_orb",
        name: "Ghost Orb"
    },
    {
        key: "ghost_writing",
        name: "Ghost Writing"
    },
    {
        key: "freezing_temperatures",
        name: "Freezing Temperatures"
    },
    {
        key: "dots_projector",
        name: "D.O.T.S Projector"
    }
];

var ghosts = [
    {
        key: "spirit",
        name: "Spirit",
        evidence: [
            "emf_level_5",
            "spirit_box",
            "ghost_writing"
        ],
        description: "Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.",
        strengths: "None.",
        weaknesses: "A Spirit can be temporarily stopped by burning Smudge Sticks near them."
    },
    {
        key: "wraith",
        name: "Wraith",
        evidence: [
            "emf_level_5",
            "spirit_box",
            "dots_projector"
        ],
        description: "Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.",
        strengths: "Wraiths almost never touch the ground, meaning it can't be tracked by footsteps.",
        weaknesses: "Wraiths have a toxic reaction to Salt."
    },
    {
        key: "phantom",
        name: "Phantom",
        evidence: [
            "spirit_box",
            "fingerprints",
            "dots_projector"
        ],
        description: "A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.",
        strengths: "Looking at a Phantom will drop your sanity considerably faster.",
        weaknesses: "Taking a photo of the Phantom will make it temporarily disappear."
    },
    {
        key: "poltergeist",
        name: "Poltergeist",
        evidence: [
            "spirit_box",
            "fingerprints",
            "ghost_writing"
        ],
        description: "One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.",
        strengths: "Poltergeists can throw multiple objects at once.",
        weaknesses: "With nothing to throw, Poltergeists become powerless."
    },
    {
        key: "banshee",
        name: "Banshee",
        evidence: [
            "fingerprints",
            "ghost_orb",
            "dots_projector"
        ],
        description: "The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.",
        strengths: "A Banshee will only target one person at a time.",
        weaknesses: "Banshees fear the Crucifix and will be less aggressive near one."
    },
    {
        key: "jinn",
        name: "Jinn",
        evidence: [
            "emf_level_5",
            "fingerprints",
            "freezing_temperatures"
        ],
        description: "A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.",
        strengths: "A Jinn will travel at a faster speed if its victim is far away.",
        weaknesses: "Turning off the location's power source will prevent the Jinn from using its ability."
    },
    {
        key: "mare",
        name: "Mare",
        evidence: [
            "spirit_box",
            "ghost_orb",
            "ghost_writing"
        ],
        description: "A Mare is the source of all nightmares, making it most powerful in the dark.",
        strengths: "A Mare will have an increased chance to attack in the dark.",
        weaknesses: "Turning the lights on around the Mare will lower its chance to attack."
    },
    {
        key: "revenant",
        name: "Revenant",
        evidence: [
            "ghost_orb",
            "ghost_writing",
            "freezing_temperatures"
        ],
        description: "A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving as they are slow while dormant: however, as soon as they hunt they can move incredibly fast.",
        strengths: "A Revenant will travel at a significantly faster speed when hunting their prey.",
        weaknesses: "Hiding from the Revenant will cause it to move very slowly."
    },
    {
        key: "shade",
        name: "Shade",
        evidence: [
            "emf_level_5",
            "ghost_writing",
            "freezing_temperatures"
        ],
        description: "A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.",
        strengths: "Shades are much harder to find.",
        weaknesses: "The ghost will not enter a hunt if there are multiple people nearby."
    },
    {
        key: "demon",
        name: "Demon",
        evidence: [
            "fingerprints",
            "ghost_writing",
            "freezing_temperatures"
        ],
        description: "Demons are the most aggressive ghosts we've ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt.",
        strengths: "Demons will initiate hunts more often than other ghosts.",
        weaknesses: "Demons will drain less of your sanity when you use a Cursed Possession."
    },
    {
        key: "yurei",
        name: "Yurei",
        evidence: [
            "ghost_orb",
            "freezing_temperatures",
            "dots_projector"
        ],
        description: "A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
        strengths: "Yureis have been known to have a stronger effect on people sanity.",
        weaknesses: "Smuding the Yurei's place of death will trap it temporarily, reducing how much it wanders."
    },
    {
        key: "oni",
        name: "Oni",
        evidence: [
            "emf_level_5",
            "freezing_temperatures",
            "dots_projector"
        ],
        description: "Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.",
        strengths: "Onis are more active when people are nearby and have been seen moving objects at great speed.",
        weaknesses: "Onis are very active, making them easier to find."
    },
    {
        key: "yokai",
        name: "Yokai",
        evidence: [
            "spirit_box",
            "ghost_orb",
            "dots_projector"
        ],
        description: "Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.",
        strengths: "Talking near a Yokai will anger it, increasing the chance of an attack.",
        weaknesses: "When hunting, a Yokai can only hear voices close to it."
    },
    {
        key: "hantu",
        name: "Hantu",
        evidence: [
            "fingerprints",
            "ghost_orb",
            "freezing_temperatures"
        ],
        description: "A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.",
        strengths: "Lower temperatures allow the Hantu to move at faster speeds.",
        weaknesses: "Hantus move slower in warmer areas."
    },
    {
        key: "goryo",
        name: "Goryo",
        evidence: [
            "emf_level_5",
            "fingerprints",
            "dots_projector"
        ],
        description: "When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.",
        strengths: "A Goryo will usually only show itself on camera if there are no people nearby.",
        weaknesses: "They are rarely seen far from their place of death."
    },
    {
        key: "myling",
        name: "Myling",
        evidence: [
            "emf_level_5",
            "fingerprints",
            "ghost_writing"
        ],
        description: "A Myling is a very vocal and active ghost. They are rumored to be quiet when hunting their prey.",
        strengths: "A Myling is known to be quieter when hunting.",
        weaknesses: "Mylings more frequently make paranormal sounds."
    },
    {
        key: "onryo",
        name: "Onryo",
        evidence: [
            "spirit_box",
            "ghost_orb",
            "freezing_temperatures"
        ],
        description: "The Onryo is often referred to as \"The Wrathful Spirit\". It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.",
        strengths: "Extinguishing a flame can cause an Onryo to attack.",
        weaknesses: "When threatened, this ghost will be less likely to hunt."
    },
    {
        key: "the_twins",
        name: "The Twins",
        evidence: [
            "emf_level_5",
            "spirit_box",
            "freezing_temperatures"
        ],
        description: "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
        strengths: "Either Twin can be angered and initiate an attack on their prey.",
        weaknesses: "The Twins will often interact with the environment at the same time."
    },
    {
        key: "raiju",
        name: "Raiju",
        evidence: [
            "emf_level_5",
            "ghost_orb",
            "dots_projector"
        ],
        description: "A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.",
        strengths: "A Raiju can siphon power from nearby electrical devices, making it move faster.",
        weaknesses: "Raiju are constantly disrupting electronic equipment when attacking, making it easier to track."
    },
    {
        key: "obake",
        name: "Obake",
        evidence: [
            "emf_level_5",
            "fingerprints",
            "ghost_orb"
        ],
        description: "Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.",
        strengths: "When interacting with the environment, an Obake will rarely leave a trace.",
        weaknesses: "Sometimes this ghost will shapeshift, leaving behind unique evidence."
    },
    {
        key: "the_mimic",
        name: "The Mimic",
        evidence: [
            "spirit_box",
            "fingerprints",
            "freezing_temperatures"
        ],
        description: "The Mimic is an elusive, mysterious copycat ghost that mirrors traits and behaviours from others, including other ghost types.",
        strengths: "We're unsure what this ghost is capable of. Be careful.",
        weaknesses: "Several reports have noted ghost orb sightings near mimics."
    }
];
























