package com.example.demo.model;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String role;

    // If you have a collection of CoilData in User, add this (optional):
    // @OneToMany(mappedBy = "createdBy")
    // @JsonIgnoreProperties("createdBy")
    // private List<CoilData> coilDataList;

    // getters & setters
    public Long getId() {
    	return id;
    }
    public void setId(Long id) {
    	this.id=id;
    }
    public String getEmail() {
    	return email;
    }
    public String getPassword() {
    	return password;
    }
    public void setPassword(String password) {
    	this.password=password;
    	
    }
    public String getRole() {
    	return role;
    }
    public void setRole(String role) {
    	this.role=role;
    }
}