import { useRoute } from "./core/utils";
import "./styles/style.css";

if (JSON.parse(localStorage.getItem("zg-manger-sign-in-info"))) {
    useRoute(1);
} else {
    useRoute(0);
}