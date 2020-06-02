package com.example.software_service_system.Entity.AdminEntity;

public class action_cli {
    private String SoftName;
    private int SoftCount;

    @Override
    public String toString() {
        return "action_cli{" +
                "SoftName='" + SoftName + '\'' +
                ", SoftCount=" + SoftCount +
                '}';
    }

    public String getSoftName() {
        return SoftName;
    }

    public void setSoftName(String softName) {
        SoftName = softName;
    }

    public int getSoftCount() {
        return SoftCount;
    }

    public void setSoftCount(int softCount) {
        SoftCount = softCount;
    }

    public action_cli(String softName, int softCount) {
        SoftName = softName;
        SoftCount = softCount;
    }
}
