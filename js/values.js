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
];

var ghosts = [
    {
        key: "spirit",
        name: "Spirit",
        evidence: [
            "spirit_box",
            "fingerprints",
            "ghost_writing"
        ],
        description: "A Spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.",
        strengths: "None. The Spirit has no unique powers, making it easier to survive but harder to identify.",
        weaknesses: "Using Smudge Sticks on a Spirit will stop it attacking for twice as long as other Ghosts."
    },
    {
        key: "wraith",
        name: "Wraith",
        evidence: [
            "fingerprints",
            "freezing_temperatures",
            "spirit_box"
        ],
        description: "A Wraith is one of the most dangerous Ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.",
        strengths: "Wraiths almost never touch the ground, meaning it can't be tracked by footsteps. It can travel through walls and doors without opening them, and will not leave footprints on the ground.",
        weaknesses: "Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking."
    },
    {
        key: "phantom",
        name: "Phantom",
        evidence: [
            "emf_level_5",
            "ghost_orb",
            "freezing_temperatures"
        ],
        description: "A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.",
        strengths: "Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.",
        weaknesses: "Taking a photo of the Phantom will make it temporarily disappear. The Photo Camera will make it disappear, but it will not stop a Hunt."
    },
    {
        key: "poltergeist",
        name: "Poltergeist",
        evidence: [
            "spirit_box",
            "fingerprints",
            "ghost_orb"
        ],
        description: "One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into it's victims.",
        strengths: "A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.",
        weaknesses: "A Poltergeist is almost ineffective in an empty room."
    },
    {
        key: "banshee",
        name: "Banshee",
        evidence: [
            "emf_level_5",
            "fingerprints",
            "freezing_temperatures"
        ],
        description: "The Banshee is a natural hunter and will not be picky with who it attacks. It is also known to stalk its prey one at a time until its ready to go in for the kill.",
        strengths: "A Banshee will focus on one player at a time until it kills them.",
        weaknesses: "Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it."
    },
    {
        key: "jinn",
        name: "Jinn",
        evidence: [
            "spirit_box",
            "ghost_orb",
            "emf_level_5"
        ],
        description: "A Jinn is a territorial ghost that will attack when it feels threatened. It can also travel at very high speeds.",
        strengths: "If its victim is far away, a Jinn will travel at a faster speed than normal.",
        weaknesses: "Turning off the locations power source will prevent the Jinn from using its ability."
    },
    {
        key: "mare",
        name: "Mare",
        evidence: [
            "spirit_box",
            "ghost_orb",
            "freezing_temperatures"
        ],
        description: "A Mare is the source of all nightmares, which makes it most powerful in the dark.",
        strengths: "A Mare will have an increased chance to attack in the dark.",
        weaknesses: "Turning the lights on around the Mare will lower its chance to attack."
    },
    {
        key: "revenant",
        name: "Revenant",
        evidence: [
            "emf_level_5",
            "fingerprints",
            "ghost_writing"
        ],
        description: "A Revenant is a slow but violent ghost that will attack its victims indiscriminately. Additionally, it has been rumored to travel at alarmingly high speeds when hunting.",
        strengths: "When hunting a victim, a Revenant will travel at a significantly faster speed.",
        weaknesses: "Hiding from a Revenant will cause it to move very slowly."
    },
    {
        key: "shade",
        name: "Shade",
        evidence: [
            "emf_level_5",
            "ghost_orb",
            "ghost_writing"
        ],
        description: "A Shade is known to be a shy ghost and evidence suggests that it will tend to stop all paranormal activity if there are multiple people in the vicinity.",
        strengths: "Being shy means a Shade can be harder to find than other ghosts.",
        weaknesses: "If there are multiple people nearby a Shade, the ghost will not enter hunting mode."
    },
    {
        key: "demon",
        name: "Demon",
        evidence: [
            "spirit_box",
            "ghost_writing",
            "freezing_temperatures"
        ],
        description: "A Demon is one of the worst ghosts your can encounter in Phasmophobia and it is known to attack its victims without a reason.",
        strengths: "Demons will attack more often than any other ghost.",
        weaknesses: "Asking a Demon successful questions on the Ouija Board won't lower the users sanity."
    },
    {
        key: "yurei",
        name: "Yurei",
        evidence: [
            "ghost_orb",
            "ghost_writing",
            "freezing_temperatures"
        ],
        description: "A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
        strengths: "Yurei's tend to have a stronger effect on people's sanity.",
        weaknesses: "Smudging the Yurei's room will cause it to not wander around the location for a long time."
    },
    {
        key: "oni",
        name: "Oni",
        evidence: [
            "emf_level_5",
            "spirit_box",
            "ghost_writing"
        ],
        description: "Oni, which are a cousin to the Demon, possess extreme strength and are known to become much more active around their prey.",
        strengths: "Oni are much more active when people are nearby and have been seen to move objects at great speed.",
        weaknesses: "Being more active will make the Oni easier to find and identify."
    },
];

