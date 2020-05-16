package com.example.software_service_system.Entity.AdminEntity;

import java.util.Date;

public class message {
    private int id;
    private String getName;
    private String sendName;
    private  String justMessage;
    private Date messageDate;

    public message(int id, String getName, String sendName, String justMessage, Date messageDate) {
        this.id = id;
        this.getName = getName;
        this.sendName = sendName;
        this.justMessage = justMessage;
        this.messageDate = messageDate;
    }

    @Override
    public String toString() {
        return "message{" +
                "id=" + id +
                ", getName='" + getName + '\'' +
                ", sendName='" + sendName + '\'' +
                ", justMessage='" + justMessage + '\'' +
                ", messageDate=" + messageDate +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGetName() {
        return getName;
    }

    public void setGetName(String getName) {
        this.getName = getName;
    }

    public String getSendName() {
        return sendName;
    }

    public void setSendName(String sendName) {
        this.sendName = sendName;
    }

    public String getJustMessage() {
        return justMessage;
    }

    public void setJustMessage(String justMessage) {
        this.justMessage = justMessage;
    }

    public Date getMessageDate() {
        return messageDate;
    }

    public void setMessageDate(Date messageDate) {
        this.messageDate = messageDate;
    }
}
