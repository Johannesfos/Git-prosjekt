export default class Giphy {

    constructor(apiData, randomOrSearch){
        this.key = this.guid()
        this.type = apiData.type
        this.url = apiData.url
        this.embed_url = apiData.embed_url
        this.title = apiData.title
        this.images = apiData.images
        if (randomOrSearch){
            this.img_url = apiData.images.fixed_width.url
        }else{
            this.img_url = apiData.fixed_width_downsampled_url

        }
        
        
        
        
    }

    guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
      }

   


}