package com.exampleqian.demo_qianduan.service;

import com.exampleqian.demo_qianduan.entity.return_data;
import com.exampleqian.demo_qianduan.entity.service;
import com.exampleqian.demo_qianduan.mapper.messageMapper;
import com.exampleqian.demo_qianduan.mapper.serviceMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class serviceService {
    @Autowired
    serviceMapper serviceMapper;
    @Autowired
    messageMapper messageMapper;

    //更新服务对应的处理人 并且删除相应换人的message  给新的处理人发message
    public return_data<service> Updateserver(String serverName,int id,int mesid) throws ParseException {
        return_data<service> rs = new return_data<service>();
        int i=serviceMapper.Updateserver(serverName,id);
        if(i==1){
            rs.setMessage("更新成功");
            int j = messageMapper.deleteMessage(mesid);
            int mid = messageMapper.getMaxId()+1;
            Date date = new Date();//获得系统时间.
            SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
            String nowTime = sdf.format(date);
            Date time = sdf.parse(nowTime);
            messageMapper.addMessage(mid,serverName,"Admin","您新增服务了!",time);
        }else {
            rs.setMessage("更新失败");
        }
        return rs;
    }
}
