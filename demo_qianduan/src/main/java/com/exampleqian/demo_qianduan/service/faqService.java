package com.exampleqian.demo_qianduan.service;


import com.exampleqian.demo_qianduan.entity.*;
import com.exampleqian.demo_qianduan.mapper.faqMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class faqService {
    @Autowired
    faqMapper faqMapper;

    //得到faq列表
    public List<Map<String,String>> queryFaqDbList(int page,int size) throws ParseException {
        List<faq> faqList = faqMapper.queryFaqDbList((page-1)*size,size*page);
        DateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd");
        int i = faqList.size();
        List<Map<String,String>> maps = new ArrayList<Map<String,String>>();
        for(int j=0;j<i;j++){
            String nowTime = sdf.format(faqList.get(j).getFaqDate());
            Date time = sdf.parse(nowTime);
            faqList.get(j).setFaqDate(time);
            System.out.println(sdf.format(faqList.get(j).getFaqDate()));
            Map<String,String> map = new HashMap<String, String>();
            map.put("id",String.valueOf(faqList.get(j).getId()));
            map.put("faqName",faqList.get(j).getFaqName());
            map.put("faqDescription",faqList.get(j).getFaqDescription());
            map.put("faqInfo",faqList.get(j).getFaqInfo());
            map.put("faqSoftware",faqList.get(j).getFaqSoftware());
            map.put("faqDate",sdf.format(faqList.get(j).getFaqDate()));

        }

        return maps;
    }

    //得到总数
    public int getNum(){
        int num = faqMapper.queryNumOfFaq();
        return num;
    }

    //添加
    public return_data<faq> addFaq(faq f){
        return_data<faq> result= new return_data<faq>();
        try{
            faq f1 = faqMapper.findfaqbyId(f.getId());
            if (result!=null){
                faqMapper.addFaq(f);
            }
            else {
                result.setMessage("已经添加过此问题，请进行修改");
            }
        }catch (Exception e){
            result.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    //修改
    public return_data<faq> updateFaq(int id,String faqInfo){
        return_data<faq> result= new return_data<faq>();
        try{
            faq f1 = faqMapper.findfaqbyId(id);
            f1.setNewDate();
            if (result!=null){
                faqMapper.updateFaq(id,faqInfo,f1.getFaqDate());
                result.setMessage("修改成功！");
            }
            else {
                result.setMessage("无此问题，无法提交修改");
            }
        }catch (Exception e){
            result.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    //删除
    public return_data<faq> delete(int id){
        return_data<faq> result= new return_data<faq>();
        try{
            faq f1 = faqMapper.findfaqbyId(id);
            if (result!=null){
                faqMapper.deleteFaq(id);
                result.setMessage("删除成功！");
            }
            else {
                result.setMessage("无此问题，无法提交删除");
            }
        }catch (Exception e){
            result.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    public List<faq>search(@Param("faqName") String faqName){
        return faqMapper.searchFaqDbList(faqName);
    }
}
