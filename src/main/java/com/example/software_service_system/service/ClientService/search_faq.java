package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.faq_List;
import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.mapper.ClientMapper.search_faq_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class search_faq {
    @Autowired
    private com.example.software_service_system.mapper.ClientMapper.search_faq_mapper search_faq_mapper;

    public return_json _search_faq(String faqInfo){
        return_json myreturn= new return_json();
        return_data<faq_List> myData = new return_data<faq_List>();
        List<faq_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        mylist=search_faq_mapper._search_faq_mapper(faqInfo);
        //System.out.println(mylist.toString());
        myData.setMessage("success");
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;

    }
}
