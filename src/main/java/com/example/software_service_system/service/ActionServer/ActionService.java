package com.example.software_service_system.service.ActionServer;

import com.example.software_service_system.Entity.AdminEntity.action;
import com.example.software_service_system.Entity.AdminEntity.action_e;
import com.example.software_service_system.Entity.AdminEntity.action_cli;
import com.example.software_service_system.Entity.AdminEntity.action_type;
import com.example.software_service_system.mapper.ActionMapper.actionMapper;
import com.example.software_service_system.Entity.AdminEntity.return_json;
import com.example.software_service_system.Entity.AdminEntity.return_data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ActionService {

    @Autowired
    actionMapper actionMapper;

    public return_json getActions() throws ParseException {
        List<action> list = actionMapper.getActions();
        DateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd");
        int i = list.size();
        List<Map<String,String>> maps = new ArrayList<Map<String,String>>();
        for(int j=0;j<i;j++){

                String nowTime = sdf.format(list.get(j).getLtime());
                Date time = sdf.parse(nowTime);
                list.get(j).setLtime(time);
                Map<String, String> map = new HashMap<String, String>();

                map.put("Aname", list.get(j).getAction());
                map.put("Acount", String.valueOf(list.get(j).getAcount()));
                map.put("Ftime", sdf.format(list.get(j).getFtime()));
                map.put("Ltime", sdf.format(list.get(j).getLtime()));
                maps.add(map);

        }
        return_data<Map<String,String>> rt = new return_data<Map<String, String>>();
        rt.setList(maps);
        return_json rs = new return_json();
        rs.setData(rt);
        return  rs;
    }

    public void updateAction(String Aname) throws ParseException {
        Date date=new Date();
        SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
        String nowTime = sdf.format(date);
        Date time = sdf.parse(nowTime);
        actionMapper.rd(Aname,time);
    }

    public void insertAction(String Aname) throws ParseException {
        action_e a = new action_e(Aname);
        actionMapper.in(a.getAction(),a.getTime());
    }

    public return_json GetActions(String Aname) throws ParseException {

        List<action_e> list = actionMapper.GetAction(Aname);
        DateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd");
        int i = list.size();
        List<Map<String,String>> maps = new ArrayList<Map<String,String>>();
        for(int j=0;j<i;j++){

            String nowTime = sdf.format(list.get(j).getTime());
            Date time = sdf.parse(nowTime);
            list.get(j).setTime(time);
            Map<String, String> map = new HashMap<String, String>();

            map.put("Aname", list.get(j).getAction());
            map.put("time", sdf.format(list.get(j).getTime()));
            maps.add(map);

        }
        return_data<Map<String,String>> rt = new return_data<Map<String, String>>();
        rt.setMessage(String.valueOf(i));
        rt.setList(maps);
        return_json rs = new return_json();
        rs.setData(rt);
        return  rs;

    }

    public return_json percentAction_client(){
        List<action> list = actionMapper.getActions();
        int num=0;

        for (int j=0;j<=6;j++){
            num = num+list.get(j).getAcount();
        }

        List<Map<String,Object>> maps = new ArrayList<Map<String,Object>>();
        for(int j=0;j<=6;j++){
            double p =  (double)list.get(j).getAcount()/num;
            p=p*100;
            DecimalFormat df = new DecimalFormat(".00");
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("Aname", list.get(j).getAction());
            map.put("percent",df.format(p));
            map.put("count",list.get(j).getAcount());
            maps.add(map);
        }
        return_data<Map<String,Object>> rt = new return_data<Map<String, Object>>();
        rt.setList(maps);
        rt.setMessage("client");
        return_json rs = new return_json();
        rs.setData(rt);
        return  rs;
    }

    public return_json percentAction_server(){
        List<action> list = actionMapper.getActions();
        int num=0;

        for (int j=8;j<list.size();j++){
            num = num+list.get(j).getAcount();
            System.out.println(list.get(j).getAction());
        }
        List<Map<String,Object>> maps = new ArrayList<Map<String,Object>>();
        for(int j=8;j<list.size();j++){

            double p =  (double)list.get(j).getAcount()/num;
            p=p*100;
             DecimalFormat df = new DecimalFormat(".00");
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("Aname", list.get(j).getAction());
            map.put("percent",df.format(p));
            map.put("count",list.get(j).getAcount());
            maps.add(map);
        }
        return_data<Map<String,Object>> rt = new return_data<Map<String, Object>>();
        rt.setList(maps);
        rt.setMessage("server");
        return_json rs = new return_json();
        rs.setData(rt);
        return  rs;
    }

    public return_json percentActionService_client(){
        List<action_cli> list = actionMapper.GetCliAction();
        int num=0;

        for (int j=0;j<=3;j++){
            num = num+list.get(j).getSoftCount();
        }

        List<Map<String,Object>> maps = new ArrayList<Map<String,Object>>();
        for(int j=0;j<=3;j++){
            double p =  (double)list.get(j).getSoftCount()/num;
            p=p*100;
            //DecimalFormat df = new DecimalFormat(".00");
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("SoftName", list.get(j).getSoftName());
            map.put("percent",p);
            map.put("count",list.get(j).getSoftCount());
            maps.add(map);
        }
        return_data<Map<String,Object>> rt = new return_data<Map<String, Object>>();
        rt.setList(maps);
        rt.setMessage("client_software");
        return_json rs = new return_json();
        rs.setData(rt);
        return  rs;
    }

    public void Ins(String Softname){
        actionMapper.rds(Softname);
    }

    public return_json percentActionServiceType_client(){
        List<action_type> list = actionMapper.GetCliTypeAction();
        List<Map<String,Object>> maps = new ArrayList<Map<String,Object>>();
        for(int j=0;j<=3;j++){
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("type", list.get(j).getType());
            map.put("percent",list.get(j).getCount());
            maps.add(map);
        }
        return_data<Map<String,Object>> rt = new return_data<Map<String, Object>>();
        rt.setList(maps);
        rt.setMessage("client_softwareType");
        return_json rs = new return_json();
        rs.setData(rt);
        return  rs;
    }

    public void Inss(String type){
        actionMapper.rds(type);
    }

}
