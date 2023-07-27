import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);