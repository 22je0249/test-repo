# Trigger run to test dependency missing classification
import requests  # Not installed in CI environment

def add(a, b):
    return a + b
def divide(a, b):
    return a / b
