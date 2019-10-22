class FetchApi {
    static async fetchData() {
        try {
            const response = await fetch(url);
            const json = await response.json();

            return json;
        }
        catch(e) {
            console.log('Error in Fetching Data', e);
        }
    }

   
}

export default FetchApi;