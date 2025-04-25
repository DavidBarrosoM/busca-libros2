
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import BookCard from './BookCard';
import FiltersBar from './FiltersBar';

export default function BookList(){
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
}