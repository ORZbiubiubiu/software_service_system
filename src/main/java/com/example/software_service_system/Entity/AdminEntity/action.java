package com.example.software_service_system.Entity.AdminEntity;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;



public class action {

    private String Action;
    private int Acount;
    private Date Ftime;
    private Date Ltime;

    @Override
    public String toString() {
        return "action{" +
                "Action='" + Action + '\'' +
                ", Acount=" + Acount +
                ", Ftime=" + Ftime +
                ", Ltime=" + Ltime +
                '}';
    }

    public action(String action, int acount, Date ftime) throws ParseException {
        Action = action;
        Acount = acount;
        Ftime = ftime;
        Date date = new Date();//获得系统时间.
        SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
        String nowTime = sdf.format(date);
        Date time = sdf.parse(nowTime);
        this.Ltime = time;
    }

    public String getAction() {
        return Action;
    }

    public void setAction(String action) {
        Action = action;
    }

    public int getAcount() {
        return Acount;
    }

    public void setAcount(int acount) {
        Acount = acount;
    }

    public Date getFtime() {
        return Ftime;
    }

    public void setFtime(Date ftime) {
        Ftime = ftime;
    }

    public Date getLtime() {
        return Ltime;
    }

    public void setLtime(Date ltime) {
        Ltime = ltime;
    }

    public void setNewDate() throws ParseException {
        Date date = new Date();//获得系统时间.
        SimpleDateFormat sdf = new SimpleDateFormat(" yyyy-MM-dd HH:mm:ss ");
        String nowTime = sdf.format(date);
        Date time = sdf.parse(nowTime);
        this.Ltime = time;
    }
}
