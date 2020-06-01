package com.example.software_service_system.mapper.Text_SearchMapper;

import com.example.software_service_system.Entity.Text_SearchEntity.logs_es_List;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface log_es_mapper extends ElasticsearchRepository<logs_es_List, String> {
}
