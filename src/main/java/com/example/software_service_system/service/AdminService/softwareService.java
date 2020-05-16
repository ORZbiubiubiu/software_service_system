package com.example.software_service_system.service.AdminService;

import com.example.software_service_system.Entity.AdminEntity.software;
import com.example.software_service_system.mapper.AdminMapper.serverMapper;
import com.example.software_service_system.mapper.AdminMapper.softwareMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class softwareService {
    @Autowired
    softwareMapper softwareMapper;
    @Autowired
    serverMapper serverMapper;

    //得到所有的软件信息
    public List<software> getSoftwares(){
        return softwareMapper.querrSoftList();
    }

    //得到软件数量
    public int getNum(){
        return softwareMapper.getNUm();
    }

    //得到每个软件对应的人员数目
    public List<Map<String,String>> getSoftwareName_num(){
        try {
            List<software> nameslist = softwareMapper.getSoftwareNameList();
            List<Map<String,String>> list = new ArrayList<Map<String,String>>();
            for (software s:nameslist){
                int i = serverMapper.getSoftwareCount(s.getSoftwareName());
                Map<String, String> map = new HashMap<String, String>();
                map.put("id",String.valueOf(s.getId()));
                map.put("name",s.getSoftwareName());
                map.put("number",String.valueOf(i));
                list.add(map);
            }
            return list;
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }
}
