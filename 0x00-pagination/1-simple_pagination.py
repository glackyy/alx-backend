#!/usr/bin/env python3
"""Class Server that paginates a db"""
import math
import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returning a tuple of size two containing start and end index"""
    start, end = 0, 0
    for i in range(page):
        start = end
        end += page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returning requested page from the dataset"""
        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0

        dataset = self.dataset()
        data_len = len(dataset)
        try:
            idx = index_range(page, page_size)
            return dataset[idx[0]:idx[1]]
        except IndexError:
            return []