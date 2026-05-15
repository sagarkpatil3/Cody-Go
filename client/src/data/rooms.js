export const rooms = {
  // ============================================
  // SANTOS MANUEL STUDENT UNION (SU)
  // ============================================
  SU: {
    buildingCode: "SU",
    buildingName: "Santos Manuel Student Union",
    floors: [
      {
        level: 1,
        label: "Level 1",
        rooms: [
          { id: "SU-106", number: "106", name: "Events Center", type: "event", searchTerms: ["events", "event center", "meetings"] },
          { id: "SU-107", number: "107", name: "Theater", type: "event", searchTerms: ["theater", "theatre", "shows"] },
          { id: "SU-108", number: "108", name: "Career Center", type: "service", searchTerms: ["career", "jobs", "internship", "resume"] },
          { id: "SU-112", number: "112", name: "Career Center Annex", type: "service", searchTerms: ["career"] },
          { id: "SU-114", number: "114", name: "Financial Literacy Center", type: "resource", searchTerms: ["financial", "money", "FLC", "financial literacy"] },
          { id: "SU-116", number: "116", name: "Adventure Center", type: "recreation", searchTerms: ["adventure", "outdoors", "camping", "hiking"] },
          { id: "SU-117", number: "117", name: "E-Sports Arena", type: "recreation", searchTerms: ["esports", "gaming", "games", "e-sports"] },
          { id: "SU-118", number: "118", name: "Basic Needs Center", type: "service", searchTerms: ["basic needs", "food", "pantry", "assistance"] },
          { id: "SU-121", number: "121", name: "Dining Area", type: "dining", searchTerms: ["food", "dining", "eat", "lunch"] },
          { id: "SU-LBY", number: "LBY", name: "Lobby", type: "common", searchTerms: ["lobby", "entrance", "info desk"] },
        ]
      },
      {
        level: 2,
        label: "Level 2",
        rooms: [
          { id: "SU-206", number: "206", name: "East Skybox", type: "event", searchTerms: ["skybox", "event", "meeting"] },
          { id: "SU-207", number: "207", name: "West Skybox", type: "event", searchTerms: ["skybox", "event", "meeting"] },
          { id: "SU-214", number: "214", name: "Meditation Room", type: "wellness", searchTerms: ["meditation", "quiet", "prayer", "reflect"] },
          { id: "SU-215", number: "215", name: "FourPlex A", type: "event", searchTerms: ["fourplex", "meeting room"] },
          { id: "SU-216", number: "216", name: "FourPlex B", type: "event", searchTerms: ["fourplex", "meeting room"] },
          { id: "SU-217", number: "217", name: "FourPlex C", type: "event", searchTerms: ["fourplex", "meeting room"] },
          { id: "SU-218", number: "218", name: "FourPlex D", type: "event", searchTerms: ["fourplex", "meeting room"] },
          { id: "SU-222", number: "222", name: "Student Affairs", type: "admin", searchTerms: ["student affairs", "dean", "student services"] },
          { id: "SU-223", number: "223", name: "Office of Black Student Success", type: "resource", searchTerms: ["black student success", "OBSS"] },
          { id: "SU-224", number: "224", name: "The Den", type: "dining", searchTerms: ["den", "food", "dining", "eat"] },
          { id: "SU-FYE", number: "FYE", name: "First Year Experience", type: "service", searchTerms: ["first year", "FYE", "new student"] },
        ]
      },
      {
        level: 3,
        label: "Level 3",
        rooms: [
          { id: "SU-300", number: "300", name: "Administrative Office", type: "admin", searchTerms: ["admin", "administration", "SMSU office"] },
          { id: "SU-ASI", number: "ASI", name: "Associated Students Inc.", type: "admin", searchTerms: ["ASI", "associated students", "student government"] },
          { id: "SU-OSE", number: "OSE", name: "Office of Student Engagement & Leadership", type: "service", searchTerms: ["student engagement", "leadership", "OSE", "clubs"] },
          { id: "SU-SCH", number: "SCH", name: "Scheduling Office", type: "admin", searchTerms: ["scheduling", "room booking", "reservations"] },
          { id: "SU-LL",  number: "LL",  name: "Leadership Lab", type: "resource", searchTerms: ["leadership lab", "study", "meeting"] },
          { id: "SU-331", number: "331", name: "Social Lounge (331-2F)", type: "common", searchTerms: ["lounge", "relax", "social"] },
          { id: "SU-330", number: "330S", name: "Student Chambers (330S)", type: "event", searchTerms: ["student chambers", "ASI meeting"] },
          { id: "SU-API", number: "API", name: "Asian & Pacific Islander Center", type: "resource", searchTerms: ["API", "asian", "pacific islander", "cultural center"] },
          { id: "SU-FPC", number: "FPC", name: "First Peoples Center", type: "resource", searchTerms: ["first peoples", "native", "indigenous", "FPC"] },
          { id: "SU-LC",  number: "LC",  name: "Latino Center", type: "resource", searchTerms: ["latino", "latinx", "hispanic", "cultural center"] },
          { id: "SU-OAR", number: "OAR", name: "Osher Adult Re-Entry Center", type: "resource", searchTerms: ["adult", "re-entry", "returning student", "OAR"] },
          { id: "SU-PASC",number: "PASC","name": "Pan-African Student Center", type: "resource", searchTerms: ["pan african", "PASC", "cultural center"] },
          { id: "SU-QTRC",number: "QTRC","name": "Queer & Transgender Resource Center", type: "resource", searchTerms: ["queer", "transgender", "LGBTQ", "QTRC"] },
          { id: "SU-USSC",number: "USSC","name": "Undocumented Student Success Center", type: "resource", searchTerms: ["undocumented", "DACA", "USSC"] },
          { id: "SU-WRC", number: "WRC", name: "Women's Resource Center", type: "resource", searchTerms: ["women", "WRC", "gender"] },
        ]
      }
    ]
  },

  // ============================================
  // SOCIAL & BEHAVIORAL SCIENCES (SB)
  // ============================================
  SB: {
    buildingCode: "SB",
    buildingName: "Social & Behavioral Sciences",
    floors: [
      {
        level: 0,
        label: "Basement",
        rooms: [
          { id: "SB-001", number: "001", name: "Room 001", type: "classroom", searchTerms: ["001"] },
          { id: "SB-003", number: "003", name: "Room 003", type: "classroom", searchTerms: ["003"] },
          { id: "SB-005", number: "005", name: "Room 005", type: "classroom", searchTerms: ["005"] },
          { id: "SB-009", number: "009", name: "Room 009", type: "classroom", searchTerms: ["009"] },
          { id: "SB-010", number: "010", name: "Room 010", type: "classroom", searchTerms: ["010"] },
          { id: "SB-011", number: "011", name: "Room 011", type: "classroom", searchTerms: ["011"] },
          { id: "SB-012", number: "012", name: "Room 012", type: "classroom", searchTerms: ["012"] },
          { id: "SB-013", number: "013", name: "Room 013", type: "classroom", searchTerms: ["013"] },
          { id: "SB-015", number: "015", name: "Room 015", type: "classroom", searchTerms: ["015"] },
          { id: "SB-016", number: "016", name: "Room 016", type: "classroom", searchTerms: ["016"] },
          { id: "SB-MR010", number: "MR010", name: "Mail Room", type: "service", searchTerms: ["mail", "mailroom"] },
          { id: "SB-S01", number: "S01", name: "Storage 01", type: "utility", searchTerms: ["storage"] },
        ]
      },
      {
        level: 1,
        label: "First Floor",
        rooms: [
          { id: "SB-102", number: "102", name: "Room 102", type: "classroom", searchTerms: ["102"] },
          { id: "SB-103", number: "103", name: "Room 103", type: "classroom", searchTerms: ["103"] },
          { id: "SB-104", number: "104", name: "Room 104", type: "classroom", searchTerms: ["104"] },
          { id: "SB-105", number: "105", name: "Room 105", type: "classroom", searchTerms: ["105"] },
          { id: "SB-106", number: "106", name: "Room 106", type: "classroom", searchTerms: ["106"] },
          { id: "SB-107", number: "107", name: "Room 107", type: "classroom", searchTerms: ["107"] },
          { id: "SB-109", number: "109", name: "Room 109", type: "classroom", searchTerms: ["109"] },
          { id: "SB-111", number: "111", name: "Room 111", type: "classroom", searchTerms: ["111"] },
          { id: "SB-112", number: "112", name: "Room 112", type: "classroom", searchTerms: ["112"] },
          { id: "SB-113", number: "113", name: "Room 113", type: "classroom", searchTerms: ["113"] },
          { id: "SB-125", number: "125", name: "Room 125", type: "classroom", searchTerms: ["125"] },
          { id: "SB-127", number: "127", name: "Room 127", type: "classroom", searchTerms: ["127"] },
          { id: "SB-128", number: "128", name: "Room 128", type: "classroom", searchTerms: ["128"] },
          { id: "SB-129", number: "129", name: "Room 129", type: "classroom", searchTerms: ["129"] },
          { id: "SB-132", number: "132", name: "Room 132", type: "office", searchTerms: ["132"] },
          { id: "SB-133", number: "133", name: "Room 133", type: "office", searchTerms: ["133"] },
          { id: "SB-136", number: "136", name: "Room 136", type: "office", searchTerms: ["136"] },
          { id: "SB-139", number: "139", name: "Room 139", type: "office", searchTerms: ["139"] },
          { id: "SB-141", number: "141", name: "Room 141", type: "office", searchTerms: ["141"] },
          { id: "SB-143", number: "143", name: "Room 143", type: "office", searchTerms: ["143"] },
          { id: "SB-144", number: "144", name: "Room 144", type: "office", searchTerms: ["144"] },
          { id: "SB-145", number: "145", name: "Room 145", type: "office", searchTerms: ["145"] },
          { id: "SB-147", number: "147", name: "Room 147", type: "office", searchTerms: ["147"] },
          { id: "SB-MR104", number: "MR104", name: "Mail Room", type: "service", searchTerms: ["mail", "mailroom"] },
          { id: "SB-WR104", number: "WR104", name: "Work Room", type: "service", searchTerms: ["work room", "copy", "print"] },
        ]
      },
      {
        level: 2,
        label: "Second Floor",
        rooms: [
          { id: "SB-203", number: "203", name: "Room 203", type: "classroom", searchTerms: ["203"] },
          { id: "SB-205", number: "205", name: "Room 205", type: "classroom", searchTerms: ["205"] },
          { id: "SB-207", number: "207", name: "Room 207", type: "classroom", searchTerms: ["207"] },
          { id: "SB-209", number: "209", name: "Room 209", type: "office", searchTerms: ["209"] },
          { id: "SB-210", number: "210", name: "Room 210", type: "classroom", searchTerms: ["210"] },
          { id: "SB-211", number: "211", name: "Room 211", type: "classroom", searchTerms: ["211"] },
          { id: "SB-212", number: "212", name: "Room 212", type: "classroom", searchTerms: ["212"] },
          { id: "SB-213", number: "213", name: "Room 213", type: "classroom", searchTerms: ["213"] },
          { id: "SB-214", number: "214", name: "Room 214", type: "classroom", searchTerms: ["214"] },
          { id: "SB-215", number: "215", name: "Room 215", type: "classroom", searchTerms: ["215"] },
          { id: "SB-216", number: "216", name: "Room 216", type: "classroom", searchTerms: ["216"] },
          { id: "SB-217", number: "217", name: "Room 217", type: "classroom", searchTerms: ["217"] },
          { id: "SB-MR205", number: "MR205", name: "Mail Room", type: "service", searchTerms: ["mail"] },
          { id: "SB-WR205", number: "WR205", name: "Work Room", type: "service", searchTerms: ["work room", "copy"] },
        ]
      },
      {
        level: 3,
        label: "Third Floor",
        rooms: [
          { id: "SB-302", number: "302", name: "Room 302", type: "office", searchTerms: ["302"] },
          { id: "SB-306", number: "306", name: "Room 306", type: "office", searchTerms: ["306"] },
          { id: "SB-307", number: "307", name: "Room 307", type: "office", searchTerms: ["307"] },
          { id: "SB-309", number: "309", name: "Room 309", type: "office", searchTerms: ["309"] },
          { id: "SB-311", number: "311", name: "Room 311", type: "office", searchTerms: ["311"] },
          { id: "SB-313", number: "313", name: "Room 313", type: "office", searchTerms: ["313"] },
          { id: "SB-315", number: "315", name: "Room 315", type: "office", searchTerms: ["315"] },
          { id: "SB-317", number: "317", name: "Room 317", type: "office", searchTerms: ["317"] },
          { id: "SB-319", number: "319", name: "Room 319", type: "office", searchTerms: ["319"] },
          { id: "SB-321", number: "321", name: "Room 321", type: "office", searchTerms: ["321"] },
          { id: "SB-323", number: "323", name: "Room 323", type: "office", searchTerms: ["323"] },
          { id: "SB-325", number: "325", name: "Room 325", type: "office", searchTerms: ["325"] },
          { id: "SB-327", number: "327", name: "Room 327", type: "office", searchTerms: ["327"] },
          { id: "SB-354", number: "354", name: "Room 354", type: "classroom", searchTerms: ["354"] },
          { id: "SB-356", number: "356", name: "Room 356", type: "classroom", searchTerms: ["356"] },
          { id: "SB-358", number: "358", name: "Room 358", type: "classroom", searchTerms: ["358"] },
          { id: "SB-360", number: "360", name: "Room 360", type: "classroom", searchTerms: ["360"] },
          { id: "SB-362", number: "362", name: "Room 362", type: "classroom", searchTerms: ["362"] },
          { id: "SB-364", number: "364", name: "Room 364", type: "classroom", searchTerms: ["364"] },
          { id: "SB-MR365", number: "MR365", name: "Mail Room", type: "service", searchTerms: ["mail"] },
        ]
      },
      {
        level: 4,
        label: "Fourth Floor",
        rooms: [
          { id: "SB-402", number: "402", name: "Room 402", type: "office", searchTerms: ["402"] },
          { id: "SB-403", number: "403", name: "Room 403", type: "office", searchTerms: ["403"] },
          { id: "SB-405", number: "405", name: "Room 405", type: "office", searchTerms: ["405"] },
          { id: "SB-407", number: "407", name: "Room 407", type: "office", searchTerms: ["407"] },
          { id: "SB-408", number: "408", name: "Room 408", type: "office", searchTerms: ["408"] },
          { id: "SB-411", number: "411", name: "Room 411", type: "office", searchTerms: ["411"] },
          { id: "SB-413", number: "413", name: "Room 413", type: "office", searchTerms: ["413"] },
          { id: "SB-415", number: "415", name: "Room 415", type: "office", searchTerms: ["415"] },
          { id: "SB-417", number: "417", name: "Room 417", type: "office", searchTerms: ["417"] },
          { id: "SB-419", number: "419", name: "Room 419", type: "office", searchTerms: ["419"] },
          { id: "SB-421", number: "421", name: "Room 421", type: "office", searchTerms: ["421"] },
          { id: "SB-424", number: "424", name: "Room 424", type: "classroom", searchTerms: ["424"] },
          { id: "SB-426", number: "426", name: "Room 426", type: "classroom", searchTerms: ["426"] },
          { id: "SB-451", number: "451", name: "Room 451", type: "classroom", searchTerms: ["451"] },
          { id: "SB-453", number: "453", name: "Room 453", type: "classroom", searchTerms: ["453"] },
          { id: "SB-455", number: "455", name: "Room 455", type: "classroom", searchTerms: ["455"] },
          { id: "SB-457", number: "457", name: "Room 457", type: "classroom", searchTerms: ["457"] },
          { id: "SB-459", number: "459", name: "Room 459", type: "classroom", searchTerms: ["459"] },
          { id: "SB-461", number: "461", name: "Room 461", type: "classroom", searchTerms: ["461"] },
          { id: "SB-463", number: "463", name: "Room 463", type: "classroom", searchTerms: ["463"] },
          { id: "SB-MR458", number: "MR458", name: "Mail Room", type: "service", searchTerms: ["mail"] },
        ]
      },
      {
        level: 5,
        label: "Fifth Floor",
        rooms: [
          { id: "SB-502", number: "502", name: "Room 502", type: "office", searchTerms: ["502"] },
          { id: "SB-503", number: "503", name: "Room 503", type: "office", searchTerms: ["503"] },
          { id: "SB-504", number: "504", name: "Room 504", type: "office", searchTerms: ["504"] },
          { id: "SB-505", number: "505", name: "Room 505", type: "office", searchTerms: ["505"] },
          { id: "SB-506", number: "506", name: "Room 506", type: "office", searchTerms: ["506"] },
          { id: "SB-507", number: "507", name: "Room 507", type: "office", searchTerms: ["507"] },
          { id: "SB-508", number: "508", name: "Room 508", type: "office", searchTerms: ["508"] },
          { id: "SB-509", number: "509", name: "Room 509", type: "office", searchTerms: ["509"] },
          { id: "SB-510", number: "510", name: "Room 510", type: "office", searchTerms: ["510"] },
          { id: "SB-511", number: "511", name: "Room 511", type: "office", searchTerms: ["511"] },
          { id: "SB-512", number: "512", name: "Room 512", type: "office", searchTerms: ["512"] },
          { id: "SB-513", number: "513", name: "Room 513", type: "office", searchTerms: ["513"] },
          { id: "SB-514", number: "514", name: "Room 514", type: "classroom", searchTerms: ["514"] },
          { id: "SB-516", number: "516", name: "Room 516", type: "classroom", searchTerms: ["516"] },
          { id: "SB-518", number: "518", name: "Room 518", type: "classroom", searchTerms: ["518"] },
          { id: "SB-519", number: "519", name: "Room 519", type: "office", searchTerms: ["519"] },
          { id: "SB-521", number: "521", name: "Room 521", type: "office", searchTerms: ["521"] },
          { id: "SB-522", number: "522", name: "Room 522", type: "office", searchTerms: ["522"] },
          { id: "SB-524", number: "524", name: "Room 524", type: "office", searchTerms: ["524"] },
          { id: "SB-526", number: "526", name: "Room 526", type: "office", searchTerms: ["526"] },
          { id: "SB-528", number: "528", name: "Room 528", type: "office", searchTerms: ["528"] },
          { id: "SB-530", number: "530", name: "Room 530", type: "office", searchTerms: ["530"] },
          { id: "SB-532", number: "532", name: "Room 532", type: "office", searchTerms: ["532"] },
          { id: "SB-534", number: "534", name: "Room 534", type: "office", searchTerms: ["534"] },
          { id: "SB-536", number: "536", name: "Room 536", type: "office", searchTerms: ["536"] },
          { id: "SB-538", number: "538", name: "Room 538", type: "office", searchTerms: ["538"] },
          { id: "SB-540", number: "540", name: "Room 540", type: "office", searchTerms: ["540"] },
          { id: "SB-MR516", number: "MR516", name: "Mail Room", type: "service", searchTerms: ["mail"] },
        ]
      }
    ]
  }
};

// Flat search index — all rooms across all buildings
export const allRooms = Object.values(rooms).flatMap(building =>
  building.floors.flatMap(floor =>
    floor.rooms.map(room => ({
      ...room,
      buildingCode: building.buildingCode,
      buildingName: building.buildingName,
      floor: floor.level,
      floorLabel: floor.label,
    }))
  )
);

// Floor plan image URLs — we'll use the PDFs converted to images
export const floorPlans = {
  SU: {
    1: "/floorplans/SU-L1.jpg",
    2: "/floorplans/SU-L2.jpg",
    3: "/floorplans/SU-L3.jpg",
  },
  SB: {
    0: "/floorplans/SB-Basement.JPG",
    1: "/floorplans/SB-Floor1.JPG",
    2: "/floorplans/SB-Floor2.JPG",
    3: "/floorplans/SB-Floor3.JPG",
    4: "/floorplans/SB-Floor4.JPG",
    5: "/floorplans/SB-Floor5.JPG",
  }
};


34.181019, -117.324219
34.18084991180501, -117.32389724795055
34.180733419122745, -117.32399179580923
34.18068790719132, -117.32390108436248
34.18080092695324, -117.32381545769509
34.18078262094575, -117.32377216331273
34.18106198610623, -117.32355088091387
34.18112486303761, -117.32346236795435
34.18106994521408, -117.3233478783654
34.18147426690389, -117.32304385559135
34.18149257276758, -117.32307560479518
34.18160877507427, -117.32321703311095
34.18175522158899, -117.32363843176613
34.18101900691724, -117.32421857648998