var vm = new Vue({
    el: '.center',
    data:{
         types:[
                {
                    name: "全部",
                    index:  '0'
                },
                {
                    name: "数据库",
                    index:  '1'
                },
                {
                    name: "balabala",
                    index:  '2'
                },
                {
                    name: "balabala",
                    index:  '3'
                },
               ],
         faqData:[],
         index: 0,
         faqType:null,
         faqInfo:"",
         getFaqUrl:"/type_faq"
    },
    mounted:function(){
            this.getFaq();
        },
    methods:{
            handleSelect(key, keyPath) {

                      console.log(key, keyPath);
                      key = Number(key);

                      this.faqType=this.types[key].name;
                      if(key==0){
                        this.faqType=null;
                      }
                      this.getFaq();
                      this.index = key;

                   },
            getFaq(){
                 axios.post(this.getFaqUrl, {
                                         faqType:this.faqType,
                                         faqInfo:this.faqInfo
                                         })
                                         .then((response) => {
                                             this.faqData = response.data.data.list ;

                                         })
                                         .catch(function (error) {
                                             console.log(error);
                                         });
            },
    }

})