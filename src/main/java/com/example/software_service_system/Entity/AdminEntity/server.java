package com.example.software_service_system.Entity.AdminEntity;

public class server {
    private int id;
    private String serverName;
    private String serverSoftware;
    private String serverState;

    public server(int id, String serverName, String serverSoftware, String serverState) {
        this.id

                = id;
        this.serverName = serverName;
        this.serverSoftware = serverSoftware;
        this.serverState = serverState;
    }

    @Override
    public String toString() {
        return "server{" +
                "id=" + id +
                ", serverName='" + serverName + '\'' +
                ", serverSoftware='" + serverSoftware + '\'' +
                ", serverState='" + serverState + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id

                = id;
    }

    public String getServerName() {
        return serverName;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public String getServerSoftware() {
        return serverSoftware;
    }

    public void setServerSoftware(String serverSoftware) {
        this.serverSoftware = serverSoftware;
    }

    public String getServerState() {
        return serverState;
    }

    public void setServerState(String serverState) {
        this.serverState = serverState;
    }
}


//package com.example.software_service_system.Entity.AdminEntity;
//
//public class server {
//    private int id;
//    private String serverName;
//    private String serverPassword;
//    private String serverSoftware;
//    private String serverState;
//
//    public server(int id, String serverName, String serverPassword, String serverSoftware, String serverState) {
//        this.id = id;
//        this.serverName = serverName;
//        this.serverPassword = serverPassword;
//        this.serverSoftware = serverSoftware;
//        this.serverState = serverState;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getServerName() {
//        return serverName;
//    }
//
//    public void setServerName(String serverName) {
//        this.serverName = serverName;
//    }
//
//    public String getServerPassword() {
//        return serverPassword;
//    }
//
//    public void setServerPassword(String serverPassword) {
//        this.serverPassword = serverPassword;
//    }
//
//    public String getServerSoftware() {
//        return serverSoftware;
//    }
//
//    public void setServerSoftware(String serverSoftware) {
//        this.serverSoftware = serverSoftware;
//    }
//
//    public String getServerState() {
//        return serverState;
//    }
//
//    public void setServerState(String serverState) {
//        this.serverState = serverState;
//    }
//
//    @Override
//    public String toString() {
//        return "server{" +
//                "id=" + id +
//                ", serverName='" + serverName + '\'' +
//                ", serverPassword='" + serverPassword + '\'' +
//                ", serverSoftware='" + serverSoftware + '\'' +
//                ", serverState='" + serverState + '\'' +
//                '}';
//    }
//}
