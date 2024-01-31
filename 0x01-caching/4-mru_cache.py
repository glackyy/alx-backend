#!/usr/bin/env python3
"""BaseCaching module"""
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """MRU CACHE defining a MRU caching sys"""
    def __init__(self):
        """Initializing the class with the parent's init method"""
        super().__init__()
        self.usage = []

    def put(self, key, item):
        """Caching a key-value pair"""
        if key is None or item is None:
            pass
        else:
            leng = len(self.cache_data)
            if leng >= BaseCaching.MAX_ITEMS and key not in self.cache_data:
                print("DISCARD: {}".format(self.usage[-1]))
                del self.cache_data[self.usage[-1]]
                del self.usage[-1]
            if key in self.usage:
                del self.usage[self.usage.index(key)]
            self.usage.append(key)
            self.cache_data[key] = item