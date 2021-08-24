// https://www.codewars.com/kata/5888a57cbf87c25c840000c6/train/javascript

/* Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the star_sign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

Test info: 100 random tests (dates range from January 1st 1940 until now)
 */

function starSign(date) {

    var zodiacSigns = {
        'capricorn': 'Capricorn',
        'aquarius': 'Aquarius',
        'pisces': 'Pisces',
        'aries': 'Aries',
        'taurus': 'Taurus',
        'gemini': 'Gemini',
        'cancer': 'Cancer',
        'leo': 'Leo',
        'virgo': 'Virgo',
        'libra': 'Libra',
        'scorpio': 'Scorpio',
        'sagittarius': 'Sagittarius'
    }
    if ((date.getMonth() == 0 && date.getDate() <= 20) || (date.getMonth() == 11 && date.getDate() >= 22)) {
        return zodiacSigns.capricorn;
    } else if ((date.getMonth() == 0 && date.getDate() >= 21) || (date.getMonth() == 1 && date.getDate() <= 19)) {
        return zodiacSigns.aquarius;
    } else if ((date.getMonth() == 1 && date.getDate() >= 20) || (date.getMonth() == 2 && date.getDate() <= 20)) {
        return zodiacSigns.pisces;
    } else if ((date.getMonth() == 2 && date.getDate() >= 21) || (date.getMonth() == 3 && date.getDate() <= 20)) {
        return zodiacSigns.aries;
    } else if ((date.getMonth() == 3 && date.getDate() >= 21) || (date.getMonth() == 4 && date.getDate() <= 21)) {
        return zodiacSigns.taurus;
    } else if ((date.getMonth() == 4 && date.getDate() >= 22) || (date.getMonth() == 5 && date.getDate() <= 21)) {
        return zodiacSigns.gemini;
    } else if ((date.getMonth() == 5 && date.getDate() >= 22) || (date.getMonth() == 6 && date.getDate() <= 22)) {
        return zodiacSigns.cancer;
    } else if ((date.getMonth() == 6 && date.getDate() >= 23) || (date.getMonth() == 7 && date.getDate() <= 23)) {
        return zodiacSigns.leo;
    } else if ((date.getMonth() == 7 && date.getDate() >= 24) || (date.getMonth() == 8 && date.getDate() <= 23)) {
        return zodiacSigns.virgo;
    } else if ((date.getMonth() == 8 && date.getDate() >= 24) || (date.getMonth() == 9 && date.getDate() <= 23)) {
        return zodiacSigns.libra;
    } else if ((date.getMonth() == 9 && date.getDate() >= 24) || (date.getMonth() == 10 && date.getDate() <= 22)) {
        return zodiacSigns.scorpio;
    } else if ((date.getMonth() == 10 && date.getDate() >= 23) || (date.getMonth() == 11 && date.getDate() <= 21)) {
        return zodiacSigns.sagittarius;
    }
}