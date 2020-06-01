package com.example.software_service_system.controller.Text_SearchController;

import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.mapper.LoginMapper.OrderMapper;
import com.example.software_service_system.mapper.Text_SearchMapper.log_es_mapper;
import com.example.software_service_system.mapper.Text_SearchMapper.software_es_mapper;
import com.example.software_service_system.mapper.Text_SearchMapper.faq_es_mapper;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

//
@RestController
@RequestMapping("admin")
public class es_controller {
    private faq_es_mapper faq_es_mapper;
    @Resource
    public void setfaq_es_mapper(faq_es_mapper faq_es_mapper) {
        this.faq_es_mapper = faq_es_mapper;
    }

    private software_es_mapper software_es_mapper;
    @Resource
    public void setsoftware_es_mapper(software_es_mapper software_es_mapper) {
        this.software_es_mapper = software_es_mapper;
    }

    private log_es_mapper log_es_mapper;
    @Resource
    public void setlog_es_mapper(log_es_mapper log_es_mapper) {
        this.log_es_mapper = log_es_mapper;
    }

//    @Autowired
//    faq_es_mapper faq_es_mapper;
//    @Autowired
//    software_es_mapper software_es_mapper;
//    @Autowired
//    log_es_mapper log_es_mapper;

    @RequestMapping(value = "/e_faq_search",method = RequestMethod.POST)
    @ResponseBody
    public String e_faq_search(@RequestBody JSONObject jsonParam) {
        String faq_search=(String)jsonParam.get("faq_search");
        System.out.println(faq_search);
        //1
        BoolQueryBuilder builder = QueryBuilders.boolQuery();
        //2

        builder.should(QueryBuilders.matchPhrasePrefixQuery("faqinfo", faq_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("faqname", faq_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("faqsoftware", faq_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("faqtype", faq_search));


        builder.should(QueryBuilders.wildcardQuery("faqinfo", "*"+faq_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("faqname", "*"+faq_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("faqsoftware", "*"+faq_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("faqtype", "*"+faq_search+"*"));
        System.out.println("work1");
        //3
        NativeSearchQueryBuilder nativeSearchQueryBuilder = new NativeSearchQueryBuilder();
        nativeSearchQueryBuilder.withQuery(builder);
        //4
        NativeSearchQuery query = nativeSearchQueryBuilder.build();
        String return_json_string = JSONObject.toJSONString(faq_es_mapper.search(query));
        System.out.println(return_json_string);
        return return_json_string;
    }


    @RequestMapping(value = "/e_software_search",method = RequestMethod.POST)
    @ResponseBody
    public String e_software_search(@RequestBody JSONObject jsonParam) {
        String software_search=(String)jsonParam.get("software_search");
        System.out.println(software_search);
        //1
        BoolQueryBuilder builder = QueryBuilders.boolQuery();
        //2
        builder.should(QueryBuilders.matchPhrasePrefixQuery("softwareinfo", software_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("softwarename", software_search));


        builder.should(QueryBuilders.wildcardQuery("softwareinfo", "*"+software_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("softwarename", "*"+software_search+"*"));
       // System.out.println("work1");
        //3
        NativeSearchQueryBuilder nativeSearchQueryBuilder = new NativeSearchQueryBuilder();
        nativeSearchQueryBuilder.withQuery(builder);
        //4
        NativeSearchQuery query = nativeSearchQueryBuilder.build();
        String return_json_string = JSONObject.toJSONString(software_es_mapper.search(query));
        System.out.println(return_json_string);
        return return_json_string;
    }


    @RequestMapping(value = "/e_log_search",method = RequestMethod.POST)
    @ResponseBody
    public String e_log_search(@RequestBody JSONObject jsonParam) {
        String log_search=(String)jsonParam.get("log_search");
        System.out.println(log_search);
        //1
        BoolQueryBuilder builder = QueryBuilders.boolQuery();
        //2

        builder.should(QueryBuilders.matchPhrasePrefixQuery("logdetail", log_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("log_level", log_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("java_class", log_search));
        builder.should(QueryBuilders.matchPhrasePrefixQuery("thread", log_search));


        builder.should(QueryBuilders.wildcardQuery("logdetail", "*"+log_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("log_level", "*"+log_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("java_class", "*"+log_search+"*"));
        builder.should(QueryBuilders.wildcardQuery("thread", "*"+log_search+"*"));

        //System.out.println("work1");
        //3
        NativeSearchQueryBuilder nativeSearchQueryBuilder = new NativeSearchQueryBuilder();
        nativeSearchQueryBuilder.withQuery(builder);
        //4
        NativeSearchQuery query = nativeSearchQueryBuilder.build();
        String return_json_string= JSONObject.toJSONString(log_es_mapper.search(query));
        System.out.println(return_json_string);
        return return_json_string;
    }
}
