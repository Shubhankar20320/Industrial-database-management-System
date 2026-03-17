package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="coil_data")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})  // avoid lazy loading issues
public class CoilData {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private Double radius;
    private String parameter;

    @ManyToOne
    @JoinColumn(name = "created_by")
    @JsonIgnoreProperties({"email", "password", "role"}) // 👈 THIS LINE IS KEY
    private User createdBy;

    // getters & setters
    public Long getId() {
    	return id;
    }
    public void setId(Long id) {
    	this.id=id;
    }
    public Double getRadius() {
    	return radius;
    }
    public void setRadius(Double radius)
    {
    	this.radius=radius;
    }
    public String getParameter() {
    	return parameter;
    }
    public void setParameter(String parameter) {
    	this.parameter=parameter;
    }
    public User getCreatedBy() {
        return createdBy;
    }
    public void setCreatedBy(User createdBy) {
    	this.createdBy=createdBy;
    }
}