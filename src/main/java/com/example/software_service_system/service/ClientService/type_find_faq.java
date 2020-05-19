package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.faq_List;
import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.mapper.ClientMapper.search_faq_mapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Slf4j
@Service
public class type_find_faq {
    @Autowired
    private com.example.software_service_system.mapper.ClientMapper.faq_type_mapper faq_type_mapper;
    @Autowired
    private com.example.software_service_system.mapper.ClientMapper.search_faq_mapper search_faq_mapper;

    public return_json _type_find_faq(String faqType,String faqInfo){
        return_json myreturn= new return_json();
        return_data<faq_List> myData = new return_data<faq_List>();
        List<faq_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        if(null==faqType){
            mylist=search_faq_mapper._search_faq_mapper(faqInfo);
        }else{
            List<faq_List> all_list = new ArrayList();
            all_list=search_faq_mapper._search_faq_mapper(faqInfo);
            for(int i=0;i<all_list.size();i++){
                if(all_list.get(i).getFaqType().equals(faqType)){
                    mylist.add(all_list.get(i));
                }
            }
        }
       //System.out.println(mylist.toString());
        myData.setMessage("success");
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;

    }
}
