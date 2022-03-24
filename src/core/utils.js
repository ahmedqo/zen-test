import { NotFound, Products, Orders, Login, Home } from "../pages";
import Loader from "../elements/loader";
import Header from "../elements/header";
import Router from "zen/router";
import { create } from "zen";
import dom from "zen/dom";

export function useTitle(t) {
    document.title = t;
}

export function useRoute(y) {
    dom("#app").htm("");
    dom.storage.set("zg-manger-sign-in-info", y ? true : false);
    Router("#app")
        .hash()
        .loader(create(Loader))
        .change((path) => {
            if (dom("zg-navbar").length) dom("zg-navbar")[0].current = path;
        });
    if (y)
        Router.clean()
        .add("/", create(Home), "home")
        .add("/orders/", create(Orders), "orders")
        .add("/products/", create(Products), "products")
        .header(create(Header));
    else Router.clean().add("/", create(Login), "home");
    Router.add("/404", create(NotFound)).init();
}

export function useObject(o) {
    function _is(i) {
        return i && typeof i === "object" && !Array.isArray(i);
    }

    function _mix(t, ...s) {
        if (!s.length) return t;
        const _s = s.shift();
        if (_is(t) && _is(_s)) {
            for (const k in _s) {
                if (_is(_s[k])) {
                    if (!t[k])
                        Object.assign(t, {
                            [k]: {},
                        });
                    _mix(t[k], _s[k]);
                } else {
                    Object.assign(t, {
                        [k]: _s[k],
                    });
                }
            }
        }
        return _mix(t, ...s);
    }

    return Object.defineProperties(o, {
        keys: {
            get: function() {
                return Object.keys(this);
            },
        },
        has: {
            value: function(k) {
                return this.keys.includes(String(k));
            },
        },
        get: {
            value: function(k) {
                return this[String(k)];
            },
        },
        set: {
            value: function(k, v) {
                if (typeof k === "object") {
                    for (var _k in k) {
                        this[String(_k)] = k[_k];
                    }
                    return;
                }
                this[String(k)] = v;
            },
        },
        mix: {
            value: function(...s) {
                return _mix(this, ...s);
            },
        },
    });
}

export const useThemes = useObject({
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    "water.50": "#EFF6FF",
    "water.100": "#DBEAFE",
    "water.200": "#BFDBFE",
    "water.300": "#93C5FD",
    "water.400": "#60A5FA",
    "water.500": "#3B82F6",
    "water.600": "#2563EB",
    "water.700": "#1D4ED8",
    "water.800": "#1E40AF",
    "water.900": "#1E3A8A",
    "flame.50": "#FEF2F2",
    "flame.100": "#FEE2E2",
    "flame.200": "#FECACA",
    "flame.300": "#FCA5A5",
    "flame.400": "#F87171",
    "flame.500": "#EF4444",
    "flame.600": "#DC2626",
    "flame.700": "#B91C1C",
    "flame.800": "#991B1B",
    "flame.900": "#7F1D1D",
    "woods.50": "#ECFDF5",
    "woods.100": "#D1FAE5",
    "woods.200": "#A7F3D0",
    "woods.300": "#6EE7B7",
    "woods.400": "#34D399",
    "woods.500": "#10B981",
    "woods.600": "#059669",
    "woods.700": "#047857",
    "woods.800": "#065F46",
    "woods.900": "#064E3B",
    "metal.50": "#F5F3FF",
    "metal.100": "#EDE9FE",
    "metal.200": "#DDD6FE",
    "metal.300": "#C4B5FD",
    "metal.400": "#A78BFA",
    "metal.500": "#8B5CF6",
    "metal.600": "#7C3AED",
    "metal.700": "#6D28D9",
    "metal.800": "#5B21B6",
    "metal.900": "#4C1D95",
    "earth.50": "#FFFBEB",
    "earth.100": "#FEF3C7",
    "earth.200": "#FDE68A",
    "earth.300": "#FCD34D",
    "earth.400": "#FBBF24",
    "earth.500": "#F59E0B",
    "earth.600": "#D97706",
    "earth.700": "#B45309",
    "earth.800": "#92400E",
    "earth.900": "#78350F",
    base: function(v) {
        return this.has(v) ? this.get(v) : null;
    },
    water: function(v) {
        var c = `water.${v}`;
        return this.has(c) ? this.get(c) : null;
    },
    flame: function(v) {
        var c = `flame.${v}`;
        return this.has(c) ? this.get(c) : null;
    },
    woods: function(v) {
        var c = `woods.${v}`;
        return this.has(c) ? this.get(c) : null;
    },
    metal: function(v) {
        var c = `metal.${v}`;
        return this.has(c) ? this.get(c) : null;
    },
    earth: function(v) {
        var c = `earth.${v}`;
        return this.has(c) ? this.get(c) : null;
    },
});