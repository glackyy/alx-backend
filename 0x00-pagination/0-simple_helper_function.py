#!/usr/bin/env python3
"""Function Containing definition of index_range"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returning a tuple of size two containing start and end index"""
    start, end = 0, 0
    for i in range(page):
        start = end
        end += page_size
    return (start, end)
