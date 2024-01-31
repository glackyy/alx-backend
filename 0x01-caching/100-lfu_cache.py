#!/usr/bin/env python3
"""BaseCaching module"""
from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """LFU CACHE defining a LFU caching sys"""
    def __init__(self):
        """Initializing the class with the parent's init method"""
        super().__init__()
        self.usage = []
        self.frequency = {}

    def put(self, key, item):
        """Caching a key-value pair"""
        if key is None or item is None:
            pass
        else:
            leng = len(self.cache_data)
            if len >= BaseCaching.MAX_ITEMS and key not in self.cache_data:
                lfu = min(self.frequency.values())
                lfu_k = []
                for k, val in self.frequency.items():
                    if val == lfu:
                        lfu_k.append(k)
                if len(lfu_k) > 1:
                    lru_lfu = {}
                    for k in lfu_k:
                        lru_lfu[k] = self.usage.index(k)
                    disc = min(lru_lfu.values())
                    disc = self.usage[disc]
                else:
                    disc = lfu_k[0]

                print("DISCARD: {}".format(disc))
                del self.cache_data[disc]
                del self.usage[self.usage.index(disc)]
                del self.frequency[disc]
            if key in self.frequency:
                self.frequency[key] += 1
            else:
                self.frequency[key] = 1
            if key in self.usage:
                del self.usage[self.usage.index(key)]
            self.usage.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """Returning the value linked to a given key, or None"""
        if key is not None and key in self.cache_data.keys():
            del self.usage[self.usage.index(key)]
            self.usage.append(key)
            self.frequency[key] += 1
            return self.cache_data[key]
        return None
