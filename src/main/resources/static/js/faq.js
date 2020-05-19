var username;

const name = new Vue({
    el: '#username',
    data:{
        username:''
    },
    mounted:function(){
        username = sessionStorage.getItem("name");
        this.username = sessionStorage.getItem("name");
    }
})

const logout = new Vue({
    el: '#logout',
    data:{
        url:'/logout',
        token:sessionStorage.getItem("token")
    },
    methods:{
        logout(){

            axios.post(this.url,{
                token:this.token
            }).then( (response)=>{

                window.location.href = "/login";
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
})


var vm = new Vue({
    el: '.center',
    data:{
         types:[
                {
                    name: "全部",
                    index:  '0'
                },
                {
                    name: "登录异常",
                    index:  '1'
                },
                {
                    name: "界面无法显示",
                    index:  '2'
                },
                {
                    name: "显示信息有误",
                    index:  '3'
                },
                {
                    name: "其他",
                    index:  '4'
                },
               ],
         faqData:[],
         searchHistory:"",
         index: 0,
         faqType:null,
         faqInfo:"",
         getFaqUrl:"/client/type_faq",
         pagesize: 4,
         currentPage: 1
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
                 if (sessionStorage.getItem("searchInfo")!=null){
                        this.faqInfo=window.sessionStorage.getItem("searchInfo");
                        window.sessionStorage.removeItem("searchInfo");
                    }
                 axios.post(this.getFaqUrl, {
                                         faqType:this.faqType,
                                         faqInfo:this.faqInfo
                                         },{
                                              headers:{
                                                        'token':sessionStorage.getItem('token')
                                              },
                                              withCredentials : true
                                         })
                                         .then((response) => {

                                             this.faqData = response.data.data.list ;

                                             this.searchHistory=this.faqInfo;
                                         })
                                         .catch(function (error) {
                                             console.log(error);
                                         });
            },
            handleCurrentChange: function(currentPage){
                                    this.currentPage = currentPage;
                                    console.log(this.currentPage)  //点击第几页
                            },
    }

})