package com.anushika.springbootlibrary.dao;

import com.anushika.springbootlibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page<Review> findBookById (@RequestParam("book_id") Long bookId, Pageable pageable);
}
