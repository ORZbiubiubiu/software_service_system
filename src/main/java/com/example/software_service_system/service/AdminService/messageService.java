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
//    public List<ex> Listex(int page,int size){
//        List<message> list_message= messageMapper.findAdmessageList((page-1)*size,page*size);
//        List<ex> list_ex = new ArrayList<ex>();
//        if (list_message==null){
//            return null;
//        }else {
//            //ex list_ex[] = new ex[list_message.size()];
//
//            int i=0;
//            for (message ms:list_message){
//                ex ex1 = new ex();
//                String str = ms.getJustMessage().substring(0,4);
//                try{
//                    int id = Integer.parseInt(str);
//                    //list_ex.[i].setServiceid(id);
//                    ex1.setServiceid(id);
//                }catch (NumberFormatException e){
//                    e.printStackTrace();
//                }
//                //list_ex[i].setReason(ms.getJustMessage().substring(4));
//                ex1.setReason(ms.getJustMessage().substring(4));
//                //list_ex[i].setGetName(ms.getGetName());
//                ex1.setGetName(ms.getSendName());
//                ex1.setMesid(ms.getId());
//                list_ex.add(ex1);
//                System.out.println(list_ex.get(i).toString());
//                i++;
//            }
            //return_data<ex> rs = new return_data<ex>();
            //rs.List list = new ArrayList();
            //		if (object == null)
            //			return list;
            //		list = Arrays.asList(object);
            //		return list;
            /*List<ex> exs = new ArrayList<ex>();
            exs = Arrays.asList(list_ex);
            System.out.println(exs.toString());*/
//            return list_ex;
//        }
//    }

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
                System.out.println(list_ex.get(i).toString());
                i++;
            }
            return list_ex;
        }
    }
    //得到异常服务总数
    public  int getNum(){
        return messageMapper.getNum();
    }


    /*public return_data<message> deleteAdmessage(int id){
        return_data<message> result= new return_data<message>();
        try{
            message f1 = messageMapper.finfmessagebyid(id);
            if (result!=null){
                messageMapper.deleteMessage();
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
    }*/

}
