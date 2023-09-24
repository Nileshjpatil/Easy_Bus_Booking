package com.busreservation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Bus {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String description;
	
	private String registrationNumber;
	
	private int totalSeat;
	
    private int frontSeats;
	
    private int middleSeats;
    
    private int backSeats; 
	
	private String status;

}
