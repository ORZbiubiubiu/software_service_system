package com.example.software_service_system.service.AdminService;

import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.mapper.AdminMapper.messageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class messageService {
    @Autowired
    messageMapper messageMapper;
    //得到异常服务列表
    public List<ex> Listex(int page,int size){
        List<message> list_message= messageMapper.findAdmessageList((page-1)*size,page*size);
        List<ex> list_ex = new ArrayList<ex>();
        if (list_message==null){
            return null;
        }else {
            int i=0;
            for (message ms:list_message){
                ex ex1 = new ex();
                int numi = ms.getJustMessage().indexOf("+");
                String str = ms.getJustMessage().substring(0,numi);
                try{
                    int id = Integer.parseInt(str);
                    ex1.setServiceid(id);
                }catch (NumberFormatException e){
                    e.printStackTrace();
                }
                ex1.setReason(ms.getJustMessage().substring(numi+1));
                ex1.setGetName(ms.getSendName());
                ex1.setMesid(ms.getId());
                list_ex.add(ex1);
                i++;
            }
            return list_ex;
        }
    }
    //得到异常服务总数
    public  int getNum(){
        return messageMapper.getNum();
    }
}
