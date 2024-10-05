
//projects.js is the database for Music Memories, holds all projects I have listened to and reviewed.
/* each project contains:
    id
    title
    type (album or extended play (mini album in Korea))
    release date (YYYY-MM-DD)
    rating (on a scale of 0.0 to 10.0, inclusive)
    favorites (Song 1, Song 2, Song 3)
    genre (indie, rock, pop, country, alternative rock, other)
    thoughts (if wanted)
    link (if applicable; if project is 10/10, link will open to its respective section on tens.html)
    spotify_embed (embed project provided from Spotify)
*/


//used in reviewed.html
//creates grids for reviewed.html.

//also used in recommendations.html
//divides projects by genre
/* genres:
    indie
    rock
    pop
    country
    alternative rock
    kpop
    other
*/

//initiate types of albums for simplicity
var a = "Album";
var ep = "Extended Play";
var ma = "Mini Album";

const projects = [
    {
        id: 1,
        img: "fictional_illustrations.jpeg",
        title: "Fictional Illustrations",
        type: a,
        artist: "Fly By Midnight",
        release_date: "2023-03-24",
        rating: 10.0,
        favorites: "Sometimes, In The Night, Infinitely Falling",
        genre: "Indie",
        link: "tens.html#fictional_illustrations", //since rating = 10/10, open link to tens.html page
    },
    {
        id: 2,
        img: "the_dark.jpeg",
        title: "The Dark",
        type: a,
        artist: "The Band CAMINO",
        release_date: "2023-08-11",
        rating: 9.0,
        favorites: "Three Month Hangover, Afraid Of The Dark, Let It Happen",
        genre: "Alternative Rock",
        thoughts: 'This album was a very hard dive into pop rock territory from the band; also a very different direction for the band. Singles "Told You So", "What Am I Missing?", "Last Man In The World", and "See You Later" set the tone for the guitar heavy album, with the exception of "See You Later" demonstrating that the band can pull off a poppier song. This album felt like a watered-down version of the band, a band that I fell in love with for their thought-provoking lyrics and catchy melodies. This album just has lack-luster lyrics but still very catchy melodies. I still have a soft spot (and a fan bias) for this album in my heart, but I know they can do better',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6S2FI6xzGq3INs2WnlB9ou?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 3,
        img: "tori_ep.jpg",
        title: "tori",
        type: ep,
        artist: "Tori Kelly",
        release_date: "2023-07-28",
        rating: 9.0,
        favorites: "alive if i die, shelter, missin' u - r&b edit",
        genre: "Pop",
        thoughts: 'With singer/songwriter/producer Jon Bellion as executive producer of this Extended Play, I knew going into this project I would be treated to some quality specials. Songs such as "missin u" and "alive if i die", Jon and Tori delivered on a Y2K vibe.',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2PQVnh3WyBRkVRzcl2nWBd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 4,
        img: "gtaot.jpeg",
        title: "Goodbye To All Of That, 2023",
        type: a,
        artist: "The Wldlfe",
        release_date: "2023-03-10",
        rating: 8.5,
        favorites: "Psycho (When I Wake Up), Close To You, Good@Bad@Us",
        genre: "Alternative Rock",
        thoughts: '"Close To You" was my first introduction to this band as it appeared on a recommended Spotify playlist. I was immediately taken in by its heavy guitars and cheeky songwriting. When this album released, I was immediately drawn into the band by their chemistry and songwriting, especially on "Psycho". Definitely one of my favorite introduction albums.',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5rJqKtbGfVUH8glGRtPVic?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 5,
        img:"bigger_houses.jpg",
        title: "Bigger Houses",
        type: a,
        artist: "Dan + Shay",
        release_date: "2023-09-15",
        rating: 8.5,
        favorites: "Always Gonna Be, Heaven + Back, Breakin' up With A Broken Heart",
        genre: "Country",
        thoughts: 'I am not much of a big country fan but Dan + Shay blew me away with their authenticity and songwriting with some of my favorites being "Always Gonna Be" and "Heaven + Back". I believe there is something for everyone on this album, even if you are not a country fan.',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2kJbSNF5JDzEOwYuqNc5PQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 6,
        img:"the_album.jpg",
        title: "The Album",
        type: a,
        artist: "Jonas Brothers",
        release_date: "2023-05-12",
        rating: 8.5,
        favorites: "Vacation Eyes, Montana Sky, Summer Baby",
        genre: "Pop",
        thoughts: 'With Jon Bellion as executive producer for this highly anticipated Jonas Brothers album, the brothers were taken to a completely new direction in their music. With country influences, this album was a breath of fresh air from their pop-filled predecessor record "Happiness Begins". This album sounds very authentic and something new from them, but I personally would not call this the album that defines them. Even with standouts such as "Vacation Eyes" and "Montana Sky", this short yet filled album still feels whole from a group who still has a long road ahead of them.',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7aq7a226T631f2w1Vs1vXx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 7,
        img:"bewitched.jpg",
        title: "Bewitched",
        type: a,
        artist: "Laufey",
        release_date: "2023-05-12",
        rating: 8.0,
        favorites: "Lovesick, Second Best, While You Were Sleeping",
        genre: "Other",
        thoughts: 'This album has blown me away. Although Laufey is not my cup of tea, my inner "jazz band kid" came out with this album. The complex sonics of this album led by Laufey, the colorful songwriting, and brought all together with an orchestra is a delicious recipe for "Bewitched".',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1rpCHilZQkw84A3Y9czvMO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 8,
        img: "tmia.jpeg",
        title: "Tell Me I'm Alive",
        type: a,
        artist: "All Time Low",
        release_date: "2023-03-17",
        rating: 8.0,
        favorites: "The Other Side, Are You There?, New Religion (feat. Teddy Swims)",
        genre: "Alternative Rock",
        thoughts: 'As a huge fan of this band, I was eagerly excited by this album after their 2020 pandemic release "Wake Up, Sunshine" as I call it a "no-skips" album. The singles leading up to the album "Sleepwalking", "Tell Me I\'m Alive", and "Modern Love" left me skeptical as it was kind of different from their sound, yet still sounding \"All Time Low\". While blown away by the instrumentals and production by second time producer Zakk Cervini, I felt let down and it sounded like step-down from "Wake Up, Sunshine". While some standouts such as "New Religion" which featured singer Teddy Swims and "Are You There" (I believe this should\'ve been a single), all the rest has so much potential, but never reaches it. I know All Time Low can do better than this, they are still the same guys that wrote "Weightless" and "Somewhere in Neverland".',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0gPGmJSxuqrpvXiWdOLcRh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 9,
        img:"tsou.jpg",
        title: "The Secret Of Us",
        type: a,
        artist: "Gracie Abrams",
        release_date: "2024-06-21",
        rating: 8.5,
        favorites: "I Love You, I'm Sorry, Let It Happen, us. (feat. Taylor Swift)",
        genre: "Indie",
        thoughts: 'I listened to this album on a whim after hearing a few friends listen to it. I was immediately blown away by the simple production yet strong lyrics by Abrams. I never thought I\'d find myself listening to the rest of Abrams\' catalog after being captured by songs "I Love You I\'m Sorry" and "us" featuring world-known singer-songwriter Taylor Swift. ',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/56bdWeO40o3WfAD2Lja4dl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 10,
        img:"egaikitc.jpg",
        title: "Everyone's Gone and I Know I'm The Cause",
        type: a,
        artist: "The Greeting Committee",
        release_date: "2024-06-21",
        rating: 8.0,
        favorites: "Where'd All My Friends Go?, How It Goes, Sex and Taxes",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3b7o8u6E4nRczEWnzSorMY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 11,
        img:"eternal_sunshine.png",
        title: "eternal sunshine",
        type: a,
        artist: "Ariana Grande",
        release_date: "2024-03-08",
        rating: 7.5,
        favorites: "eternal sunshine, supernatural, bye",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5EYKrEDnKhhcNxGedaRQeK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 12,
        img: "na.jpeg",
        title: "NA",
        type: ma,
        artist: "NAYEON",
        release_date: "2024-06-14",
        rating: 8.5,
        favorites: "Butterfiles, Something, Magic (feat. JULIE of KISS OF LIFE)",
        genre: "K-Pop",
        thoughts: "I listened to this Mini Album by Nayeon of TWICE on a whim, I was blown away by this project. If you enjoy pop even if you do not listen to K-Pop, there's something for you on this album.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5zQI9dFbS9TrhvC9clgjz7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 13,
        img:"family_business.png",
        title: "Family Business",
        type: a,
        artist: "Lawrence",
        release_date: "2024-06-21",
        rating: 8.5,
        favorites: "Do, 23, Circle Back",
        genre: "Other",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2Sb0autVivIydesNKk5J6p?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 14,
        img:"dumb_mode.jpg",
        title: "DUMBA$$ MODE",
        type: ep,
        artist: "verygently",
        release_date: "2024-07-19",
        rating: 8.0,
        favorites: "GET OVER YOU, UH-HUH, SOBER UP",
        genre: "Other",
        thoughts: "I found verygently as they were the opener for The Band CAMINO on tour so I decided to listen to their only release. The band consists friends of The Band CAMINO so it was appropriate of them to be the opener. I was blown away by the authenticity of the instrumentals and the honesty of the lyrics. With a misleading title thinking I was going into a hard rock album, I was surprised and thankful I heard what I heard, an honest soft rock band starting out strong.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7HJQs44rpWGT8ymYHwGnhy?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 15,
        img:"yuq1.jpeg",
        title: "YUQ1",
        type: ma,
        artist: "YUQI",
        release_date: "2024-04-23",
        rating: 7.0,
        favorites: "Red Rover, Everytime, Could It Be",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7LYc8ngbhwha4aGJ5kVauc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 16,
        img:"golden.png",
        title: "GOLDEN",
        type: a,
        artist: "Jung Kook",
        release_date: "2023-11-03",
        rating: 7.0,
        favorites: "Seven (feat. Latto), Yes or No, Too Sad to Dance",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5pSk3c3wVwnb2arb6ohCPU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 17,
        img:"lost_in_translation.jpeg",
        title: "Lost In Translation",
        type: a,
        artist: "Valley",
        release_date: "2023-06-23",
        rating: 8.0,
        favorites: "Have A Good Summer (Without Me), Natural, Evenings & Weekends",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2QNQe0cnmzYYc0QcKeEZgb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 18,
        img:"crack_a_smile.jpeg",
        title: "CRACK A SMILE COME ON STAY A WHILE",
        type: a,
        artist: "Abby Holliday",
        release_date: "2024-07-26",
        rating: 7.0,
        favorites: "The Price, Steve Martin, Couch Comrade",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3MCABaEqPmI82mgE6OVYoB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 19,
        img:"love_in_stereo.jpeg",
        title: "LOVE IN STEREO",
        type: a,
        artist: "MAX",
        release_date: "2024-02-16",
        rating: 7.5,
        favorites: "LOVE NEVER FELT LIKE THIS, BUTTERFLIES (feat. Ali Gatie), EDIE CELINE",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2YyHBng4US9HBUJKpICmny?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 20,
        img:"bruises.jpg",
        title: "Bruises",
        type: ep,
        artist: "The Band CAMINO",
        release_date: "2024-05-19",
        rating: 10.0,
        favorites: "Nostalgia, Bruises, Someone Who's Trying",
        genre: "Alternative Rock",
        link: "tens.html#bruises"
    },
    {
        id: 21,
        img:"the_race1.jpeg",
        title: "The Race: Lap 1/3",
        type: ep,
        artist: "Fly By Midnight",
        release_date: "2024-06-28",
        rating: 9.0,
        favorites: "The Weather, Try, SuperFine",
        genre: "Indie",
        thoughts: "Riding off of their hit album \"Fictional Illustrations\" released back in 2023, the indie-pop duo honed together their sound, the sound that screams \"Fly By Midnight\". Then came singles \"Try\" and \"The Weather\", with \"SuperFine\" completing \"The Race: Lap 1/3\", seemingly hinting that there will be more \"laps\" to come. These three songs are wonderfully produced and written and defines what makes \"Fly By Midnight\",  a new direction, a new sound, and a bright future ahead of the duo. This isn't just \"okay\" and \"alright\", it's amazing, and their race has just begun.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/79NXdbS41RurCVUJ7ZcIXE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 22,
        img:"forever_sessions1.jpeg",
        title: "The Forever Sessions - Vol. 1",
        type: a,
        artist: "All Time Low",
        release_date: "2024-08-23",
        rating: 8.0,
        favorites: "Dear Maria, Count Me In, Coffee Shop Soundtrack, Damned If I Do Ya (Damned If I Don't)",
        genre: "Rock",
        thoughts: "When I heard that this band was re-recording their old records in celebration of being together as a band for 20 years, I thought it would be a cash grab move to show that they still got it. They indeed still got what it takes to be a punk band. With re-recordings such as \"Dear Maria, Count Me In\", \"Weightless\", and \"Coffee Shop Soundtrack\", I was immediately hooked in by the tight and updated instrumentals, all produced by their longtime backing guitarist and producer, Dan Swank. I love the production and face lift Swank gave to these songs, with Alex's updated and mature vocals, the band defintely feels back, and they're here to do it, forever.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2qlSxSXbP9cTjTfxDqQXXE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 23,
        img:"something_better.jpg",
        title: "Something Better",
        type: ep,
        artist: "Electric Football",
        release_date: "2024-05-31",
        rating: 7.5,
        favorites: "Better Him Than Me, Oxygen, Sunburn",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4b94342VNeRTHO2hglBmRQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 24,
        img:"wyho.jpeg",
        title: "wear your heart out",
        type: a,
        artist: "Nightly",
        release_date: "2023-08-25",
        rating: 7.5,
        favorites: "like i do, shirt, dry eyes",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4KOM21G440kOOadSRiTeEu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 25,
        img:"tihtm.jpg",
        title: "This Is How Tomorrow Moves",
        type: a,
        artist: "beabadoobee",
        release_date: "2024-08-09",
        rating: 7.5,
        favorites: "California, Ever Seen, Beaches",
        genre: "Other",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5oT7xqbRbQCevZ0XC5aBFu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 26,
        img:"ttwf.jpeg",
        title: "the tears we fight",
        type: ep,
        artist: "MICO",
        release_date: "2023-09-13",
        rating: 7.5,
        favorites: "another soul, maybe i'm the problem now, m.i.a.",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1IO5EbKNw91tCMIb3LdRze?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 27,
        img:"easy.jpeg",
        title: "EASY",
        type: ma,
        artist: "LE SSERAFIM",
        release_date: "2024-02-19",
        rating: 7.5,
        favorites: "EASY, Smart, Swan Song",
        genre: "K-Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1YCj4PZi08G20y2ekGKY0C?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 28,
        img:"buzz.jpeg",
        title: "Buzz",
        type: a,
        artist: "NIKI",
        release_date: "2024-08-09",
        rating: 8.0,
        favorites: "Buzz, Heirloom Pain, Nothing Can",
        genre: "Other",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3g73KFee4dbxDq5vTmX92S?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 29,
        img:"american_motor_sports.jpeg",
        title: "AMERICAN MOTOR SPORTS",
        type: a,
        artist: "Bilmuri",
        release_date: "2024-06-28",
        rating: 9.5,
        favorites: "EMPTYHANDED (feat. Dylan Marlowe), 2016 CAVALIERS (Ohio) (feat. Knox), ALL GAS (feat. Mitchell Tenpenny)",
        genre: "Rock",
        thoughts: "I came into this album with an open mind, not being much of a listener of any metal-adjacent music. I was pleasantly surprised by not only the production, but its country-influenced tracks such as \"SPINNIN\' YOU AROUND\" and \"ALL GAS\" which features country singer Mitchell Tenpenny. This album creates a perfect blend of heavy rock with country elements while not overdoing the cliché banjo and twangy vocals.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1HrM3lPorHLHWPApviVRRz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 30,
        img:"soft_is_strong.png.webp",
        title: "SIS (Soft Is Strong)",
        type: ep,
        artist: "KATSEYE",
        release_date: "2024-08-16",
        rating: 7.0,
        favorites: "Touch, Debut, My Way",
        genre: "Pop",
        thoughts: "When I heard this girl group was made with K-Pop methodologies, I had to follow what all the fuss was about. Their debut single, appropriately named \"Debut\" was strong and fierce followed by breakthrough single \"Touch\" with it\'s catchy lyrics and fun dance. The rest of the extended play just felt like filler for the former singles so that they have some material out. I know they can do much better and this group has a bright future ahead. And if you're wondering, Sophia and Megan are my biases.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/48t47MKCsynkPx3rRg7EWr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 31,
        img:"hiap.jpeg",
        title: "Heaven is a place, 2024",
        type: a,
        artist: "The Wldlfe",
        release_date: "2024-08-16",
        rating: 9.0,
        favorites: "Wreck My Life, Dizzy, Be There",
        genre: "Indie",
        thoughts: 'I found this band unexpectedly through one of my other favorite bands "The Band CAMINO". I first fell in love with their single "Close To You", the lead single to their preceding album "Goodbye To All Of That, 2023", and have been following the band ever since. I had the lucky opportunity to see them live back in February 2024 where they surprise-performed an unreleased song "Wreck My Life", a heartfelt heaviness song about wishing that a person would leave before they fall back into the same cycle of hurt and regret. The Wldlfe then dropped singles "What If You Change?", "Turtleneck", and of course, "Wreck My Life", along with snippets of each track of the album leading up to its release. The 13 track record proves a statement that the band\'s journey is only beginnning. A wonderful mix of heavy, distorted guitars, trap beats, and pop melodies shows that The Wldlfe is continuing to evolve with each release.',
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2jFNYnS6VA7IdzQv8kiQt7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 32,
        img:"sunday_at_foxwoods.jpg",
        title: "SUNDAY AT FOXWOODS",
        type: a,
        artist: "BOYS LIKE GIRLS",
        release_date: "2023-10-20",
        rating: 7.5,
        favorites: "BLOOD AND SUGAR, MIRACLE, BROOKLYN STATE OF MIND",
        genre: "Alternative Rock",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6YYgBgZ9yBTZ0l0Wpk9NSQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 33,
        img:"f1trillion.jpeg",
        title: "F-1 Trillion",
        type: a,
        artist: "Post Malone",
        release_date: "2024-08-16",
        rating: 8.0,
        favorites: "Pour Me A Drink (Feat. Blake Shelton), What Don't Belong To Me, Devil I've Been (Feat. Ernest)",
        genre: "Country",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4BbsHmXEghoPPevQjPnHXx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 34,
        img:"isgaba.jpeg",
        title: "I'm So Good At Being Alone?",
        type: ep,
        artist: "Knox",
        release_date: "2023-09-23",
        rating: 8.0,
        favorites: "Not The 1975, Nevermind, I'm So Good At Being Alone",
        genre: "Alternative Rock",
        thoughts: "Although the score is not a perfect 10/10, this is one of my favorite projects of all time. It is a great sophomore extended play by rock newcomer Knox. Utilizing TikTok to promote his music, it has definitely reached his target audience (me). With standouts including \"Love Letter\" and \"Nevermind\" establishes his punk-rock influences with modern pop elements. With breakout hit \"Not The 1975\", Knox is on an upward projection to being one of the next biggest stars in the rock scene. He may not be \"The 1975\" but he's the next big thing.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3USnuRvSzhPtYAYoz0xgvN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 35,
        img:"another_life.jpeg",
        title: "Another Life",
        type: a,
        artist: "Big Time Rush",
        release_date: "2023-06-02",
        rating: 8.0,
        favorites: "Brand New, Forget You Now, Superstitious",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/41AXbfQZyrp4Jkf0s5FyjX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 36,
        img:"clancy.jpeg",
        title: "Clancy",
        type: a,
        artist: "twenty one pilots",
        release_date: "2024-05-24",
        rating: 9.5,
        favorites: "Midwest Indigo, Routines In The Night, Navigating",
        genre: "Alternative Rock",
        thoughts: "twenty one pilots is back. that is all.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1KFWgQTw3EMTQebaaepVBI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 37,
        img:"hell_or_highwater.jpeg",
        title: "Hell Or Highwater",
        type: a,
        artist: "nothing,nowhere.",
        release_date: "2024-06-28",
        rating: 8.5,
        favorites: "Shiver, Learn My Lessons (ft. Lontalius), Cliché Lovers (Dissolve Into You)",
        genre: "Other",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0qHijxp6yiHppqTGBJ5hTC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 38,
        img:"eitiw.jpeg",
        title: "Everything I Thought It Was",
        type: a,
        artist: "Justin Timberlake",
        release_date: "2024-03-15",
        rating: 7.5,
        favorites: "No Angels, Imagination, Selfish",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/716B2iWcwoKolCXrqwLGQh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 39,
        img:"tori_album.jpeg",
        title: "TORI.",
        type: a,
        artist: "Tori Kelly",
        release_date: "2024-05-05",
        rating: 9.5,
        favorites: "diamonds, spruce (feat. KIM CHAEWON of LE SSERAFIM), shine on",
        genre: "Pop",
        thoughts: "As a follow-up to Kelly's prior extended play \"tori\", this full-length album completes the extended play with new songs, and a surprise feature by Kim Chaewon of Le Sserafim. The swag and confidence that Kelly emits on this album is beaming in each song. As another Jon Bellion-led album, this album is one of my favorites ever.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5y27dKpTOQRBMWpgAS7TD2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 40,
        img:"crazy.jpeg",
        title: "CRAZY",
        type: ma,
        artist: "LE SSERAFIM",
        release_date: "2024-08-30",
        rating: 7.5,
        favorites: "Pierrot, CRAZY, Crazier",
        genre: "K-Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/538vEfAgLJ6g2I8ubuOlap?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 41,
        img:"wtf_pfag.jpeg",
        title: "Water the Flowers, Pray for a Garden",
        type: a,
        artist: "Valley",
        release_date: "2024-08-30",
        rating: 9.5,
        favorites: "Water the Flowers, Pray for a Garden, A Little More, Life Goes On Without Me",
        genre: "Indie",
        thoughts: "This album is the most honest and authentic this band has ever been. After the pop-directed album \"Lost In Translation\" and departure of guitarist Mickey Brandolino to focus on being a full-time producer, I was unsure of the direction this band would take. Front to back, this album is honest and self-aware that in order to change, you need to start small to become something great. When I first heard the singles \"When You Know Someone\" and \"Water The Flowers, Pray For A Garden\", I knew there was nothing to worry about for this band, they have a new direction, and I dig it.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2AUF4A04JUP4xaSUmFjJnK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 42,
        img:"something_beautiful.jpeg",
        title: "Something Beautiful",
        type: a,
        artist: "Augustana",
        release_date: "2024-03-22",
        rating: 8.0,
        favorites: "Stand On My Own, Carry The World, Hear Your Name",
        genre: "Other",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0NiM7JW25zZ3mhQ8NPNGvF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 43,
        img:"all_for_something.jpeg",
        title: "All For Something",
        type: a,
        artist: "Tiny Habits",
        release_date: "2024-05-24",
        rating: 8.0,
        favorites: "Mudroom, Malleable, Planting Flowers",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5oOtwx1qgZoWzvqu1pvmZm?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 44,
        img:"short_n_sweet.jpeg",
        title: "Short n' Sweet",
        type: a,
        artist: "Sabrina Carpenter",
        release_date: "2024-08-23",
        rating: 8.0,
        favorites: "Taste, Bed Chem, Juno",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3iPSVi54hsacKKl1xIR2eH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 45,
        img:"psom.jpeg",
        title: "Paradise State of Mind",
        type: a,
        artist: "Foster The People",
        release_date: "2024-08-16",
        rating: 7.5,
        favorites: "See You In The Afterlife, Take Me Back, Paradise State of Mind",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/27ynHS80OjICdw3qLNMgQP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 46,
        img:"kansas_anymore.jpeg",
        title: "Kansas Anymore",
        type: a,
        artist: "Role Model",
        release_date: "2024-07-19",
        rating: 7.5,
        favorites: "Slipfast, Deeply Still In Love, Writing's On The Wall",
        genre: "Pop",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4OZ6nCbn8w0cHr1m0qiD2s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 47,
        img:"never_better.jpeg",
        title: "Never Better",
        type: a,
        artist: "Wild Rivers",
        release_date: "2024-07-26",
        rating: 9.0,
        favorites: "Hardly Ever, Never Better, Cave",
        genre: "Indie",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6jOix6QfFFmpNXx3to7Sct?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    {
        id: 48,
        img:"awns.jpeg",
        title: "A Whole New Sound",
        type: a,
        artist: "Disney/Various Artists",
        release_date: "2024-09-06",
        rating: 7.0,
        favorites: "I2I (Magnolia Park), A Whole New World (Yellowcard feat. Chrissy Costanza), Go the Distance (We The Kings)",
        genre: "Rock",
        thoughts: "I was excited for this album because particularly it was targeted towards newer pop-punk fans and feed the nostalgia of \"emo Disney\" adults. Moreover, the inclusion of some of my favorite bands such as Magnolia Park, Boys Like Girls, and Simple Plan had me looking forward for this cover album. However, this album kind of falls flat on some songs with the bands each just simply adding distorted guitar and drums and covering the song. It just doesn't feel like it lives up to the expectations I had. My personal favorite \"I2I\" from \"A Goofy Movie\", covered by Magnolia Park based in Orlando, Florida, perfectly captures magic of the 1995 classic with an updated and full sound. Other standout, \"Go the Distance\" from \"Hercules\", covered by We The Kings, was a much needed pop-punk treatment for the song and greatly executed by the band. Overall, this album was a lot of hits and misses with these well-known bands taking their own sound with these Disney classics.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4rKpyXuKGtcZvaHFIXgjLP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
        id: 49,
        img:"requiem.jpeg",
        title: "Requiem",
        type: a,
        artist: "keshi",
        release_date: "2024-09-13",
        rating: 9.0,
        favorites: "Like That, Bodies, Say",
        genre: "Pop",
        thoughts: "Coming off of his debut album \"GABRIEL\" back in 2022, keshi returns with with a soulful sophomore album \"Requiem\". He leans further into the 80\'s pop territory with \"Say\" and \"Soft Spot\", showcasing his versatility and clear inspirations from one of his favorite artists, John Mayer with the flangy guitars in the background. He still shows that he is the same keshi from 2019-2020 with the infectious standout song, \"Like That\", and even including his producer tag in the song, a classic keshi moment. keshi still captures his dreamy and euphoric sound with this album while still enhancing his sound and expanding his discography. He definitely delivered with this album and avoided the \"sophomore slump\" curse that every artist may experience",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5DfKDonIvNlxlzA4ORIOFm?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
        id: 50,
        img:"talaarawan.jpeg",
        title: "Talaarawan",
        type: ep,
        artist: "BINI",
        release_date: "2024-03-08",
        rating: 8.5,
        favorites: "Diyan Ka Lang, Ang Huling Cha Cha, Na Na Nandito Lang",
        genre: "Pop",
        //thoughts: "", if applicable
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2eT1XApzS0GmkJLMlCBdVv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
        id: 51,
        img:"tmea.jpeg",
        title: "The Mixed Emotions Arcade",
        type: a,
        artist: "PARRIS MITCHELL",
        release_date: "2024-06-14",
        rating: 8.0,
        favorites: "All Jokes Aside, Problem Child, Easy Love",
        genre: "Pop",
        //thoughts: "", if applicable
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1E2T1KF2PEjNEsroJFKkHx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
        id: 52,
        img:"the_end_again.jpeg",
        title: "The End, Again",
        type: ep,
        artist: "Southcourt",
        release_date: "2024-07-26",
        rating: 9.5,
        favorites: "Should've Been You, Epilogue, Peripheral",
        genre: "Indie",
        thoughts: "I came across this small band through TikTok. They used to be a band named \"The 90s Kids\" but took a break for a few years but came back with this extended play because they missed creating music. These collection of songs are some of the best songs I've heard in a while. This project almost receives a perfect 10, but it left me wanting more at the end of the EP. I hopeful for the future of this band. There were some elements that I believe to be influenced by some of the leading indie rock artists such as Knox, Valley, and The Band CAMINO. If you a fan of any of these bands, you'll love this project.",
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1xbR46RP7AhV7lFBr5qFG4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
        id: 53,
        img:"play_with_earth.jpeg",
        title: "play with earth! 0.03",
        type: a,
        artist: "wave to earth",
        release_date: "2024-09-06",
        rating: 8.0,
        favorites: "annie., pueblo - remastered 2024, play with earth!",
        genre: "Indie",
        //thoughts: "", if applicable
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0dbxemQZFmgPBIxn3TBPby?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
        id: 54,
        img:"iacfy.jpeg",
        title: "I\'ll Always Come Find You",
        type: a,
        artist: "Blxst",
        release_date: "2024-07-19",
        rating: 8.5,
        favorites: "Dance With The Devil (With Anderson .Paak), I Had To, Rewind (With Feid & Becky G)",
        genre: "Other",
        thoughts: "This album was very much out of my comfort zone but I was interested aftering hearing a couple songs from Blxst such as \"Still Omw\". Honestly, each song has its own magic with tasty production and fabulous wordplay by Blxst, but this album did not need to be 20 songs (I say this jokingly, each song was very good). Hard hitters such as \"Dance With The Devil\" which featured Anderson .Paak and \"Rewind\" featured Feid and Becky G were among my favorites in the album. On the songs with Blxst alone, he was able to carry himself very well.",
        spotify_embed: ``,
    },
    {
        id: 55,
        img:"lovelytheband.jpeg",
        title: "lovelytheband",
        type: a,
        artist: "lovelytheband",
        release_date: "2024-08-23",
        rating: 8.0,
        favorites: "rock bottom, try for you, day run out",
        genre: "Indie",
        //thoughts: "", if applicable
        spotify_embed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3n6If9dz9VaatcGXnQvVsU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
];

/*  template for project box
    {
        id: ,
        img:"",
        title: "",
        type: "",
        artist: "",
        release_date: "202X-XX-XX",
        rating: X.X,
        favorites: "",
        genre: "",
        //thoughts: "", if applicable
        spotify_embed: ``,
    },
*/