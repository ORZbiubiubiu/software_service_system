package com.example.software_service_system.mapper.Text_SearchMapper;

import com.example.software_service_system.Entity.Text_SearchEntity.software_es_List;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface software_es_mapper extends ElasticsearchRepository<software_es_List, String> {
}
