export function cap(str) {
    return (typeof str === 'string' && str.split(/[\s]/g).map(function(w) { return (w[0]).toUpperCase() + (w.slice(1)).toLowerCase() }).join(' ')) || null;
}

export function str(str) {
    return (typeof str !== "object" && String(str)) || null;
}

export function num(num) {
    return (num && /^[0-9.]+$/g.test(num) && Number(num)) || null;
}

export function int(num) {
    return (num && /^[0-9.]+$/g.test(num) && parseInt(num)) || null;
}

export function reel(num) {
    return (num && /^[0-9.]+$/g.test(num) && parseFloat(num)) || null;
}

export function bool(bol) {
    return (bol === true || bol === 'true' || bol === false || bol === 'false') ? JSON.parse(bol) : null
}

export function floor(num) {
    return (num && /^[0-9.]+$/g.test(num) && Math.floor(Number(num))) || null;
}

export function round(num) {
    return (num && /^[0-9.]+$/g.test(num) && Math.round(Number(num))) || null;
}

export function ceil(num) {
    return (num && /^[0-9.]+$/g.test(num) && Math.ceil(Number(num))) || null;
}

export function last(str) {
    return ((typeof str === 'string' || Array.isArray(str)) && str[str.length - 1]) || null;
}

export function trim(str) {
    return (typeof str === 'string' && str.trim()) || null;
}

export function sort(str) {
    return typeof str === 'string' ? str.split('').sort().join('') : Array.isArray(str) ? str.sort() : null
}

export function join(glu) {
    return function(arr) {
        return (Array.isArray(arr) && arr.join((glu ? glu : ', '))) || null;
    }
}

export function uniq(arr) {
    return (Array.isArray(arr) && [...new Set(arr)]) || null;
}

export function sum(arr) {
    return (Array.isArray(arr) && arr.reduce(function(a, n) { return a + n })) || null;
}

export function max(arr) {
    return (Array.isArray(arr) && Math.max.apply(Math, arr)) || null;
}

export function min(arr) {
    return (Array.isArray(arr) && Math.min.apply(Math, arr)) || null;
}

export function upper(str) {
    return (typeof str === 'string' && str.toUpperCase()) || null;
}

export function lower(str) {
    return (typeof str === 'string' && str.toLowerCase()) || null;
}

export function latin(str) {
    var _latin = { 'Á': 'A', 'Ă': 'A', 'Ắ': 'A', 'Ặ': 'A', 'Ằ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ǎ': 'A', 'Â': 'A', 'Ấ': 'A', 'Ậ': 'A', 'Ầ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ä': 'A', 'Ǟ': 'A', 'Ȧ': 'A', 'Ǡ': 'A', 'Ạ': 'A', 'Ȁ': 'A', 'À': 'A', 'Ả': 'A', 'Ȃ': 'A', 'Ā': 'A', 'Ą': 'A', 'Å': 'A', 'Ǻ': 'A', 'Ḁ': 'A', 'Ⱥ': 'A', 'Ã': 'A', 'Ꜳ': 'AA', 'Æ': 'AE', 'Ǽ': 'AE', 'Ǣ': 'AE', 'Ꜵ': 'AO', 'Ꜷ': 'AU', 'Ꜹ': 'AV', 'Ꜻ': 'AV', 'Ꜽ': 'AY', 'Ḃ': 'B', 'Ḅ': 'B', 'Ɓ': 'B', 'Ḇ': 'B', 'Ƀ': 'B', 'Ƃ': 'B', 'Ć': 'C', 'Č': 'C', 'Ç': 'C', 'Ḉ': 'C', 'Ĉ': 'C', 'Ċ': 'C', 'Ƈ': 'C', 'Ȼ': 'C', 'Ď': 'D', 'Ḑ': 'D', 'Ḓ': 'D', 'Ḋ': 'D', 'Ḍ': 'D', 'Ɗ': 'D', 'Ḏ': 'D', 'ǲ': 'D', 'ǅ': 'D', 'Đ': 'D', 'Ð': 'D', 'Ƌ': 'D', 'Ǳ': 'DZ', 'Ǆ': 'DZ', 'É': 'E', 'Ĕ': 'E', 'Ě': 'E', 'Ȩ': 'E', 'Ḝ': 'E', 'Ê': 'E', 'Ế': 'E', 'Ệ': 'E', 'Ề': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ḙ': 'E', 'Ë': 'E', 'Ė': 'E', 'Ẹ': 'E', 'Ȅ': 'E', 'È': 'E', 'Ẻ': 'E', 'Ȇ': 'E', 'Ē': 'E', 'Ḗ': 'E', 'Ḕ': 'E', 'Ę': 'E', 'Ɇ': 'E', 'Ẽ': 'E', 'Ḛ': 'E', 'Ꝫ': 'ET', 'Ḟ': 'F', 'Ƒ': 'F', 'Ǵ': 'G', 'Ğ': 'G', 'Ǧ': 'G', 'Ģ': 'G', 'Ĝ': 'G', 'Ġ': 'G', 'Ɠ': 'G', 'Ḡ': 'G', 'Ǥ': 'G', 'Ḫ': 'H', 'Ȟ': 'H', 'Ḩ': 'H', 'Ĥ': 'H', 'Ⱨ': 'H', 'Ḧ': 'H', 'Ḣ': 'H', 'Ḥ': 'H', 'Ħ': 'H', 'Í': 'I', 'Ĭ': 'I', 'Ǐ': 'I', 'Î': 'I', 'Ï': 'I', 'Ḯ': 'I', 'İ': 'I', 'Ị': 'I', 'Ȉ': 'I', 'Ì': 'I', 'Ỉ': 'I', 'Ȋ': 'I', 'Ī': 'I', 'Į': 'I', 'Ɨ': 'I', 'Ĩ': 'I', 'Ḭ': 'I', 'І': 'I', 'Ꝺ': 'D', 'Ꝼ': 'F', 'Ᵹ': 'G', 'Ꞃ': 'R', 'Ꞅ': 'S', 'Ꞇ': 'T', 'Ꝭ': 'IS', 'Ĵ': 'J', 'Ɉ': 'J', 'Ḱ': 'K', 'Ǩ': 'K', 'Ķ': 'K', 'Ⱪ': 'K', 'Ꝃ': 'K', 'Ḳ': 'K', 'Ƙ': 'K', 'Ḵ': 'K', 'Ꝁ': 'K', 'Ꝅ': 'K', 'Ĺ': 'L', 'Ƚ': 'L', 'Ľ': 'L', 'Ļ': 'L', 'Ḽ': 'L', 'Ḷ': 'L', 'Ḹ': 'L', 'Ⱡ': 'L', 'Ꝉ': 'L', 'Ḻ': 'L', 'Ŀ': 'L', 'Ɫ': 'L', 'ǈ': 'L', 'Ł': 'L', 'Ǉ': 'LJ', 'Ḿ': 'M', 'Ṁ': 'M', 'Ṃ': 'M', 'Ɱ': 'M', 'Ń': 'N', 'Ň': 'N', 'Ņ': 'N', 'Ṋ': 'N', 'Ṅ': 'N', 'Ṇ': 'N', 'Ǹ': 'N', 'Ɲ': 'N', 'Ṉ': 'N', 'Ƞ': 'N', 'ǋ': 'N', 'Ñ': 'N', 'Ǌ': 'NJ', 'Ó': 'O', 'Ŏ': 'O', 'Ǒ': 'O', 'Ô': 'O', 'Ố': 'O', 'Ộ': 'O', 'Ồ': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ö': 'O', 'Ȫ': 'O', 'Ȯ': 'O', 'Ȱ': 'O', 'Ọ': 'O', 'Ő': 'O', 'Ȍ': 'O', 'Ò': 'O', 'Ỏ': 'O', 'Ơ': 'O', 'Ớ': 'O', 'Ợ': 'O', 'Ờ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ȏ': 'O', 'Ꝋ': 'O', 'Ꝍ': 'O', 'Ō': 'O', 'Ṓ': 'O', 'Ṑ': 'O', 'Ɵ': 'O', 'Ǫ': 'O', 'Ǭ': 'O', 'Ø': 'O', 'Ǿ': 'O', 'Õ': 'O', 'Ṍ': 'O', 'Ṏ': 'O', 'Ȭ': 'O', 'Ƣ': 'OI', 'Ꝏ': 'OO', 'Ɛ': 'E', 'Ɔ': 'O', 'Ȣ': 'OU', 'Ṕ': 'P', 'Ṗ': 'P', 'Ꝓ': 'P', 'Ƥ': 'P', 'Ꝕ': 'P', 'Ᵽ': 'P', 'Ꝑ': 'P', 'Ꝙ': 'Q', 'Ꝗ': 'Q', 'Ŕ': 'R', 'Ř': 'R', 'Ŗ': 'R', 'Ṙ': 'R', 'Ṛ': 'R', 'Ṝ': 'R', 'Ȑ': 'R', 'Ȓ': 'R', 'Ṟ': 'R', 'Ɍ': 'R', 'Ɽ': 'R', 'Ꜿ': 'C', 'Ǝ': 'E', 'Ś': 'S', 'Ṥ': 'S', 'Š': 'S', 'Ṧ': 'S', 'Ş': 'S', 'Ŝ': 'S', 'Ș': 'S', 'Ṡ': 'S', 'Ṣ': 'S', 'Ṩ': 'S', 'ß': 'ss', 'Ť': 'T', 'Ţ': 'T', 'Ṱ': 'T', 'Ț': 'T', 'Ⱦ': 'T', 'Ṫ': 'T', 'Ṭ': 'T', 'Ƭ': 'T', 'Ṯ': 'T', 'Ʈ': 'T', 'Ŧ': 'T', 'Ɐ': 'A', 'Ꞁ': 'L', 'Ɯ': 'M', 'Ʌ': 'V', 'Ꜩ': 'TZ', 'Ú': 'U', 'Ŭ': 'U', 'Ǔ': 'U', 'Û': 'U', 'Ṷ': 'U', 'Ü': 'U', 'Ǘ': 'U', 'Ǚ': 'U', 'Ǜ': 'U', 'Ǖ': 'U', 'Ṳ': 'U', 'Ụ': 'U', 'Ű': 'U', 'Ȕ': 'U', 'Ù': 'U', 'Ủ': 'U', 'Ư': 'U', 'Ứ': 'U', 'Ự': 'U', 'Ừ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ȗ': 'U', 'Ū': 'U', 'Ṻ': 'U', 'Ų': 'U', 'Ů': 'U', 'Ũ': 'U', 'Ṹ': 'U', 'Ṵ': 'U', 'Ꝟ': 'V', 'Ṿ': 'V', 'Ʋ': 'V', 'Ṽ': 'V', 'Ꝡ': 'VY', 'Ẃ': 'W', 'Ŵ': 'W', 'Ẅ': 'W', 'Ẇ': 'W', 'Ẉ': 'W', 'Ẁ': 'W', 'Ⱳ': 'W', 'Ẍ': 'X', 'Ẋ': 'X', 'Ý': 'Y', 'Ŷ': 'Y', 'Ÿ': 'Y', 'Ẏ': 'Y', 'Ỵ': 'Y', 'Ỳ': 'Y', 'Ƴ': 'Y', 'Ỷ': 'Y', 'Ỿ': 'Y', 'Ȳ': 'Y', 'Ɏ': 'Y', 'Ỹ': 'Y', 'Ї': 'YI', 'Ź': 'Z', 'Ž': 'Z', 'Ẑ': 'Z', 'Ⱬ': 'Z', 'Ż': 'Z', 'Ẓ': 'Z', 'Ȥ': 'Z', 'Ẕ': 'Z', 'Ƶ': 'Z', 'Þ': 'TH', 'Ĳ': 'IJ', 'Œ': 'OE', 'ᴀ': 'A', 'ᴁ': 'AE', 'ʙ': 'B', 'ᴃ': 'B', 'ᴄ': 'C', 'ᴅ': 'D', 'ᴇ': 'E', 'ꜰ': 'F', 'ɢ': 'G', 'ʛ': 'G', 'ʜ': 'H', 'ɪ': 'I', 'ʁ': 'R', 'ᴊ': 'J', 'ᴋ': 'K', 'ʟ': 'L', 'ᴌ': 'L', 'ᴍ': 'M', 'ɴ': 'N', 'ᴏ': 'O', 'ɶ': 'OE', 'ᴐ': 'O', 'ᴕ': 'OU', 'ᴘ': 'P', 'ʀ': 'R', 'ᴎ': 'N', 'ᴙ': 'R', 'ꜱ': 'S', 'ᴛ': 'T', 'ⱻ': 'E', 'ᴚ': 'R', 'ᴜ': 'U', 'ᴠ': 'V', 'ᴡ': 'W', 'ʏ': 'Y', 'ᴢ': 'Z', 'á': 'a', 'ă': 'a', 'ắ': 'a', 'ặ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ǎ': 'a', 'â': 'a', 'ấ': 'a', 'ậ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ä': 'a', 'ǟ': 'a', 'ȧ': 'a', 'ǡ': 'a', 'ạ': 'a', 'ȁ': 'a', 'à': 'a', 'ả': 'a', 'ȃ': 'a', 'ā': 'a', 'ą': 'a', 'ᶏ': 'a', 'ẚ': 'a', 'å': 'a', 'ǻ': 'a', 'ḁ': 'a', 'ⱥ': 'a', 'ã': 'a', 'ꜳ': 'aa', 'æ': 'ae', 'ǽ': 'ae', 'ǣ': 'ae', 'ꜵ': 'ao', 'ꜷ': 'au', 'ꜹ': 'av', 'ꜻ': 'av', 'ꜽ': 'ay', 'ḃ': 'b', 'ḅ': 'b', 'ɓ': 'b', 'ḇ': 'b', 'ᵬ': 'b', 'ᶀ': 'b', 'ƀ': 'b', 'ƃ': 'b', 'ɵ': 'o', 'ć': 'c', 'č': 'c', 'ç': 'c', 'ḉ': 'c', 'ĉ': 'c', 'ɕ': 'c', 'ċ': 'c', 'ƈ': 'c', 'ȼ': 'c', 'ď': 'd', 'ḑ': 'd', 'ḓ': 'd', 'ȡ': 'd', 'ḋ': 'd', 'ḍ': 'd', 'ɗ': 'd', 'ᶑ': 'd', 'ḏ': 'd', 'ᵭ': 'd', 'ᶁ': 'd', 'đ': 'd', 'ɖ': 'd', 'ƌ': 'd', 'ð': 'd', 'ı': 'i', 'ȷ': 'j', 'ɟ': 'j', 'ʄ': 'j', 'ǳ': 'dz', 'ǆ': 'dz', 'é': 'e', 'ĕ': 'e', 'ě': 'e', 'ȩ': 'e', 'ḝ': 'e', 'ê': 'e', 'ế': 'e', 'ệ': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ḙ': 'e', 'ë': 'e', 'ė': 'e', 'ẹ': 'e', 'ȅ': 'e', 'è': 'e', 'ẻ': 'e', 'ȇ': 'e', 'ē': 'e', 'ḗ': 'e', 'ḕ': 'e', 'ⱸ': 'e', 'ę': 'e', 'ᶒ': 'e', 'ɇ': 'e', 'ẽ': 'e', 'ḛ': 'e', 'ꝫ': 'et', 'ḟ': 'f', 'ƒ': 'f', 'ᵮ': 'f', 'ᶂ': 'f', 'ǵ': 'g', 'ğ': 'g', 'ǧ': 'g', 'ģ': 'g', 'ĝ': 'g', 'ġ': 'g', 'ɠ': 'g', 'ḡ': 'g', 'ᶃ': 'g', 'ǥ': 'g', 'ḫ': 'h', 'ȟ': 'h', 'ḩ': 'h', 'ĥ': 'h', 'ⱨ': 'h', 'ḧ': 'h', 'ḣ': 'h', 'ḥ': 'h', 'ɦ': 'h', 'ẖ': 'h', 'ħ': 'h', 'ƕ': 'hv', 'í': 'i', 'ĭ': 'i', 'ǐ': 'i', 'î': 'i', 'ï': 'i', 'ḯ': 'i', 'ị': 'i', 'ȉ': 'i', 'ì': 'i', 'ỉ': 'i', 'ȋ': 'i', 'ī': 'i', 'į': 'i', 'ᶖ': 'i', 'ɨ': 'i', 'ĩ': 'i', 'ḭ': 'i', 'і': 'i', 'ꝺ': 'd', 'ꝼ': 'f', 'ᵹ': 'g', 'ꞃ': 'r', 'ꞅ': 's', 'ꞇ': 't', 'ꝭ': 'is', 'ǰ': 'j', 'ĵ': 'j', 'ʝ': 'j', 'ɉ': 'j', 'ḱ': 'k', 'ǩ': 'k', 'ķ': 'k', 'ⱪ': 'k', 'ꝃ': 'k', 'ḳ': 'k', 'ƙ': 'k', 'ḵ': 'k', 'ᶄ': 'k', 'ꝁ': 'k', 'ꝅ': 'k', 'ĺ': 'l', 'ƚ': 'l', 'ɬ': 'l', 'ľ': 'l', 'ļ': 'l', 'ḽ': 'l', 'ȴ': 'l', 'ḷ': 'l', 'ḹ': 'l', 'ⱡ': 'l', 'ꝉ': 'l', 'ḻ': 'l', 'ŀ': 'l', 'ɫ': 'l', 'ᶅ': 'l', 'ɭ': 'l', 'ł': 'l', 'ǉ': 'lj', 'ſ': 's', 'ẜ': 's', 'ẛ': 's', 'ẝ': 's', 'ḿ': 'm', 'ṁ': 'm', 'ṃ': 'm', 'ɱ': 'm', 'ᵯ': 'm', 'ᶆ': 'm', 'ń': 'n', 'ň': 'n', 'ņ': 'n', 'ṋ': 'n', 'ȵ': 'n', 'ṅ': 'n', 'ṇ': 'n', 'ǹ': 'n', 'ɲ': 'n', 'ṉ': 'n', 'ƞ': 'n', 'ᵰ': 'n', 'ᶇ': 'n', 'ɳ': 'n', 'ñ': 'n', 'ǌ': 'nj', 'ó': 'o', 'ŏ': 'o', 'ǒ': 'o', 'ô': 'o', 'ố': 'o', 'ộ': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ö': 'o', 'ȫ': 'o', 'ȯ': 'o', 'ȱ': 'o', 'ọ': 'o', 'ő': 'o', 'ȍ': 'o', 'ò': 'o', 'ỏ': 'o', 'ơ': 'o', 'ớ': 'o', 'ợ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ȏ': 'o', 'ꝋ': 'o', 'ꝍ': 'o', 'ⱺ': 'o', 'ō': 'o', 'ṓ': 'o', 'ṑ': 'o', 'ǫ': 'o', 'ǭ': 'o', 'ø': 'o', 'ǿ': 'o', 'õ': 'o', 'ṍ': 'o', 'ṏ': 'o', 'ȭ': 'o', 'ƣ': 'oi', 'ꝏ': 'oo', 'ɛ': 'e', 'ᶓ': 'e', 'ɔ': 'o', 'ᶗ': 'o', 'ȣ': 'ou', 'ṕ': 'p', 'ṗ': 'p', 'ꝓ': 'p', 'ƥ': 'p', 'ᵱ': 'p', 'ᶈ': 'p', 'ꝕ': 'p', 'ᵽ': 'p', 'ꝑ': 'p', 'ꝙ': 'q', 'ʠ': 'q', 'ɋ': 'q', 'ꝗ': 'q', 'ŕ': 'r', 'ř': 'r', 'ŗ': 'r', 'ṙ': 'r', 'ṛ': 'r', 'ṝ': 'r', 'ȑ': 'r', 'ɾ': 'r', 'ᵳ': 'r', 'ȓ': 'r', 'ṟ': 'r', 'ɼ': 'r', 'ᵲ': 'r', 'ᶉ': 'r', 'ɍ': 'r', 'ɽ': 'r', 'ↄ': 'c', 'ꜿ': 'c', 'ɘ': 'e', 'ɿ': 'r', 'ś': 's', 'ṥ': 's', 'š': 's', 'ṧ': 's', 'ş': 's', 'ŝ': 's', 'ș': 's', 'ṡ': 's', 'ṣ': 's', 'ṩ': 's', 'ʂ': 's', 'ᵴ': 's', 'ᶊ': 's', 'ȿ': 's', 'ɡ': 'g', 'ᴑ': 'o', 'ᴓ': 'o', 'ᴝ': 'u', 'ť': 't', 'ţ': 't', 'ṱ': 't', 'ț': 't', 'ȶ': 't', 'ẗ': 't', 'ⱦ': 't', 'ṫ': 't', 'ṭ': 't', 'ƭ': 't', 'ṯ': 't', 'ᵵ': 't', 'ƫ': 't', 'ʈ': 't', 'ŧ': 't', 'ᵺ': 'th', 'ɐ': 'a', 'ᴂ': 'ae', 'ǝ': 'e', 'ᵷ': 'g', 'ɥ': 'h', 'ʮ': 'h', 'ʯ': 'h', 'ᴉ': 'i', 'ʞ': 'k', 'ꞁ': 'l', 'ɯ': 'm', 'ɰ': 'm', 'ᴔ': 'oe', 'ɹ': 'r', 'ɻ': 'r', 'ɺ': 'r', 'ⱹ': 'r', 'ʇ': 't', 'ʌ': 'v', 'ʍ': 'w', 'ʎ': 'y', 'ꜩ': 'tz', 'ú': 'u', 'ŭ': 'u', 'ǔ': 'u', 'û': 'u', 'ṷ': 'u', 'ü': 'u', 'ǘ': 'u', 'ǚ': 'u', 'ǜ': 'u', 'ǖ': 'u', 'ṳ': 'u', 'ụ': 'u', 'ű': 'u', 'ȕ': 'u', 'ù': 'u', 'ủ': 'u', 'ư': 'u', 'ứ': 'u', 'ự': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ȗ': 'u', 'ū': 'u', 'ṻ': 'u', 'ų': 'u', 'ᶙ': 'u', 'ů': 'u', 'ũ': 'u', 'ṹ': 'u', 'ṵ': 'u', 'ᵫ': 'ue', 'ꝸ': 'um', 'ⱴ': 'v', 'ꝟ': 'v', 'ṿ': 'v', 'ʋ': 'v', 'ᶌ': 'v', 'ⱱ': 'v', 'ṽ': 'v', 'ꝡ': 'vy', 'ẃ': 'w', 'ŵ': 'w', 'ẅ': 'w', 'ẇ': 'w', 'ẉ': 'w', 'ẁ': 'w', 'ⱳ': 'w', 'ẘ': 'w', 'ẍ': 'x', 'ẋ': 'x', 'ᶍ': 'x', 'ý': 'y', 'ŷ': 'y', 'ÿ': 'y', 'ẏ': 'y', 'ỵ': 'y', 'ỳ': 'y', 'ƴ': 'y', 'ỷ': 'y', 'ỿ': 'y', 'ȳ': 'y', 'ẙ': 'y', 'ɏ': 'y', 'ỹ': 'y', 'ї': 'yi', 'ź': 'z', 'ž': 'z', 'ẑ': 'z', 'ʑ': 'z', 'ⱬ': 'z', 'ż': 'z', 'ẓ': 'z', 'ȥ': 'z', 'ẕ': 'z', 'ᵶ': 'z', 'ᶎ': 'z', 'ʐ': 'z', 'ƶ': 'z', 'ɀ': 'z', 'þ': 'th', 'ﬀ': 'ff', 'ﬃ': 'ffi', 'ﬄ': 'ffl', 'ﬁ': 'fi', 'ﬂ': 'fl', 'ĳ': 'ij', 'œ': 'oe', 'ﬆ': 'st', 'ₐ': 'a', 'ₑ': 'e', 'ᵢ': 'i', 'ⱼ': 'j', 'ₒ': 'o', 'ᵣ': 'r', 'ᵤ': 'u', 'ᵥ': 'v', 'ₓ': 'x', 'Ё': 'YO', 'Й': 'I', 'Ц': 'TS', 'У': 'U', 'К': 'K', 'Е': 'E', 'Н': 'N', 'Г': 'G', 'Ґ': 'G', 'Ш': 'SH', 'Щ': 'SCH', 'З': 'Z', 'Х': 'H', 'Ъ': "'", 'ё': 'yo', 'й': 'i', 'ц': 'ts', 'у': 'u', 'к': 'k', 'е': 'e', 'н': 'n', 'г': 'g', 'ґ': 'g', 'ш': 'sh', 'щ': 'sch', 'з': 'z', 'х': 'h', 'ъ': "'", 'Ф': 'F', 'Ы': 'I', 'В': 'V', 'А': 'a', 'П': 'P', 'Р': 'R', 'О': 'O', 'Л': 'L', 'Д': 'D', 'Ж': 'ZH', 'Э': 'E', 'ф': 'f', 'ы': 'i', 'в': 'v', 'а': 'a', 'п': 'p', 'р': 'r', 'о': 'o', 'л': 'l', 'д': 'd', 'ж': 'zh', 'э': 'e', 'Я': 'Ya', 'Ч': 'CH', 'С': 'S', 'М': 'M', 'И': 'I', 'Т': 'T', 'Ь': "'", 'Б': 'B', 'Ю': 'YU', 'я': 'ya', 'ч': 'ch', 'с': 's', 'м': 'm', 'и': 'i', 'т': 't', 'ь': "'", 'б': 'b', 'ю': 'yu' };
    return (typeof str === 'string' && str.replace(/[^A-Za-z0-9]/g, function(c) { return _latin[c] || c })) || null;
}

export function start(str) {
    return (typeof str === 'string' && str.split(/[-_.\\\/\s]/g).map(function(w, i) { return (w[0]).toUpperCase() + (w.slice(1)).toLowerCase() }).join(' ')) || null;
}

export function camel(str) {
    return (typeof str === 'string' && str.split(/[-_.\\\/\s]/g).map(function(w, i) { return i ? (w[0]).toUpperCase() + (w.slice(1)).toLowerCase() : (w).toLowerCase() }).join('')) || null;
}

export function kebab(str) {
    return (typeof str === 'string' && str.split(/[-_.\\\/\s]/g).map(function(w, i) { return (w).toLowerCase() }).join('-')) || null;
}

export function snake(str) {
    return (typeof str === 'string' && str.split(/[-_.\\\/\s]/g).map(function(w, i) { return (w).toLowerCase() }).join('_')) || null;
}

export function first(str) {
    return ((typeof str === 'string' || Array.isArray(str)) && str[0]) || null;
}

export function clean(tar) {
    return function(str) {
        return typeof str === 'string' && str.replace(tar, '') || null;
    }
}

export function slice(is, ie) {
    return function(str) {
        return ((typeof str === 'string' || Array.isArray(str)) && str.slice(is, ie)) || null;
    }
}

export function shrink(lim, end) {
    return function(str) {
        return (typeof str === 'string' && str.slice(0, lim) + (end || '...')) || null;
    }
}

export function size(str) {
    return ((typeof str === 'string' || Array.isArray(str)) && str.length) || null;
}

export function date(fom) {
    var _tran = {
        _date: function(date, formatStr) {
            formatStr = formatStr || 'yyyy-MM-dd';
            var tokens = formatStr.match(/(\w)\1*|''|'(''|[^'])+('|$)|./g);
            if (!tokens) return date;
            date = new Date(date);
            var result = tokens.map(function(substring) {
                if (substring === '\'\'') {
                    return '\'';
                }
                var firstCharacter = substring[0];
                if (firstCharacter === '\'') {
                    return _tran._clean(substring);
                }
                var formatter = _tran._action(firstCharacter);
                if (formatter) {
                    return formatter(date, substring);
                }
                return substring;
            }).join('');
            return result;
        },
        _action: function(format) {
            var formatters = {
                // Year
                y: function y(date, token) {
                    var signedYear = date.getFullYear();
                    var year = signedYear > 0 ? signedYear : 1 - signedYear;
                    return _tran._zeros(token === 'yy' ? year % 100 : year, token.length);
                },
                // Month
                M: function M(date, token) {
                    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var month = date.getMonth();
                    switch (token) {
                        case 'MMM':
                            return months[month].slice(0, 3);
                        case 'MMMM':
                            return months[month];
                        default:
                            return _tran._zeros(month + 1, token.length);
                    }
                },
                // Day of the month
                d: function d(date, token) {
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    switch (token) {
                        case 'ddd':
                            return days[date.getDay()].slice(0, 3);
                        case 'dddd':
                            return days[date.getDay()];
                        default:
                            return _tran._zeros(date.getDate(), token.length);
                    }
                },
                // AM or PM
                a: function a(date, token) {
                    var dayPeriodEnumValue = date.getHours() / 12 >= 1 ? 'pm' : 'am';

                    switch (token) {
                        case 'a':
                        case 'aa':
                            return dayPeriodEnumValue.toUpperCase();
                        case 'aaa':
                            return dayPeriodEnumValue;
                        case 'aaaaa':
                            return dayPeriodEnumValue[0];
                        case 'aaaa':
                        default:
                            return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
                    }
                },
                // Hour [1-12]
                h: function h(date, token) {
                    return _tran._zeros(date.getHours() % 12 || 12, token.length);
                },
                // Hour [0-23]
                H: function H(date, token) {
                    return _tran._zeros(date.getHours(), token.length);
                },
                // Minute
                m: function m(date, token) {
                    return _tran._zeros(date.getMinutes(), token.length);
                },
                // Second
                s: function s(date, token) {
                    return _tran._zeros(date.getSeconds(), token.length);
                },
                // Fraction of second
                S: function S(date, token) {
                    var numberOfDigits = token.length;
                    var milliseconds = date.getMilliseconds();
                    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
                    return _tran._zeros(fractionalSeconds, token.length);
                }
            };
            return formatters[format]
        },
        _zeros: function(nbr, len) {
            var sign = nbr < 0 ? '-' : '';
            var output = Math.abs(nbr).toString();
            while (output.length < len) {
                output = '0' + output;
            }
            return sign + output;
        },
        _clean: function(input) {
            var matches = input.match(/^'([^]*?)'?$/);
            if (!matches) {
                return input;
            }
            return matches[1].replace(/''/g, '\'');
        }
    }
    return function(str) {
        return (typeof str === 'string' && _tran._date(new Date(str), fom)) || null
    }
}

export function split(spr, lim) {
    return function(str) {
        return (typeof str === 'string' && str.split(spr, (lim ? lim : 9999999999999999999999999))) || null;
    }
}

export function replace(tar, rep) {
    return function(str) {
        return (typeof str === 'string' && str.replace(tar, rep)) || null;
    }
}

export function decamel(sep) {
    return function(str) {
        return (typeof str === 'string' && str.replace(/[A-Z0-9]/g, function(c, i) { return (i ? (sep || ' ') : '') + (c).toLowerCase() })) || null;
    }
}

export function reverse(str) {
    return (typeof str === 'string' && [...str].reverse().join('') || Array.isArray(str) && [...str].reverse()) || null;
}

export function escape(str) {
    return (typeof str === 'string' && str.replace(/[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g, function(c) { return '&#' + ('000' + c.charCodeAt(0)).slice(-4) + ';' })) || null;
}

export function padStart(len, fil) {
    return function(str) {
        return (typeof str === 'string' && str.padStart(len, (fil ? fil : ' '))) || null;
    }
}

export function padEnd(len, fil) {
    return function(str) {
        return (typeof str === 'string' && str.padEnd(len, (fil ? fil : ' '))) || null;
    }
}

export function trimStart(str) {
    return (typeof str === 'string' && str.trimStart()) || null;
}

export function trimEnd(str) {
    return (typeof str === 'string' && str.trimEnd()) || null;
}

export function upperStart(str) {
    return (typeof str === 'string' && (str[0]).toUpperCase() + str.slice(1)) || null;
}

export function upperEnd(str) {
    return (typeof str === 'string' && str.slice(0, -1) + (str.slice(-1)).toUpperCase()) || null;
}

export function lowerStart(str) {
    return (typeof str === 'string' && (str[0]).toLowerCase() + str.slice(1)) || null;
}

export function lowerEnd(str) {
    return (typeof str === 'string' && str.slice(0, -1) + (str.slice(-1)).toLowerCase()) || null;
}

export default function Format(v, ...a) {
    for (var i = 0; i < a.length; i++) {
        v = a[i](v);
    }
    return v;
}