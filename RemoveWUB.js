// This was an attempted kata from CodeWars that did not provide a soltuion and was laced with comments about how the test didn't properly work
// This was my attempt, although I only got some tests to pass
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

function songDecoder(song) {
    originalSong = song.replace(/WUB/g, ' ')
    return originalSong;
}