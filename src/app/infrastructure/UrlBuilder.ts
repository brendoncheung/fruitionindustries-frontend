export class UrlBuilder {


    static getBaseUrl(isDevMode: boolean): String {
        if(isDevMode) return "localhost:4200"

        return "192.168.0.127:4200"
   
    }


}