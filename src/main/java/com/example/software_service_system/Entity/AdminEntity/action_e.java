package com.example.software_service_system.Entity.AdminEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class action_e {
    private String Action;
    private Date time;

    public action_e(String action) throws ParseException {
        Action = action;
        Date date = new Date();//获得系统时间.
        SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
        String nowTime = sdf.format(date);
        Date time = sdf.parse(nowTime);
        this.time = time;
    }

    @Override
    public String toString() {
        return "action_e{" +
                "Action='" + Action + '\'' +
                ", time=" + time +
                '}';
    }

    public String getAction() {
        return Action;
    }

    public void setAction(String action) {
        Action = action;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
