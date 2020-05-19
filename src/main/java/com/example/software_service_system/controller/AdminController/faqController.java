package com.example.software_service_system.controller.AdminController;

import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.service.AdminService.faqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class faqController {
    @Autowired
    faqService faqService;

    @RequestMapping("/getFaqList")
    public return_json queryFaqDbList(@RequestBody JSONObject jsonObject) throws ParseException {//返回faqlist
        List<Map<String,String>> faqList = faqService.queryFaqDbList(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        return_data<Map<String,String>> faqreturn_data = new return_data<Map<String,String>>();
        faqreturn_data.setList(faqList);
        faqreturn_data.setMessage(String.valueOf(faqService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(faqreturn_data);
        return returnJson;
    }


    @RequestMapping("/Faqadd")
    public return_json addFaq(@RequestBody faq json) throws ParseException {
        faq f = new faq(json.getId(),json.getFaqName(),json.getFaqType(),json.getFaqDescription(),json.getFaqInfo(),json.getFaqSoftware());
        // 设置新的faq id比当前的faq 最大id  大 1
        List<faq> list = faqService.queryAllFaqDbList();
        int id = list.get(list.size() -1).getId()+1;
        f.setId(id);
        return_data<faq> addresoult = faqService.addFaq(f);
        return_json addreturnjson = new return_json();
        addreturnjson.setData(addresoult);
        return addreturnjson;
    }

    @RequestMapping("/FaqModify")
    public  return_json updateFaq(@RequestBody JSONObject jsonObject){
        int id = jsonObject.getIntValue("id");
        String faqInfo = jsonObject.getString("faqInfo");
        return_data<faq> updateresoult = faqService.updateFaq(id,faqInfo);
        return_json updatereturnjson = new return_json();
        updatereturnjson.setData(updateresoult);
        return updatereturnjson;
    }

    @RequestMapping("/FaqDelete")
    public return_json deleteFaq(@RequestBody JSONObject jsonObject){
        int id = jsonObject.getIntValue("id");
        return_data<faq> deleteresoult = faqService.delete(id);
        return_json deletereturnjson = new return_json();
        deletereturnjson.setData(deleteresoult);
        return deletereturnjson;
    }


    @RequestMapping("/getsearchFaqList")
    public return_json searchFaqDbList(@RequestBody JSONObject jsonObject) throws ParseException {//返回faqlist
        List<Map<String,String>> faqList = faqService.querysearchFaqDbList(jsonObject.getString("faqInfo"),jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        return_data<Map<String,String>> faqreturn_data = new return_data<Map<String,String>>();
        faqreturn_data.setList(faqList);
        faqreturn_data.setMessage(String.valueOf(faqService.getsearchNum(jsonObject.getString("faqInfo"))));
        return_json returnJson = new return_json();
        returnJson.setData(faqreturn_data);
        return returnJson;
    }

}
