package com.exampleqian.demo_qianduan.Controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.exampleqian.demo_qianduan.entity.*;
import com.exampleqian.demo_qianduan.service.faqService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
public class faqController {

    @Autowired
    faqService faqService;

    @RequestMapping("/getFaqList")
    public return_json queryFaqDbList() throws ParseException {
        //System.out.println("来咯");
        //List<faq> faqList = faqService.queryFaqDbList(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));

        List<Map<String,String>> faqList = faqService.queryFaqDbList(1,11);
        return_data<Map<String,String>> faqreturn_data = new return_data<Map<String, String>>();
        faqreturn_data.setList(faqList);
        faqreturn_data.setMessage(String.valueOf(faqService.getNum()));
        System.out.println(faqList);
        return_json returnJson = new return_json();
        returnJson.setData(faqreturn_data);
        return returnJson;
    }


    @RequestMapping("/api/Faqadd")
    public return_json Faq(@RequestBody faq json) throws ParseException {
        faq f = new faq(json.getId(),json.getFaqName(),json.getFaqDescription(),json.getFaqInfo(),json.getFaqSoftware());
        return_data<faq> addresoult = faqService.addFaq(f);
        return_json addreturnjson = new return_json();
        addreturnjson.setData(addresoult);
        return addreturnjson;
    }

    @RequestMapping("/api/FaqModify")
    public  return_json updateFaq(@RequestBody JSONObject jsonObject){
        int id = jsonObject.getIntValue("id");
        String faqInfo = jsonObject.getString("faqInfo");
        return_data<faq> updateresoult = faqService.updateFaq(id,faqInfo);
        return_json updatereturnjson = new return_json();
        updatereturnjson.setData(updateresoult);
        return updatereturnjson;
    }

    @RequestMapping("/api/FaqDelete")
    public return_json deleteFaq(@RequestBody JSONObject jsonObject){
        int id = jsonObject.getIntValue("id");
        return_data<faq> deleteresoult = faqService.delete(id);
        return_json deletereturnjson = new return_json();
        deletereturnjson.setData(deleteresoult);
        return deletereturnjson;
    }

   /* @RequestMapping("api/FAQmessage")
    public return_json searchFaqList(@Param("jsonObject")@RequestBody JSONObject jsonObject){

        System.out.println("来search了");
        List<faq> searchfaqList = faqService.search(jsonObject.getString("faqName"));
        System.out.println(jsonObject.getString("faqName"));
        return_data<faq> faqreturn_data = new return_data<faq>();
        faqreturn_data.setList(searchfaqList);
        if (searchfaqList==null){
            faqreturn_data.setMessage("未搜索到相关信息");
        }
        return_json returnJson = new return_json();
        returnJson.setData(faqreturn_data);
        return returnJson;
    }
    @RequestMapping("api/FAQmessage")
    public return_json searchFaqList1(@RequestBody JSONObject jsonObject){

        System.out.println("来search了");
        List<faq> searchfaqList = faqService.search(jsonObject.getString("faqName"));
        System.out.println(jsonObject.getString("faqName"));
        System.out.println(searchfaqList);
        return_data<faq> faqreturn_data = new return_data<faq>();
        faqreturn_data.setList(searchfaqList);
        if (searchfaqList==null){
            faqreturn_data.setMessage("未搜索到相关信息");
        }
        return_json returnJson = new return_json();
        returnJson.setData(faqreturn_data);
        return returnJson;
    }*/
}
