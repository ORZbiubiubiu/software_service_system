package com.example.software_service_system.service.BurypointService;

import com.example.software_service_system.mapper.BuryPointMapper.buryPointMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class burypointService {

    private buryPointMapper burypointmapper ;
    @Resource
    public void setburyPointMapper(buryPointMapper burypointmapper){
        this.burypointmapper = burypointmapper;
    }

    public void buryPoint(String url,String ip,String token){
        int findurl = burypointmapper.findUrl(url);
        if (findurl == 0){
            burypointmapper.insertStatistic(url);
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
            burypointmapper.updatePv(url);
            int findtoken = burypointmapper.findToken(token);
            if(findtoken == 0 ){
                burypointmapper.insertToken(token);
                burypointmapper.updateUv(url);
            }
            int findip = burypointmapper.findIp(ip);
            if(findip == 0){
                burypointmapper.insertIp(ip);
                burypointmapper.updateIp_count(url);
            }

            return;
        }
    }

}
