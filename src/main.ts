import { RealInternet } from "./realinternet";


const mainFunction = () => {
    const realInternet = new RealInternet();
    realInternet.connect("http://thedarkweb.com");
}

mainFunction();