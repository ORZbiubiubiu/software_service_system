package com.example.software_service_system.service.AdminService;


import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.mapper.AdminMapper.faqMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
@Slf4j
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
            Map<String,String> map = new HashMap<String, String>();
            map.put("id",String.valueOf(faqList.get(j).getId()));
            map.put("faqName",faqList.get(j).getFaqName());
            map.put("faqType",faqList.get(j).getFaqType());
            map.put("faqDescription",faqList.get(j).getFaqDescription());
            map.put("faqInfo",faqList.get(j).getFaqInfo());
            map.put("faqSoftware",faqList.get(j).getFaqSoftware());
            map.put("faqDate",sdf.format(faqList.get(j).getFaqDate()));
            maps.add(map);
        }

        return maps;
    }


    // //得到所有faq列表
    public  List<faq> queryAllFaqDbList(){
        List<faq> faqList = faqMapper.queryAllFaqDbList();
        return faqList;
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
            if (f1==null){
                faqMapper.addFaq(f);
                log.info("Admin 添加faq信息 succss faqid为：{}",f.getId());
                result.setMessage("success");
            }
            else {
                log.error("Admin 添加faq信息 fail 添加问题重复");
                result.setMessage("已经添加过此问题，请进行修改");
            }
        }catch (Exception e){
            result.setMessage(e.getMessage());
            log.error("Admin 添加faq信息 fail 数据库请求失败");
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
                log.info("Admin 修改faq信息 succss faqid为：{}",id);
                faqMapper.updateFaq(id,faqInfo,f1.getFaqDate());
                result.setMessage("修改成功！");
            }
            else {
                log.error("Admin 修改faq信息 fail id出错");
                result.setMessage("无此问题，无法提交修改");
            }
        }catch (Exception e){
            log.error("Admin 修改faq信息 fail 数据库出错");
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
                log.info("Admin 删除faq succss ");
                faqMapper.deleteFaq(id);
                result.setMessage("删除成功！");
            }
            else {
                log.error("Admin 删除faq fail 为查找到信息 ");
                result.setMessage("无此问题，无法提交删除");
            }
        }catch (Exception e){
            result.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    public List<Map<String,String>> querysearchFaqDbList(String faqInfo,int page,int size) throws ParseException {
        List<faq> faqList = faqMapper.searchfaq(faqInfo,(page-1)*size,size*page);
        log.info("Admin 搜索信息 {}",faqInfo);
        DateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd");
        int i = faqList.size();
        List<Map<String,String>> maps = new ArrayList<Map<String,String>>();
        for(int j=0;j<i;j++){
            String nowTime = sdf.format(faqList.get(j).getFaqDate());
            Date time = sdf.parse(nowTime);
            faqList.get(j).setFaqDate(time);
            Map<String,String> map = new HashMap<String, String>();
            map.put("id",String.valueOf(faqList.get(j).getId()));
            map.put("faqName",faqList.get(j).getFaqName());
            map.put("faqType",faqList.get(j).getFaqType());
            map.put("faqDescription",faqList.get(j).getFaqDescription());
            map.put("faqInfo",faqList.get(j).getFaqInfo());
            map.put("faqSoftware",faqList.get(j).getFaqSoftware());
            map.put("faqDate",sdf.format(faqList.get(j).getFaqDate()));
            maps.add(map);
        }

        return maps;
    }
    //得到搜索总数
    public int getsearchNum(String faqInfo){
        int num = faqMapper.GetsearchNum(faqInfo);
        return num;
    }


}
