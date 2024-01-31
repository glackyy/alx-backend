#!/usr/bin/env python3
"""BaseCaching module"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """FIFOCache defining a FIFO caching sys"""
    def __init__(self):
        """Initializing the class with the parent's init method"""
        super().__init__()
        self.order = []

    def put(self, key, item):
        """Caching a key-value pair"""
        if key is None or item is None:
            pass
        else:
            leng = len(self.cache_data)
            if leng >= BaseCaching.MAX_ITEMS and key not in self.cache_data:
                print("DISCARD: {}".format(self.order[0]))
                del self.cache_data[self.order[0]]
                del self.order[0]
            self.order.append(key)
            self.cache_data[key] = item
