package com.busreservation.entity;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Journey {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String journeyNumber;
	
	private String busDepartureTime;
	
	private String busArrivalTime;
	
	private String status; // Scheduled, On Time, Delayed, etc.

	@ManyToOne
	@JoinColumn(name = "departure_busstop_id")
	private BusStop departureBusStop;

	@ManyToOne
	@JoinColumn(name = "arrival_busstop_id")
	private BusStop arrivalBusStop;

	@ManyToOne
	@JoinColumn(name = "bus_id")
	private Bus bus;
	
	private BigDecimal frontSeatFare;
	
	private BigDecimal middleSeatFare;
	
	private BigDecimal backSeatFare;
	
	
	// from Airplane Entity
    private int totalSeat;
    
    private int frontSeats;
	
    private int middleSeats;
    
    private int backSeats;
	
    private int frontSeatsAvailable;
	
    private int middleSeatsAvailable;
    
    private int backSeatsAvailable;

}
