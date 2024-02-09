package com.eventmanagement.event.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EcategoryResponse {
    private long category_id;
    private String category_name;
    
}