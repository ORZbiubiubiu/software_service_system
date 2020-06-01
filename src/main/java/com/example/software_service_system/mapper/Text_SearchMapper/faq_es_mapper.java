package com.example.software_service_system.mapper.Text_SearchMapper;

import com.example.software_service_system.Entity.Text_SearchEntity.faq_es_List;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface faq_es_mapper  extends ElasticsearchRepository<faq_es_List, String> {
}
