console.log('------ CONST #8 JS ------')

let div = document.createElement('div');
console.log(div)
document.body.appendChild(div)
div.innerText = 'HELLO'
// div.style.background = 'red'
// div.style.height = '100px'
div.classList.add('father', 'wrapper');
div.classList.remove('wrapper')


let clone = div.cloneNode(true);
console.log(clone)
clone.classList.add('clone')
document.body.appendChild(clone)


let audio = [
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-raising-me-higher-34.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-complicated-281.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-cat-walk-371.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-cbpd-400.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-silent-descent-614.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-feeling-happy-5.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-playground-fun-12.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-pop-05-695.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-comical-2.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-island-beat-250.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-bridge-n-98-621.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-summer-fun-13.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-just-chill-16.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-getting-ready-46.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-spirit-in-the-woods-139.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-motivating-mornings-33.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-sports-highlights-51.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-piano-horror-671.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-epical-drums-01-676.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-delightful-4.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-fun-times-7.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-just-kidding-11.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-night-sky-hip-hop-970.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-kodama-night-town-114.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-uplift-me-35.mp3"
    },
    {
        "audio": "https://assets.mixkit.co/music/preview/mixkit-hollidays-690.mp3"
    }
]

for (const music of audio) {
    console.log(music)
    let div = document.createElement('div')
    document.body.appendChild(div)
    let audio = document.createElement('audio');
    div.appendChild(audio);
    audio.src = music.audio;
    audio.controls = true;
}

console.log(audio);