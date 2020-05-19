package com.example.software_service_system.service.ServerService;

import com.example.software_service_system.Entity.ServerEntity.find_service_List;
import com.example.software_service_system.Entity.ServerEntity.return_data;
import com.example.software_service_system.Entity.ServerEntity.return_json;
import com.example.software_service_system.mapper.ServerMapper.server_send_message_mapper;
import com.example.software_service_system.mapper.ServerMapper.update_service_mapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Slf4j
@Service
public class update_service_state {
    @Autowired
    private update_service_mapper update_service_mapper;
    @Autowired
    private com.example.software_service_system.mapper.ServerMapper.server_send_message_mapper server_send_message_mapper;

    public return_json update_service_now_state(String softwareName,String serviceState,String serverName,String userName){
        int flag=0;
        return_json myreturn= new return_json();
        return_data<find_service_List> myData = new return_data<find_service_List>();
        List<find_service_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        List<find_service_List> list_for_id = new ArrayList();   //这里注意，不然会报null错误
//        mylist = update_service_mapper.find_service_by_server(servername);
//        if(!serviceState.equals("yes") && !serviceState.equals("no") &&serviceState.equals("change")){
//            myData.setMessage("success");
//            myData.setList(mylist);
//            myreturn.setCode(500);
//            myreturn.setData(myData);
//            return myreturn;
//        }
        //System.out.println(serviceState);
        //System.out.println(softwareName);
        list_for_id=update_service_mapper.search(softwareName,serverName,userName);
        flag=update_service_mapper.update(softwareName,serviceState,serverName,userName);
        if(flag==1){
            //System.out.println(1);
            log.info("改变service服务人员申请成功",serverName);
            myData.setMessage("success");
        }else{
            //System.out.println(0);
            log.error("改变service服务人员申请失败",serverName);
            myData.setMessage("error");
        }
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String dateNowStr = sdf.format(d);
        String mymessage=list_for_id.get(0).getId()+"+change";
        //System.out.println(mymessage);
        if(!list_for_id.get(0).getServiceState().equals("异常")){
            server_send_message_mapper._server_send_message_mapper("Admin",serverName,mymessage,dateNowStr);
        }
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        //System.out.println(myreturn);
        return myreturn;
    }
}
