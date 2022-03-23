export function tail(s) {
    return function(v) {
        return typeof v === 'string' && v.endsWith(s) ? { type: 'success' } : { type: 'error', message: '[value] dosn\'t end with ' + s };
    }
}

export function start(s) {
    return function(v) {
        return typeof v === 'string' && v.startsWith(s) ? { type: 'success' } : { type: 'error', message: '[value] dosn\'t start with ' + s };
    }
}

export function exist(v) {
    return !!v || (typeof v === "string" && v.trim().length > 0) || (typeof v === 'number') ? { type: 'success' } : { type: 'error', message: '[value] dosn\'t exist' };
}

export function empty(v) {
    return (!v && typeof v !== "number") || (typeof v === "string" && v.trim().length === 0) || (typeof v === "object" && Object.keys(v).length === 0) || (Array.isArray(v) && v.length === 0) ? { type: 'success' } : { type: 'error', message: '[value] is not empty' };
}

export function email(v) {
    var r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!v && typeof v === "string" && v.match(r) ? { type: 'success' } : { type: 'error', message: '[value] is not a valid email' };
}

export function phone(v) {
    v = typeof v === "number" ? String(v) : v;
    var r = /(\+0|0|[0-9]{3}|\+[0-9]{3}|\([0-9]{3}\)|\+\([0-9]{3}\))([ \-_/]*)(\d[ \-_/]*){9}/;
    return !!v && typeof v === "string" && v.match(r) ? { type: 'success' } : { type: 'error', message: '[value] is not a valid phone number' };
}

export function stlen(l) {
    return {
        equals(v) {
            return !!v && typeof v === "string" && v.length === l ? { type: 'success' } : { type: 'error', message: '[value] length is not equals to ' + l };
        },
        bigger(v) {
            return !!v && typeof v === "string" && v.length > l ? { type: 'success' } : { type: 'error', message: '[value] length is not bigger than ' + l };
        },
        lesser(v) {
            return !!v && typeof v === "string" && v.length < l ? { type: 'success' } : { type: 'error', message: '[value] length is not lesser than ' + l };
        }
    }
}

export function float(v) {
    v = typeof v === "number" ? String(v) : v;
    return (typeof v === "string" && v.trim().length > 0) && /^([0-9]*[.][0-9]+)+$/g.test(v) ? { type: 'success' } : { type: 'error', message: '[value] is not an intiger' };
}

export function isStr(v) {
    return typeof v === 'string' ? { type: 'success' } : { type: 'error', message: '[value] is not a string' };
}

export function isNum(v) {
    return typeof v === 'number' ? { type: 'success' } : { type: 'error', message: '[value] is not a number' };
}

export function isBol(v) {
    return typeof v === 'boolean' ? { type: 'success' } : { type: 'error', message: '[value] is not a boolean' };
}

export function isReel(v) {
    return v % 1 !== 0 ? { type: 'success' } : { type: 'error', message: '[value] is not a real number' };
}

export function number(v) {
    v = typeof v === "number" ? String(v) : v;
    return (typeof v === "string" && v.trim().length > 0) && /^[0-9.]+$/g.test(v) ? { type: 'success' } : { type: 'error', message: '[value] is not a number' };
}

export function intiger(v) {
    v = typeof v === "number" ? String(v) : v;
    return (typeof v === "string" && v.trim().length > 0) && /^[0-9]+$/g.test(v) && !v.includes('.') ? { type: 'success' } : { type: 'error', message: '[value] is not an intiger' };
}

export function boolean(v) {
    return v === true || v === false || v === 'true' || v === 'false' ? { type: 'success' } : { type: 'error', message: '[value] is not a boolean' };
}

export default function Verify(v, ...a) {
    var n = typeof a[0] === 'string' ? a[0] : null,
        a = typeof a[0] === 'string' ? a.slice(1) : a,
        e = [];
    for (var i = 0; i < a.length; i++) {
        var r = a[i](v),
            m = r.message,
            t = r.type;
        if (t === 'error') {
            if (n) m = m.replace('[value]', n);
            e.push(m);
        }
    }
    if (a.length)
        return e.length ? { type: 'error', message: a.length > 1 ? e : e[0] } : { type: 'success' };
}