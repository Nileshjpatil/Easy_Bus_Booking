package com.busreservation.dto;

import lombok.Data;

@Data
public class JourneyBookingRequestDto {
	
    private int totalPassengers;
    
    private String busSeatType;
    
    private int passengerId;

    private int journeyId;

}
