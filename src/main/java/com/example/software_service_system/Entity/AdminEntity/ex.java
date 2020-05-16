package com.example.software_service_system.Entity.AdminEntity;

public class ex {
    private int mesid;
    private int serviceid;
    private String getName;
    private String reason;

    public ex() {
    }

    public int getMesid() {
        return mesid;
    }

    public void setMesid(int mesid) {
        this.mesid = mesid;
    }

    public int getServiceid() {
        return serviceid;
    }

    public void setServiceid(int serviceid) {
        this.serviceid = serviceid;
    }

    public String getGetName() {
        return getName;
    }

    public void setGetName(String getName) {
        this.getName = getName;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Override
    public String toString() {
        return "ex{" +
                "mesid=" + mesid +
                ", serviceid=" + serviceid +
                ", getName='" + getName + '\'' +
                ", reason='" + reason + '\'' +
                '}';
    }

    public ex(int mesid, int serviceid, String getName, String reason) {
        this.mesid = mesid;
        this.serviceid = serviceid;
        this.getName = getName;
        this.reason = reason;
    }
}
