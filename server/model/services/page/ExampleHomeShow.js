class Model_Services_Page_ExampleHomeShow extends bun.class.$_appname{
    constructor() {
        super();
    }
    execute(bsCommon = {}) {
        let data = new Model_Services_Data_ApiData().getData(bsCommon);
        return {
            home: data
        };
    }
}

module.exports = Model_Services_Page_ExampleHomeShow;