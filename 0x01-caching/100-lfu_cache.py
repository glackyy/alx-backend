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
