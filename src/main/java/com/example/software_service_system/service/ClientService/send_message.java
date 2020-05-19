package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.get_message_List;
import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.mapper.ClientMapper.send_message_mapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Slf4j
@Service
public class send_message {
    @Autowired
    private com.example.software_service_system.mapper.ClientMapper.send_message_mapper send_message_mapper;

    public return_json _send_message(String getName, String sendName, String justMessage, String messageDate){
        return_json myreturn= new return_json();
        return_data<get_message_List> myData = new return_data<get_message_List>();
        List<get_message_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        int flag =send_message_mapper._send_message_mapper(getName,sendName,justMessage,messageDate);
        //System.out.println(mylist.toString());
        myData.setMessage("success");
        if(flag==0){
            myData.setMessage("false");
            log.error("用户发送信息失败",sendName);
        }
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;

    }
}
