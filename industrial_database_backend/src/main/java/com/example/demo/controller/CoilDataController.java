package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CoilData;
import com.example.demo.repository.CoilDataRepository;
import java.util.List;
@RestController
@RequestMapping("/api/coil")
public class CoilDataController {
    @Autowired private CoilDataRepository coilRepo;

    @GetMapping
    public List<CoilData> getAll() {
        return coilRepo.findAll();
    }

    @PostMapping
    public CoilData add(@RequestBody CoilData data) {
        return coilRepo.save(data);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        coilRepo.deleteById(id);
    }
}