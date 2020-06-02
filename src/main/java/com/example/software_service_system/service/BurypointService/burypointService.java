package com.example.software_service_system.service.BurypointService;

import com.example.software_service_system.Entity.buryPointEntity.statistic;
import com.example.software_service_system.mapper.BuryPointMapper.buryPointMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class burypointService {

    private buryPointMapper burypointmapper ;
    @Resource
    public void setburyPointMapper(buryPointMapper burypointmapper){
        this.burypointmapper = burypointmapper;
    }

    public void buryPoint(String api_name,String ip,String token,String user_type){
        int findapi_name = burypointmapper.findApi_name(api_name);
        if (findapi_name == 0){
            burypointmapper.insertStatistic(api_name,user_type);
            int findip = burypointmapper.findIp(ip);
            if(findip == 0){
                burypointmapper.insertIp(ip);
            }
            int findtoken = burypointmapper.findToken(token);
            if(findtoken == 0){
                burypointmapper.insertToken(token);
            }
            return;
        }else {
            burypointmapper.updatePv(api_name);
            int findtoken = burypointmapper.findToken(token);
            if(findtoken == 0 ){
                burypointmapper.insertToken(token);
                burypointmapper.updateUv(api_name);
            }
            int findip = burypointmapper.findIp(ip);
            if(findip == 0){
                burypointmapper.insertIp(ip);
                burypointmapper.updateIp_count(api_name);
            }

            return;
        }
    }

    public List<statistic> findAllStatistic(){
        return burypointmapper.findAllStatistic();
    }

}
