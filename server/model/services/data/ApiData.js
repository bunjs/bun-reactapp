class Services_Data_ApiData{
    constructor() {
        this.a = 1;
        
    }
    getData(bsCommon = {}) {
        return {
            a: 8,
            b: 2
        }
    }
}

module.exports = Services_Data_ApiData;