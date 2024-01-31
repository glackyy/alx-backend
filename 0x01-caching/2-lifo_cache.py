#!/usr/bin/env python3
"""BaseCaching module"""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
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
                print("DISCARD: {}".format(self.order[-1]))
                del self.cache_data[self.order[-1]]
                del self.order[-1]
            if key in self.order:
                del self.order[self.order.index(key)]
            self.order.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """Returning the value linked to a given key, or None"""
        if key is not None and key in self.cache_data.keys():
            return self.cache_data[key]
        return None
