package com.example.software_service_system;

import com.example.software_service_system.mapper.cleanDataMapper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class cleanData {
    private cleanDataMapper cleanDatamapper;
    @Resource
    public void setCleanDatamapper(cleanDataMapper cleanDatamapper){
        this.cleanDatamapper = cleanDatamapper;
    }
    @Scheduled(cron = "0 0 0 * * *")
    public void cleanDataJob(){
        cleanDatamapper.cleanIp();
        cleanDatamapper.cleanToken();
    }


}
